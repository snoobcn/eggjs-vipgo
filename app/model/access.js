/*
 * @Author: Weisen
 * @Date: 2019-09-29 09:49:12
 * @Github: https://github.com/weisen0304
 */
'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const date = new Date();

  const AccessSchema = new Schema({
    module_name: {
      type: String,
    },
    action_name: {
      type: String,
    },
    type: {
      type: Number,
    },
    url: {
      type: String,
    },
    module_id: {
      type: Schema.Types.Mixed,
    },
    sort: {
      type: Number,
      default: 1,
    },
    description: {
      type: String,
    },
    status: {
      type: Number,
      default: 1,
    },
    add_time: {
      type: Number,
      default: date.getTime(),
    },
  });

  return mongoose.model('Access', AccessSchema, 'access');
};
