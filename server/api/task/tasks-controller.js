import User from '../../model/user-model';
import Task from '../../model/task-model';
import moment from 'moment';
import * as auth from '../../services/auth-service';

export function index(req, res) {
    // find all tasks
    Task.find({}, (error, tasks) => {
        if (error) {
            return res.status(500).json();
        }
        return res.status(200).json({ tasks: tasks });
    }).populate('author', 'username', 'user');

    // return res.status(200).json();
}

export function create(req, res) {
    // create new task
    const id = auth.getUserId(req);
    User.findOne({ id: id }, (error, user) => {
        if (error && !user) {
            return res.status(500).json();
        }
        const task = new Task(req.body.task);
        task.author = user._id;
        task.dueDate = moment(task.dueDate);

        task.save(error => {
            if (error) {
                return res.status(500).json();
            }
            return res.status(201).json();
        });
    });

    // return res.status(201).json();
}

export function update(req, res) {
    // update task
    
    const id = auth.getUserId(req);

    User.findOne({ _id: id }, (error, user) => {
        if (error) {
            return res.status(500).json();
        }
        if (!user) {
            return res.status(404).json();
        }

        const task = new Task(req.body.task);
        task.author = user._id;
        task.dueDate = moment(task.dueDate);

        Task.findByIdAndUpdate({ _id: task._id }, task, error => {
            if (error) {
                return res.status(500).json();
            }
            return res.status(204).json();
        });
    });
    
    // return res.status(204).json();
}

export function remove(req, res) {
    // delete task
    const id = auth.getUserId(req);
    Task.findOne({ _id: req.params._id }, (error, task) => {
        if (error) {
            return res.status(500).json();
        }
        if (!task) {
            return res.status(404).json();
        }
        if (task.author._id.toString() != id) {
            return res.status(403).json({ message: "Not Allowed to delete another user's task!"});
        }

        Task.deleteOne({ _id: req.params._id }, error => {
            if (error) {
                return res.status(500).json();
            }
            return res.status(204).json();
        });
    });

    // return res.status(204).json();
}

export function show(req, res) {
    // get task by id
    Task.findOne({ _id: req.params.id }, (error, task) => {
        if (error) {
            return res.status(500).json();
        }
        if (!task) {
            return res.status(404).json();
        }
        return res.status(200).json({ task: task });
    });

    // return res.status(200).json();
}