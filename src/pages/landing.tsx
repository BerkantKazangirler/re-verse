import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import {
  Shield,
  Activity,
  Radio,
  Layout,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";

export function LuxuryLanding() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const wordmarkScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);
  const wordmarkOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const cityOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 0.6]);
  const cityScale = useTransform(scrollYProgress, [0.1, 0.4], [1.2, 1]);

  return (
    <div
      ref={containerRef}
      className="w-full bg-[#000000] text-white font-sans selection:bg-[#E11D48]"
    >
      <nav className="fixed top-0 left-0 w-full h-24 flex items-center justify-between px-12 z-50">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-[#E11D48] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(225,29,72,0.4)]">
            <Shield size={20} className="text-white" />
          </div>
          <span className="text-lg font-black tracking-tighter uppercase">
            RE-VERSE
          </span>
        </div>
        <div className="hidden gap-12 text-[10px] md:flex font-black uppercase tracking-[0.3em] text-slate-400">
          <a href="#tech" className="hover:text-white transition-colors">
            Technology
          </a>
          <a href="#vision" className="hover:text-white transition-colors">
            Vision
          </a>
          <a href="#team" className="hover:text-white transition-colors">
            Team
          </a>
        </div>
      </nav>

      <section className="relative h-[200vh] w-full">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          <motion.div
            style={{ opacity: cityOpacity, scale: cityScale }}
            className="absolute inset-0 z-0"
          >
            <img
              src="https://images.unsplash.com/photo-1755963969538-00dfa22a7c0b?auto=format&fit=crop&q=80&w=1920"
              alt="3D City Grid"
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
          </motion.div>

          <motion.div
            style={{ scale: wordmarkScale, opacity: wordmarkOpacity }}
            className="relative z-10 text-center"
          >
            <h1 className="text-[15vw] font-black tracking-tighter leading-none mb-4">
              RE-VERSE
            </h1>
            <p className="text-xl md:text-2xl font-light tracking-[0.6em] uppercase text-slate-500">
              Engineering Resilience
            </p>
          </motion.div>

          <motion.div
            style={{ opacity: wordmarkOpacity }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600">
              Explore Silence
            </span>
            <div className="w-[1px] h-20 bg-gradient-to-b from-white/20 to-transparent" />
          </motion.div>
        </div>
      </section>

      <section
        id="vision"
        className="min-h-screen w-full flex items-center justify-center px-12 py-32 bg-black"
      >
        <div className="max-w-5xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-black mb-12 uppercase tracking-tight"
          >
            The world is fragile. <br />
            <span className="text-slate-600">Our networks shouldn't be.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-3xl mx-auto italic"
          >
            RE-VERSE is a luxury of safety. A specialized hierarchical mesh
            ecosystem built for the moments when the global infrastructure
            disappears.
          </motion.p>
        </div>
      </section>

      <section id="tech" className="py-32 bg-black overflow-hidden">
        <div className="px-12 mb-20">
          <h3 className="text-[10px] font-black text-[#E11D48] tracking-[0.5em] uppercase mb-4">
            Core Architecture
          </h3>
          <p className="text-3xl font-black uppercase tracking-tighter">
            The Safety Mesh Protocol
          </p>
        </div>

        <div className="flex gap-12 px-12 overflow-x-auto no-scrollbar pb-20">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="min-w-[450px] aspect-[4/5] rounded-[3rem] bg-white/[0.03] border border-white/10 p-16 flex flex-col justify-between group hover:bg-white/[0.05] transition-all"
          >
            <div>
              <div className="w-16 h-16 rounded-3xl bg-[#E11D48]/10 flex items-center justify-center mb-12">
                <Activity size={32} className="text-[#E11D48]" />
              </div>
              <h4 className="text-4xl font-black uppercase tracking-tighter mb-6">
                Smart <br /> Triage
              </h4>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                Automated priority logic that translates health data into
                actionable rescue vectors. No latency. No cloud. Just survival.
              </p>
            </div>
            <div className="flex items-center gap-4 pt-12">
              <div className="h-[1px] flex-1 bg-white/10" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">
                Protocol v4.2
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="min-w-[450px] aspect-[4/5] rounded-[3rem] bg-white/[0.03] border border-white/10 p-16 flex flex-col justify-between group hover:bg-white/[0.05] transition-all"
          >
            <div>
              <div className="w-16 h-16 rounded-3xl bg-blue-500/10 flex items-center justify-center mb-12">
                <Radio size={32} className="text-blue-500" />
              </div>
              <h4 className="text-4xl font-black uppercase tracking-tighter mb-6">
                Acoustic <br /> Signal
              </h4>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                A sonic lighthouse. Remotely triggered high-frequency acoustics
                pinpoint exact locations in debris-heavy environments.
              </p>
            </div>
            <div className="flex items-center gap-4 pt-12">
              <div className="h-[1px] flex-1 bg-white/10" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">
                Mesh Enabled
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="min-w-[450px] aspect-[4/5] rounded-[3rem] bg-white/[0.03] border border-white/10 p-16 flex flex-col justify-between group hover:bg-white/[0.05] transition-all"
          >
            <div>
              <div className="w-16 h-16 rounded-3xl bg-[#22C55E]/10 flex items-center justify-center mb-12">
                <Layout size={32} className="text-[#22C55E]" />
              </div>
              <h4 className="text-4xl font-black uppercase tracking-tighter mb-6">
                Hierarchical <br /> Command
              </h4>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                Multi-tier authority routing. From Governors to AFAD units, the
                dashboard ensures data reaches the right hands instantly.
              </p>
            </div>
            <div className="flex items-center gap-4 pt-12">
              <div className="h-[1px] flex-1 bg-white/10" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#22C55E]">
                Validated HQ
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="team" className="py-32 px-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <h3 className="text-[10px] font-black text-slate-500 tracking-[0.5em] uppercase mb-4">
              The Visionaries
            </h3>
            <h2 className="text-5xl font-black uppercase tracking-tight">
              BioTech & Rescue Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                name: "Berkant Kazangirler",
                role: "Project Lead",
                img: "team/bk.webp",
              },
              {
                name: "Songül Duran",
                role: "Developer",
                img: "team/sd.webp",
              },
              // {
              //   name: "Elif Kaya",
              //   role: "Product Experience",
              //   img: "https://images.unsplash.com/photo-1647395983866-e91a42e0cbab?auto=format&fit=crop&q=80&w=500",
              // },
              // {
              //   name: "Selin Ak",
              //   role: "Emergency Protocols",
              //   img: "https://images.unsplash.com/photo-1544411043-a440bbb183cb?auto=format&fit=crop&q=80&w=500",
              // },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-6 border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <div className="absolute z-20 w-full gap-4 justify-center flex bottom-0 bg-white/5 backdrop-blur-sm h-0 group-hover:h-10 group-hover:py-2 transition-all duration-300">
                    <Linkedin
                      size={20}
                      className="hover:text-slate-400 text-white cursor-pointer transition-colors"
                    />
                    <Twitter
                      size={20}
                      className="hover:text-slate-400 text-white cursor-pointer transition-colors"
                    />
                    <Mail
                      size={20}
                      className="hover:text-slate-400 text-white cursor-pointer transition-colors"
                    />
                  </div>
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h5 className="text-xl font-black uppercase tracking-tighter mb-1">
                  {member.name}
                </h5>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E11D48]">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-24 px-12 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                <Shield size={24} className="text-[#E11D48]" />
              </div>
              <h4 className="text-3xl font-black uppercase tracking-tighter">
                RE-VERSE
              </h4>
            </div>
            <p className="text-slate-500 font-medium max-w-sm mb-12 italic">
              An Ecosystem by BioTech & Rescue Vision. 2026. <br />
              Built for a world without connectivity.
            </p>
            <div className="flex gap-6">
              <Linkedin
                size={20}
                className="text-slate-600 hover:text-white cursor-pointer transition-colors"
              />
              <Twitter
                size={20}
                className="text-slate-600 hover:text-white cursor-pointer transition-colors"
              />
              <Mail
                size={20}
                className="text-slate-600 hover:text-white cursor-pointer transition-colors"
              />
            </div>
          </div>

          <div className="text-right">
            {/* <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-600 mb-4">
              Sosyalfest 2026
            </p> */}
            <h3 className="text-3xl font-black uppercase tracking-tighter italic text-[#E11D48]">
              If the internet is down, <br /> We are up.
            </h3>
          </div>
        </div>
      </footer>
    </div>
  );
}
