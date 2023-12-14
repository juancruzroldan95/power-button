'use client';
import React, { useState } from 'react';
import Button from '../Button';
import PhotoIcon from '../PhotoIcon';
import createNewProduct from '@/lib/createNewProduct';

export default function CreateForm() {
  const [values, setValues] = useState<Product>({
    title: '',
    description: '',
    image: '',
    stock: 0,
    price: 0,
    category: 'all',
    slug: '',
  });

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    const slug = generateSlug(title);
    setValues({ ...values, title, slug });
  };

  const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/\s+/g, '-');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
    await createNewProduct(values);
  };

  return (
    <div className="container m-auto p-4 xl:max-w-2xl">
      <form onSubmit={handleFormSubmit} className="my-12">
        <label className="font-bold">Nombre</label>
        <input
          type="text"
          value={values.title}
          required
          className="p-2 rounded w-full border border-gray-600 bg-gray-800 block mt-2 mb-8"
          name="title"
          onChange={handleTitleChange}
        />

        <label className="font-bold">Slug</label>
        <input
          type="text"
          value={values.slug}
          required
          placeholder="Este campo se completa de forma automática"
          className="p-2 rounded w-full border border-gray-600 bg-gray-800 block mt-2 mb-8 italic text-gray-400 cursor-not-allowed"
          name="slug"
          readOnly
        />

        <label className="font-bold">Descripción</label>
        <textarea
          value={values.description}
          required
          className="p-2 rounded w-full border border-gray-600 bg-gray-800 block mt-2 mb-8"
          name="description"
          onChange={handleTextAreaChange}
        />

        <label className="font-bold">Imagen</label>
        <div className="mt-2 mb-8 flex justify-center rounded-lg border border-dashed border-gray-600 px-6 py-10">
          <div className="text-center flex flex-col items-center">
            <PhotoIcon />
            <div className="mt-4 flex text-sm leading-6 text-gray-400">
              <label htmlFor="file-upload" className="cursor-pointer rounded-md font-semibold text-white hover:text-violet-800">
                <span>Subí un archivo</span>
                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
              </label>
              <p className="pl-1">o arrastralo acá</p>
            </div>
            <p className="text-xs leading-5 text-gray-400">PNG, JPG, GIF hasta 10MB</p>
          </div>
        </div>

        <div className="flex justify-between">
          <div>
            <label className="font-bold">Precio</label>
            <input
              type="number"
              value={values.price}
              required
              className="p-2 rounded w-full border border-gray-600 bg-gray-800 block mt-2 mb-8"
              name="price"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="font-bold">Stock</label>
            <input
              type="number"
              value={values.stock}
              required
              className="p-2 rounded w-full border border-gray-600 bg-gray-800 block mt-2 mb-8"
              name="stock"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <label className="font-bold">Categoría</label>
        <input
          type="text"
          value={values.category}
          required
          className="p-2 rounded w-full border border-gray-600 bg-gray-800 block mt-2 mb-8"
          name="category"
          onChange={handleInputChange}
        />
        <div className="flex justify-center">
          <Button type="submit" className="p-4 text-lg">
            Crear producto
          </Button>
        </div>
      </form>
    </div>
  );
}
