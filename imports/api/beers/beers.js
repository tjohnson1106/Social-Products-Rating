import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

const Beers = new Mongo.Collection('beers');
export default Beers;

 const Schemas = {};

 Schemas.Beer = new SimpleSchema({
     user_id: {
         type: String,
     },
     name: {
         type: String,
         max: 200
     },
     description: {
         type: String
     },
     brewery: {
         type: String
     },
     type: {
         type: String,
         max: 200
     },
     image: {
         type: String
     },
     recommended: {
         type: Boolean
     },
     public: {
         type: Boolean
     }
 });