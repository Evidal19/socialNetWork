const { Thought, User } = require('../models');

const secondController = {
    getAllUsers(req, res) {
        User.find({})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
    },
  }