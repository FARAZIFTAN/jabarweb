import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import logo1 from '../assets/images/logo1.svg';

const Footer = () => {
  return (
    <footer
      className="relative text-white bg-cover bg-center bg-no-repeat" 
      style={{backgroundImage: "url('https://images.pexels.com/photos/167684/pexels-photo-167684.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80)", filter: 'brightness(0.7)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo */}
          <div className="flex flex-col items-start justify-start">
            <div className="rounded-full p-2 border-2 border-green-500 shadow-lg mb-2 bg-white/70 backdrop-blur-md inline-block">
              <img src={logo1} alt="Logo Jelajah Jabar" className="h-20 w-20 object-contain" />
            </div>
          </div>

          {/* Description & Social Media */}
          <div className="flex flex-col justify-start items-start">
            <p className="text-white text-base drop-shadow-lg mb-4 max-w-md [text-shadow:2px_2px_8px_rgba(0,0,0,0.7)]">
              Discover the beauty of West Java through sustainable tourism. Experience nature, culture, and tradition while preserving our environment for future generations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-green-500 transition-colors" title="Facebook">
                <Facebook size={22} />
              </a>
              <a href="#" className="text-white hover:text-green-500 transition-colors" title="Instagram">
                <Instagram size={22} />
              </a>
              <a href="#" className="text-white hover:text-green-500 transition-colors" title="Twitter">
                <Twitter size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links & Contact Info */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div>
              <h3 className="text-lg font-semibold mb-3 drop-shadow-lg [text-shadow:2px_2px_8px_rgba(0,0,0,0.7)]">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-white hover:text-green-500 transition-colors drop-shadow-lg [text-shadow:2px_2px_8px_rgba(0,0,0,0.7)]">Home</Link></li>
                <li><Link to="/destinations" className="text-white hover:text-green-500 transition-colors drop-shadow-lg [text-shadow:2px_2px_8px_rgba(0,0,0,0.7)]">Destinations</Link></li>
                <li><Link to="/experience" className="text-white hover:text-green-500 transition-colors drop-shadow-lg [text-shadow:2px_2px_8px_rgba(0,0,0,0.7)]">Experiences</Link></li>
                <li><Link to="/events" className="text-white hover:text-green-500 transition-colors drop-shadow-lg [text-shadow:2px_2px_8px_rgba(0,0,0,0.7)]">Events</Link></li>
                <li><Link to="/gastronomy" className="text-white hover:text-green-500 transition-colors drop-shadow-lg [text-shadow:2px_2px_8px_rgba(0,0,0,0.7)]">Gastronomy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 drop-shadow-lg [text-shadow:2px_2px_8px_rgba(0,0,0,0.7)]">Contact Info</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <MapPin size={16} className="text-green-500" />
                  <span className="text-white text-sm drop-shadow-lg [text-shadow:2px_2px_8px_rgba(0,0,0,0.7)]">Bandung, West Java, Indonesia</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone size={16} className="text-green-500" />
                  <span className="text-white text-sm drop-shadow-lg [text-shadow:2px_2px_8px_rgba(0,0,0,0.7)]">+62 811 9271</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail size={16} className="text-green-500" />
                  <span className="text-white text-sm drop-shadow-lg [text-shadow:2px_2px_8px_rgba(0,0,0,0.7)]">jelajahjabar@gmail.com</span>
                </div>
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