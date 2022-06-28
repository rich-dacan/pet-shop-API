import updateUserService from "../services/updateUser.service";

const updateUserController = async (req, res) => {
  const { id } = req.params;
  const { email, name } = req.body;

  try {
    const updatedUser = await updateUserService(id, name, email);

    return res.json(updatedUser);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

export default updateUserController;
