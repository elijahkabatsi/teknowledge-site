import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import WebGLBackground from './components/WebGLBackground';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import tekLogo from './assets/teknowledge-logo-dark.png';
import { Menu, X } from 'lucide-react';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About Us', path: '/about' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center py-2 shrink-0">
          <img
            src={tekLogo}
            alt="TeKnowledge"
            className="h-9 w-auto object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`transition-colors ${
                pathname === item.path
                  ? 'text-tekBlue font-semibold'
                  : 'text-gray-600 hover:text-tekBlue'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/about"
            className="bg-tekBlue text-white px-6 py-2.5 rounded-lg hover:bg-tekPurple transition-colors"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="md:hidden text-tekPurple p-2 cursor-pointer"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-100 px-6 py-6 flex flex-col gap-4 font-medium">
          {navLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={`py-2 transition-colors ${
                pathname === item.path ? 'text-tekBlue font-semibold' : 'text-gray-700'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="bg-tekBlue text-white text-center px-6 py-3 rounded-lg hover:bg-tekPurple transition-colors mt-2"
          >
            Let's Talk
          </Link>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-50 border-t border-gray-200 py-16">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
      <div className="md:col-span-2">
        <Link to="/" className="inline-block mb-4">
          <img
            src={tekLogo}
            alt="TeKnowledge"
            className="h-8 w-auto object-contain"
          />
        </Link>
        <p className="text-gray-500 text-sm max-w-md leading-relaxed">
          Teknowledge helps organisations navigate technological change, accelerate AI adoption, and build the capabilities needed to thrive in a digital-first world.
        </p>
      </div>
      <div>
        <h4 className="font-bold text-gray-900 mb-4">Navigation</h4>
        <div className="flex flex-col gap-2 text-gray-500 text-sm">
          <Link to="/" className="hover:text-tekBlue transition-colors">Home</Link>
          <Link to="/services" className="hover:text-tekBlue transition-colors">Services</Link>
          <Link to="/about" className="hover:text-tekBlue transition-colors">About Us</Link>
        </div>
      </div>
      <div>
        <h4 className="font-bold text-gray-900 mb-4">Services</h4>
        <div className="flex flex-col gap-2 text-gray-500 text-sm">
          <Link to="/services" className="hover:text-tekBlue transition-colors">AI Transformation</Link>
          <Link to="/services" className="hover:text-tekBlue transition-colors">Technology Advisory</Link>
          <Link to="/services" className="hover:text-tekBlue transition-colors">Digital Enablement</Link>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-200 text-sm text-gray-400">
      © Teknowledge - Part of YNV Group
    </div>
  </footer>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <WebGLBackground />
      <Navbar />
      <main className="pt-20 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}