import { motion } from "framer-motion";
import FloatingShape from "@/components/3d/FloatingShape";

const images = [
  {
    src: "/placeholder.svg",
    alt: "Apollo training infrastructure",
  },
  {
    src: "/placeholder.svg",
    alt: "Hands-on student lab environment",
  },
  {
    src: "/placeholder.svg",
    alt: "Certificate achievement display",
  },
  {
    src: "/placeholder.svg",
    alt: "Student success celebration",
  },
];

const GallerySection = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-red-50">
      <FloatingShape
        variant="sphere"
        className="absolute top-10 right-10 w-28 h-28 opacity-20"
        delay={0}
      />
      <FloatingShape
        variant="ring"
        className="absolute bottom-10 left-10 w-24 h-24 opacity-20"
        delay={1}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-yellow-100 text-red-700 text-sm font-semibold mb-6">
            GALLERY
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Infrastructure & Student Success
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore Apollo's labs, classroom experience and certificate-ready outcomes that make learning career-focused.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-3xl overflow-hidden border border-red-100 shadow-xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-72 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
