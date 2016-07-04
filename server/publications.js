import { Meteor } from 'meteor/meteor';
import Clients from './collections/clients';
import Products from './collections/products';

Meteor.publish('clients', () => Clients.find());

Meteor.publish('products', () => Products.find());
