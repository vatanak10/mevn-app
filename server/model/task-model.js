import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    title: String,
    body: String,
    dueDate: { type: Date, default: Dateee.now },
    completed: { type: Boolean, default: false },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
});

userSchema.set('timestamps', true);

export default mongoose.model('task', taskSchema);