const User = require("../models/User");

const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

const jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
  //revisar error

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  //extrair email e password

  const { email, password } = req.body;

  try {
    //verificar se o email ja existe antes se cadastrar

    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: "Usuario ja existe" });
    }
    // criar a new user

    //hashear  a senha

    user = new User(req.body);

    const salt = await bcryptjs.genSalt(10);
    user.password = await bcryptjs.hash(password, salt);
    //guardar usuario

    await user.save();

    //ciriar formar o javascriptWithScope

    const payload = {
      user: { id: user.id },
    };
    //formar o token

    jwt.sign(
      payload,
      process.env.SECRET,
      {
        expiresIn: 3600,
      },
      (error, token) => {
        if (error) throw error;

        res.json({ token });
      }
    );
  } catch (error) {
    console.log(error);

    res.status(400).send("Houve um erro");
  }
};

