import { z } from 'zod';

// Schema para criação de tarefas com mensagens personalizadas
const taskCreateSchema = z.object({
  title: z.string({
    required_error: "O título é obrigatório.",
    invalid_type_error: "O título deve ser uma string.",
  })
    .min(1, { message: 'O título deve ter pelo menos 1 caractere.' })
    .max(100, { message: 'O título não pode ultrapassar 100 caracteres.' }),
  
  description: z.string()
    .max(300, { message: 'A descrição não pode ultrapassar 300 caracteres.' })
    .optional(),

  status: z.enum(['pendente', 'concluída']).optional(),
});

// Schema para atualização de tarefas
const taskUpdateSchema = z.object({
  title: z.string()
    .min(1, { message: 'O título deve ter pelo menos 1 caractere.' })
    .max(100, { message: 'O título não pode ultrapassar 100 caracteres.' })
    .optional(),

  description: z.string()
    .max(300, { message: 'A descrição não pode ultrapassar 300 caracteres.' })
    .optional(),

  status: z.enum(['pendente', 'concluída']).optional(),
});

export { taskCreateSchema, taskUpdateSchema };
