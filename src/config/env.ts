import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: Number(process.env.PORT) || 3000,
  NODE_ENV: process.env.NODE_ENV || "development",
  SOLAR_SYSTEM_API: process.env.SOLAR_SYSTEM_API,
  SOLAR_SYSTEM_API_KEY: process.env.SOLAR_SYSTEM_API_KEY,
};
