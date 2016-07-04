import { Meteor } from 'meteor/meteor';
import Products from '../collections/products';

Meteor.methods({

  getProduct(id) {
    return Products.findOne({_id: id})
  },

  getProducts() {
    return Products.find().fetch()
  },

  addProduct(data) {
    var newObj = {
      name: data.name,
    };
    return Products.insert(newObj);
  },

  removeProduct(id) {
    return Products.remove({_id: id})
  },

  editProduct(id, name) {
    return Products.update({_id: id}, {$set: {name: name}});
  }
});

Products.deny({
  insert() {return true;},
  update() {return true;},
  remove() {return true;}
});
