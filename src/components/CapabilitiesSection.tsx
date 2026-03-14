import { motion } from "framer-motion";
import { Navigation, Radio, ShieldCheck, Target } from "lucide-react";
import capImg from "@/assets/capabilities-drone.jpg";

const features = [
  { icon: Navigation, label: "Autonomous navigation" },
  { icon: Radio, label: "Real-time surveillance" },
  { icon: ShieldCheck, label: "Secure communications" },
  { icon: Target, label: "Precision targeting" },
];

const CapabilitiesSection = () => {
  return (
    <section className="py-24 bg-neutral">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Capabilities</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Built for the Modern Battlefield
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Abhyuday's drone systems integrate cutting-edge autonomy, encrypted data links, and advanced sensor
              payloads to deliver decisive advantages across the full spectrum of operations.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <f.icon size={20} className="text-primary" />
                  </div>
                  <span className="text-foreground font-medium text-sm">{f.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <img src={capImg} alt="Drone capabilities" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
