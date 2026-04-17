import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#services" },
  { label: "Why Apollo", href: "#why-us" },
  { label: "Batches", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass-card rounded-2xl px-6 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="text-xl font-display font-bold text-foreground">Apollo Computer Education Ltd.</span>
              <span className="block text-xs text-muted-foreground tracking-widest uppercase">Aminjikarai, Chennai</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            {/* <Button className="sky-gradient text-white rounded-full px-6 hover:scale-105 transition-transform font-semibold tracking-wide">
              Enroll Now
            </Button> */}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-red-50 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 glass-card rounded-2xl p-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground hover:text-red-600 transition-colors font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              {/* <Button className="sky-gradient text-white rounded-full mt-4 font-semibold">
                Enroll Now
              </Button> */}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
