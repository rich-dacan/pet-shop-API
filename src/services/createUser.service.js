import * as bcrypt from "bcrypt";
import database from "../database";

const createUserService = async (email, name, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const res = await database.query(
      "INSERT INTO users(email, name, password) VALUES($1, $2, $3) RETURNING *",
      [email, name, hashedPassword]
    );

    return res.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

export default createUserService;
