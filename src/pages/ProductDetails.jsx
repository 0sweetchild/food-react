
// import { useEffect, useState } from "react";
// import { Link, useLoaderData } from "react-router";
// import {
//   ArrowLeft,
//   ShoppingCart,
//   Star,
//   Check,
// } from "lucide-react";

// export default function ProductDetails() {
//   const [productData, setProductData] = useState({});

//   const URL = "https://jsonplaceholder.typicode.com/posts";

//   const data = useLoaderData();

//   function fetchSingleProductData() {
//     fetch(`${URL}/${data.params.id}`)
//       .then((res) => res.json())
//       .then((data) => setProductData(data))
//       .catch((error) => console.error(error));
//   }

//   useEffect(() => {
//     fetchSingleProductData();
//   }, []);

//   return (
//     <section className="min-h-screen bg-[#f7f8f4] px-6 py-10">

//       <div className="mx-auto max-w-6xl">

//         {/* Back Button */}
//         <Link
//           to="/"
//           className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-green-600"
//         >
//           <ArrowLeft size={18} />
//           Back to products
//         </Link>

//         {/* Product */}
//         <div className="grid overflow-hidden rounded-3xl bg-white shadow-sm md:grid-cols-2">

//           {/* Product Image */}
//           <div className="flex min-h-[400px] items-center justify-center bg-green-50 p-10">

//             <div className="flex h-72 w-72 items-center justify-center rounded-full bg-white text-8xl shadow-sm">
//               🍎
//             </div>

//           </div>

//           {/* Product Information */}
//           <div className="p-8 md:p-12">

//             <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
//               Fresh Food
//             </span>

//             <h1 className="mt-5 text-3xl font-bold capitalize text-gray-900 md:text-4xl">
//               {productData.title}
//             </h1>

//             {/* Rating */}
//             <div className="mt-4 flex items-center gap-2">

//               <div className="flex items-center gap-1 text-yellow-500">
//                 <Star size={18} fill="currentColor" />
//                 <Star size={18} fill="currentColor" />
//                 <Star size={18} fill="currentColor" />
//                 <Star size={18} fill="currentColor" />
//                 <Star size={18} fill="currentColor" />
//               </div>

//               <span className="text-sm text-gray-500">
//                 4.8 / 5
//               </span>

//             </div>

//             {/* Description */}
//             <p className="mt-6 leading-7 text-gray-600">
//               {productData.body}
//             </p>

//             <div className="my-7 border-t border-gray-100" />

//             {/* Price */}
//             <div className="flex items-end justify-between">

//               <div>
//                 <p className="text-sm text-gray-500">
//                   Price
//                 </p>

//                 <p className="text-3xl font-bold text-green-600">
//                   Rs. {productData.id ? productData.id * 50 : ""}
//                 </p>
//               </div>

//               <p className="text-sm font-medium text-green-600">
//                 In Stock
//               </p>

//             </div>

//             {/* Cart Button */}
//             <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-green-600 px-6 py-4 font-semibold text-white transition hover:bg-green-700">
//               <ShoppingCart size={20} />
//               Add to Cart
//             </button>

//             {/* Benefits */}
//             <div className="mt-8 grid gap-3 sm:grid-cols-2">

//               <div className="flex items-center gap-2 text-sm text-gray-600">
//                 <Check size={17} className="text-green-600" />
//                 Fresh products
//               </div>

//               <div className="flex items-center gap-2 text-sm text-gray-600">
//                 <Check size={17} className="text-green-600" />
//                 Fast delivery
//               </div>

//               <div className="flex items-center gap-2 text-sm text-gray-600">
//                 <Check size={17} className="text-green-600" />
//                 Quality checked
//               </div>

//               <div className="flex items-center gap-2 text-sm text-gray-600">
//                 <Check size={17} className="text-green-600" />
//                 Secure payment
//               </div>

//             </div>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }
