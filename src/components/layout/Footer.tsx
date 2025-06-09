"use client";

import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

interface FooterProps {
  className?: string;
}

export default function Footer({ className = "" }: FooterProps) {
  return (
    <footer
      id="contact"
      className={`bg-gray-900 text-white py-16 ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Halong Tours - Asia Pacific Travel
            </h3>
            <p className="text-gray-300 text-sm mb-6">
              Halongbaytours.com is a premium cruise and tour booking service
              offered by Blue Dragon Tours. Here on our website you can find
              listings of the best selected cruises of Halong Bay, one of the
              UNESCO World&apos;s Natural Heritage.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Daily Tours
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Exclusive Tours
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Special Offers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Group Tours
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Private Tours
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Customize Tours
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-1 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">info@halongbaytours.com</span>
              </div>

              <div>
                <p className="font-medium mb-2">Hanoi Head Office</p>
                <div className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-4 h-4 mt-1 text-blue-400 flex-shrink-0" />
                    <div className="text-gray-300">
                      <div>+84 24 38364212</div>
                      <div>+84 24 37588858</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 mt-1 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300">
                      85-87 Hoang Quoc Viet Street,
                      <br />
                      Hanoi, Vietnam
                    </span>
                  </div>
                </div>
              </div>

              {/* <div>
                <p className="font-medium mb-2">Ho Chi Minh City Office</p>
                <div className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-4 h-4 mt-1 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300">+84 28 38 3333 88</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 mt-1 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300">
                      Room 342, First Floor, Toong Office,
                      <br />
                      128 Nguyen Thi Minh Khai Street,
                      <br />
                      District 3, Ho Chi Minh City
                    </span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Send us a message</h4>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your name *"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email *"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Send Now
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              <p>©2025 Blue Dragon Tours. All Rights Reserved.</p>
              <p>International Tour Operator Licence No: 01-560/LCTK</p>
              <p>Tax Member Number: 7379</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">We Accept</span>
              <div className="flex space-x-2">
                <div className="bg-red-600 text-white px-2 py-1 text-xs rounded">
                  MASTERCARD
                </div>
                <div className="bg-blue-600 text-white px-2 py-1 text-xs rounded">
                  VISA
                </div>
                <div className="bg-purple-600 text-white px-2 py-1 text-xs rounded">
                  AMEX
                </div>
                <div className="bg-green-600 text-white px-2 py-1 text-xs rounded">
                  JCB
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

