import database from "../database";

const createPetService = async (name, species, breed, owner_id) => {
  try {
    const res = await database.query(
      "INSERT INTO pets (name, species, breed, owner_id) VALUES($1, $2, $3, $4) RETURNING *",
      [name, species, breed, owner_id]
    );

    return res.rows[0];
  } catch (error) {
    throw new Error(error.message);
  }
};

export default createPetService;
