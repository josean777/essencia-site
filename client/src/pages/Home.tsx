import { Instagram, MessageCircle, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', procedure: '' });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const therapistName = 'Maria Clara Acyole';
  const logoUrl = '/logo-essencia.png';
  const locationUrl = 'https://maps.apple.com/?ll=-11.944236,-38.086404&q=Localiza%C3%A7%C3%A3o%20Marcada&t=m';

  const procedures = [
    'Drenagem Linfática',
    'Massagem Relaxante',
    'Terapia Corporal',
    'Bem-estar Emocional',
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.procedure) {
      alert('Por favor, preencha todos os campos');
      return;
    }
    const message = `Olá Maria Clara! Meu nome é ${formData.name}. Gostaria de agendar uma sessão de ${formData.procedure}. Quais são os dias e horários disponíveis?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5575998401607?text=${encodedMessage}`, '_blank');
    setFormData({ name: '', procedure: '' });
  };

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
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/95 backdrop-blur-md shadow-luxury' : 'bg-transparent'
        }`}
      >
        <div className="container flex items-center justify-between py-4 md:py-6 gap-4">
          <div className="flex items-center gap-2 flex-shrink-0">
            <img src={logoUrl} alt="Essência Logo" className="h-8 md:h-10 w-auto" />
            <h1 className="text-lg md:text-2xl font-display text-foreground whitespace-nowrap">Essência</h1>
          </div>
          <div className="flex items-center gap-3 md:gap-6 flex-wrap justify-end">
            <a href="#galeria" className="text-xs md:text-sm font-light hover:text-accent transition-premium whitespace-nowrap">Galeria</a>
            <a href="#blog" className="text-xs md:text-sm font-light hover:text-accent transition-premium whitespace-nowrap">Blog</a>
            <a href="#contact" className="text-xs md:text-sm font-light hover:text-accent transition-premium whitespace-nowrap">Serviços</a>
            <a href="#sobre" className="text-xs md:text-sm font-light hover:text-accent transition-premium whitespace-nowrap">Sobre</a>
            <a href="#agendamento" className="px-3 md:px-6 py-2 md:py-3 bg-accent text-accent-foreground rounded-full text-xs md:text-sm font-light hover:shadow-luxury transition-premium hover:scale-105 flex-shrink-0">
              Agendar
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 w-full max-w-full">
        <motion.div initial={{ scale: 1.1, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }} className="absolute inset-0 z-0 overflow-hidden">
          <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663585076028/3EoquXQC4TpWCoYKjEggF9/hero-essencia-HFEi4hqK6Yru5qeS7v26Jt.webp" alt="Essência Wellness" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60" />
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 text-center px-4">
          <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-display text-foreground mb-2">Respire</motion.h2>
          <motion.p variants={itemVariants} className="text-lg md:text-2xl text-accent mb-6 font-light">com {therapistName}</motion.p>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-foreground/70 font-light max-w-2xl mx-auto mb-10">
            Mais que terapia, é uma experiência de transformação emocional e bem-estar profundo
          </motion.p>
          <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap">
            <a href="#agendamento" className="px-8 py-4 bg-accent text-accent-foreground rounded-full font-light hover:shadow-luxury transition-premium hover:scale-105 inline-block">
              Reserve sua experiência
            </a>
            <a href={`https://wa.me/5575998401607?text=Olá%20Essência!%20Gostaria%20de%20agendar%20uma%20sessão%20de%20bem-estar.`} target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-green-500 text-green-600 rounded-full font-light hover:bg-green-50 transition-premium inline-flex items-center gap-2">
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </motion.div>
        </motion.div>

        {/* Floating Particles */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent/20 rounded-full blur-3xl"
              animate={{
                y: [0, -100, 0],
                x: [0, 50, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6">Sobre Maria Clara</h2>
              <p className="text-lg text-foreground/70 font-light mb-4">
                Especialista em drenagem linfática, massagem terapêutica e bem-estar emocional, Maria Clara Acyole dedica-se a transformar vidas através de terapias corporais integradas.
              </p>
              <p className="text-lg text-foreground/70 font-light mb-6">
                Com anos de experiência, ela combina técnicas premium com uma abordagem humanizada, criando um espaço seguro para sua transformação.
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com/essencia.er" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-premium">
                  <Instagram size={20} /> Instagram
                </a>
              </div>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg overflow-hidden">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663585076028/3EoquXQC4TpWCoYKjEggF9/about-essencia-HFEi4hqK6Yru5qeS7v26Jt.webp" alt="Maria Clara" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-foreground/5">
        <div className="container">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} className="text-4xl md:text-5xl font-display text-center mb-16">
            Serviços Premium
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {procedures.map((procedure, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="p-8 bg-background rounded-lg border border-border hover:shadow-luxury transition-premium">
                <h3 className="text-2xl font-display text-foreground mb-4">{procedure}</h3>
                <p className="text-foreground/70 font-light">Experiência personalizada focada em sua transformação e bem-estar integral.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agendamento Section */}
      <section id="agendamento" className="py-20 md:py-32 bg-background">
        <div className="container max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-display text-center mb-12">Agende sua Experiência</h2>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label className="block text-foreground font-light mb-2">Seu Nome Completo</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Digite seu nome completo"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label className="block text-foreground font-light mb-2">Procedimento Desejado</label>
                <select
                  value={formData.procedure}
                  onChange={(e) => setFormData({ ...formData, procedure: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">Selecione um procedimento</option>
                  {procedures.map((proc) => (
                    <option key={proc} value={proc}>{proc}</option>
                  ))}
                </select>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-8 py-4 bg-accent text-accent-foreground rounded-full font-light hover:shadow-luxury transition-premium"
              >
                Enviar para WhatsApp
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Localização Section */}
      <section className="py-20 md:py-32 bg-foreground/5">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <h2 className="text-4xl md:text-5xl font-display mb-8">Nos Visite</h2>
            <p className="text-lg text-foreground/70 font-light mb-8">Estúdio localizado em Entre Rios, Bahia</p>
            <a href={locationUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground rounded-full font-light hover:shadow-luxury transition-premium hover:scale-105">
              <MapPin size={20} />
              Ver Localização no Mapa
            </a>
          </motion.div>
        </div>
      </section>

      {/* Galeria Section */}
      <section id="galeria" className="py-20 md:py-32 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-display text-center mb-16">Galeria do Estúdio</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['studio-1', 'studio-2', 'studio-3'].map((img, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="aspect-square bg-foreground/5 rounded-lg overflow-hidden">
                <img src={`https://d2xsxph8kpxj0f.cloudfront.net/310519663585076028/3EoquXQC4TpWCoYKjEggF9/${img}-HFEi4hqK6Yru5qeS7v26Jt.webp`} alt={`Studio ${idx + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 md:py-32 bg-foreground/5">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-display text-center mb-16">Blog & Artigos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Drenagem Linfática: Benefícios e Técnicas', desc: 'Conheça os benefícios da drenagem linfática para sua saúde e bem-estar.' },
              { title: 'Bem-estar Emocional: O Caminho para a Transformação', desc: 'Explore como o bem-estar emocional impacta sua qualidade de vida.' },
            ].map((article, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="p-8 bg-background rounded-lg border border-border hover:shadow-luxury transition-premium">
                <h3 className="text-2xl font-display text-foreground mb-4">{article.title}</h3>
                <p className="text-foreground/70 font-light">{article.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-accent/5">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-display mb-8">Pronto para sua Transformação?</h2>
            <p className="text-lg text-foreground/70 font-light mb-10 max-w-2xl mx-auto">
              Envie uma mensagem pelo WhatsApp e vamos agendar sua experiência de bem-estar
            </p>
            <motion.a
              href={`https://wa.me/5575998401607?text=Olá%20Maria%20Clara!%20Gostaria%20de%20agendar%20uma%20sessão%20de%20bem-estar.`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-green-500 text-white rounded-full font-light shadow-luxury-lg transition-premium text-lg hover:bg-green-600"
            >
              <MessageCircle size={24} />
              Conversar no WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={`https://wa.me/5575998401607?text=Olá%20Maria%20Clara!%20Gostaria%20de%20agendar%20uma%20sessão%20de%20bem-estar.`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-40 p-4 bg-green-500 text-white hover:bg-green-600 rounded-full shadow-luxury-lg hover:shadow-luxury transition-premium"
      >
        <MessageCircle size={28} />
      </motion.a>

      {/* Footer */}
      <footer className="py-12 md:py-16 bg-foreground/5 border-t border-border">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="font-display text-foreground mb-4">Essência</h3>
              <p className="text-foreground/70 font-light">Estúdio de bem-estar e terapia corporal premium em Entre Rios, Bahia.</p>
            </div>
            <div>
              <h3 className="font-display text-foreground mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-foreground/70 font-light">
                <li><a href="#galeria" className="hover:text-accent transition-premium">Galeria</a></li>
                <li><a href="#blog" className="hover:text-accent transition-premium">Blog</a></li>
                <li><a href="#agendamento" className="hover:text-accent transition-premium">Agendar</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-foreground mb-4">Contato</h3>
              <p className="text-foreground/70 font-light">WhatsApp: +55 75 99840-1607</p>
              <a href="https://instagram.com/essencia.er" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-premium mt-4">
                <Instagram size={18} /> Instagram
              </a>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-foreground/70 font-light">
            <p>&copy; 2026 Essência. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
