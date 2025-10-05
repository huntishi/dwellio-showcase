import ImageCarousel from "@/components/ImageCarousel";
import Footer from "@/components/Footer";
import { Building2, Award, Users, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">

      {/* Hero Carousel */}
      <div className="pt-16">
        <ImageCarousel />
      </div>

      {/* About Project Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">About Our Projects</h2>
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
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop"
                alt="Modern architecture"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop"
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
