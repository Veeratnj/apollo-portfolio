import { motion } from "framer-motion";
import { Check, Layers, Sparkles, Target } from "lucide-react";
import FloatingShape from "@/components/3d/FloatingShape";

const solutions = [
  {
    icon: Layers,
    title: "Industry-Aligned Curriculum",
    description: "Built around the skills recruiters are hiring for in 2025 and beyond.",
  },
  {
    icon: Target,
    title: "Hands-On Project Labs",
    description: "Every learner builds real apps, data products, and AI workflows from day one.",
  },
  {
    icon: Sparkles,
    title: "Career-Ready Outcomes",
    description: "Portfolio projects, live labs and certification to boost your job readiness.",
  },
];

const SolutionSection = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-red-50 to-white">
      <FloatingShape
        variant="sphere"
        className="absolute top-40 left-10 w-32 h-32 opacity-40"
        delay={0.5}
      />
      <FloatingShape
        variant="pyramid"
        className="absolute bottom-20 right-20 w-24 h-24 opacity-30"
        delay={1}
      />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-200/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-red-500 text-white text-sm font-semibold mb-6">
              OUR APPROACH
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Apollo <span className="text-gradient">Training</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              We close the skill gap with practical learning, live projects, and coaching from industry professionals.
            </p>

            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex gap-4 items-start group"
                >
                  <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500 transition-colors">
                    <solution.icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                    <p className="text-muted-foreground">{solution.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 glass-card rounded-3xl p-8 flex items-center justify-center glow-effect">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 relative">
                    <div className="absolute inset-0 rounded-full sky-gradient animate-pulse" />
                    <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center">
                      <Check className="w-16 h-16 text-red-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Career Focused</h3>
                  <p className="text-muted-foreground">Learn skills that convert into jobs.</p>
                </div>
              </div>

              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 glass-card rounded-2xl p-4 shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                    <Check className="w-5 h-5 text-red-600" />
                  </div>
                  <span className="font-semibold">Live Labs</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 glass-card rounded-2xl p-4 shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-yellow-600" />
                  </div>
                  <span className="font-semibold">Capstone Projects</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
