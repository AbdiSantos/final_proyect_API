const Invoice = require(`../models/invoiceModel`)

class UserService {
  async createInvoce(newInvoice) {
    const nuevaFactura = new Invoice(newInvoice);
    await nuevaFactura.save();

    return newInvoice;
  }
  getInvoices() {
    const movies = Invoice.find();
    return movies;
  }


}

module.exports = UserService;

