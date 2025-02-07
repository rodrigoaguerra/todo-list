import express from 'express';
import { taskCreateSchema, taskUpdateSchema } from '../validations/task.js';
import Task from '../models/Task.js';

const router = express.Router();

// Criar nova tarefa
router.post('/', async (req, res) => {
  try {
    const data = taskCreateSchema.parse(req.body);
    const task = await Task.create(data);
    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error?.errors?.[0]?.message || error.message });
  }
});

// Listar todas as tarefas
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Buscar uma tarefa por ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    if (task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({ error: 'Tarefa não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Atualizar uma tarefa
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = taskUpdateSchema.parse(req.body);

    const task = await Task.findByPk(id);
    if (task) {
      task.title = data.title || task.title;
      task.description = data.description || task.description;
      task.status = data.status || task.status;
      await task.save();
      res.status(200).json(task);
    } else {
      res.status(404).json({ error: 'Tarefa não encontrada' });
    }
  } catch (error) {
    res.status(400).json({ error: error?.errors?.[0]?.message || error.message });
  }
});

// Remover uma tarefa
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    if (task) {
      await task.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Tarefa não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;