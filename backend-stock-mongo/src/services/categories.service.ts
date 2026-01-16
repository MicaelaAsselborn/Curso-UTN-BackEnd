// Manage Logic for Categories

import { ICategory } from '../types/categories';
import { Category } from '../models/categories.model';

export const getAllCategory = async (): Promise<ICategory[]> => {
  return await Category.find(); // trae todas las categorías de la base de datos
};

export const getCategoryById = async (
  id: string
): Promise<ICategory | null> => {
  return await Category.findById(id);
};

export const createCategory = async (data: ICategory): Promise<ICategory> => {
  const newCategory = new Category(data);
  return await newCategory.save();
};

export const updateCategory = async (
  id: string,
  data: ICategory
): Promise<ICategory | null> => {
  const category = Category.findByIdAndUpdate(id, data, {
    new: true, // para que me devuelva el objeto actualizado
  }); // si mongo no encuentra un doc con ese id, devuelve null

  return category;
};

export const removeCategory = async (id: string): Promise<ICategory | null> => {
  return await Category.findByIdAndDelete(id);
};
