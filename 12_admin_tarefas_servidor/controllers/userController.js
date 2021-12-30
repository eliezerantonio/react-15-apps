const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    let user;
    // criar a new user

    user = new User(req.body);

    //guardar usuario

      await user.save();
      res.send("Usuario criado corretamente")
      
  } catch (error) {
    console.log(error);

    res.status(400).send("Houve um erro");
  }
};
