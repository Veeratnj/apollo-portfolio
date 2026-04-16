import { Mail, Phone, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-red-950 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-red-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-yellow-400/15 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="mb-6">
              <span className="text-2xl font-display font-bold">Apollo Computer Education</span>
              <span className="block text-xs text-slate-400 tracking-widest uppercase mt-1">Aminjikarai, Chennai</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-md font-body">
              Career-ready training in AI, data science, full-stack development, automation, robotics, and cloud engineering.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-red-500 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-display font-semibold mb-6">Course Tracks</h4>
            <ul className="space-y-3 text-slate-400 font-body">
              <li><a href="#services" className="hover:text-yellow-300 transition-colors">Generative AI & LLMs</a></li>
              <li><a href="#services" className="hover:text-yellow-300 transition-colors">Data Science & Engineering</a></li>
              <li><a href="#services" className="hover:text-yellow-300 transition-colors">Full Stack & DevOps</a></li>
              <li><a href="#services" className="hover:text-yellow-300 transition-colors">Robotics & IoT</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-400 font-body">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-300" />
                <a href="mailto:amjapollo@gmail.com" className="hover:text-yellow-300 transition-colors">
                  amjapollo@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-300" />
                <a href="tel:+919962873047" className="hover:text-yellow-300 transition-colors">
                  +91 99628 73047
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm font-body">
            © 2026 Apollo Computer Education. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500 font-body">
            <a href="#" className="hover:text-yellow-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
