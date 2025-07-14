import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-earth text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-terai-gold">
                  Mithila Magic
                </h3>
                <p className="text-sm text-white/80">Authentic Terai Pickles</p>
              </div>
            </div>
            <p className="text-white/80 text-sm">
              Preserving the authentic flavors of Mithila tradition through generations 
              of culinary expertise and dedication to quality.
            </p>
            <div className="flex space-x-2">
              <Button size="icon" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20">
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-terai-gold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/80 hover:text-white transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-white/80 hover:text-white transition-colors">
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-terai-gold">Our Specialties</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Traditional Mango Pickle</li>
              <li>Zesty Lime Pickle</li>
              <li>Mixed Vegetable Pickle</li>
              <li>Radish Pickle</li>
              <li>Cauliflower Pickle</li>
              <li>Seasonal Specialties</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-terai-gold">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-terai-gold mt-0.5" />
                <div className="text-white/80">
                  <p>123 Mithila Street</p>
                  <p>Janakpur, Terai Region</p>
                  <p>Nepal - 45600</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-terai-gold" />
                <span className="text-white/80">+977 98-0000-0000</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-terai-gold" />
                <span className="text-white/80">info@mithilamagic.com</span>
              </div>
              
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 text-terai-gold mt-0.5" />
                <div className="text-white/80">
                  <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-white/80 text-sm">
              © 2024 Mithila Magic. All rights reserved.
            </p>
            <p className="text-white/60 text-xs mt-1">
              Crafted with ❤️ in the Terai Region
            </p>
          </div>
          
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-white/80 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/80 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/shipping" className="text-white/80 hover:text-white transition-colors">
              Shipping Info
            </Link>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-8 p-6 bg-white/10 rounded-lg text-center">
          <h4 className="text-lg font-semibold text-terai-gold mb-2">
            Need Help? Chat with Us!
          </h4>
          <p className="text-white/80 text-sm mb-4">
            Get instant support and place orders directly through WhatsApp
          </p>
          <Button 
            className="bg-terai-gold text-white hover:bg-spice-saffron"
            onClick={() => window.open('https://wa.me/9779800000000?text=Hello! I\'m interested in Mithila Magic pickles.', '_blank')}
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;