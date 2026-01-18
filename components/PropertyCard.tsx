interface PropertyCardProps {
  property: {
    id: string;
    title: string;
    price: number;
    location: string;
    image: string;
  };
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <div className="border rounded p-4">
      <img src={property.image} alt={property.title} />
      <h3>{property.title}</h3>
      <p>{property.location}</p>
      <p>${property.price} / night</p>
    </div>
  );
};

export default PropertyCard;
