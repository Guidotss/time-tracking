import jwt from "jsonwebtoken";

export const verifyToken = (token: string): Promise<string> => {
  if (!process.env.JSON_SECRET)
    throw new Error("JSON_SECRET not found in .env file");
  if (token.length < 10) return Promise.reject("Token is too short");

  return new Promise((resolve, reject) => {
    try {
      jwt.verify(token, process.env.JSON_SECRET || "", (err, payload) => {
        if (err) reject(err);
        const { id } = payload as { id: string };
        resolve(id);
      });
    } catch (error) {
      reject(error);
    }
  });
};
