const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  //ler token do header
  const token = req.header("x-auth-token");
  //revisar se tem token
  if (!token) {
    return res.status(401).json({ msg: "Permisao invalida" });
  }
  //validar token
  try {
    const encrypted = jwt.verify(token, process.env.SECRET);
    req.user = encrypted.user;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ msg: "Token invalido" });
  }
};
