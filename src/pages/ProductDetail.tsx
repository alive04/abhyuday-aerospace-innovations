import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Download, Play, ChevronRight } from "lucide-react";
import { getProductBySlug } from "@/data/products";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || "");
  const [activeFeature, setActiveFeature] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <div className="pt-40 text-center container-main">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            ← Back to Home
          </Link>
        </div>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Breadcrumb */}
      <div className="pt-[108px] bg-muted border-b border-border">
        <div className="container-main flex items-center gap-2 py-3 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRight size={14} className="text-muted-foreground" />
          <span className="text-muted-foreground">{product.category}</span>
          <ChevronRight size={14} className="text-muted-foreground" />
          <span className="font-semibold text-foreground">{product.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={product.heroImage}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/50 to-secondary/80" />
        </div>
        <div className="relative z-10 text-center container-main">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-secondary-foreground mb-6"
          >
            {product.name}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-4"
          >
            <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
              Order Now
            </button>
            <button className="px-8 py-3 rounded-full border border-secondary-foreground/30 text-secondary-foreground font-semibold text-sm flex items-center gap-2 hover:bg-secondary-foreground/10 transition-colors">
              Watch Now <Play size={16} fill="currentColor" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Specs Bar */}
      <section className="bg-secondary text-secondary-foreground border-t border-secondary-foreground/10">
        <div className="container-main py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-secondary-foreground/10">
            {product.specs.map((spec, i) => (
              <motion.div
                key={spec.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center px-4"
              >
                {spec.prefix && (
                  <p className="text-xs text-secondary-foreground/50 uppercase tracking-wider mb-1">
                    {spec.prefix}
                  </p>
                )}
                <p className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">
                  {spec.value}
                </p>
                <p className="text-sm font-medium text-secondary-foreground/70">{spec.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                Overview
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {product.name} {product.tagline}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{product.description}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src={product.cardImage}
                alt={product.name}
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Payload */}
      <section className="py-20 bg-muted">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Payload
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              {product.name} supports versatile payloads
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {product.payloads.map((payload, i) => (
              <motion.div
                key={payload.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-xl p-8 border border-border shadow-sm"
              >
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  {payload.name}
                </h3>
                <ul className="space-y-2">
                  {payload.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Real-world Applications
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              {product.name} Real-world Output
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {product.useCases.map((uc, i) => (
              <motion.div
                key={uc.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-lg p-6 text-center hover:bg-secondary-foreground/10 transition-colors"
              >
                <p className="font-semibold text-sm">{uc.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Features
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              {product.name} Key Capabilities
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4 space-y-1">
              {product.features.map((feature, i) => (
                <button
                  key={feature.title}
                  onClick={() => setActiveFeature(i)}
                  className={`w-full text-left px-5 py-4 rounded-lg transition-all duration-200 ${
                    activeFeature === i
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  <span className="font-semibold text-sm">{feature.title}</span>
                </button>
              ))}
            </div>
            <div className="md:col-span-8 flex items-center">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-muted rounded-xl p-10 border border-border w-full"
              >
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  {product.features[activeFeature].title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {product.features[activeFeature].description}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Download / CTA */}
      <section className="py-20 bg-muted">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                Download
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Deploy the {product.name} for your missions
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Get comprehensive specifications, operational parameters, and integration guides in our detailed product brochure.
              </p>
              <button className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
                <Download size={16} /> Download Brochure
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src={product.cardImage}
                alt={product.name}
                className="w-full object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default ProductDetail;
