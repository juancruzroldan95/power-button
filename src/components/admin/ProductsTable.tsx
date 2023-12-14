import getAllProducts from '@/lib/getAllProducts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default async function ProductsTable() {
  const allProducts: Product[] = await getAllProducts();

  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto text-left border-collapse border border-slate-600">
        <thead className="bold text-gray-300">
          <tr className="bg-slate-700">
            <th scope="col" className="px-3 py-2 border border-slate-600">
              Nombre
            </th>
            <th scope="col" className="px-3 py-2 border border-slate-600">
              Precio
            </th>
            <th scope="col" className="px-3 py-2 border border-slate-600">
              Stock
            </th>
            <th scope="col" className="px-3 py-2 border border-slate-600">
              Categoría
            </th>
            <th scope="col" className="px-3 py-2 border border-slate-600">
              Imagen
            </th>
            <th scope="col" className="px-3 py-2 border border-slate-600">
              Slug
            </th>
            <th scope="col" className="px-3 py-2 border border-slate-600">
              Descripción
            </th>
            <th scope="col" className="px-3 py-2 border border-slate-600">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {allProducts.map((product) => (
            <tr className="bg-slate-800" key={product.slug}>
              <td className="p-2 border border-slate-700">{product.title}</td>
              <td className="p-2 border border-slate-700">u$s {product.price}</td>
              <td className="p-2 border border-slate-700">{product.stock}</td>
              <td className="p-2 border border-slate-700">{product.category}</td>
              <td className="p-2 border border-slate-700">
                <Image src={product.image} alt={product.title} width={80} height={80} />
              </td>
              <td className="p-2 border border-slate-700">{product.slug}</td>
              <td className="p-2 border border-slate-700 truncate max-w-prose">{product.description}</td>
              <td className="p-2 border border-slate-700">
                <Link href={`/admin/edit/${product.slug}`} className="rounded bg-green-500 hover:bg-green-700 m-2 p-2 text-white">
                  Editar
                </Link>
                <Link href={`/admin/delete/${product.slug}`} className="rounded bg-red-500 hover:bg-red-700 m-2 p-2 text-white">
                  Borrar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
