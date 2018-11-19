const router = require("express").Router();
const Shift = require("../db").import("../models/shift");

//POST: create new shift (for hospitals)
router.post("/new", (req, res) =>
  Shift.create({
    hospitalId: req.body.hospitalId,
    hospitalName: req.body.hospitalName,
    department: req.body.department,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    pay: req.body.pay,
    pickedUp: req.body.pickedUp,
    nurse: req.user.id
  })
    .then(shift => res.json({ shift: shift }))
    .catch(err => res.send(500).json(req.errors))
);

//GET: find all shifts for a hospital (for nurses)
router.get("/:user", (req, res) => {
  if (!req.errors) {
    Shift.findAll({
      where: { user: req.params.user }
    })
      .then(data => res.json(data))
      .catch(err => res.status(500).json(req.errors));
  } else {
    res.status(500).json(req.errors);
  }
});

//GET: find single shifts from a hospital (for nurses)
router.get("/item/:shiftId", (req, res) => {
  if (!req.errors) {
    Shift.findOne({
      where: { id: req.params.shiftId }
    })
      .then(data => res.json(data))
      .catch(err => res.status(500).json(req.errors));
  } else {
    res.status(500).json(req.errors);
  }
});

//GET: list all shifts for self (for hospitals)
router.get("/", (req, res) =>
  Shift.findAll({ where: { user: req.user.id } })
    .then(data => res.json(data))
    .catch(err => res.status(500).json(req.errors))
);

//PUT: update individual shifts (for hospitals)
router.put("/:id", (req, res) =>
  Shift.update(req.body.shift, { where: { id: req.params.id } })
    .then(data => res.status(200).json(data))
    .catch(err => res.send(500).json(req.errors))
);

//DELETE individual shift (for hospitals)
router.delete("/:id", (req, res) =>
  Shift.destroy({ where: { id: req.params.id } })
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(req.errors))
);

module.exports = router;
