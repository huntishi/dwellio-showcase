import { useParams } from "react-router-dom";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import { MapPin, Home, Maximize, Bed, Bath, Car, CalendarCheck } from "lucide-react";
import managarHome from "@/assets/managar/mn3.jpg";
import managarGal1 from "@/assets/managar/Layout.jpg";
import managarGal2 from "@/assets/managar/location.jpg";
import managarGal3 from "@/assets/managar/plot_details.jpg";
import managarGal4 from "@/assets/managar/mc.jpg";
import managarGal5 from "@/assets/managar/mcs1.jpg";
import managarGal6 from "@/assets/managar/mcs2.jpg";
import managarGal7 from "@/assets/managar/mcs3.jpg";
import managarGal8 from "@/assets/managar/mn1.jpg";
import managarGal9 from "@/assets/managar/mn2.jpg";
import managarGal10 from "@/assets/managar/mn3.jpg";
import tccHome from "@/assets/tcc/main gate-min.jpg";
import tccGal1 from "@/assets/tcc/amphi-min.jpg";
import tccGal2 from "@/assets/tcc/center garden-min.jpg";
import tccGal3 from "@/assets/tcc/club house.jpg";
import tccGal4 from "@/assets/tcc/club house-min.jpg";
import tccGal5 from "@/assets/tcc/club nv-min.jpg";
import tccGal6 from "@/assets/tcc/front garden sitting nv-min.jpg";
import tccGal7 from "@/assets/tcc/front garden top-min.jpg";
import tccGal8 from "@/assets/tcc/garden center-min.jpg";
import tccGal9 from "@/assets/tcc/garden entrance-min.jpg";
import tccGal10 from "@/assets/tcc/garden top-min.jpg";
import tccGal11 from "@/assets/tcc/gazibo-min.jpg";
import tccGal12 from "@/assets/tcc/kids play area-min.jpg";
import tccGal13 from "@/assets/tcc/kids play1.jpg";
import tccGal14 from "@/assets/tcc/kids play2.jpg";
import tccGal15 from "@/assets/tcc/main gate nv-min.jpg";
import tccGal16 from "@/assets/tcc/open gym-min.jpg";
import tccGal17 from "@/assets/tcc/overhead tank-min.jpg";
import tccGal18 from "@/assets/tcc/photo frame-min.jpg";
import tccGal19 from "@/assets/tcc/play court-min.jpg";
import tccGal20 from "@/assets/tcc/temple-min.jpg";

// Property data
const propertiesData = {
  "1": {
    id: "1",
    name: "Ma Nagar Colony",
    location: "Behind of deen dayal Purram Phase-I TV Tower road, Bade attar mula Raigarh, Chattisgarh - 496001",
    price: "",
    overview: "This stunning luxury plots offers the perfect blend of modern design and comfortable living. Situated in a prime location with breathtaking views, this property features high-end finishes and spacious layouts perfect for family living. The villa boasts contemporary architecture with large windows that flood the interiors with natural light.",
    specifications: {
      bedrooms: "Vitrified Tiles",
      bathrooms: 2,
      area: "2,000 - 8,250 sq ft",
      parking: 1,
      floors: 17,
      yearBuilt: 2020,
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
      rera: "PCGRERA170919001041",
      developer: "Haldhar Chaudhary",
      possession: "Ready to Move",
      status: "Approved",
    },
    images: [
      managarHome,
      managarGal1,
      managarGal2,
      managarGal3,
      managarGal4,
      managarGal5,
      managarGal6,
      managarGal7,
      managarGal8,
      managarGal9,
      managarGal10
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1851.2312585346901!2d83.41008771210912!3d21.878258358764796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a27250043573761%3A0x1e38323b540853bb!2sMaa%20Nagar%20Colony!5e0!3m2!1sen!2sin!4v1759977919229!5m2!1sen!2sin",
  },
  "2": {
    id: "2",
    name: "Tiyansh Capital City",
    location: "NH-49, BEHIND OF TRANSPROT NAGAR AMLIBHOUNA, Raigarh, Chattisgarh - 496001",
    price: "",
    overview: "Experience urban luxury in this beautifully designed modern apartment. Located in the heart of the city with stunning park views, this residence combines style, comfort, and convenience. Features premium finishes throughout, with an open floor plan that maximizes space and light. Perfect for professionals and small families seeking a sophisticated city lifestyle.",
    specifications: {
      bedrooms: 2,
      bathrooms: 2,
      area: "2,200 sq ft",
      parking: 1,
      floors: 1,
      yearBuilt: 2024,
    },
    amenities: [
      "Rooftop Terrace",
      "Modern Gym",
      "Concierge Service",
      "Smart Home System",
      "Underground Parking",
      "Infinity Pool",
      "Co-working Space",
      "Pet-Friendly Area",
    ],
    registration: {
      rera: "PCGRERA130225001880, PCGRERA301024001844",
      developer: "Haldhar Chaudhary",
      possession: "Under Construction - Dec 2025",
      status: "Approved",
    },
    images: [
      tccHome,
      tccGal1,
      tccGal2,
      tccGal3,
      tccGal4,
      tccGal5,
      tccGal6,
      tccGal7,
      tccGal8,
      tccGal9,
      tccGal10,
      tccGal11,
      tccGal12,
      tccGal13,
      tccGal14,
      tccGal15,
      tccGal16,
      tccGal17,
      tccGal18,
      tccGal19,
      tccGal20
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29615.724821960364!2d83.35891431083986!3d21.897400300000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a27256e458dd22d%3A0x37d54d412d1cbaf9!2sTransport%20Nagar%2C%20Raigarh!5e0!3m2!1sen!2sin!4v1759978023466!5m2!1sen!2sin",
  },
};

const PropertyDetail = () => {
  const { id } = useParams();

  // Get property data based on ID
  const property = propertiesData[id as keyof typeof propertiesData];

  // If property not found, show error
  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Property Not Found</h1>
          <p className="text-muted-foreground">The property you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

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
                      <div className="text-sm text-muted-foreground">Floors/Plots</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <CalendarCheck className="h-6 w-6 text-accent" />
                    <div>
                      <div className="font-semibold">{property.specifications.yearBuilt}</div>
                      <div className="text-sm text-muted-foreground">Year Built</div>
                    </div>
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
                    src={property.mapUrl}
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
