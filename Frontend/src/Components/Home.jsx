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
          <h1 className="max-w-xl text-4xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
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
          <div className="mt-10 flex flex-wrap gap-4 border-t border-slate-200 pt-6 sm:gap-8">
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
              <h2 className="mt-1 text-2xl font-black sm:text-3xl">
                Shop by Category
              </h2>
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
                <h3 className="mt-4 text-sm font-bold sm:mt-5 sm:text-base">
                  {category.name}
                </h3>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  {category.count}
                </p>
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
          <h2 className="mt-1 text-2xl font-black sm:text-3xl">
            Featured Farmers
          </h2>
          <p className="mt-2 text-slate-500">
            Meet our trusted farmers who bring you the freshest produce directly
            from their farms
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 md:grid-cols-3">
          {farmers.slice(0, 3).map((farmer) => (
            <div
              key={farmer.name}
              className="slow-card-hover flex min-h-[240px] cursor-pointer flex-col rounded-2xl border-emerald-200 bg-white p-3 shadow-sm hover:border-2 sm:p-5 lg:min-h-[285px]"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4 sm:gap-4 sm:pb-5">
                <div className="h-12 w-12 min-h-12 min-w-12 flex-none overflow-hidden rounded-full bg-emerald-50 sm:h-16 sm:w-16 sm:min-h-16 sm:min-w-16">
                  <img
                    src={farmer.image}
                    alt={`${farmer.name} profile`}
                    width="64"
                    height="64"
                    className="block h-12 w-12 object-cover sm:h-16 sm:w-16"
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-base font-bold sm:text-lg">
                    {farmer.name}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                    {farmer.details}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-orange-600 sm:text-sm">
                    4.8 ★{" "}
                    <span className="font-normal text-slate-400">
                      (120+ reviews)
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex flex-1 flex-col pt-4 sm:pt-5">
                <p className="text-xs text-slate-600 sm:text-sm">
                  <span className="font-semibold text-slate-900">
                    Specializes in:
                  </span>{" "}
                  {farmer.specialty}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-4 sm:pt-6">
                  <button className="flex-1 cursor-pointer rounded-full bg-emerald-700 px-2 py-2 text-xs font-semibold text-white hover:bg-emerald-800 sm:px-3 sm:text-sm">
                    View Profile
                  </button>
                  <button className="cursor-pointer rounded-full border border-emerald-700 px-3 py-2 text-xs font-semibold text-emerald-700 hover:bg-emerald-50 sm:px-4 sm:text-sm">
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
            <h2 className="mt-1 text-2xl font-black sm:text-3xl">
              Featured Products
            </h2>
            <p className="mt-2 text-slate-500">
              Discover the freshest products from our verified farmers at the
              best prices
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
            {products.slice(0, 6).map((product) => (
              <div
                key={product.name}
                className="slow-card-hover flex min-h-[365px] cursor-pointer flex-col overflow-hidden rounded-2xl border-emerald-200 bg-white shadow-sm hover:border-2 sm:min-h-[420px] lg:min-h-[455px]"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-36 w-full shrink-0 border-0 object-cover sm:h-44 lg:h-52"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src =
                      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=700&q=85";
                  }}
                />
                <div className="flex flex-1 flex-col p-3 sm:p-5">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-bold text-emerald-700 sm:px-3 sm:text-xs">
                      {product.category === "Organic" ||
                      product.name.includes("Organic")
                        ? "Organic"
                        : product.category}
                    </span>
                    <span className="text-[10px] font-bold text-orange-600 sm:text-xs">
                      {product.discount}
                    </span>
                  </div>
                  <h3 className="mt-3 text-base font-bold sm:mt-4 sm:text-lg">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
                    {product.desc}
                  </p>
                  <p className="mt-2 text-[10px] text-slate-500 sm:mt-3 sm:text-xs">
                    {product.farmer} · 4.8 ★
                  </p>
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-4 sm:gap-3 sm:pt-6">
                    <p className="text-base font-black sm:text-xl">
                      {product.price}{" "}
                      <del className="text-xs font-normal text-slate-400 decoration-2 decoration-slate-500 sm:text-sm">
                        {product.oldPrice}
                      </del>
                    </p>
                    <button className="shrink-0 cursor-pointer rounded-full border border-emerald-700 px-2 py-1.5 text-xs font-bold text-emerald-700 hover:bg-emerald-700 hover:text-white sm:px-4 sm:py-2 sm:text-sm">
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
