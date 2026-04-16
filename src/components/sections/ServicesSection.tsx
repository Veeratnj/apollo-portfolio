import { motion } from "framer-motion";
import { Cpu, Database, Cloud, ServerCog, Monitor, Code, Film } from "lucide-react";
import FloatingShape from "@/components/3d/FloatingShape";

const services = [
  {
    icon: Cpu,
    title: "Generative AI & LLM Engineering",
    features: [
      { label: "Prompt Engineering", desc: "ChatGPT, LangChain, LangGraph and RAG workflows." },
      { label: "AI Agents", desc: "Build chatbots, agents and automated AI assistants." },
      { label: "LLM Fine-tuning", desc: "Work with open-source LLMs and customization pipelines." },
    ],
    gradient: "from-red-500 to-yellow-400",
    bgGlow: "bg-red-500/20",
  },
  {
    icon: Database,
    title: "Data Science & Machine Learning",
    features: [
      { label: "Python Analytics", desc: "NumPy, Pandas, Matplotlib and real data visualization." },
      { label: "ML Models", desc: "Scikit-learn, deep learning basics and end-to-end projects." },
      { label: "Feature Engineering", desc: "EDA, preprocessing and production-ready model workflows." },
    ],
    gradient: "from-yellow-400 to-red-500",
    bgGlow: "bg-yellow-400/20",
  },
  {
    icon: Cloud,
    title: "Data Engineering (Big Data Track)",
    features: [
      { label: "Advanced SQL", desc: "PostgreSQL, MySQL and query optimization." },
      { label: "ETL Pipelines", desc: "Python ETL, Apache Spark and workflow automation with Airflow." },
      { label: "Streaming", desc: "Kafka, data warehousing and real-time processing." },
    ],
    gradient: "from-red-500 to-red-700",
    bgGlow: "bg-yellow-300/20",
  },
  {
    icon: ServerCog,
    title: "Cloud Engineering (AWS Focus)",
    features: [
      { label: "AWS Fundamentals", desc: "EC2, S3, RDS, Lambda and serverless architecture." },
      { label: "Deployment", desc: "Deploy applications with CI/CD, scaling and cloud best practices." },
      { label: "Security", desc: "IAM, cloud security and resilient infra design." },
    ],
    gradient: "from-yellow-400 to-red-600",
    bgGlow: "bg-yellow-300/20",
  },
  {
    icon: Monitor,
    title: "Full Stack Development",
    features: [
      { label: "React Frontend", desc: "Modern JS/TS development with React and responsive UI." },
      { label: "Backend APIs", desc: "FastAPI, Django, REST, authentication and PostgreSQL integration." },
      { label: "Deployment", desc: "Docker, hosting and live application deployment." },
    ],
    gradient: "from-red-500 to-yellow-500",
    bgGlow: "bg-red-500/20",
  },
  {
    icon: Code,
    title: "DevOps Engineering",
    features: [
      { label: "Linux & Git", desc: "Shell scripting, GitHub workflows and version control." },
      { label: "CI/CD Pipelines", desc: "Jenkins, Docker and automated deployment flows." },
      { label: "AWS DevOps", desc: "Cloud automation, monitoring and DevOps best practices." },
    ],
    gradient: "from-yellow-400 to-red-500",
    bgGlow: "bg-red-500/20",
  },
  {
    icon: Film,
    title: "Animation & MMV",
    features: [
      { label: "Design Tools", desc: "Adobe InDesign, Photoshop, Illustrator and Dreamweaver." },
      { label: "Audio & Video", desc: "Audition, Premiere and creative production workflows." },
      { label: "3D & VFX", desc: "Autodesk Combustion, 3DS Max, Maya and visual effects." },
    ],
    gradient: "from-red-500 to-yellow-400",
    bgGlow: "bg-yellow-300/20",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-red-50">
      <FloatingShape
        variant="cube"
        className="absolute top-20 right-20 w-20 h-20 opacity-30"
        delay={0}
      />
      <FloatingShape
        variant="sphere"
        className="absolute bottom-40 left-10 w-28 h-28 opacity-25"
        delay={1.5}
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
            COURSE TRACKS
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Explore <span className="text-gradient">Apollo Courses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from the most in-demand tech tracks for 2025, built for students and working professionals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group relative"
            >
              <div className={`absolute inset-0 ${service.bgGlow} rounded-3xl blur-2xl opacity-0 group-hover:opacity-90 transition-opacity duration-500`} />

              <div className="relative glass-card rounded-3xl p-8 h-full hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6">{service.title}</h3>
                <div className="space-y-4">
                  {service.features.map((feature) => (
                    <div key={feature.label} className="border-l-2 border-red-200 pl-4 hover:border-red-500 transition-colors">
                      <h4 className="font-semibold text-foreground mb-1">{feature.label}</h4>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
