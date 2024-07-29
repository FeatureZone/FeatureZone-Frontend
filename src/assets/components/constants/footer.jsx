import { Mail, Phone, MapPin, Youtube, Linkedin, Facebook, Github, Twitter, Instagram, Gamepad2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-[#3498db]" />
                <a href="mailto:info@example.com" className="hover:text-[#2ecc71]">info@example.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-[#3498db]" />
                <a href="tel:+1234567890" className="hover:text-[#2ecc71]">+233 23 567 8490</a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-[#3498db]" />
                <span>1234 Watermelon, Accra, Ghana</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#2ecc71]">
                  <Youtube className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#2ecc71]">
                  <Linkedin className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#2ecc71]">
                  <Gamepad2 className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#2ecc71]">
                  <Facebook className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#2ecc71]">
                  <Github className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#2ecc71]">
                  <Twitter className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#2ecc71]">
                  <Instagram className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy-policy" className="hover:text-[#2ecc71]">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms-of-service" className="hover:text-[#2ecc71]">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Our Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
