import React from "react";
import Link from "next/link";
import { Twitter, Facebook, Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">About NMSA Rwanda</h3>
          <p className="text-gray-300">
            We empower nurse and midwife students across Rwanda, building a
            stronger healthcare future together. Join us in making a difference.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline hover:text-gray-200 transition">
                  Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline hover:text-gray-200 transition">
                  About Us
              </Link>
            </li>
            <li>
              <Link href="/programs" className="hover:underline hover:text-gray-200 transition">
                  Our Programs
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline hover:text-gray-200 transition">
                  Activity
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline hover:text-gray-200 transition">
                  Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>info@nmsa.rw</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>+250 788 123 456</span>
            </li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
        
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-green-600 pt-4 text-center text-sm text-gray-400">
        
        <p>
          © {new Date().getFullYear()} NMSA Rwanda. All rights reserved.<br />
           Built with ❤️ by Nerd-lab Rwanda.
        </p>
      </div>
    </footer>
  );
}
