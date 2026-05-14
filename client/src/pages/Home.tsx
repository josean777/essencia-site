import { motion } from 'framer-motion';
import { Instagram, MessageCircle, MessageCircle as WhatsAppIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

/**
 * Essência - Ultra-Premium Wellness Website
 * Design Philosophy: Minimalist European Luxury + Aesop Sophistication
 * 
 * Color Palette:
 * - Background: Ivory (#F5F1ED)
 * - Primary: Champagne Gold (#D4AF8C)
 * - Text: Charcoal (#2A2A2A)
 * - Secondary: Warm Beige (#E8DCC8)
 * - Accent: Soft Gray (#C9C5C0)
 * 
 * Typography: Crimson Text (display) + Satoshi (body)
 * Animations: Smooth, refined, 300-500ms transitions
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = 'https://wa.me/5575999840160?text=Olá%20Essência!%20Gostaria%20de%20agendar%20uma%20sessão%20de%20bem-estar.';
  // Número correto: +55 75 99840-1607
  const logoUrl = '/manus-storage/logo-essencia_03f792c0.png';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1] as any,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/95 backdrop-blur-md shadow-luxury' : 'bg-transparent'
        }`}
      >
        <div className="container flex items-center justify-between py-4 md:py-6">
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="Essência Logo" className="h-10 w-auto" />
            <h1 className="text-2xl md:text-3xl font-display text-foreground">Essência</h1>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="/gallery"
              className="text-sm md:text-base font-light hover:text-accent transition-premium"
            >
              Galeria
            </a>
            <a
              href="/blog"
              className="text-sm md:text-base font-light hover:text-accent transition-premium"
            >
              Blog
            </a>
            <a
              href="#services"
              className="text-sm md:text-base font-light hover:text-accent transition-premium"
            >
              Serviços
            </a>
            <a
              href="#about"
              className="text-sm md:text-base font-light hover:text-accent transition-premium"
            >
              Sobre
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 md:px-6 py-2 md:py-3 bg-accent text-accent-foreground rounded-full text-sm font-light hover:shadow-luxury transition-premium hover:scale-105"
            >
              Agendar
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 w-full max-w-full">
        {/* Background Image with Parallax */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0 overflow-hidden"
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663585076028/3EoquXQC4TpWCoYKjEggF9/hero-essencia-HFEi4hqK6Yru5qeS7v26Jt.webp"
            alt="Essência Wellness"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60" />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 container text-center max-w-3xl mx-auto px-4"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display text-foreground leading-tight mb-6">
              Respire
            </h2>
            <p className="text-lg md:text-2xl font-light text-foreground/80 leading-relaxed">
              Mais que terapia, é uma experiência de transformação emocional e bem-estar profundo
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-accent text-accent-foreground rounded-full font-light hover:shadow-luxury transition-premium hover:scale-105 inline-block"
            >
              Reserve sua experiência
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-green-500 text-green-600 rounded-full font-light hover:bg-green-50 transition-premium inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.557.821-2.816 2.088-3.645 3.711-1.477 2.773-1.297 5.23.182 7.231 1.62 2.17 4.038 3.408 6.724 3.408 1.22 0 2.397-.264 3.496-.786l.256.015c3.911 0 5.649-2.092 5.921-3.161.559-2.185-.959-4.076-3.159-5.531-.881-.661-2.59-1.428-4.357-1.512l-.258-.009zm0-1.04c1.917.101 3.886.662 5.314 1.549 2.367 1.773 4.471 4.414 3.86 7.514-.381 1.873-1.588 3.094-3.149 3.552-1.345.385-2.236.334-3.926.334-2.568 0-4.723-1.148-6.215-3.312-1.604-2.317-1.757-4.526-.409-7.051.827-1.544 2.073-2.886 3.622-3.654 1.223-.646 2.605-.982 3.903-.932z"/>
              </svg>
              WhatsApp
            </a>
          </motion.div>
        </motion.div>

        {/* Floating Particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/20 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut' as const,
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
          >
            {/* About Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663585076028/3EoquXQC4TpWCoYKjEggF9/about-essencia-2nWfhQbCLeEr5X2j3LJAFG.webp"
                alt="Maria Clara Acyole"
                className="w-full rounded-lg shadow-luxury"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-3xl" />
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display mb-6">Maria Clara Acyole</h2>
              
              <div className="space-y-6 text-foreground/80 font-light leading-relaxed">
                <p>
                  Fisioterapeuta especializada em terapias corporais, com formação em drenagem linfática, massoterapia e ventosaterapia. Mais que técnica, é dedicação genuína ao bem-estar emocional de cada mulher que chega até mim.
                </p>
                
                <p>
                  Entendo que mulheres de hoje carregam muito peso. Não apenas físico, mas emocional. Meu trabalho é ajudá-las a soltar esse peso, a respirar novamente, a se reconectarem com seu corpo e sua paz interior.
                </p>

                <div className="pt-6 border-t border-border">
                  <h3 className="text-sm font-display text-accent mb-4">Especialidades</h3>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Drenagem Linfática Profunda</li>
                    <li>✓ Massoterapia Relaxante & Terapêutica</li>
                    <li>✓ Ventosaterapia Holística</li>
                    <li>✓ Pilates Terapêutico</li>
                    <li>✓ Wellness Combos Personalizados</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-secondary/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display mb-6">Serviços Premium</h2>
            <p className="text-lg text-foreground/70 font-light max-w-2xl mx-auto">
              Cada experiência é cuidadosamente desenhada para transformar seu corpo e sua mente
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                title: 'Drenagem Linfática',
                description: 'Técnica suave que ativa o sistema linfático, reduzindo inchaço e promovendo leveza corporal.',
                icon: '💧',
              },
              {
                title: 'Massoterapia Relaxante',
                description: 'Massagem terapêutica que libera tensões, alivia dores e restaura o bem-estar emocional.',
                icon: '🌿',
              },
              {
                title: 'Ventosaterapia',
                description: 'Terapia holística que melhora circulação, alivia dores musculares e promove desintoxicação.',
                icon: '⭕',
              },
              {
                title: 'Wellness Combos',
                description: 'Experiências personalizadas que combinam múltiplas terapias para transformação completa.',
                icon: '✨',
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(212, 175, 140, 0.2)' }}
                className="p-8 bg-white rounded-lg shadow-luxury transition-premium group cursor-pointer"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-premium">{service.icon}</div>
                <h3 className="text-xl font-display mb-3 text-foreground">{service.title}</h3>
                <p className="text-sm text-foreground/70 font-light leading-relaxed">{service.description}</p>
                <div className="mt-6 h-0.5 w-0 bg-accent group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663585076028/3EoquXQC4TpWCoYKjEggF9/experience-section-Vbc5z7mC3fAsPMQcHzcXj3.webp"
            alt="Experience"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/40" />
        </motion.div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-display mb-8 text-foreground">
              Isto não é apenas estética
            </h2>
            
            <div className="space-y-6 text-foreground/90 font-light text-lg leading-relaxed">
              <p>
                É <span className="text-accent font-semibold">alívio</span> genuíno. É aquela sensação de peso saindo dos seus ombros.
              </p>
              <p>
                É <span className="text-accent font-semibold">leveza</span> que você não sentia há tempos. É respirar fundo e sentir paz.
              </p>
              <p>
                É <span className="text-accent font-semibold">reset emocional</span>. Aquele momento onde você se reconecta com você mesma.
              </p>
              <p>
                É <span className="text-accent font-semibold">silêncio</span>. Aquele silêncio precioso onde só existe você, seu corpo e a cura.
              </p>
              <p>
                É <span className="text-accent font-semibold">respirar novamente</span>. Como se tivesse estado prendendo a respiração a vida toda.
              </p>
            </div>

            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-block mt-10 px-8 py-4 bg-accent text-accent-foreground rounded-full font-light shadow-luxury transition-premium"
            >
              Viver essa experiência
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display mb-6">Histórias de Transformação</h2>
            <p className="text-lg text-foreground/70 font-light">
              Mulheres que encontraram leveza, paz e reconexão com elas mesmas
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                name: 'Ana Silva',
                role: 'Empresária',
                text: 'Cada sessão com Maria Clara é como um reset. Saio de lá leve, respirando melhor, reconectada comigo mesma. É investimento em mim.',
              },
              {
                name: 'Beatriz Costa',
                role: 'Mãe & Profissional',
                text: 'Achei que nunca mais conseguiria relaxar. A drenagem linfática mudou meu corpo e minha mente. Recomendo para todas as mulheres.',
              },
              {
                name: 'Carla Mendes',
                role: 'Consultora',
                text: 'O atendimento é impecável. Desde o primeiro contato até a experiência, tudo é pensado com amor. Essência é luxo de verdade.',
              },
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-8 bg-white rounded-lg shadow-luxury glass-effect"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent">★</span>
                  ))}
                </div>
                <p className="text-foreground/80 font-light leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-display text-sm text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-foreground/60 font-light">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-accent/10 via-secondary/10 to-accent/10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-display mb-6">Pronta para se transformar?</h2>
            <p className="text-lg text-foreground/70 font-light mb-10">
              Envie uma mensagem pelo WhatsApp e vamos agendar sua experiência de bem-estar
            </p>
            
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-green-500 text-white rounded-full font-light shadow-luxury-lg transition-premium text-lg hover:bg-green-600"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.557.821-2.816 2.088-3.645 3.711-1.477 2.773-1.297 5.23.182 7.231 1.62 2.17 4.038 3.408 6.724 3.408 1.22 0 2.397-.264 3.496-.786l.256.015c3.911 0 5.649-2.092 5.921-3.161.559-2.185-.959-4.076-3.159-5.531-.881-.661-2.59-1.428-4.357-1.512l-.258-.009zm0-1.04c1.917.101 3.886.662 5.314 1.549 2.367 1.773 4.471 4.414 3.86 7.514-.381 1.873-1.588 3.094-3.149 3.552-1.345.385-2.236.334-3.926.334-2.568 0-4.723-1.148-6.215-3.312-1.604-2.317-1.757-4.526-.409-7.051.827-1.544 2.073-2.886 3.622-3.654 1.223-.646 2.605-.982 3.903-.932z"/>
              </svg>
              Conversar no WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-40 p-4 bg-green-500 text-white hover:bg-green-600 rounded-full shadow-luxury-lg hover:shadow-luxury transition-premium"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.557.821-2.816 2.088-3.645 3.711-1.477 2.773-1.297 5.23.182 7.231 1.62 2.17 4.038 3.408 6.724 3.408 1.22 0 2.397-.264 3.496-.786l.256.015c3.911 0 5.649-2.092 5.921-3.161.559-2.185-.959-4.076-3.159-5.531-.881-.661-2.59-1.428-4.357-1.512l-.258-.009zm0-1.04c1.917.101 3.886.662 5.314 1.549 2.367 1.773 4.471 4.414 3.86 7.514-.381 1.873-1.588 3.094-3.149 3.552-1.345.385-2.236.334-3.926.334-2.568 0-4.723-1.148-6.215-3.312-1.604-2.317-1.757-4.526-.409-7.051.827-1.544 2.073-2.886 3.622-3.654 1.223-.646 2.605-.982 3.903-.932z"/></svg>
      </motion.a>

      {/* Footer */}
      <footer className="py-12 md:py-16 bg-foreground/5 border-t border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
          >
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-display mb-4">Essência</h3>
              <p className="text-sm text-foreground/70 font-light leading-relaxed">
                Estúdio de bem-estar e terapia corporal premium em Entre Rios, Bahia. Transformação emocional para mulheres de alto padrão.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-display text-sm mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm font-light">
                <li><a href="#about" className="hover:text-accent transition-premium">Sobre Maria Clara</a></li>
                <li><a href="#services" className="hover:text-accent transition-premium">Serviços</a></li>
                <li><a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-premium">Agendar</a></li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-display text-sm mb-4">Navegação</h4>
              <ul className="space-y-2 text-sm font-light">
                <li><a href="/gallery" className="hover:text-accent transition-premium">Galeria</a></li>
                <li><a href="/blog" className="hover:text-accent transition-premium">Blog</a></li>
                <li><a href="/contact" className="hover:text-accent transition-premium">Contato</a></li>
                <li><a href="/upload-results" className="hover:text-accent transition-premium">Upload de Resultados</a></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-display text-sm mb-4">Conecte-se</h4>
              <a
                href="https://www.instagram.com/essencia.er"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-light hover:text-accent transition-premium"
              >
                <Instagram size={18} />
                @essencia.er
              </a>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-border pt-8">
            <p className="text-center text-xs text-foreground/60 font-light">
              © 2026 Essência. Todos os direitos reservados. Bem-estar premium para mulheres extraordinárias.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
