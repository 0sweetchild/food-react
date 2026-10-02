
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";

export default function ProductDetails() {
  const [productData, setProductData] = useState({});

  const URL = "https://jsonplaceholder.typicode.com/posts";

  const data = useLoaderData();

  function fetchSingleProductData() {
    try {
      fetch(`${URL}/${data.params.id}`)
        .then((res) => res.json())
        .then((data) => setProductData(data));
    } catch (error) {
      console.error(error);
    }
  }

  console.log(productData);

  useEffect(() => {
    fetchSingleProductData();
  }, []);

  return (
    <section className="min-h-screen bg-gray-50 p-10">

      <div className="mx-auto max-w-3xl rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

        {/* Back Button */}
        <div className="mb-5">
          <Link to="/">
            <button className="rounded-lg bg-gray-200 px-4 py-2 hover:bg-gray-300">
              Back
            </button>
          </Link>
        </div>

        {/* Product Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {productData.title}
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Product ID: {productData.id}
          </p>
        </div>

        {/* Product Information */}
        <div className="grid gap-6 sm:grid-cols-2">

          <div>
            <p className="text-sm font-medium text-gray-500">
              Product ID
            </p>

            <p className="mt-1 text-gray-900">
              {productData.id}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-500">
              Category
            </p>

            <p className="mt-1 text-gray-900">
              Food Product
            </p>
          </div>

        </div>

        {/* Description */}
        <div className="my-6 border-t border-gray-200" />

        <div>
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Description
          </h3>

          <p className="leading-7 text-gray-600">
            {productData.body}
          </p>
        </div>

        {/* Demo Price */}
        <div className="my-6 border-t border-gray-200" />

        <div>
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Product Information
          </h3>

          <div className="grid gap-4 sm:grid-cols-2">

            <div>
              <p className="text-sm font-medium text-gray-500">
                Price
              </p>

              <p className="mt-1 text-xl font-bold text-green-600">
                Rs. {productData.id ? productData.id * 50 : ""}
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500">
                Availability
              </p>

              <p className="mt-1 font-medium text-green-600">
                Available
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
