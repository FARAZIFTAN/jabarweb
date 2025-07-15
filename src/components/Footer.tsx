import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer
      className="relative text-white"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/167684/pexels-photo-167684.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80)', // Gambar HD dari Hero Sustainable Destination
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'brightness(0.7)', // Agar font putih tetap kontras
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-500" />
            <span className="text-xl font-bold drop-shadow-lg" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>EcoJabar</span>
            </div>
            <p className="text-white text-sm drop-shadow-lg" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>
              Discover the beauty of West Java through sustainable tourism. Experience nature, culture, and tradition while preserving our environment for future generations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-green-500 transition-colors" title="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-green-500 transition-colors" title="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-green-500 transition-colors" title="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 drop-shadow-lg" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white hover:text-green-500 transition-colors drop-shadow-lg" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>Home</Link></li>
              <li><Link to="/destinations" className="text-white hover:text-green-500 transition-colors drop-shadow-lg" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>Destinations</Link></li>
              <li><Link to="/experience" className="text-white hover:text-green-500 transition-colors drop-shadow-lg" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>Experiences</Link></li>
              <li><Link to="/events" className="text-white hover:text-green-500 transition-colors drop-shadow-lg" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>Events</Link></li>
              <li><Link to="/gastronomy" className="text-white hover:text-green-500 transition-colors drop-shadow-lg" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>Gastronomy</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 drop-shadow-lg" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-green-500" />
                <span className="text-white text-sm drop-shadow-lg" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>Bandung, West Java, Indonesia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-green-500" />
                <span className="text-white text-sm drop-shadow-lg" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>+62 22 1234 5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-green-500" />
                <span className="text-white text-sm drop-shadow-lg" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>info@ecojabar.com</span>
              </div>
            </div>
          </div>

          {/* ...Newsletter section removed... */}
        </div>

        {/* ...copyright and policy links removed... */}
      </div>
    </footer>
  );
};

export default Footer;