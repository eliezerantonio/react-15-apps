const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

exports.authUser = async (req, res, next) => {
  //revisar erros
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  //extraur email e sneha

  const { email, password } = req.body;

  try {
    //revisar se e um usuari o registrado

    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "Usuario nao existe" });
    }
  } catch (error) {
    console.log(error);
  }
};
