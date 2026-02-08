import { motion } from "framer-motion";
import { Palette, Layout, PenTool, Figma, Monitor, Layers } from "lucide-react";

const skills = [
  { icon: Palette, label: "UI/UX Design", desc: "Creating intuitive, user-centered interfaces" },
  { icon: Layout, label: "Graphic Design", desc: "Visual storytelling through design" },
  { icon: PenTool, label: "Branding", desc: "Building memorable brand identities" },
  { icon: Figma, label: "Prototyping", desc: "Interactive prototypes & wireframes" },
  { icon: Monitor, label: "Web Design", desc: "Responsive, modern web experiences" },
  { icon: Layers, label: "Motion Design", desc: "Engaging animations & micro-interactions" },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">About Me</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Passionate{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Designer
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            I'm a designer with a passion for creating beautiful, functional digital experiences.
            With a keen eye for detail and a love for clean aesthetics, I transform ideas into
            visually compelling designs that connect with people.
          </p>
        </motion.div>

        <div id="skills" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.3)]"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{skill.label}</h3>
              <p className="text-muted-foreground text-sm">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
