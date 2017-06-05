// what model?

import Contacts from "../models/Contacts";


const ContactController = {
  find: (request, response, next) => {
    Contacts.findById(request.params.id).exec()
    .then((contacts) => {
      return response.json(contacts);
    })
    .catch((err) => {
      return next(err);
    });
  }, // end of findbyID contact

  list: (request, response, next) => {
    Contacts.find().exec()
      .then((contacts) => {
        return response.json(contacts);
      })
      .catch((err) => {
        return next(err);
      });
  }, // end of list all contacts

  delete: (request, response, next) => {
    Contacts.findByIdAndRemove(request.params.id).exec()
     .then((contacts) => {
       return response.json(contacts);
     })
     .catch((err) => {
       return next(err);
     });
  },  // end of delete Contact

  create: (request, response, next) => {
    const contactNew = new Contacts(request.body);
    contactNew.save()
     .then(storedContact => {
       return response.json(storedContact);
     })
     .catch((err) => {
       return next(err);
     });
  } // end of create

};  // end of Contacts object

export default ContactController;
