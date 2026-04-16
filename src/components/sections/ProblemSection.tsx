import { motion } from "framer-motion";
import { BookOpen, Bolt, Users } from "lucide-react";
import FloatingShape from "@/components/3d/FloatingShape";

const problems = [
  {
    icon: BookOpen,
    title: "Outdated Curriculum",
    description: "Most training centers still teach old tools that don't match job-market demand.",
    color: "from-red-500 to-yellow-400",
  },
  {
    icon: Bolt,
    title: "Lack of Real Projects",
    description: "Students rarely get hands-on experience with live applications and industry workflows.",
    color: "from-yellow-400 to-red-500",
  },
  {
    icon: Users,
    title: "Weak Placement Support",
    description: "Many learners finish courses without a strong portfolio or placement-ready profile.",
    color: "from-red-600 to-yellow-500",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-red-50">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
        <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-200 rounded-full blur-3xl" />
      </div>
      <FloatingShape
        variant="ring"
        className="absolute top-20 right-10 w-20 h-20 opacity-30"
        delay={0}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-yellow-100 text-red-700 text-sm font-semibold mb-6">
            THE SKILL GAP
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            The <span className="text-gradient">Challenge</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Today's tech learners need modern training, portfolio-ready projects, and career support to land the right role.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="glass-card rounded-3xl p-8 h-full hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${problem.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <problem.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
