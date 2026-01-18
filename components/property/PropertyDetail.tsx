import ReviewSection from "@/components/property/ReviewSection";

interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  image: string;
  amenities?: string[];
}

interface PropertyDetailProps {
  property: Property;
}

const PropertyDetail = ({ property }: PropertyDetailProps) => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Property Image */}
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-96 object-cover rounded-lg"
      />

      {/* Property Info */}
      <div className="mt-6">
        <h1 className="text-3xl font-bold">{property.title}</h1>
        <p className="text-gray-600">{property.location}</p>

        <p className="mt-4 text-lg">{property.description}</p>

        <p className="mt-4 text-xl font-semibold">
          ${property.price} <span className="text-base">/ night</span>
        </p>
      </div>

      {/* Amenities */}
      {property.amenities && property.amenities.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Amenities</h2>
          <ul className="list-disc ml-6 mt-2">
            {property.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Reviews */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
        <ReviewSection propertyId={property.id} />
      </div>
    </div>
  );
};

export default PropertyDetail;
