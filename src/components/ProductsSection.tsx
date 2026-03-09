import { motion } from "framer-motion";
import fpvImg from "@/assets/fpv-drone.jpg";
import kamikazeImg from "@/assets/kamikaze-drone.jpg";
import surveillanceImg from "@/assets/surveillance-drone.jpg";

const products = [
  {
    title: "FPV Drones",
    description: "High-speed first-person-view platforms engineered for tactical reconnaissance and rapid strike operations.",
    image: fpvImg,
  },
  {
    title: "Kamikaze Drones",
    description: "Precision loitering munitions designed for surgical strikes with minimal collateral impact.",
    image: kamikazeImg,
  },
  {
    title: "Surveillance Drones",
    description: "Long-endurance ISR platforms delivering persistent wide-area situational awareness.",
    image: surveillanceImg,
  },
];

const ProductsSection = () => {
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
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Products</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Mission-Critical Platforms
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-card rounded-xl overflow-hidden border border-border card-hover"
            >
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{product.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
