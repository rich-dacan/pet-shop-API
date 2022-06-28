import database from "../database";

const listUsersPetsService = async owner_id => {
  try {
    const res = await database.query("SELECT * FROM pets WHERE owner_id = $1", [
      owner_id,
    ]);

    return res.rows[0];
  } catch (error) {
    throw new Error(error.message);
  }
};

export default listUsersPetsService;
