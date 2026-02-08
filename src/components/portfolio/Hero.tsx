import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const subtitles = [
  "I design beautiful user experiences",
  "I craft stunning visual identities",
  "I bring ideas to life through design",
];

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [subtitleIdx, setSubtitleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = subtitles[subtitleIdx];
    const timeout = deleting ? 30 : 70;

    const timer = setTimeout(() => {
      if (!deleting) {
        if (charIdx < target.length) {
          setCurrentText(target.slice(0, charIdx + 1));
          setCharIdx(charIdx + 1);
        } else {
          setTimeout(() => setDeleting(true), 2000);
        }
      } else {
        if (charIdx > 0) {
          setCurrentText(target.slice(0, charIdx - 1));
          setCharIdx(charIdx - 1);
        } else {
          setDeleting(false);
          setSubtitleIdx((subtitleIdx + 1) % subtitles.length);
        }
      }
    }, timeout);

    return () => clearTimeout(timer);
  }, [charIdx, deleting, subtitleIdx]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[160px]" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-6"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Raja Raman
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl md:text-2xl text-muted-foreground mb-12 h-10"
        >
          <span>{currentText}</span>
          <span className="border-r-2 border-primary ml-0.5 animate-typing-cursor">&nbsp;</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex justify-center gap-4"
        >
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-display font-medium hover:bg-primary/90 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="px-8 py-3 border border-border text-foreground rounded-lg font-display font-medium hover:bg-secondary transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            onClick={(e) => { e.preventDefault(); document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }); }}
          >
            <ArrowDown className="text-muted-foreground animate-bounce" size={28} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
