import { Meteor } from 'meteor/meteor';
import Clients from './collections/clients';

Meteor.publish('clients', () => Clients.find());
