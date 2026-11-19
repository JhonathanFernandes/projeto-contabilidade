"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, GraduationCap, BriefcaseBusiness, Mail, Linkedin, Instagram, MessageCircle, Globe, MapPin } from "lucide-react";
const timeline=[
{year:"2026",title:"Ano de testes",text:"CBS de 0,9% e IBS de 0,1% em fase de teste. Os valores recolhidos podem ser compensados com PIS/Cofins no mesmo período de apuração. O contribuinte que cumprir as obrigações acessórias previstas fica dispensado do recolhimento desses valores em 2026."},
{year:"2027–2028",title:"CBS e Imposto Seletivo",text:"Início da cobrança da CBS pela alíquota de referência, com redução de 0,1 ponto percentual, e do IBS à alíquota de 0,1%. PIS e Cofins são extintos; as alíquotas do IPI ficam zeradas, exceto para produtos que também sejam industrializados na Zona Franca de Manaus; e começa a cobrança do Imposto Seletivo."},
{year:"2029–2032",title:"Transição de ICMS e ISS",text:"A substituição ocorre gradualmente: em 2029, IBS corresponde a 10% e ICMS/ISS a 90%; em 2030, 20% e 80%; em 2031, 30% e 70%; em 2032, 40% e 60%, respectivamente."},
{year:"2033",title:"Novo modelo integral",text:"O novo modelo entra em vigência integral. ICMS e ISS são extintos, e o IBS passa a operar integralmente. As alíquotas do IPI permanecem zeradas, com exceção dos produtos que também sejam industrializados na Zona Franca de Manaus."}
];
const experience=[
{role:"Contadora",company:"Kluppell Assessoria Empresarial",period:"Abril de 2023 – atual",detail:"Contabilidade e consultoria tributária",place:"Curitiba · Remoto"},
{role:"Contadora",company:"Valor Tributário",period:"Abril de 2020 – atual",detail:"Auditoria tributária e recuperação de créditos tributários",place:"Curitiba, Paraná · Remoto"}
];
const education=[
{course:"Bacharelado em Direito",school:"Universidade Tuiuti do Paraná (UTP)",period:"2022–2026"},
{course:"Bacharelado em Ciências Contábeis",school:"UNINTER – Centro Universitário Internacional",period:"2016–2019"},
{course:"Especialização em Gestão de Risco, Compliance e Auditoria",school:"Pontifícia Universidade Católica do Paraná (PUCPR)"}
];
const partners=[
{name:"Vivo",logo:"vivo"},{name:"Claro",logo:"claro"},{name:"TIM",logo:"tim"},{name:"iFood",logo:"ifood"},{name:"Natura",logo:"natura"},
{name:"Nestlé",logo:"nestle"},{name:"McDonald's",logo:"mcdonalds"},{name:"Magazine Luiza",logo:"magazineluiza"},{name:"Nubank",logo:"nubank"},{name:"Mercado Livre",logo:"mercadolibre"}
];
const areas=[
{slug:"consultoria-tributaria",title:"Consultoria tributária",text:"Orientação estratégica para decisões fiscais mais seguras."},
{slug:"auditoria-tributaria",title:"Auditoria tributária",text:"Análise técnica de procedimentos e obrigações fiscais."},
{slug:"recuperacao-creditos",title:"Recuperação de créditos",text:"Identificação de oportunidades e revisão de créditos tributários."},
{slug:"planejamento-fiscal",title:"Planejamento fiscal",text:"Estratégias alinhadas à operação e ao crescimento da empresa."},
{slug:"imposto-de-renda",title:"Declaração de Imposto de Renda",text:"Preparação de declarações com atenção às regras e aos prazos."},
{slug:"reforma-tributaria",title:"Reforma tributária",text:"Preparação para os impactos das novas regras sobre o consumo."}
];
const portraitPath = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/foto-karine.jpg`;
const heroPortraitPath = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/karine-escritorio.jpeg`;
export default function Home(){
const [menuOpen,setMenuOpen]=useState(false);const [introOpen,setIntroOpen]=useState(true);const closeMenu=()=>setMenuOpen(false);
useEffect(()=>{document.body.classList.toggle("intro-active",introOpen);return()=>document.body.classList.remove("intro-active");},[introOpen]);
useEffect(()=>{if(!introOpen)return;const timer=window.setTimeout(()=>setIntroOpen(false),5000);return()=>window.clearTimeout(timer);},[introOpen]);
useEffect(()=>{if("scrollRestoration" in window.history)window.history.scrollRestoration="manual";window.scrollTo(0,0);document.documentElement.classList.add("motion-ready");const targets=document.querySelectorAll(".scroll-reveal");if(!("IntersectionObserver" in window)){targets.forEach(el=>el.classList.add("is-visible"));return()=>document.documentElement.classList.remove("motion-ready");}const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target);}});},{threshold:0.12,rootMargin:"0px 0px -8% 0px"});targets.forEach(el=>observer.observe(el));return()=>{observer.disconnect();document.documentElement.classList.remove("motion-ready");};},[]);
return <>
{introOpen&&<section className="site-intro" aria-label="Abertura do site">
  <div className="intro-video-frame">
    <video className="intro-video" autoPlay muted playsInline preload="auto" onTimeUpdate={event=>{if(event.currentTarget.currentTime>=5)setIntroOpen(false)}} onEnded={()=>setIntroOpen(false)} onError={()=>setIntroOpen(false)}>
      <source src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/video-inicio-sem-fundo.webm`} type="video/webm"/>
    </video>
  </div>
  <p className="intro-loading" aria-live="polite"><span className="intro-loader" aria-hidden="true"/> Carregando...</p>
</section>}
<main aria-hidden={introOpen}>
<header className="site-header">
<a className="brand" href="#inicio" aria-label="Página inicial"><span className="brand-mark" aria-hidden="true">K</span><span className="brand-wordmark"><span className="brand-name">KARINE KLUPPELL</span></span></a>
<nav className={"desktop-nav"+(menuOpen?" nav-open":"")}><a href="#sobre" onClick={closeMenu}>Sobre</a><a href="#atuacao" onClick={closeMenu}>Áreas de atuação</a><a href="#trajetoria" onClick={closeMenu}>Trajetória e formação</a><a href="#reforma" onClick={closeMenu}>Reforma Tributária</a><a href="#contato" onClick={closeMenu}>Contato</a></nav>
<a className="header-cta" href="#contato">Vamos conversar <ArrowUpRight size={15}/></a><button className="mobile-menu" aria-label={menuOpen?"Fechar menu":"Abrir menu"} aria-expanded={menuOpen} onClick={()=>setMenuOpen(open=>!open)}><Menu/></button>
</header>
<section className="hero" id="inicio"><div className="hero-content"><h1><em>Clareza e comprometimento</em> para sua empresa.</h1><div className="hero-portrait"><img src={heroPortraitPath} alt="Karine Kluppell em seu escritório"/></div><a className="hero-link" href="#contato">Entrar em contato <ArrowUpRight size={17}/></a></div></section>
<section className="intro section-pad scroll-reveal reveal-from-right" id="sobre"><div className="intro-kicker"><span className="small-rule"/> SOBRE KARINE</div><h2 className="intro-title">Um pouco sobre <em>Karine.</em></h2><div className="intro-grid"><div className="intro-photo"><img src={portraitPath} alt="Karine Kluppell"/></div><div className="intro-text"><p>Sou contadora há 16 anos e, ao longo dessa trajetória, aprendi que a área tributária vai muito além de números — envolve estratégia, análise e tomada de decisão.</p><p>Atuo em consultoria tributária, lidando com desafios reais das empresas, especialmente em recuperação de créditos e planejamento fiscal. É um trabalho que exige conhecimento técnico e atenção às mudanças constantes da legislação.</p><p>Atualmente, também sou estudante de Direito, o que amplia minha visão e aprofunda minha forma de compreender o sistema tributário.</p><p>Acredito em uma contabilidade mais próxima do negócio, estratégica e com propósito: ajudar empresas a crescer com segurança e inteligência.</p></div></div></section>
<section className="profile section-pad scroll-reveal reveal-from-left" id="trajetoria"><div className="profile-photo"><img src={portraitPath} alt="Foto profissional de Karine Kluppell"/></div><div className="profile-copy"><div className="profile-kicker"><span className="small-rule"/> TRAJETÓRIA E FORMAÇÃO</div><h2>Trajetória</h2><div className="career-list">{experience.map(item=><article className="career-item" key={item.company}><span>{item.period}</span><h3>{item.role} · {item.company}</h3><p>{item.detail}</p><small>{item.place}</small></article>)}</div><div className="profile-learning"><h3>Formação acadêmica</h3><div className="education-list">{education.map(item=><article className="education-item" key={item.school}><GraduationCap className="tax-icon" strokeWidth={1.35}/><div><h3>{item.course}</h3><p>{item.school}</p></div>{item.period&&<span>{item.period}</span>}</article>)}</div></div></div></section>
<section className="areas section-pad scroll-reveal reveal-from-left" id="atuacao"><div className="areas-heading"><h2>Áreas de <em>atuação.</em></h2></div><div className="areas-grid">{areas.map(area=><Link className="area-panel" href={`/atuacao/${area.slug}`} key={area.slug}><h3>{area.title}</h3><p>{area.text}</p><span>Saiba mais <ArrowUpRight size={16}/></span></Link>)}</div></section>
<section className="statement scroll-reveal reveal-from-right" id="reforma"><div className="statement-content"><h2>Entenda a Reforma Tributária do Consumo <em>e o que muda.</em></h2><p>A transição exige atenção às novas regras, aos documentos fiscais e aos reflexos de cada etapa na operação das empresas.</p><a className="text-link" href="https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/acoes-e-programas/reforma-tributaria-do-consumo/entenda/entenda-a-reforma-tributaria-do-consumo" target="_blank" rel="noreferrer">Acompanhe as informações oficiais <ArrowUpRight size={17}/></a></div><div className="timeline">{timeline.map(item=><article className="timeline-item" key={item.year}><span className="timeline-year">{item.year}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div><p className="timeline-note">Cronograma geral com base nas orientações oficiais da Receita Federal. Regras específicas, exceções e obrigações acessórias devem ser verificadas conforme a atividade e o enquadramento de cada contribuinte.</p></section>
<section className="partners section-pad scroll-reveal reveal-from-left" aria-labelledby="partners-title"><div className="partners-heading"><h2 id="partners-title">Empresas <em>parceiras.</em></h2></div><div className="partner-marquee" aria-label="Marcas demonstrativas em movimento"><div className="partner-track">{[...partners,...partners].map((partner,index)=><div className="partner-card" key={`${partner.name}-${index}`}><span className={`partner-wordmark partner-${partner.logo}`}>{partner.name}</span></div>)}</div></div></section>
<section className="contact section-pad scroll-reveal reveal-from-right" id="contato"><div className="contact-grid"><h2>Precisa de uma consultoria ou ajuda para <em>sua empresa?</em></h2><div className="contact-details"><form className="contact-form" onSubmit={event=>event.preventDefault()}><label htmlFor="contact-email">Seu e-mail</label><div className="contact-composer"><div className="contact-input"><Mail size={19}/><input id="contact-email" name="email" type="email" placeholder="Digite seu melhor e-mail" autoComplete="email"/></div></div></form><div className="contact-socials" aria-label="Canais de contato"><a href="https://www.linkedin.com/in/karine-kluppell-8748bb114" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><Linkedin size={20}/></a><span className="contact-social-placeholder" title="Instagram" aria-label="Instagram" role="img"><Instagram size={20}/></span><span className="contact-social-placeholder" title="WhatsApp" aria-label="WhatsApp" role="img"><MessageCircle size={20}/></span><span className="contact-social-placeholder" title="Site" aria-label="Site" role="img"><Globe size={20}/></span><span className="contact-social-placeholder" title="Google" aria-label="Google" role="img"><MapPin size={20}/></span></div></div></div></section>
<footer className="footer"><a className="brand brand-footer" href="#inicio"><span className="brand-mark" aria-hidden="true">K</span><span className="brand-wordmark"><span className="brand-name">KARINE KLUPPELL</span></span></a><span>Desenvolvido por JHOWDEV</span><div className="socials"><a href="https://www.linkedin.com/in/karine-kluppell-8748bb114" aria-label="LinkedIn" target="_blank" rel="noreferrer"><BriefcaseBusiness size={17}/></a></div></footer>
<a className="whatsapp-float" href="https://wa.me/?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20consultoria%20tribut%C3%A1ria." target="_blank" rel="noreferrer" aria-label="Conversar pelo WhatsApp" title="WhatsApp"><MessageCircle size={27}/><span>WhatsApp</span></a>
</main></>;
}
