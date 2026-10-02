
import { Search, ShoppingCart, Leaf, ArrowRight } from "lucide-react";

function NewHome() {
  return (
    <main className="min-h-screen bg-[#faf9f6]">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 bg-white shadow-sm">

        <h1 className="text-2xl font-bold text-green-700">
          FoodieMart<span className="text-orange-500">.</span>
        </h1>

        <div className="hidden md:flex gap-8 text-gray-600 font-medium">
          <a href="#" className="hover:text-green-600">Home</a>
          <a href="#" className="hover:text-green-600">Products</a>
          <a href="#" className="hover:text-green-600">Categories</a>
          <a href="#" className="hover:text-green-600">About</a>
        </div>

        <div className="flex items-center gap-5">
          <Search className="cursor-pointer" />
          <div className="relative">
            <ShoppingCart className="cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full px-1.5">
              0
            </span>
          </div>
        </div>

      </nav>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-8 py-16 grid md:grid-cols-2 items-center gap-10">

        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            <Leaf size={16} />
            Fresh & Healthy Food
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight text-gray-900">
            Fresh Food,
            <span className="text-green-600"> Happy Life.</span>
          </h1>

          <p className="mt-6 text-lg text-gray-500 leading-8">
            Discover fresh, delicious and healthy food products
            delivered straight to your doorstep.
          </p>

          <button className="mt-8 flex items-center gap-3 rounded-xl bg-green-600 px-7 py-4 font-semibold text-white transition hover:bg-green-700">
            Explore Products
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=900"
            alt="Fresh vegetables"
            className="w-full rounded-3xl object-cover shadow-xl"
          />
        </div>

      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-8 py-12">

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Shop by Category
          </h2>
          <p className="mt-2 text-gray-500">
            Find your favourite fresh products.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">

          {[
            { name: "Fruits", emoji: "🍎", color: "bg-red-50" },
            { name: "Vegetables", emoji: "🥦", color: "bg-green-50" },
            { name: "Dairy", emoji: "🥛", color: "bg-blue-50" },
            { name: "Bakery", emoji: "🍞", color: "bg-orange-50" },
          ].map((category) => (

            <div
              key={category.name}
              className={`${category.color} rounded-2xl p-8 text-center transition hover:-translate-y-1 hover:shadow-lg cursor-pointer`}
            >
              <div className="text-5xl">{category.emoji}</div>

              <h3 className="mt-4 font-bold text-gray-800">
                {category.name}
              </h3>
            </div>

          ))}

        </div>

      </section>

    </main>
  );
}

export default NewHome;
