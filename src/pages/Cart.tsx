import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Trash2, Plus, Minus, ShoppingCart, MessageCircle, Truck, Shield } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Import product images
import mangoPickle from "@/assets/mango-pickle.jpg";
import limePickle from "@/assets/lime-pickle.jpg";
import mixedPickle from "@/assets/mixed-pickle.jpg";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Traditional Mango Pickle",
      price: 450,
      quantity: 2,
      image: mangoPickle,
      weight: "500g"
    },
    {
      id: 2,
      name: "Zesty Lime Pickle",
      price: 380,
      quantity: 1,
      image: limePickle,
      weight: "500g"
    }
  ]);

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    address: "",
    landmark: "",
    specialInstructions: ""
  });

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = subtotal >= 1500 ? 0 : 100;
  const total = subtotal + deliveryFee;

  const handleCheckout = () => {
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) {
      alert("Please fill in all required delivery information.");
      return;
    }

    // Create WhatsApp order message
    const orderDetails = cartItems.map(item => 
      `• ${item.name} (${item.weight}) - Qty: ${item.quantity} - ₹${item.price * item.quantity}`
    ).join('\n');

    const message = `*🥒 New Order from Mithila Magic Website*

*Customer Details:*
Name: ${customerInfo.name}
Phone: ${customerInfo.phone}

*Delivery Address:*
${customerInfo.address}
${customerInfo.landmark ? `Landmark: ${customerInfo.landmark}` : ''}

*Order Details:*
${orderDetails}

*Order Summary:*
Subtotal: ₹${subtotal}
Delivery Fee: ₹${deliveryFee}
*Total Amount: ₹${total}*

${customerInfo.specialInstructions ? `*Special Instructions:*\n${customerInfo.specialInstructions}` : ''}

---
Thank you for choosing Mithila Magic! 🙏
Please confirm this order and share payment details.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/9779800000000?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-warm">
        <Navigation />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <ShoppingCart className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
            <h1 className="text-3xl font-display font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Looks like you haven't added any delicious pickles to your cart yet.
            </p>
            <Button size="lg" variant="hero" onClick={() => window.location.href = "/products"}>
              Shop Our Collection
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-warm">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-display font-bold text-center mb-8">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Cart Items ({cartItems.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 border rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-muted-foreground">{item.weight}</p>
                      <p className="text-terai-gold font-semibold text-lg">₹{item.price}</p>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => removeItem(item.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <p className="font-semibold">₹{item.price * item.quantity}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Delivery Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5" />
                  Delivery Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={customerInfo.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={customerInfo.phone}
                      onChange={handleInputChange}
                      placeholder="+977 98-0000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium mb-2">
                    Delivery Address *
                  </label>
                  <Textarea
                    id="address"
                    name="address"
                    required
                    rows={3}
                    value={customerInfo.address}
                    onChange={handleInputChange}
                    placeholder="Enter your complete delivery address"
                  />
                </div>

                <div>
                  <label htmlFor="landmark" className="block text-sm font-medium mb-2">
                    Landmark (Optional)
                  </label>
                  <Input
                    id="landmark"
                    name="landmark"
                    type="text"
                    value={customerInfo.landmark}
                    onChange={handleInputChange}
                    placeholder="Near hospital, school, etc."
                  />
                </div>

                <div>
                  <label htmlFor="specialInstructions" className="block text-sm font-medium mb-2">
                    Special Instructions (Optional)
                  </label>
                  <Textarea
                    id="specialInstructions"
                    name="specialInstructions"
                    rows={2}
                    value={customerInfo.specialInstructions}
                    onChange={handleInputChange}
                    placeholder="Any special delivery instructions..."
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>₹{subtotal}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Delivery Fee:</span>
                  <span className={deliveryFee === 0 ? "text-harvest-green" : ""}>
                    {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
                  </span>
                </div>
                
                <Separator />
                
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total:</span>
                  <span className="text-terai-gold">₹{total}</span>
                </div>

                {subtotal < 1500 && (
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      Add ₹{1500 - subtotal} more for free delivery!
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Trust Badges */}
            <Card>
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-harvest-green" />
                  <span className="text-sm">Secure WhatsApp Ordering</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-terai-gold" />
                  <span className="text-sm">Fast & Reliable Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-spice-saffron" />
                  <span className="text-sm">Real-time Order Updates</span>
                </div>
              </CardContent>
            </Card>

            {/* Checkout Button */}
            <Card className="bg-gradient-hero">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Ready to Order?
                </h3>
                <p className="text-white/90 mb-6 text-sm">
                  Your order will be sent via WhatsApp for quick processing and personalized service.
                </p>
                <Button 
                  size="lg" 
                  className="w-full bg-white text-primary hover:bg-white/90"
                  onClick={handleCheckout}
                >
                  <MessageCircle className="h-5 w-5" />
                  Checkout via WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Payment Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Payment Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Badge className="bg-harvest-green w-full justify-center p-2">
                  Cash on Delivery Available
                </Badge>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>• Payment on delivery</p>
                  <p>• Mobile payments (eSewa, Khalti)</p>
                  <p>• Bank transfer options</p>
                  <p className="font-medium text-foreground">
                    Payment details will be shared after order confirmation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;