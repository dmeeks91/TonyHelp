const db = require("../models");

// Defining methods for the choresController
module.exports = {
  findAll: function (req, res) {
    db.Chores.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => {
        res.json(dbModel);
        console.log(dbModel);
      })

      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Chores.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    const houseID = req.params.id
    console.log(`Creating chore in ${houseID}`)
    db.Chores
      .create(req.body)
      .then(({_id}) => { 
        console.log(_id)
      db.Household.findOneAndUpdate({_id:houseID}, { $push: { chores: [_id] } }, { new: true })
      .then(() => res.json({success:true}))
      })
      .catch((err) => res.status(422).json(err))
  },
  update: function (req, res) {
    console.log("updating chore")
    db.Chores.findByIdAndUpdate(req.params.id, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: async (req, res) => {
    const { id, choreID } = req.params

    await db.Chores.findByIdAndDelete(choreID);

    await db.Household.findByIdAndUpdate(id, 
      {$pull: { chores: choreID }})
    .catch((err) => res.status(422).json(err));

    res.json({success:true})
  },
};
