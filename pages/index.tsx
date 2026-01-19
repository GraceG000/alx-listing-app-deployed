import axios from "axios";
import { useEffect, useState } from "react";
import PropertyCard from "@/components/PropertyCard";


export default function Home() {
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    const fectProperties = async () => {
       try{
       // Example with axios
const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/properties`);

        setProperties(response.data);
          }catch (error) {
            console.error("Error fetching properties:", error);
          }finally{
            setLoading (false);
          }
    };

    fectProperties();
  }, []);

  if (loading){
    return <p>Loading...</p>;
  }

  return(
    <div className="grid grid-cols-3 gap-4">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  )
}





























// // pages/index.tsx
// import React, { useState } from "react";
// import { PROPERTYLISTINGSAMPLE, BACKGROUND_IMAGE } from "@/constants";
// import Pill from "@/components/Pill";
// import PropertyCard from "@/components/PropertyCard";
// import type { PropertyProps } from "@/interfaces";

// const FILTERS = [
//   "Top Villa",
//   "Self Checkin",
//   "Beachfront",
//   "Pet Friendly",
//   "Pool",
//   "Mountain View",
//   "Luxury"
// ];

// export default function Home() {
//   const [activeFilter, setActiveFilter] = useState<string | null>(null);

//   const filteredProperties = PROPERTYLISTINGSAMPLE.filter((p: PropertyProps) => {
//     if (!activeFilter) return true;
//     const lower = activeFilter.toLowerCase();
//     return (
//       p.category.some((c) => c.toLowerCase().includes(lower)) ||
//       p.name.toLowerCase().includes(lower)
//     );
//   });

//   return (
//     <div>
//       {/* Hero */}
//       <section
//         className="h-64 md:h-96 bg-cover bg-center flex items-center"
//         style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}
//       >
//         <div className="container mx-auto px-4">
//           <div className="max-w-2xl bg-white/70 rounded p-6">
//             <h1 className="text-3xl md:text-4xl font-bold">Find your favorite place here!</h1>
//             <p className="mt-2 text-gray-700">
//               The best prices for over 2 million properties worldwide.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Filters */}
//       <section className="container mx-auto px-4 py-6">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//           <div className="flex flex-wrap gap-2">
//             {FILTERS.map((f) => (
//               <Pill
//                 key={f}
//                 label={f}
//                 active={activeFilter === f}
//                 onClick={() => setActiveFilter((s) => (s === f ? null : f))}
//               />
//             ))}
//           </div>

//           <div>
//             <input
//               className="border rounded-md py-2 px-3 w-64"
//               placeholder="Search properties by name or city"
//               onChange={(e) => {
//                 const v = e.target.value.trim();
//                 setActiveFilter(v === "" ? null : v);
//               }}
//             />
//           </div>
//         </div>
//       </section>

//       {/* Listings */}
//       <section className="container mx-auto px-4 pb-16">
//         <h2 className="text-2xl font-semibold mb-4">Available properties</h2>

//         {filteredProperties.length === 0 ? (
//           <p className="text-gray-600">No properties match your filters.</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredProperties.map((p) => (
//               <PropertyCard key={p.name} property={p} />
//             ))}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// }
