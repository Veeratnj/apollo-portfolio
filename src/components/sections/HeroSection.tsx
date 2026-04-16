import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingShape from "@/components/3d/FloatingShape";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-600 via-red-500 to-yellow-300">
      <div className="absolute inset-0 overflow-hidden">
        <FloatingShape
          variant="sphere"
          className="absolute top-20 right-[10%] w-32 h-32 opacity-70"
          delay={0}
        />
        <FloatingShape
          variant="cube"
          className="absolute bottom-32 left-[5%] w-24 h-24 opacity-55"
          delay={1}
        />
        <FloatingShape
          variant="ring"
          className="absolute top-40 left-[15%] w-40 h-40 opacity-45"
          delay={2}
        />
        <FloatingShape
          variant="pyramid"
          className="absolute bottom-20 right-[15%] w-28 h-28 opacity-55"
          delay={1.5}
        />

        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-semibold text-yellow-700 tracking-wide">Apollo Computer Education</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight tracking-tight"
          >
            <span>Trending #1</span>
            <br />
            <span className="text-gradient">Generative AI & LLM Engineering</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-100 mb-10 max-w-3xl mx-auto font-body"
          >
            Apollo Computer Education, Aminjikarai, Chennai. Learn AI, data, cloud, full-stack, DevOps and animation with weekend and evening batches.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid gap-4 md:grid-cols-2 max-w-3xl mx-auto mb-12"
          >
            {[
              "Prompt Engineering & LangChain",
              "SQL, Spark, Airflow & Kafka",
              "React + FastAPI/Django",
              "AWS, Docker & CI/CD",
            ].map((item) => (
              <div key={item} className="rounded-full bg-yellow-100/90 px-5 py-4 text-sm font-semibold text-foreground shadow-lg">
                {item}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* <Button
              size="lg"
              className="sky-gradient text-white px-8 py-6 text-lg rounded-full glow-effect hover:scale-105 transition-transform font-semibold tracking-wide"
            >
              Enroll Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button> */}
            {/* <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg rounded-full border-2 border-yellow-300 text-white/90 hover:bg-yellow-50/20 transition-all font-semibold tracking-wide"
            >
              View Courses
            </Button> */}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
