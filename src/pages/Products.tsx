import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Filter, ShoppingCart, Star, Eye, Heart, Share2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Import product images
import mangoPickle from "@/assets/mango-pickle.jpg";
import limePickle from "@/assets/lime-pickle.jpg";
import mixedPickle from "@/assets/mixed-pickle.jpg";

const products = [
  {
    id: 1,
    name: "Traditional Mango Pickle",
    description: "Handcrafted with authentic Terai spices and raw mangoes",
    price: 450,
    originalPrice: 500,
    image: mangoPickle,
    rating: 4.8,
    reviews: 124,
    category: "fruit",
    inStock: true,
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Zesty Lime Pickle",
    description: "Traditional lime pickle with mustard oil and secret spices",
    price: 380,
    originalPrice: 420,
    image: limePickle,
    rating: 4.7,
    reviews: 98,
    category: "fruit",
    inStock: true,
    badge: "Limited Edition"
  },
  {
    id: 3,
    name: "Mixed Vegetable Pickle",
    description: "A delightful mix of seasonal vegetables in aromatic spices",
    price: 520,
    originalPrice: null,
    image: mixedPickle,
    rating: 4.9,
    reviews: 156,
    category: "vegetable",
    inStock: false,
    badge: "Sold Out"
  }
];

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [likedProducts, setLikedProducts] = useState<number[]>([]);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleLike = (productId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleShare = (productId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const productUrl = `${window.location.origin}/products/${productId}`;
    navigator.clipboard.writeText(productUrl);
    toast({
      title: "Link copied!",
      description: "Product link has been copied to your clipboard.",
    });
  };

  const handleProductClick = (productId: number) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-warm">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">
            Our Authentic Pickle Collection
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the rich flavors of traditional Mithila pickles, handcrafted with love and time-honored recipes.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search pickles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
            >
              All
            </Button>
            <Button
              variant={selectedCategory === "fruit" ? "default" : "outline"}
              onClick={() => setSelectedCategory("fruit")}
            >
              Fruit
            </Button>
            <Button
              variant={selectedCategory === "vegetable" ? "default" : "outline"}
              onClick={() => setSelectedCategory("vegetable")}
            >
              Vegetable
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-fade-in cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badge */}
                {product.badge && (
                  <Badge 
                    className={`absolute top-4 left-4 ${
                      product.badge === "Sold Out" ? "bg-destructive" : 
                      product.badge === "Best Seller" ? "bg-terai-gold" : 
                      "bg-spice-saffron"
                    }`}
                  >
                    {product.badge}
                  </Badge>
                )}

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                  <Button 
                    size="icon" 
                    variant="secondary" 
                    className="h-8 w-8"
                    onClick={(e) => handleLike(product.id, e)}
                  >
                    <Heart className={`h-4 w-4 ${likedProducts.includes(product.id) ? 'fill-red-500 text-red-500' : ''}`} />
                  </Button>
                  <Button 
                    size="icon" 
                    variant="secondary" 
                    className="h-8 w-8"
                    onClick={(e) => handleShare(product.id, e)}
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button 
                    size="icon" 
                    variant="secondary" 
                    className="h-8 w-8"
                    asChild
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Link to={`/products/${product.id}`}>
                      <Eye className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-terai-gold text-terai-gold" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-terai-gold">₹{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      ₹{product.originalPrice}
                    </span>
                  )}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 flex gap-2">
                <Button
                  className="flex-1"
                  variant={product.inStock ? "cart" : "outline"}
                  disabled={!product.inStock}
                  onClick={() => {
                    if (product.inStock) {
                      addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        weight: "500g"
                      });
                      toast({
                        title: "Added to Cart!",
                        description: `${product.name} has been added to your cart.`,
                      });
                    }
                  }}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {product.inStock ? "Add to Cart" : "Notify When Available"}
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link to={`/products/${product.id}`}>
                    <Eye className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold mb-4">No products found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search criteria or browse all products.
            </p>
            <Button onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}>
              Show All Products
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Products;