"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowDown, ArrowUpRight, Scale, BriefcaseBusiness, HeartHandshake,
  ShieldCheck, Menu, Instagram, Linkedin, Landmark, FileText, Trophy,
  Building2, Handshake
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const areas = [
  { number: "01", icon: BriefcaseBusiness, title: "Direito Trabalhista", text: "Orientação e atuação em questões relacionadas às relações de trabalho e aos direitos de empregados e empregadores." },
  { number: "02", icon: Landmark, title: "Direito Previdenciário", text: "Acompanhamento de demandas previdenciárias e orientação sobre benefícios e direitos." },
  { number: "03", icon: Scale, title: "Direito Civil", text: "Atuação em questões cíveis, contratos, responsabilidades e relações entre pessoas." },
  { number: "04", icon: Handshake, title: "Mediação", text: "Construção de soluções consensuais por meio do diálogo e da busca por acordos." },
  { number: "05", icon: ShieldCheck, title: "Seguros", text: "Orientação em questões relacionadas a contratos de seguro, coberturas e sinistros." },
  { number: "06", icon: FileText, title: "Compliance", text: "Apoio à integridade, à prevenção de riscos e à adoção de boas práticas." },
  { number: "07", icon: Trophy, title: "Direito Esportivo", text: "Orientação jurídica em relações e questões ligadas ao ambiente esportivo." },
  { number: "08", icon: Building2, title: "Direito Empresarial", text: "Suporte jurídico para empresas, contratos, organização e decisões do negócio." },
];

export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null);
  const revealRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Página inicial">
          <span className="brand-mark">K<span>.</span></span>
          <span className="brand-name">KARINE KLUPPELL<small>ADVOCACIA & CONSULTORIA</small></span>
        </a>
        <nav className={`desktop-nav${menuOpen ? " nav-open" : ""}`}>
          <a href="#sobre" onClick={() => setMenuOpen(false)}>A profissional</a>
          <a href="#atuacao" onClick={() => setMenuOpen(false)}>Áreas de atuação</a>
          <a href="#metodo" onClick={() => setMenuOpen(false)}>Nosso compromisso</a>
          <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
        </nav>
        <a className="header-cta" href="#contato">Vamos conversar <ArrowUpRight size={15}/></a>
        <button className="mobile-menu" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}><Menu/></button>
      </header>

      <section className="hero" id="inicio" ref={heroRef}>
        <motion.div className="hero-image" style={{ y: imageY }} />
        <div className="hero-shade" />
        <div className="hero-content">
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }}>ÉTICA • ESTRATÉGIA • CONFIANÇA</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35, duration: .9 }}>Segurança para<br/><em>seguir em frente.</em></motion.h1>
          <motion.p className="hero-copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .8 }}>Atuação jurídica próxima e estratégica, com atenção às pessoas, às relações e aos negócios.</motion.p>
          <motion.a className="hero-link" href="#sobre" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>Conheça nossa atuação <ArrowDown size={16}/></motion.a>
        </div>
        <div className="hero-index"><span>01</span><i/> ATUAÇÃO PERSONALIZADA</div>
        <div className="hero-side-note">ATENDIMENTO COM RESPONSABILIDADE</div>
      </section>

      <section className="intro section-pad" id="sobre" ref={revealRef}>
        <div className="intro-kicker reveal"><span className="small-rule"/> CONHECIMENTO E PROXIMIDADE</div>
        <div className="intro-grid">
          <h2 className="reveal">Orientação clara.<br/><em>Atuação responsável.</em></h2>
          <div className="intro-text reveal">
            <p>Cada situação merece ser compreendida em seu contexto. O trabalho jurídico começa pela escuta, passa por uma análise cuidadosa e busca caminhos adequados para cada necessidade.</p>
            <p>O compromisso é oferecer atendimento transparente, estratégico e atento aos objetivos de cada pessoa ou negócio.</p>
            <a className="text-link" href="#atuacao">Conheça as áreas de atuação <ArrowUpRight size={17}/></a>
          </div>
        </div>
      </section>

      <section className="areas section-pad" id="atuacao">
        <div className="section-heading">
          <div><span className="small-rule"/> ÁREAS DE ATUAÇÃO</div>
          <p>Direito com atenção<br/><em>a cada contexto.</em></p>
        </div>
        <div className="area-list">
          {areas.map((area) => {
            const Icon = area.icon;
            return (
              <Link className="area-item area-card-link" href={`/atuacao/${["trabalhista","previdenciario","civil","mediacao","seguros","compliance","esportivo","empresarial"][Number(area.number)-1]}/`} key={area.number} aria-label={`Saiba mais sobre ${area.title}`}>
                <span className="area-number">{area.number}</span><Icon className="area-icon" strokeWidth={1.2}/>
                <div><h3>{area.title}</h3><p>{area.text}</p></div><ArrowUpRight className="area-arrow"/>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="statement" id="metodo">
        <div className="statement-bg"/>
        <div className="statement-content">
          <span className="small-rule"/> NOSSO COMPROMISSO
          <h2>Escuta atenta.<br/><em>Decisões bem orientadas.</em></h2>
          <p>Ética, transparência e responsabilidade em cada etapa do atendimento.</p>
        </div>
      </section>

      <section className="profile section-pad">
        <div className="profile-photo"><div className="photo-placeholder"><span>RETRATO PROFISSIONAL</span><small>Imagem será inserida nesta área</small></div></div>
        <div className="profile-copy">
          <span className="small-rule"/> CONHEÇA A PROFISSIONAL
          <h2>Karine<br/><em>Kluppell.</em></h2>
          <p>Este espaço será dedicado à apresentação profissional, formação, trajetória e informações de registro, com conteúdo confirmado pela própria profissional.</p>
          <a className="text-link" href="#contato">Entre em contato <ArrowUpRight size={17}/></a>
        </div>
      </section>

      <section className="contact section-pad" id="contato">
        <div className="contact-top"><span className="small-rule"/> CONTATO</div>
        <div className="contact-grid">
          <h2>Vamos conversar<br/><em>sobre sua necessidade?</em></h2>
          <div className="contact-details">
            <p>Entre em contato para apresentar sua situação e conhecer as possibilidades de atendimento.</p>
            <p>Telefone, WhatsApp, e-mail e endereço serão incluídos assim que os dados oficiais forem confirmados.</p>
            <a className="text-link" href="#inicio">Voltar ao início <ArrowUpRight size={17}/></a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <a className="brand brand-footer" href="#inicio"><span className="brand-mark">K<span>.</span></span><span className="brand-name">KARINE KLUPPELL<small>ADVOCACIA & CONSULTORIA</small></span></a>
        <span>© {new Date().getFullYear()} — Todos os direitos reservados.</span>
        <div className="socials"><a href="#contato" aria-label="Instagram"><Instagram size={17}/></a><a href="#contato" aria-label="LinkedIn"><Linkedin size={17}/></a></div>
      </footer>
    </main>
  );
}
