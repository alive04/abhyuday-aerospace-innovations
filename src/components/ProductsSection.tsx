import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import fpvImg from "@/assets/fpv-drone.jpg";
import kamikazeImg from "@/assets/kamikaze-drone.jpg";
import surveillanceImg from "@/assets/surveillance-drone.jpg";

const products = [
  {
    title: "FPV Drones",
    description:
      "High-speed first-person-view platforms engineered for tactical reconnaissance and rapid strike operations.",
    image: fpvImg,
    slug: "fpv-7",
  },
  {
    title: "Kamikaze Drones",
    description:
      "Precision loitering munitions designed for surgical strikes with minimal collateral impact.",
    image: kamikazeImg,
    slug: "shiva-1",
  },
  {
    title: "Surveillance Drones",
    description:
      "Long-endurance ISR platforms delivering persistent wide-area situational awareness.",
    image: surveillanceImg,
    slug: "sudarshan-ac",
  },
];

const ProductsSection = () => {
  return (
    <section className="py-24 bg-background" aria-label="Drone Products">
      <div className="max-w-[1600px] mx-auto">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Our Products
          </p>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Mission-Critical Platforms
          </h2>
        </motion.div>

        {/* Expanding Panels */}
        <div className="hidden lg:flex h-[75svh] mx-4 lg:mx-16 space-x-1">
          {products.map((product) => (
            <article
              key={product.title}
              className="flex-1 hover:flex-[3] transition-all duration-500 cursor-pointer
              -skew-x-3 h-full flex items-center justify-center group relative overflow-hidden"
            >
              {/* Background Image */}
              <img
                src={product.image}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover
                transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300"></div>

              {/* Content */}
              <div className="relative flex flex-col items-center justify-center h-full px-6 text-center">

                <h3 className="text-2xl lg:text-4xl xl:text-5xl text-white font-bold transition-all duration-300">
                  {product.title}
                </h3>

                <p
                  className="text-white text-sm lg:text-lg xl:text-xl leading-relaxed max-w-xs
                  transition-all duration-500 opacity-0 translate-y-6
                  group-hover:opacity-100 group-hover:translate-y-0"
                >
                  {product.description}
                </p>

                <Link
                  to={`/product/${product.slug}`}
                  className="mt-4 bg-white text-black px-4 py-2 lg:px-6 lg:py-3 rounded-lg
                  font-semibold hover:bg-gray-200 transition-all duration-500
                  opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0"
                >
                  Learn More
                </Link>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductsSection;