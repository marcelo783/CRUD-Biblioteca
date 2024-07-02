import { Schema } from 'mongoose';

export const LivroSchema = new Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  ano: { type: Number, required: true },
  disponivel: { type: Boolean, default: true },
});
