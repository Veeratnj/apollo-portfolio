import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingShape from "@/components/3d/FloatingShape";

const ContactSection = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-red-50 to-white">
      <FloatingShape
        variant="ring"
        className="absolute top-20 right-20 w-32 h-32 opacity-30"
        delay={0}
      />
      <FloatingShape
        variant="pyramid"
        className="absolute bottom-40 left-10 w-24 h-24 opacity-25"
        delay={1.5}
      />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-yellow-200/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-red-500 text-white text-sm font-semibold mb-6 tracking-wide">
            TRAINING SUPPORT
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">
            Connect with our <span className="text-gradient">MNC Trainers</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto font-body">
            Speak with Apollo trainers from leading MNCs and learn about our courses in AI, Data Science, Cloud, Full Stack and Animation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          <motion.a
            href="mailto:amjapollo@gmail.com"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <div className="glass-card rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full">
              <div className="w-16 h-16 mx-auto rounded-2xl sky-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-2">Email Us</h3>
              <p className="text-red-700 font-medium font-body">amjapollo@gmail.com</p>
            </div>
          </motion.a>

          <motion.a
            href="tel:+914412345678"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group"
          >
            <div className="glass-card rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full">
              <div className="w-16 h-16 mx-auto rounded-2xl sky-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-2">Call Us</h3>
              <p className="text-red-700 font-medium font-body">+91 99628 73047</p>
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group"
          >
            <div className="glass-card rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full">
              <div className="w-16 h-16 mx-auto rounded-2xl sky-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-2">Visit Us</h3>
              <p className="text-red-700 font-medium font-body">No. 283, 2nd Floor, Poonamallee High Road, Aminjikarai, Chennai</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          {/* <Button
            size="lg"
            className="sky-gradient text-white px-12 py-7 text-xl rounded-full glow-effect hover:scale-105 transition-transform shadow-xl font-semibold tracking-wide"
          >
            Enroll Now
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
