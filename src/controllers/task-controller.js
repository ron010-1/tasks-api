import Task from "../model/task.js";

export default class TaskController {

    static async getTasks(req, res) {
        try {
            const tasks = await Task.findAll();
            res.status(200).json(tasks);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao buscar tarefas' });
        }
    };

    static async getTaskById(req, res) {
        const { id } = req.params;
        try {
            const task = await Task.findByPk(id);
            if (!task) {
                return res.status(404).json({ message: 'Tarefa não encontrada' });
            }
            res.status(200).json(task);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao buscar tarefa' });
        }
    };

    static async createTask(req, res) {
        try {
            const newTask = await Task.create(req.body);
            res.status(201).json(newTask);
        } catch (err) {
            console.log(err);
            res.status(400).json('Erro ao criar tarefa');
        }
    };

    static async updateTask(req, res) {
        const { id } = req.params;
        try {
            const task = await Task.findByPk(id);
            if (!task) {
                return res.status(404).json({ message: 'Tarefa não encontrada' });
            }
            await task.update(req.body);
            res.status(200).json(task);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao atualizar tarefa' });
        }
    };
    static async deleteTask(req, res) {
        const { id } = req.params;
        try {
            const task = await Task.findByPk(id);
            if (!task) {
                return res.status(404).json({ message: 'Tarefa não encontrada' });
            }
            await task.destroy();
            res.status(204).send();
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao deletar tarefa' });
        }
    };

    
}