import dotenv from "dotenv";

// Environment variables configuration
dotenv.config();

export const PORT = process.env.PORT;

// Database connection string
export const JWT_SECRET = process.env.JWT_SECRET_KEY;
export const JWT_SECRET_RESET_PASS_KEY=process.env.JWT_SECRET_RESET_PASS_KEY;

// cupon
export const CUPON_EXP_MONTHS = 3;
export const CUPON_DISCOUNT_AMOUNT = 10000;
export const CUPON_DISCOUNT_TYPE = "FIXED_AMOUNT";

// point
export const POINT_EXP_MONTHS = 3;
export const POINT_AMOUNT = 10000;

// Login Expiration
export const LOGIN_EXPIRATION = "2h";

// forgot password
export const FORGOT_PASSWORD_EXPIRATION = "2h";

// transaction
export const EXPIRED_PAYMENT_DEADLINE_HOUR = 2;
export const EXPIRED_ADMIN_CONFIRM_DEADLINE_DAY = 3;

export const APP_URL = "http://localhost:3000/";
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;
export const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;

export const GMAIL_EMAIL = process.env.GMAIL_EMAIL;
export const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
