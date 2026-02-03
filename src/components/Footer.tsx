import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              Idea2Designs
            </h3>
            <p className="text-gray-400">
              Transforming ideas into stunning digital experiences.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Details</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Mail size={18} className="mr-2 text-blue-400" />
                idea2designs@gmail.com
              </li>
              <li className="flex items-center text-gray-400">
                <Phone size={18} className="mr-2 text-blue-400" />
                +91 9361486641
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin size={18} className="mr-2 text-blue-400" />
                 Idea2Designs <br></br>50/4, Main Road, Kolapakkam, Chennai,<br></br>
                TamilNadu 600127
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Idea2Designs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
