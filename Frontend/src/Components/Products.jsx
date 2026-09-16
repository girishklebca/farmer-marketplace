import { useEffect, useState } from "react";
import Footer from "./Footer";
import { categories, products } from "../data/marketData";

const Products = () => {
  const productsPerLoad = 15;
  const [activeCategory, setActiveCategory] = useState("All products");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");
  const [visibleCount, setVisibleCount] = useState(productsPerLoad);
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProducts = products.filter((product) => {
    const query = search.trim().toLowerCase();
    const matchesCategory =
      activeCategory === "All products" || product.category === activeCategory;
    const matchesSearch =
      !query ||
      `${product.name} ${product.desc} ${product.farmer}`
        .toLowerCase()
        .includes(query);
    return matchesCategory && matchesSearch;
  });

  if (sort !== "featured") {
    filteredProducts.sort((first, second) => {
      const firstPrice = Number(first.price.replace(/[^0-9]/g, ""));
      const secondPrice = Number(second.price.replace(/[^0-9]/g, ""));
      return sort === "price-low"
        ? firstPrice - secondPrice
        : secondPrice - firstPrice;
    });
  }

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <main className="min-h-screen bg-emerald-100 text-slate-900">
      <section className="bg-emerald-100 px-6 pb-10 pt-14 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold text-orange-600">Fresh from the farm</p>
          <div className="mt-2 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Fresh products, fair prices
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                Discover the freshest products from our verified farmers at the
                best prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10  ">
        <div className="flex flex-col gap-4 rounded-2xl border border-emerald-200 bg-emerald-100 p-4 shadow-sm lg:flex-row lg:items-center">
          <label className="relative flex flex-1 items-center gap-3 rounded-xl bg-emerald-50 px-4 py-3 text-slate-400">
            <span aria-hidden="true">⌕</span>
            <span className="sr-only">Search products</span>
            <input
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setVisibleCount(productsPerLoad);
              }}
              placeholder="Search tomatoes, mangoes, milk..."
              className="w-full bg-transparent pr-8 text-sm text-slate-900 outline-none placeholder:text-slate-400"
            />
            {search && (
              <button
                type="button"
                aria-label="Clear search"
                title="Clear search"
                onClick={() => {
                  setSearch("");
                  setVisibleCount(productsPerLoad);
                }}
                className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-lg font-bold text-slate-500 hover:bg-emerald-200 hover:text-emerald-800"
              >
                ×
              </button>
            )}
          </label>
          <label className="flex items-center gap-3 text-sm font-semibold text-slate-600">
            Sort by
            <select
              value={sort}
              onChange={(event) => {
                setSort(event.target.value);
                setVisibleCount(productsPerLoad);
              }}
              className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 font-semibold text-slate-700 outline-none focus:border-emerald-600"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: low to high</option>
              <option value="price-high">Price: high to low</option>
            </select>
          </label>
        </div>

        <div className="mt-8 flex gap-3 overflow-x-auto pb-2">
          {[{ name: "All products", icon: "✦" }, ...categories].map(
            (category) => (
              <button
                key={category.name}
                onClick={() => {
                  setActiveCategory(category.name);
                  setVisibleCount(productsPerLoad);
                }}
                className={`shrink-0 rounded-full px-5 py-3 text-sm font-bold transition-colors ${activeCategory === category.name ? "bg-emerald-700 text-white" : "border border-slate-200 bg-white text-slate-600 hover:border-emerald-300 hover:text-emerald-700"}`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ),
          )}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <h2 className="text-2xl font-black text-slate-950">All products</h2>
          {/* <p className="text-sm text-slate-500">
            {visibleProducts.length} results
          </p> */}
        </div>

        {visibleProducts.length ? (
          <div
            key={`${activeCategory}-${search}-${sort}`}
            className="catalog-results mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {visibleProducts.map((product, index) => (
              <article
                key={product.name}
                className="catalog-card slow-card-hover cursor-pointer flex min-h-[455px] flex-col overflow-hidden rounded-2xl border-2 border-transparent bg-emerald-50 shadow-sm hover:border-emerald-500"
                style={{
                  animationDelay: `${(index % productsPerLoad) * 45}ms`,
                }}
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-56 w-full object-cover"
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src =
                        "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=700&q=85";
                    }}
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                    {product.category === "Vegetables" ||
                    product.name.includes("Organic")
                      ? "Organic"
                      : product.category}
                  </span>
                  <span className="absolute right-4 top-4 rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-700">
                    {product.discount}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold text-slate-950">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {product.desc}
                  </p>
                  <p className="mt-3 text-xs text-slate-500">
                    {product.farmer} ·{" "}
                    <span className="font-bold text-orange-600">
                      {product.rating} ★
                    </span>
                  </p>
                  <div className="mt-auto flex items-center justify-between gap-3 pt-6">
                    <p className="text-xl font-black text-slate-950">
                      {product.price}{" "}
                      <del className="text-sm font-normal text-slate-400">
                        {product.oldPrice}
                      </del>
                    </p>
                    <button className="rounded-full border border-emerald-700 px-4 py-2 text-sm font-bold text-emerald-700 hover:bg-emerald-700 hover:text-white">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="catalog-results mt-6 rounded-2xl bg-emerald-100 px-6 py-16 text-center shadow-sm">
            <p className="text-lg font-bold text-slate-900">
              No products found
            </p>
            <p className="mt-2 text-slate-500">
              Try another search or category.
            </p>
          </div>
        )}
        {(visibleProducts.length > 0 &&
          visibleProducts.length < filteredProducts.length) ||
        showTopButton ? (
          <div className="mt-10 flex items-center justify-between gap-4">
            {visibleProducts.length > 0 &&
            visibleProducts.length < filteredProducts.length ? (
              <button
                onClick={() =>
                  setVisibleCount((count) => count + productsPerLoad)
                }
                className="rounded-full bg-emerald-700 px-6 py-3 font-bold text-white shadow-md shadow-emerald-700/20 transition-colors hover:bg-emerald-800"
              >
                View More Products
              </button>
            ) : (
              <span />
            )}
            {showTopButton && (
              <button
                type="button"
                aria-label="Go to top"
                title="Go to top"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="ml-auto rounded-full border border-emerald-700 bg-emerald-50 px-5 py-3 font-bold text-emerald-800 shadow-sm transition-all hover:-translate-y-1 hover:bg-emerald-100"
              >
                Go to top ↑
              </button>
            )}
          </div>
        ) : null}
      </section>
      <Footer />
    </main>
  );
};

export default Products;
