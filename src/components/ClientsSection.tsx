import { motion } from "framer-motion";

import indianArmy from "../assets/clients/indian-army.png";
import indianNavy from "../assets/clients/indian-navy.png";
import bsf from "../assets/clients/bsf.png";
import crpf from "../assets/clients/crpf.png";
import drdo from "../assets/clients/drdo.png";
import hal from "../assets/clients/hal.png";
import bel from "../assets/clients/bel.png";
import isro from "../assets/clients/isro.png";

const clients = [
  { name: "Indian Army", logo: indianArmy },
  { name: "Indian Navy", logo: indianNavy },
  { name: "BSF", logo: bsf },
  { name: "CRPF", logo: crpf },
  { name: "DRDO", logo: drdo },
  { name: "HAL", logo: hal },
  { name: "BEL", logo: bel },
  { name: "ISRO", logo: isro },
];

const ClientsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Trusted By</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Our Defense Partners
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="group flex items-center justify-center h-28 rounded-xl border border-border bg-card px-6 transition-all duration-300 hover:border-primary/30 hover:shadow-md"
            >
              <img
                src={client.logo}
                alt={client.name}
                loading="lazy"
                className="max-h-16 w-auto object-contain grayscale opacity-50 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
