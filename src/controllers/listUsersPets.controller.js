import listUsersPetsService from "../services/listUsersPets.service";

const listUsersPetsController = async (req, res) => {
  const { owner_id } = req.params;

  try {
    const pets = await listUsersPetsService(owner_id);

    return res.status(200).json(pets);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

export default listUsersPetsController;
