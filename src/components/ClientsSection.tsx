import { motion } from "framer-motion";

const clients = [
  "Indian Army",
  "Indian Navy",
  "BSF",
  "CRPF",
  "DRDO",
  "HAL",
  "BEL",
  "ISRO",
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
              key={client}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="group flex items-center justify-center h-24 rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-md"
            >
              <span className="font-display font-bold text-muted-foreground text-lg transition-colors duration-300 group-hover:text-foreground">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
