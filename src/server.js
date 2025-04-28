import app from './config/app.js';
import Task from './model/task.js';
//import User from './model/user.js';

app.get('/', (req, res) => {
    res.end('Olá mundo!');
});

app.get('/tasks', async (req, res) => {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
});

app.post('/tasks', async (req, res) => {
    try {
        const newTask = await Task.create(req.body);
        res.status(201).json(newTask);
    } catch (err) {
        console.log(err);
        res.status(400).json('Erro ao criar tarefa');
    }
});
