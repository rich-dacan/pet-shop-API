import deleteUserService from "../services/deleteUser.service";

const deleteUserController = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await deleteUserService(id);

    return res.json(deletedUser);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

export default deleteUserController;
