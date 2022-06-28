import listUsersService from "../services/listUsers.service";

const listUsersController = async (req, res) => {
  try {
    const users = await listUsersService();

    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

export default listUsersController;
