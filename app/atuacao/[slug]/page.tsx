import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const services: Record<string, { title: string; intro: string; details: string[]; note: string }> = {
  trabalhista: {
    title: "Direito Trabalhista",
    intro: "Orientação jurídica em questões relacionadas às relações de trabalho, com análise cuidadosa dos direitos e deveres envolvidos.",
    details: ["Análise de situações ligadas ao contrato de trabalho e às condições de trabalho.", "Orientação sobre verbas trabalhistas, rescisões e demais questões da relação entre empregado e empregador.", "Avaliação inicial de documentos e dos caminhos jurídicos possíveis para cada caso."],
    note: "A atuação e as medidas cabíveis dependem da análise individual dos fatos e documentos."
  },
  previdenciario: {
    title: "Direito Previdenciário",
    intro: "Acompanhamento de questões relacionadas à Previdência Social e à busca por benefícios previdenciários.",
    details: ["Orientação sobre benefícios e requisitos previdenciários.", "Análise de histórico contributivo e documentação apresentada.", "Acompanhamento de pedidos, revisões e recursos, conforme o caso."],
    note: "A possibilidade de concessão ou revisão depende dos requisitos legais e da documentação de cada pessoa."
  },
  civil: {
    title: "Direito Civil",
    intro: "Atuação em questões que envolvem direitos e obrigações nas relações entre pessoas, contratos e responsabilidades.",
    details: ["Análise e orientação em contratos e obrigações.", "Questões relacionadas à responsabilidade civil e reparação de danos.", "Orientação em conflitos e relações jurídicas de natureza civil."],
    note: "O encaminhamento adequado depende da natureza do conflito e das provas disponíveis."
  },
  mediacao: {
    title: "Mediação",
    intro: "A mediação busca facilitar o diálogo entre as partes para que possam construir, de forma voluntária, uma solução para o conflito.",
    details: ["Identificação dos pontos de divergência e dos interesses envolvidos.", "Apoio à comunicação respeitosa e à construção de alternativas.", "Formalização de entendimentos, quando houver consenso e cabimento."],
    note: "A mediação depende da participação voluntária e da adequação do conflito a esse método."
  },
  seguros: {
    title: "Seguros",
    intro: "Orientação em questões relacionadas a contratos de seguro, coberturas, negativas e sinistros.",
    details: ["Análise das condições da apólice e das coberturas contratadas.", "Orientação diante de dúvidas ou divergências sobre indenizações.", "Avaliação de documentos e comunicações da seguradora."],
    note: "A cobertura depende das condições contratadas, dos fatos e das regras aplicáveis."
  },
  compliance: {
    title: "Compliance",
    intro: "Apoio à organização de práticas de integridade e prevenção de riscos jurídicos nas atividades de organizações.",
    details: ["Levantamento inicial de riscos e procedimentos internos.", "Orientação para políticas, regras e controles compatíveis com a organização.", "Apoio à disseminação de práticas éticas e canais de orientação."],
    note: "As medidas precisam ser adequadas ao porte, à atividade e à realidade de cada organização."
  },
  esportivo: {
    title: "Direito Esportivo",
    intro: "Orientação jurídica em relações e questões ligadas ao ambiente esportivo, seus profissionais e organizações.",
    details: ["Análise de contratos e relações no contexto esportivo.", "Orientação em questões institucionais e negociais relacionadas ao esporte.", "Avaliação de conflitos e documentos ligados à atividade esportiva."],
    note: "A análise considera as regras aplicáveis à modalidade, à entidade e à relação envolvida."
  },
  empresarial: {
    title: "Direito Empresarial",
    intro: "Suporte jurídico para empresas em questões contratuais, organização das relações comerciais e decisões do negócio.",
    details: ["Orientação na elaboração e análise de contratos empresariais.", "Apoio jurídico em relações entre sócios, fornecedores e parceiros.", "Análise preventiva de riscos jurídicos ligados à atividade empresarial."],
    note: "A orientação deve considerar a estrutura, a atividade e os objetivos de cada empresa."
  }
};

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services[slug];

  if (!service) {
    return <main className="service-page"><p>Esta área não foi encontrada.</p><Link className="service-back" href="/">Voltar ao início</Link></main>;
  }

  return (
    <main className="service-page">
      <header className="service-header">
        <Link className="service-brand" href="/">K<span>.</span> KARINE KLUPPELL</Link>
        <Link className="service-back" href="/#atuacao"><ArrowLeft size={16}/> Todas as áreas</Link>
      </header>
      <section className="service-hero">
        <span className="service-eyebrow">ÁREAS DE ATUAÇÃO · KARINE KLUPPELL</span>
        <h1>{service.title}</h1>
        <p>{service.intro}</p>
      </section>
      <section className="service-content">
        <span className="service-kicker">COMO PODEMOS ORIENTAR</span>
        <h2>Uma análise cuidadosa para cada situação.</h2>
        <ul>{service.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
        <p className="service-note">{service.note}</p>
        <Link className="service-contact" href="/#contato">Solicitar atendimento <ArrowUpRight size={17}/></Link>
      </section>
      <footer className="service-footer"><Link href="/">KARINE KLUPPELL · ADVOCACIA & CONSULTORIA</Link><span>© {new Date().getFullYear()} — Todos os direitos reservados.</span></footer>
    </main>
  );
}
