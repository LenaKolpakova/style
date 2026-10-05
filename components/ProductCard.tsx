import Image from 'next/image'
import type { Product } from '@/data/products'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="w-full bg-white rounded-3xl p-4 shadow-sm flex flex-col">
      <div className="bg-slate-100 rounded-2xl aspect-square flex items-center justify-center overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          className="w-full h-full object-contain"
        />
      </div>

      <h3 className="text-xl font-bold mt-4 lowercase">
        {product.title}
      </h3>

      <p className="text-sm text-gray-600 mt-2 leading-relaxed">
        {product.description}
      </p>

      <p className="text-sm text-gray-800 mt-2">
        {product.price.toLocaleString('ru-RU')} ₽
      </p>

      <button className="mt-4 self-start bg-blue-900 text-white rounded-full px-6 py-2 uppercase text-xs tracking-wider hover:bg-blue-800 transition-colors duration-200">
        в корзину
      </button>
    </article>
  )
}
