const { Thought, User } = require('../models');

const controller={
getThoughts(req, res) {
 Thought.find({})
  .then(dbThoughtData => {
      res.json(dbThoughtData)
  })
  .catch(err => res.status(500).json(err));
},
getThoughtById({ params }, res) {
  Thought.findOne({ _id: params.id })
  .then(dbThoughtData => {
      if(!dbThoughtData) {
          res.status(404).json({message: "Wrong ID"})
      }
      res.json(dbThoughtData);
  })
  .catch(err => res.status(500).json(err));
},
}





module.exports = controller;