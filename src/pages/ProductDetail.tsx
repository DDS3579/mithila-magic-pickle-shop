import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ShoppingCart, Heart, Share2, Star, Shield, Leaf, Clock } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Import product images
import mangoPickle from "@/assets/mango-pickle.jpg";
import limePickle from "@/assets/lime-pickle.jpg";
import mixedPickle from "@/assets/mixed-pickle.jpg";

const productData = {
  1: {
    id: 1,
    name: "Traditional Mango Pickle",
    description: "Our signature mango pickle is made using the finest raw mangoes sourced from Terai orchards, combined with authentic Mithila spices passed down through generations.",
    longDescription: "This exquisite mango pickle represents the pinnacle of Mithila culinary tradition. Each jar contains carefully selected raw mangoes that are hand-cut and mixed with a secret blend of mustard seeds, fenugreek, turmeric, red chili powder, and pure mustard oil. The preparation follows traditional methods that have been perfected over centuries in the Terai region.",
    price: 450,
    originalPrice: 500,
    images: [mangoPickle, mangoPickle, mangoPickle],
    rating: 4.8,
    reviews: 124,
    inStock: true,
    ingredients: ["Raw Mangoes", "Mustard Oil", "Mustard Seeds", "Fenugreek", "Turmeric", "Red Chili Powder", "Salt", "Asafoetida"],
    nutritionalInfo: {
      calories: "45 per serving",
      fat: "3g",
      carbs: "4g",
      protein: "1g",
      sodium: "280mg"
    },
    servingSize: "1 tablespoon (15g)",
    shelfLife: "12 months",
    weight: "500g"
  }
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = productData[Number(id) as keyof typeof productData];
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const { addToCart } = useCart();
  const { toast } = useToast();

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-warm flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Button asChild>
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        weight: product.weight
      });
    }
    toast({
      title: "Added to cart!",
      description: `${quantity} x ${product.name} added to your cart.`,
    });
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleShare = () => {
    const productUrl = window.location.href;
    navigator.clipboard.writeText(productUrl);
    toast({
      title: "Link copied!",
      description: "Product link has been copied to your clipboard.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-warm">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/products">
              <ArrowLeft className="h-4 w-4" />
              Back to Products
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden shadow-deep">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? "border-primary shadow-glow" : "border-transparent"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-display font-bold mb-4">{product.name}</h1>
              <p className="text-lg text-muted-foreground mb-6">{product.description}</p>
              
              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) ? "fill-terai-gold text-terai-gold" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                  <span className="ml-2 font-medium">{product.rating}</span>
                </div>
                <span className="text-muted-foreground">({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-terai-gold">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
                {product.originalPrice && (
                  <Badge className="bg-destructive">
                    Save ₹{product.originalPrice - product.price}
                  </Badge>
                )}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="flex flex-col items-center text-center p-3 rounded-lg bg-card">
                <Leaf className="h-6 w-6 text-harvest-green mb-2" />
                <span className="text-sm font-medium">Natural</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 rounded-lg bg-card">
                <Shield className="h-6 w-6 text-terai-gold mb-2" />
                <span className="text-sm font-medium">No Preservatives</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 rounded-lg bg-card">
                <Clock className="h-6 w-6 text-spice-saffron mb-2" />
                <span className="text-sm font-medium">Traditional Method</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 rounded-lg bg-card">
                <Heart className="h-6 w-6 text-terai-terracotta mb-2" />
                <span className="text-sm font-medium">Handcrafted</span>
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="font-medium">Quantity:</label>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button 
                  className="flex-1" 
                  size="lg" 
                  variant="cart"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline" onClick={handleLike}>
                  <Heart className={`h-5 w-5 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                </Button>
                <Button size="lg" variant="outline" onClick={handleShare}>
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Product Details */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold text-lg">Product Details</h3>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Weight:</span> {product.weight}
                  </div>
                  <div>
                    <span className="font-medium">Shelf Life:</span> {product.shelfLife}
                  </div>
                  <div>
                    <span className="font-medium">Serving Size:</span> {product.servingSize}
                  </div>
                  <div>
                    <span className="font-medium">Stock:</span> {product.inStock ? "In Stock" : "Out of Stock"}
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium mb-2">Ingredients:</h4>
                  <p className="text-sm text-muted-foreground">
                    {product.ingredients.join(", ")}
                  </p>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium mb-2">Nutritional Information (per serving):</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>Calories: {product.nutritionalInfo.calories}</div>
                    <div>Fat: {product.nutritionalInfo.fat}</div>
                    <div>Carbs: {product.nutritionalInfo.carbs}</div>
                    <div>Protein: {product.nutritionalInfo.protein}</div>
                    <div>Sodium: {product.nutritionalInfo.sodium}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Long Description */}
        <div className="mt-12">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-display font-bold mb-6">About This Pickle</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {product.longDescription}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;