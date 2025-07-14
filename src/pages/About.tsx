import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Award, Clock, Leaf, Shield } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import traditionalMaking from "@/assets/traditional-making.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-warm">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-display font-bold text-foreground mb-6">
            Our Story
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Preserving the authentic flavors of Mithila tradition through generations of 
            culinary expertise and dedication to quality.
          </p>
        </div>

        {/* Main Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <Card className="p-8">
              <CardContent className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-terai-gold">
                  The Mithila Magic Legacy
                </h2>
                
                <p className="text-lg leading-relaxed">
                  Born in the heart of the Terai plains, Mithila Magic represents more than just pickles – 
                  we are the guardians of a culinary tradition that has been passed down through generations 
                  of skilled artisans who understood the art of preserving flavors.
                </p>

                <p className="text-lg leading-relaxed">
                  Our journey began in the traditional kitchens of Mithila, where our founder's grandmother 
                  shared the secrets of authentic pickle-making. Each recipe in our collection carries the 
                  essence of the fertile Terai soil, the warmth of mustard oil, and the perfect balance 
                  of spices that define true Mithila cuisine.
                </p>

                <p className="text-lg leading-relaxed">
                  Today, we continue this legacy by sourcing the finest ingredients from local Terai farms, 
                  maintaining traditional preparation methods, and ensuring that every jar of Mithila Magic 
                  pickle brings the authentic taste of our heritage to your table.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg overflow-hidden shadow-deep">
              <img
                src={traditionalMaking}
                alt="Traditional pickle making process"
                className="w-full h-full object-cover"
              />
            </div>
            
            <Card className="p-6">
              <CardContent className="text-center space-y-4">
                <h3 className="text-2xl font-semibold">Our Mission</h3>
                <p className="text-muted-foreground">
                  To preserve and share the authentic flavors of Mithila cuisine while supporting 
                  local farmers and maintaining the highest standards of quality and tradition.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-center mb-12">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-glow transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Authentic Tradition</h3>
                <p className="text-muted-foreground">
                  Every recipe follows time-honored methods passed down through generations of Mithila families.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-glow transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-spice rounded-full flex items-center justify-center">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Natural Ingredients</h3>
                <p className="text-muted-foreground">
                  We use only the finest natural ingredients sourced directly from Terai farms.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-glow transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-earth rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  Rigorous quality checks ensure every jar meets our exceptional standards.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-glow transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-terai-gold rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Community Support</h3>
                <p className="text-muted-foreground">
                  Supporting local farmers and preserving traditional livelihoods in the Terai region.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-glow transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-spice-saffron rounded-full flex items-center justify-center">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Time-Honored Process</h3>
                <p className="text-muted-foreground">
                  Patient preparation and aging processes that develop deep, complex flavors.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-glow transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-terai-terracotta rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Excellence</h3>
                <p className="text-muted-foreground">
                  Committed to delivering the finest Mithila pickles with uncompromising quality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Awards & Certifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-center mb-12">Awards & Certifications</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Badge className="bg-terai-gold text-lg p-3 mb-2">
                Food Safety Certified
              </Badge>
            </div>
            <div className="text-center">
              <Badge className="bg-harvest-green text-lg p-3 mb-2">
                Organic Certified
              </Badge>
            </div>
            <div className="text-center">
              <Badge className="bg-spice-saffron text-lg p-3 mb-2">
                Traditional Recipe Award
              </Badge>
            </div>
            <div className="text-center">
              <Badge className="bg-terai-terracotta text-lg p-3 mb-2">
                Best Regional Product
              </Badge>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <Card className="mb-16">
          <CardContent className="p-12">
            <h2 className="text-3xl font-display font-bold text-center mb-8">Our Traditional Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold">Sourcing</h3>
                <p className="text-sm text-muted-foreground">
                  Fresh ingredients sourced directly from trusted Terai farmers
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-spice rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold">Preparation</h3>
                <p className="text-sm text-muted-foreground">
                  Hand-cut vegetables and fruits prepared using traditional methods
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-earth rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold">Spicing</h3>
                <p className="text-sm text-muted-foreground">
                  Secret blend of spices mixed according to ancestral recipes
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-terai-gold rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="font-semibold">Aging</h3>
                <p className="text-sm text-muted-foreground">
                  Patient aging process to develop complex, authentic flavors
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="p-12 bg-gradient-hero">
            <CardContent className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-white">
                Experience the Magic of Authentic Mithila Pickles
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Join thousands of satisfied customers who have discovered the authentic taste of tradition.
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Shop Our Collection
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;