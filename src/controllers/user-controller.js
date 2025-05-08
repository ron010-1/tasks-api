import User from "../model/user.js";

export default class UserController {

    static async getUsers(req, res) {
        try {
            const users = await User.findAll();
            res.status(200).json(users);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao buscar usuários' });
        }
    };

    static async getUserById(req, res) {
        const { id } = req.params;
        try {
            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }
            res.status(200).json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao buscar usuário' });
        }
    };

    static async createUser(req, res) {
        try {
            const newUser = await User.create(req.body);
            res.status(201).json(newUser);
        } catch (err) {
            console.log(err);
            res.status(400).json('Erro ao criar usuário');
        }
    };

    static async updateUser(req, res) {
        const { id } = req.params;
        try {
            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }
            await user.update(req.body);
            res.status(200).json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao atualizar usuário' });
        }
    };
    
    static async deleteUser(req, res) {
        const { id } = req.params;
        try {
            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }
            await user.destroy();
            res.status(204).send();
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao deletar usuário' });
        }
    };
}