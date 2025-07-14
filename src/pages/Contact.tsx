import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `*Contact Inquiry from Mithila Magic Website*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Subject:* ${formData.subject}

*Message:*
${formData.message}

---
Sent from Mithila Magic website contact form`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/9779800000000?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-warm">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you! Reach out with any questions about our pickles or to share your feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-terai-gold" />
                  Visit Our Store
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  123 Mithila Street<br />
                  Janakpur, Terai Region<br />
                  Nepal - 45600
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-terai-gold" />
                  Call Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Phone: +977 98-0000-0000<br />
                  WhatsApp: +977 98-0000-0000
                </p>
                <Badge className="mt-2 bg-harvest-green">
                  WhatsApp Orders Available
                </Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-terai-gold" />
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  info@mithilamagic.com<br />
                  orders@mithilamagic.com
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-terai-gold" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick WhatsApp Contact */}
            <Card className="bg-gradient-spice">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Quick WhatsApp Contact
                </h3>
                <p className="text-white/90 mb-4">
                  Get instant support and place orders directly through WhatsApp
                </p>
                <Button 
                  className="bg-white text-primary hover:bg-white/90"
                  onClick={() => window.open('https://wa.me/9779800000000?text=Hello! I\'m interested in Mithila Magic pickles.', '_blank')}
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
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
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+977 98-0000-0000"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What can we help you with?"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Note:</strong> This form will open WhatsApp with your message pre-filled. 
                      This allows us to respond quickly and provide personalized service.
                    </p>
                  </div>

                  <Button type="submit" size="lg" className="w-full" variant="hero">
                    <Send className="h-4 w-4" />
                    Send Message via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">How long do your pickles last?</h4>
                  <p className="text-muted-foreground text-sm">
                    Our pickles have a shelf life of 12 months when stored properly. Always use a clean, dry spoon and keep the jar tightly closed.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Do you offer bulk orders?</h4>
                  <p className="text-muted-foreground text-sm">
                    Yes! We offer special pricing for bulk orders. Contact us via WhatsApp for custom quotes on large quantities.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Can I customize pickle recipes?</h4>
                  <p className="text-muted-foreground text-sm">
                    We offer limited customization for spice levels. Contact us to discuss your preferences for special orders.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">What payment methods do you accept?</h4>
                  <p className="text-muted-foreground text-sm">
                    We accept cash on delivery, mobile payments (eSewa, Khalti), and bank transfers. Payment details are shared after order confirmation via WhatsApp.
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

export default Contact;