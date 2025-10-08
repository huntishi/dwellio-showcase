import Footer from "@/components/Footer";
import { Target, Eye, Award } from "lucide-react";
import aboutBuilding from "@/assets/about-building.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl">Building Dreams, Creating Communities</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2000, Premium Properties has grown from a small local developer to one of the most respected names in real estate. Our journey has been marked by a commitment to excellence, innovation, and customer satisfaction.
              </p>
              <p className="text-muted-foreground mb-4">
                We believe that a home is more than just a physical structure - it's a place where memories are made, families grow, and dreams come true. This philosophy drives everything we do.
              </p>
              <p className="text-muted-foreground">
                With over 50 successful projects and thousands of happy homeowners, we continue to set new standards in the real estate industry.
              </p>
            </div>
            <div>
              <img
                src={aboutBuilding}
                alt="Modern building"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Target className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide exceptional properties that exceed expectations and create lasting value for our customers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Eye className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the most trusted and innovative real estate developer, transforming spaces into thriving communities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Award className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">Our Values</h3>
              <p className="text-muted-foreground">
                Integrity, quality, transparency, and customer satisfaction guide every decision we make.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-primary text-white rounded-lg p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-accent mb-2">20+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">50+</div>
                <div className="text-sm">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">5000+</div>
                <div className="text-sm">Happy Families</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">15+</div>
                <div className="text-sm">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
