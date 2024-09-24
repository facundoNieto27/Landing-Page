import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock } from "lucide-react";

export default function StoreInfo() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Store Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="mr-2" /> Address
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>123 Pizza Street, Flavortown, FD 12345</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Phone className="mr-2" /> Contact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@pizzaparadise.com</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2" /> Hours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Mon-Fri: 11AM - 10PM</p>
            <p>Sat-Sun: 12PM - 11PM</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
