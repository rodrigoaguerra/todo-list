import { DataTypes } from 'sequelize';
import sequelize from '../database.js';

const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('pendente', 'concluída'),
    defaultValue: 'pendente',
  },
});

export default Task;