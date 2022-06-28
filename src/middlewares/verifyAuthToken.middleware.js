import jwt from "jsonwebtoken";

const verifyAuthTokenMiddleware = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Missing Authorization Token" });
  }

  // TRATAMENTO DE TOKEN NECESSÁRIO POIS ESTAMOS UTILIZANDO O TIPO "BEARER";
  // SE O TOKEN FOR PASSADO NO HEADER COM A SINTAXE "Authorization": "token", O TRATAMENTO ABAIXO SE TORNA DESNECESSÁRIO E IMPEDE A VERIFICAÇÃO DO TOKEN (TESTES REALIZADOS NO INSOMNIA)
  token = token.split(" ")[1];

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "Invalid Token" });
    }

    next();
  });
};

export default verifyAuthTokenMiddleware;
