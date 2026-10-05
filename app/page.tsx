import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10">
          Наша коллекция
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="bg-blue-900 text-white rounded-full px-12 py-4 uppercase text-sm tracking-wider hover:bg-blue-800 transition-colors duration-200">
            смотреть всю коллекцию
          </button>
        </div>
      </div>
    </main>
  )
}
