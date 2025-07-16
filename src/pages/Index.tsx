import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingCart, 
  Star, 
  ArrowRight, 
  Leaf, 
  Shield, 
  Clock, 
  Heart,
  Award,
  Users,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Import images
import heroPickles from "@/assets/hero-pickles.jpg";
import mangoPickle from "@/assets/mango-pickle.jpg";
import limePickle from "@/assets/lime-pickle.jpg";
import mixedPickle from "@/assets/mixed-pickle.jpg";
import traditionalMaking from "@/assets/traditional-making.jpg";

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const featuredProducts = [
    {
      id: 1,
      name: "Traditional Mango Pickle",
      description: "Our signature recipe with the finest Terai mangoes",
      price: 450,
      originalPrice: 500,
      image: mangoPickle,
      rating: 4.8,
      reviews: 124,
      badge: "Best Seller",
      weight: "500g"
    },
    {
      id: 2,
      name: "Zesty Lime Pickle",
      description: "Tangy and spicy lime pickle with authentic spices",
      price: 380,
      originalPrice: 420,
      image: limePickle,
      rating: 4.7,
      reviews: 98,
      badge: "Limited Edition",
      weight: "500g"
    },
    {
      id: 3,
      name: "Mixed Vegetable Pickle",
      description: "A delightful medley of seasonal vegetables",
      price: 520,
      originalPrice: null,
      image: mixedPickle,
      rating: 4.9,
      reviews: 156,
      badge: "Chef's Choice",
      weight: "500g"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Kathmandu",
      rating: 5,
      comment: "The mango pickle tastes exactly like my grandmother used to make! Authentic flavors that bring back childhood memories.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b0e1?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Rajesh Thakur",
      location: "Pokhara",
      rating: 5,
      comment: "Exceptional quality and taste. The traditional preparation method really shows in every bite. Highly recommended!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Anita Devi",
      location: "Biratnagar",
      rating: 5,
      comment: "Best pickles I've ever tasted! The natural ingredients and authentic Mithila recipes make all the difference.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      weight: product.weight
    });
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-warm">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroPickles}
            alt="Traditional Mithila Pickles"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Badge className="mb-6 bg-terai-gold text-primary-foreground text-lg p-3">
            Authentic Terai Tradition Since 1985
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            <span className="text-terai-gold">Mithila Magic</span><br />
            Authentic Pickles
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
            Experience the rich flavors of traditional Mithila pickles, handcrafted with 
            time-honored recipes and the finest ingredients from the fertile Terai plains.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="xl" variant="hero" asChild>
              <Link to="/products">
                <ShoppingCart className="h-6 w-6" />
                Shop Now
              </Link>
            </Button>
            <Button size="xl" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
              <Link to="/about">
                Learn Our Story
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <Leaf className="h-8 w-8 text-harvest-green mx-auto mb-2" />
              <span className="text-sm font-medium">100% Natural</span>
            </div>
            <div className="text-center">
              <Shield className="h-8 w-8 text-terai-gold mx-auto mb-2" />
              <span className="text-sm font-medium">No Preservatives</span>
            </div>
            <div className="text-center">
              <Clock className="h-8 w-8 text-spice-saffron mx-auto mb-2" />
              <span className="text-sm font-medium">Traditional Method</span>
            </div>
            <div className="text-center">
              <Heart className="h-8 w-8 text-terai-terracotta mx-auto mb-2" />
              <span className="text-sm font-medium">Handcrafted</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-spice-saffron text-primary-foreground">
              Bestsellers
            </Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Our Signature Collection
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our most loved pickles, each crafted with authentic Mithila recipes 
              passed down through generations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-glow transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  <Badge className={`absolute top-4 left-4 ${
                    product.badge === "Best Seller" ? "bg-terai-gold" : 
                    product.badge === "Limited Edition" ? "bg-spice-saffron" : 
                    "bg-harvest-green"
                  }`}>
                    {product.badge}
                  </Badge>

                  <Button
                    size="icon"
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    variant="secondary"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-terai-gold text-terai-gold" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-terai-gold">₹{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">
                          ₹{product.originalPrice}
                        </span>
                      )}
                    </div>
                    <Button 
                      variant="cart" 
                      size="sm"
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingCart className="h-4 w-4" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/products">
                View All Products
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-earth-brown text-white">
                Our Heritage
              </Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold">
                Preserving <span className="text-terai-gold">Mithila Tradition</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For generations, the families of Mithila have perfected the art of pickle-making. 
                Our recipes carry the essence of the fertile Terai soil, traditional spices, 
                and time-honored techniques that create flavors unlike anywhere else in the world.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each jar of Mithila Magic pickle is a testament to our commitment to authenticity, 
                quality, and the preservation of cultural heritage through food.
              </p>
              
              <div className="grid grid-cols-3 gap-6 py-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-terai-gold mb-1">39+</div>
                  <div className="text-sm text-muted-foreground">Years of Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-terai-gold mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">Pickle Varieties</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-terai-gold mb-1">5000+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
              </div>
              
              <Button size="lg" variant="spice" asChild>
                <Link to="/about">
                  Learn Our Story
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <img
                src={traditionalMaking}
                alt="Traditional pickle making process"
                className="w-full rounded-lg shadow-deep"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-hero rounded-full flex items-center justify-center shadow-glow">
                <div className="text-center text-white">
                  <Award className="h-8 w-8 mx-auto mb-1" />
                  <div className="text-xs font-semibold">Award Winning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-harvest-green text-white">
              Customer Love
            </Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of satisfied customers who have discovered the authentic taste of Mithila tradition.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 text-center">
              <CardContent className="space-y-6">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-terai-gold text-terai-gold" />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl text-muted-foreground italic leading-relaxed">
                  "{testimonials[currentTestimonial].comment}"
                </blockquote>
                
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-lg">{testimonials[currentTestimonial].name}</div>
                    <div className="text-muted-foreground">{testimonials[currentTestimonial].location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <Button
              size="icon"
              variant="outline"
              className="absolute left-4 top-1/2 transform -translate-y-1/2"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-terai-gold" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Experience Authentic Mithila Flavors?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of satisfied customers and taste the difference that authentic, 
              handcrafted pickles make. Order now and bring the magic of Mithila to your table.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="xl" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/products">
                  <ShoppingCart className="h-6 w-6" />
                  Shop Our Collection
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Leaf className="h-5 w-5" />
                <span>100% Natural Ingredients</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <span>No Artificial Preservatives</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Trusted by 5000+ Families</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
