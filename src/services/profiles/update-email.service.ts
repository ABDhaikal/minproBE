import { User } from "@prisma/client";
import prisma from "../../config/prisma";
import { ApiError } from "../../utils/api-error";
import { sign } from "jsonwebtoken";
import { JWT_SECRET, LOGIN_EXPIRATION } from "../../config/env";
import { access } from "fs";

export const updateEmailService = async (
  senderId: string,
  inputData: Pick<User, "email">
) => {
  const validatingUser = await prisma.user.findUnique({
    where: {
      id: senderId,
    },
    select: {
      id: true,
      deletedAt: true,
    },
  });

  if (!validatingUser || validatingUser.deletedAt) {
    throw new ApiError("User not found", 404);
  }

  const existingEmail = await prisma.user.findUnique({
    where: {
      email: inputData.email,
    },
    select: {
      id: true,
    },
  });

  if (existingEmail && existingEmail.id !== senderId) {
    throw new ApiError("Email already exists", 409);
  }

  const updatedUser = await prisma.user.update({
    where: {
      id: senderId,
    },
    data: {
      email: inputData.email,
    },
    omit: {
      password: true,
    },
  });

  const tokenPayload = {
    id: updatedUser.id,
    role: updatedUser.role,
  };
  const token = sign(tokenPayload, JWT_SECRET as string, {
    expiresIn: LOGIN_EXPIRATION,
  });

  return {
    user: updatedUser,
    accessToken: token,
    message: "Email updated successfully",
  };
};
