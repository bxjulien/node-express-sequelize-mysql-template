const db = require("../models");
const Example = db.example;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const example = {
    title: req.body.title,
    description: req.body.description,
    isActive: req.body.isActive ? req.body.isActive : false
  };

  Example.create(example)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Example."
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  const condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Example.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving examples."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Example.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Example with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Example.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Example was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Example with id=${id}. Maybe Example was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating Example with id=${id}`
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Example.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Example was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Example with id=${id}. Maybe Example was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Could not delete Example with id=${id}`
      });
    });
};

exports.deleteAll = (req, res) => {
  Example.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Examples were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all examples."
      });
    });
};

exports.findAllActives = (req, res) => {
  Example.findAll({ where: { isActive: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving examples."
      });
    });
};