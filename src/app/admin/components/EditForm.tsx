'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '../../../components/Button';
import PhotoIcon from '../../../components/PhotoIcon';
import updateProduct from '@/lib/products/updateProduct';

export default function EditForm({ product }: { product: Product }) {
  const router = useRouter();
  const { title, description, stock, price, slug, image, category } = product;
  const [values, setValues] = useState<Product>({ title, description, stock, price, slug, image, category });
  const [file, setFile] = useState<File>({} as File);

  const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/\s+/g, '-');
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    const slug = generateSlug(title);
    setValues({ ...values, title, slug });
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

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await updateProduct(slug, values, file);
      router.push('/admin');
    } catch (error) {
      console.error('Error updating product:', error);
    }
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
                <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} />
              </label>
              <p className="pl-1">{file ? file.name : image}</p>
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
        <select
          value={values.category}
          required
          className="p-2 rounded w-full border border-gray-600 bg-gray-800 block mt-2 mb-8"
          name="category"
          onChange={handleSelectChange}
        >
          <option value="games">Juegos</option>
          <option value="consoles">Consolas</option>
          <option value="accessories">Accesorios</option>
        </select>
        <div className="flex justify-center">
          <Button type="submit" className="p-4 text-lg">
            Editar producto
          </Button>
        </div>
      </form>
    </div>
  );
}
