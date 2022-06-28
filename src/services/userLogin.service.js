import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import database from "../database";

const userLoginService = async (email, password) => {
  try {
    const res = await database.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (res.rows.length === 0) {
      throw new Error("Invalid email or password");
    }

    const user = res.rows[0];

    const passwordMatch = bcrypt.compareSync(password, user.password);

    if (!passwordMatch) {
      throw new Error("Invalid email or password");
    }

    const token = jwt.sign({ email: email }, "SECRET_KEY", {
      expiresIn: "24H",
    });

    return { token };
  } catch (error) {
    throw new Error(error.message);
  }
};

export default userLoginService;
