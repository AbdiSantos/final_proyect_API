const express = require('express');
const Invoice = require('../models/invoiceModel');
const UserService = require(`../services/userService`);
const router = express.Router();

const service = new UserService();

router.post('/', async (req, res) => {
  try {
    const { nombre, total, reservas, pelicula, horario } = req.body;
    const newInvoice = new Invoice({
      nombre,
      total,
      reservas,
      pelicula,
      horario,
    });
    const newFactura = await service.createInvoce(newInvoice);
    res.json(newFactura);
  } catch (error) {
    console.log(error);
  }
});
router.get('/', async (req, res) => {
  try {
    const products = await service.getInvoices();

    res.json(products);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
