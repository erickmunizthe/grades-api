import mongoose from 'mongoose';

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
  },
  lastModified: {
    type: Date,
    default: Date.now(),
  },
});

const gradeModel = mongoose.model('grade', schema);

export { gradeModel };
