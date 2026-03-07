const usersDB = {
  users: require("../models/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const fsPromises = require("fs").promises;
const path = require("path");
const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  const { user, pwd } = req.body;
  if (!user || !pwd) return res.status(400).json({ message: "Username and password are required" });

  //Check for Duplicates
  const duplicate = usersDB.users.find((person) => person.username === user);
  if (duplicate) return res.status(409); //Conflict status

  try {
    //encrypt the pwd
    const saltRounds = 10;
    const hashedPwd = await bcrypt.hash(pwd, saltRounds);

    //store the new user
    const newUser = {
      username: user,
      password: hashedPwd,
    };
    usersDB.setUsers([...usersDB.users, newUser]);
    await fsPromises.writeFile(
      path.join(__dirname, "..", "models", "users.json"),
      JSON.stringify(usersDB.users),
    );
    res.status(201).json({ message: `New user ${user} created` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { handleNewUser };
