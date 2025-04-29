import app from './config/app.js';
import TaskRouter from './routes/task-router.js';

app.get('/', (req, res) => {
    res.end('Olá mundo, bem vindo a minha API!');
});

app.use('/tasks', TaskRouter);