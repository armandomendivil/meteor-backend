import { Meteor } from 'meteor/meteor';
import Client from './collections/clients';

Meteor.publish('client', () => Client.find());
