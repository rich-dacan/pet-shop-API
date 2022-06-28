import createUserService from "../services/createUser.service";

const createUserController = async (req, res) => {
  const { email, name, password } = req.body;

  try {
    const user = await createUserService(email, name, password);

    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

export default createUserController;
