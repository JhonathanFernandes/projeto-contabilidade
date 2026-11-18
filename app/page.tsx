"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Scale, Calculator, ShieldCheck, Menu, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const areas = [
  { number: "01", icon: Calculator, title: "Contabilidade estratégica", text: "Organização financeira, planejamento tributário e suporte para decisões mais seguras." },
  { number: "02", icon: Scale, title: "Assessoria jurídica", text: "Orientação jurídica clara e cuidadosa para proteger interesses e prevenir riscos." },
  { number: "03", icon: ShieldCheck, title: "Consultoria integrada", text: "Uma visão que conecta o cenário contábil e jurídico para enxergar o todo." },
];

export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null);
  const revealRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal", {
        y: 42, opacity: 0, duration: 1, stagger: 0.14, ease: "power3.out",
        scrollTrigger: { trigger: revealRef.current, start: "top 78%" }
      });
      gsap.utils.toArray<HTMLElement>(".line-reveal").forEach((el) => {
        gsap.from(el, { scaleX: 0, transformOrigin: "left", duration: 1.1, ease: "power3.inOut",
          scrollTrigger: { trigger: el, start: "top 88%" } });
      });
    });
    return () => ctx.revert();
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Página inicial">
          <span className="brand-mark">M<span>.</span></span>
          <span className="brand-name">MENEGHETTI<small>CONTABILIDADE & ADVOCACIA</small></span>
        </a>
        <nav className={`desktop-nav${menuOpen ? " nav-open" : ""}`}>
          <a href="#sobre" onClick={() => setMenuOpen(false)}>A profissional</a><a href="#atuacao" onClick={() => setMenuOpen(false)}>Atuação</a><a href="#metodo" onClick={() => setMenuOpen(false)}>Nosso olhar</a><a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
        </nav>
        <a className="header-cta" href="#contato">Vamos conversar <ArrowUpRight size={15}/></a>
        <button className="mobile-menu" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}><Menu/></button>
      </header>

      <section className="hero" id="inicio" ref={heroRef}>
        <motion.div className="hero-image" style={{ y: imageY }} />
        <div className="hero-shade" />
        <div className="hero-content">
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }}>ESTRATÉGIA • CONFIANÇA • DIREÇÃO</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35, duration: .9 }}>Clareza para<br/><em>decidir melhor.</em></motion.h1>
          <motion.p className="hero-copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .8 }}>Contabilidade e advocacia em uma atuação integrada, humana e estratégica.</motion.p>
          <motion.a className="hero-link" href="#sobre" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>Conheça nossa atuação <ArrowDown size={16}/></motion.a>
        </div>
        <div className="hero-index"><span>01</span><i/> UMA NOVA PERSPECTIVA</div>
        <div className="hero-side-note">ATENDIMENTO PERSONALIZADO</div>
      </section>

      <section className="intro section-pad" id="sobre" ref={revealRef}>
        <div className="intro-kicker reveal"><span className="small-rule"/> UMA ATUAÇÃO, DUAS PERSPECTIVAS</div>
        <div className="intro-grid">
          <h2 className="reveal">Conhecimento técnico.<br/><em>Visão que conecta.</em></h2>
          <div className="intro-text reveal">
            <p>Decisões importantes pedem mais do que respostas isoladas. Pedem análise, contexto e alguém que compreenda como cada escolha impacta o todo.</p>
            <p>Unimos conhecimento contábil e jurídico para oferecer orientação próxima, responsável e alinhada aos objetivos de cada cliente.</p>
            <a className="text-link" href="#atuacao">Descubra como podemos ajudar <ArrowUpRight size={17}/></a>
          </div>
        </div>
      </section>

      <section className="areas section-pad" id="atuacao">
        <div className="section-heading">
          <div><span className="small-rule"/> ÁREAS DE ATUAÇÃO</div>
          <p>Precisão nos detalhes.<br/><em>Estratégia no conjunto.</em></p>
        </div>
        <div className="area-list">
          {areas.map((area) => {
            const Icon = area.icon;
            return (
              <article className="area-item" key={area.number}>
                <span className="area-number">{area.number}</span><Icon className="area-icon" strokeWidth={1.2}/>
                <div><h3>{area.title}</h3><p>{area.text}</p></div><ArrowUpRight className="area-arrow"/>
              </article>
            );
          })}
        </div>
      </section>

      <section className="statement" id="metodo">
        <div className="statement-bg"/>
        <div className="statement-content">
          <span className="small-rule"/> NOSSO COMPROMISSO
          <h2>Mais do que resolver questões.<br/><em>Construir caminhos seguros.</em></h2>
          <p>Trabalho pautado pela ética, transparência e atenção genuína a cada história.</p>
        </div>
      </section>

      <section className="profile section-pad">
        <div className="profile-photo"><div className="photo-placeholder"><span>FOTO PROFISSIONAL</span><small>Substituir por retrato autorizado</small></div></div>
        <div className="profile-copy">
          <span className="small-rule"/> CONHEÇA A PROFISSIONAL
          <h2>Experiência com<br/><em>olhar multidisciplinar.</em></h2>
          <p>Uma trajetória construída com dedicação ao conhecimento, responsabilidade técnica e compromisso com pessoas e negócios.</p>
          <p className="editable-note">Esta apresentação é um texto inicial e será personalizada com a biografia, formação e registros profissionais confirmados.</p>
          <a className="text-link" href="#contato">Entre em contato <ArrowUpRight size={17}/></a>
        </div>
      </section>

      <section className="contact section-pad" id="contato">
        <div className="contact-top"><span className="small-rule"/> FALE CONOSCO</div>
        <div className="contact-grid">
          <h2>Vamos conversar<br/><em>sobre o que importa?</em></h2>
          <div className="contact-details">
            <p>Conte um pouco sobre o que você precisa. Será um prazer entender seu momento e indicar o melhor caminho.</p>
            <a href="mailto:contato@seudominio.com.br"><Mail size={18}/> contato@seudominio.com.br <ArrowUpRight size={15}/></a>
            <a href="https://wa.me/5500000000000"><Phone size={18}/> WhatsApp <ArrowUpRight size={15}/></a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <a className="brand brand-footer" href="#inicio"><span className="brand-mark">M<span>.</span></span><span className="brand-name">MENEGHETTI<small>CONTABILIDADE & ADVOCACIA</small></span></a>
        <span>© {new Date().getFullYear()} — Todos os direitos reservados.</span>
        <div className="socials"><a href="#" aria-label="Instagram"><Instagram size={17}/></a><a href="#" aria-label="LinkedIn"><Linkedin size={17}/></a></div>
      </footer>
    </main>
  );
}
