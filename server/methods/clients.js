import { Meteor } from 'meteor/meteor';
import Clients from '../collections/clients';

Meteor.methods({

  getClient(id) {
    return Clients.findOne({_id: id})
  },

  getClients() {
    return Clients.find().fetch()
  },

  addClient(data) {
    var newObj = {
      name: data.name,
    };
    return Clients.insert(newObj);
  },

  removeClient(id) {
    return Clients.remove({_id: id})
  },

  editClient(id, name) {
    return Clients.update({_id: id}, {$set: {name: name}});
  }
});

Clients.deny({
  insert() {return true;},
  update() {return true;},
  remove() {return true;}
});
