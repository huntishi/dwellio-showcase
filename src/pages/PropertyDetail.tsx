import { useParams } from "react-router-dom";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import { MapPin, Home, Maximize, Bed, Bath, Car } from "lucide-react";

const PropertyDetail = () => {
  const { id } = useParams();

  // Mock data - in real app, fetch based on id
  const property = {
    id: id,
    name: `Luxury Villa ${id}`,
    location: "Downtown District, Premium Location",
    price: "$1,250,000",
    overview: "This stunning luxury villa offers the perfect blend of modern design and comfortable living. Situated in a prime location with breathtaking views, this property features high-end finishes and spacious layouts perfect for family living.",
    specifications: {
      bedrooms: 4,
      bathrooms: 3,
      area: "3,500 sq ft",
      parking: 2,
      floors: 2,
      yearBuilt: 2023,
    },
    amenities: [
      "Swimming Pool",
      "Gym & Fitness Center",
      "24/7 Security",
      "Power Backup",
      "Landscaped Gardens",
      "Children's Play Area",
      "Clubhouse",
      "Elevator",
    ],
    registration: {
      rera: "RERA123456789",
      developer: "Premium Properties Ltd.",
      possession: "Ready to Move",
      status: "Approved",
    },
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop",
    ],
  };

  return (
    <div className="min-h-screen">
      <div className="pt-16">
        {/* Hero Section */}
        <div className="relative h-[400px]">
          <img
            src={property.images[0]}
            alt={property.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{property.name}</h1>
            <div className="flex items-center gap-2 text-lg">
              <MapPin className="h-5 w-5" />
              <span>{property.location}</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-primary mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">{property.overview}</p>
                <div className="text-3xl font-bold text-accent">{property.price}</div>
              </section>

              {/* Specifications */}
              <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-primary mb-4">Specifications</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3">
                    <Bed className="h-6 w-6 text-accent" />
                    <div>
                      <div className="font-semibold">{property.specifications.bedrooms}</div>
                      <div className="text-sm text-muted-foreground">Bedrooms</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Bath className="h-6 w-6 text-accent" />
                    <div>
                      <div className="font-semibold">{property.specifications.bathrooms}</div>
                      <div className="text-sm text-muted-foreground">Bathrooms</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Maximize className="h-6 w-6 text-accent" />
                    <div>
                      <div className="font-semibold">{property.specifications.area}</div>
                      <div className="text-sm text-muted-foreground">Area</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Car className="h-6 w-6 text-accent" />
                    <div>
                      <div className="font-semibold">{property.specifications.parking}</div>
                      <div className="text-sm text-muted-foreground">Parking</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Home className="h-6 w-6 text-accent" />
                    <div>
                      <div className="font-semibold">{property.specifications.floors}</div>
                      <div className="text-sm text-muted-foreground">Floors</div>
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">{property.specifications.yearBuilt}</div>
                    <div className="text-sm text-muted-foreground">Year Built</div>
                  </div>
                </div>
              </section>

              {/* Amenities */}
              <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-primary mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-accent rounded-full" />
                      <span className="text-muted-foreground">{amenity}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Gallery */}
              <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-primary mb-4">Gallery</h2>
                <Gallery images={property.images} />
              </section>

              {/* Registration Information */}
              <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-primary mb-4">Registration Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">RERA Number</div>
                    <div className="font-semibold">{property.registration.rera}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Developer</div>
                    <div className="font-semibold">{property.registration.developer}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Possession Status</div>
                    <div className="font-semibold">{property.registration.possession}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Approval Status</div>
                    <div className="font-semibold text-green-600">{property.registration.status}</div>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar - Location Map */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
                <h2 className="text-2xl font-bold text-primary mb-4">Location</h2>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2382688092304!2d77.37833731508045!3d28.627850682421856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1635234567890!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-muted-foreground mb-2">Interested in this property?</p>
                  <button className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                    Schedule a Visit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
