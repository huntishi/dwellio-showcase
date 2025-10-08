import { Link } from "react-router-dom";
import ImageCarousel from "@/components/ImageCarousel";
import Footer from "@/components/Footer";
import { Building2, Award, Users, TrendingUp, Bed, Bath, Maximize } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import aboutArchitecture from "@/assets/about-architecture.jpg";
import aboutInterior from "@/assets/about-interior.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">

      {/* Hero Carousel */}
      <div className="pt-16">
        <ImageCarousel />
      </div>

      {/* Our Properties Section */}
      <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Properties</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-6">
              Discover our exclusive collection of premium properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Property 1 Card */}
            <Link to="/property/1" className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-accent/20 hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={property1}
                    alt="Luxury Villa Property"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="inline-block px-4 py-1 bg-accent rounded-full text-sm font-semibold mb-4">
                    Featured
                  </div>
                  <h3 className="text-3xl font-bold mb-3 group-hover:text-accent transition-colors">
                    Luxury Villa Estate
                  </h3>
                  <p className="text-gray-200 mb-4 line-clamp-2">
                    Experience unparalleled luxury living in this magnificent estate featuring world-class amenities
                  </p>
                  <div className="flex items-center gap-6 text-sm">
                    <span className="flex items-center gap-2">
                      <Bed className="h-4 w-4 text-accent" />
                      4 Beds
                    </span>
                    <span className="flex items-center gap-2">
                      <Bath className="h-4 w-4 text-accent" />
                      3 Baths
                    </span>
                    <span className="flex items-center gap-2">
                      <Maximize className="h-4 w-4 text-accent" />
                      3500 sqft
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Property 2 Card */}
            <Link to="/property/2" className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-accent/20 hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={property2}
                    alt="Modern Penthouse Property"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="inline-block px-4 py-1 bg-accent rounded-full text-sm font-semibold mb-4">
                    Premium
                  </div>
                  <h3 className="text-3xl font-bold mb-3 group-hover:text-accent transition-colors">
                    Modern Penthouse
                  </h3>
                  <p className="text-gray-200 mb-4 line-clamp-2">
                    Sophisticated urban living with breathtaking city views and contemporary design excellence
                  </p>
                  <div className="flex items-center gap-6 text-sm">
                    <span className="flex items-center gap-2">
                      <Bed className="h-4 w-4 text-accent" />
                      3 Beds
                    </span>
                    <span className="flex items-center gap-2">
                      <Bath className="h-4 w-4 text-accent" />
                      2 Baths
                    </span>
                    <span className="flex items-center gap-2">
                      <Maximize className="h-4 w-4 text-accent" />
                      2800 sqft
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We pride ourselves on delivering exceptional residential and commercial properties that exceed expectations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Building2 className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Locations</h3>
              <p className="text-muted-foreground">Prime properties in sought-after areas</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Award className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Award Winning</h3>
              <p className="text-muted-foreground">Recognized for excellence and quality</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Users className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-muted-foreground">Professional and dedicated staff</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Great Investment</h3>
              <p className="text-muted-foreground">Properties that appreciate in value</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">About Us</h2>
              <p className="text-lg text-muted-foreground mb-4">
                With over 20 years of experience in the real estate industry, we have established ourselves as a trusted name in property development and sales.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our commitment to quality, transparency, and customer satisfaction has helped hundreds of families find their dream homes.
              </p>
              <p className="text-lg text-muted-foreground">
                We believe in building not just properties, but communities where people can thrive and create lasting memories.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src={aboutArchitecture}
                alt="Modern architecture"
                className="rounded-lg shadow-lg"
              />
              <img
                src={aboutInterior}
                alt="Luxury interior"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
