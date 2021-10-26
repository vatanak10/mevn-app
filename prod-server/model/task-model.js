'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var taskSchema = new _mongoose2.default.Schema({
    title: String,
    body: String,
    dueDate: { type: Date, default: Dateee.now },
    completed: { type: Boolean, default: false },
    author: { type: _mongoose2.default.Schema.Types.ObjectId, ref: 'user' }
});

userSchema.set('timestamps', true);

exports.default = _mongoose2.default.model('task', taskSchema);