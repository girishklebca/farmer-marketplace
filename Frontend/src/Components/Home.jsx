import { Link } from "react-router-dom";
import Footer from "./Footer";
import { categories, farmers, products } from "../data/marketData";

const Home = () => {
  return (
    <div className="min-h-screen  text-slate-900 bg-emerald-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10 lg:pt-14">
        <div>
          <p className="mb-5 inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
            🥕 Fresh Today · Delivered from farm
          </p>
          <h1 className="max-w-xl text-5xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-6xl">
            Buy Fresh, Support Farmers,{" "}
            <span className="text-emerald-700">Save Money</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
            Connect directly with local farmers. Get the freshest produce at
            fair prices while supporting your community.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/products"
              className="cursor-pointer rounded-full bg-emerald-700 px-6 py-3.5 font-semibold text-white shadow-lg shadow-emerald-700/20 hover:bg-emerald-800"
            >
              Start Shopping
            </Link>
            <button className="cursor-pointer rounded-full border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 hover:border-emerald-600 hover:text-emerald-700">
              Join as Farmer
            </button>
          </div>
          <div className="mt-10 flex gap-8 border-t border-slate-200 pt-6">
            <div>
              <strong className="block text-2xl font-black">500+</strong>
              <span className="text-sm text-slate-500">Active Farmers</span>
            </div>
            <div>
              <strong className="block text-2xl font-black">10K+</strong>
              <span className="text-sm text-slate-500">Happy Customers</span>
            </div>
            <div>
              <strong className="block text-2xl font-black">50+</strong>
              <span className="text-sm text-slate-500">Product Types</span>
            </div>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1573481078935-b9605167e06b?auto=format&fit=crop&w=1080&q=85"
          alt="Fresh vegetables at a farmer's market"
          className="min-h-[360px] rounded-[2rem] object-cover lg:min-h-[500px]"
        />
      </div>

      <div className="bg-emerald-50 px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="font-semibold text-orange-600">
                Fresh choices for every kitchen
              </p>
              <h2 className="mt-1 text-3xl font-black">Shop by Category</h2>
              <p className="mt-2 text-slate-500">
                Discover fresh, locally sourced products from farmers in your
                area
              </p>
            </div>
            <Link
              to="/products"
              className="hidden cursor-pointer text-sm font-bold text-emerald-700 sm:block"
            >
              View All Products →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {categories.map((category) => (
              <button
                key={category.name}
                className="slow-card-hover cursor-pointer rounded-2xl border border-slate-100 bg-stone-50 p-5 text-left hover:border-emerald-200 hover:shadow-md"
              >
                <span className="text-4xl">{category.icon}</span>
                <h3 className="mt-5 font-bold">{category.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{category.count}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="mb-8">
          <p className="font-semibold text-orange-600">
            People behind your produce
          </p>
          <h2 className="mt-1 text-3xl font-black">Featured Farmers</h2>
          <p className="mt-2 text-slate-500">
            Meet our trusted farmers who bring you the freshest produce directly
            from their farms
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {farmers.map((farmer) => (
            <div
              key={farmer.name}
              className="slow-card-hover cursor-pointer flex min-h-[285px] flex-col rounded-2xl  bg-white p-5 shadow-sm hover:border-2 border-emerald-200 "
            >
              <div className="flex items-center gap-4 border-b border-slate-100 pb-5">
                <div className="h-16 w-16 min-h-16 min-w-16 flex-none overflow-hidden rounded-full bg-emerald-50">
                  <img
                    src={farmer.image}
                    alt={`${farmer.name} profile`}
                    width="64"
                    height="64"
                    className="block h-16 w-16 object-cover"
                    style={{
                      height: "64px",
                      width: "64px",
                      maxHeight: "64px",
                      maxWidth: "64px",
                    }}
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-lg font-bold">{farmer.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {farmer.details}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-orange-600">
                    4.8 ★{" "}
                    <span className="font-normal text-slate-400">
                      (120+ reviews)
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex flex-1 flex-col pt-5">
                <p className="text-sm text-slate-600">
                  <span className="font-semibold text-slate-900">
                    Specializes in:
                  </span>{" "}
                  {farmer.specialty}
                </p>
                <div className="mt-auto flex gap-2 pt-6">
                  <button className="cursor-pointer flex-1 rounded-full bg-emerald-700 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-800">
                    View Profile
                  </button>
                  <button className="cursor-pointer rounded-full border border-emerald-700 px-4 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-50">
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/farmers"
            className="cursor-pointer font-bold text-emerald-700"
          >
            View All Farmers →
          </Link>
        </div>
      </div>

      <div className="bg-emerald-100 px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="font-semibold text-orange-600">Fresh from the farm</p>
            <h2 className="mt-1 text-3xl font-black">Featured Products</h2>
            <p className="mt-2 text-slate-500">
              Discover the freshest products from our verified farmers at the
              best prices
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {products.slice(0, 9).map((product) => (
              <div
                key={product.name}
                className="slow-card-hover cursor-pointer flex min-h-[455px] flex-col overflow-hidden rounded-2xl  bg-white shadow-sm  hover:border-2 border-emerald-200 "
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-52 w-full shrink-0 border-0 object-cover"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src =
                      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=700&q=85";
                  }}
                />
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                      Organic
                    </span>
                    <span className="text-xs font-bold text-orange-600">
                      {product.discount}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold">{product.name}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {product.desc}
                  </p>
                  <p className="mt-3 text-xs text-slate-500">
                    {product.farmer} · 4.8 ★
                  </p>
                  <div className="mt-auto flex items-center justify-between gap-3 pt-6">
                    <p className="text-xl font-black">
                      {product.price}{" "}
                      <del className="text-sm font-normal text-slate-400 decoration-2 decoration-slate-500">
                        {product.oldPrice}
                      </del>
                    </p>
                    <button className="shrink-0 cursor-pointer rounded-full border border-emerald-700 px-4 py-2 text-sm font-bold text-emerald-700 hover:bg-emerald-700 hover:text-white">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/products"
              className="cursor-pointer font-bold text-emerald-700"
            >
              View All Products →
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
