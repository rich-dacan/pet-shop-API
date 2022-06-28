import createPetService from "../services/createPet.service";

const createPetController = async (req, res) => {
  const { name, species, breed } = req.body;
  const { owner_id } = req.params;

  try {
    const pet = await createPetService(name, species, breed, owner_id);

    return res.status(201).json(pet);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

export default createPetController;
