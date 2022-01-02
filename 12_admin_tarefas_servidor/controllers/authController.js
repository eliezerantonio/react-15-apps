const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
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

    // revisar senha de
    const correctPass = await bcryptjs.compare(password, user.password);

    if (!correctPass) {
      return res.status(400).json({ msg: "Senha incorreta" });
    }

    const payload = { user: { id: user.id } };

    jwt.sign(
      payload,
      process.env.SECRET,
      {
        expiresIn: 3600, //1hora
      },
      (error, token) => {
        if (error) throw error;

        //retirn token caso der sucesso al
        res.json({ token });
      }
    );
  } catch (error) {
    console.log(error);
  }
};
