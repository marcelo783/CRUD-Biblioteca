import { Document } from 'mongoose';

export interface Livro extends Document {
  id?: string;
  titulo: string;
  autor: string;
  ano: number;
  disponivel: boolean;
}
