import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const services: Record<string, { title: string; intro: string; importance: string; benefits: string[]; role: string; note: string }> = {
  "recuperacao-creditos": {
    title: "Recuperação de créditos tributários",
    intro: "Uma análise cuidadosa da apuração e dos recolhimentos pode revelar valores pagos indevidamente ou a maior, ou créditos que a empresa pode aproveitar conforme a legislação.",
    importance: "Tributos pagos a maior ou créditos não aproveitados podem representar recursos importantes para a empresa. Identificar essas situações ajuda a evitar perdas financeiras e a melhorar a gestão do caixa, sempre respeitando os requisitos legais.",
    benefits: ["Identificar possíveis pagamentos indevidos ou feitos a maior.", "Avaliar créditos tributários que possam ser aproveitados ou recuperados.", "Organizar documentos e informações para dar suporte aos procedimentos cabíveis.", "Trazer mais clareza sobre oportunidades e riscos, sem presumir que todo valor analisado será recuperável."],
    role: "O trabalho da Karine é examinar informações contábeis e fiscais, revisar os critérios aplicáveis, identificar oportunidades e inconsistências e orientar tecnicamente os próximos passos de acordo com a legislação e os documentos da empresa.",
    note: "A existência, o valor e a possibilidade de recuperação de créditos dependem da análise individual, da documentação e das regras aplicáveis a cada período e contribuinte."
  },
  "auditoria-tributaria": {
    title: "Auditoria tributária",
    intro: "A auditoria tributária revisa apurações, declarações e procedimentos fiscais para verificar se as informações estão consistentes e se as obrigações estão sendo tratadas corretamente.",
    importance: "Erros fiscais podem gerar pagamentos indevidos, multas, juros e insegurança para a gestão. Uma revisão organizada ajuda a empresa a conhecer sua situação, corrigir falhas e tomar decisões com informações mais confiáveis.",
    benefits: ["Conferir a coerência entre documentos, escriturações e declarações.", "Identificar divergências, riscos e possíveis oportunidades.", "Apoiar a correção de inconsistências e a melhoria dos controles internos.", "Dar mais previsibilidade e segurança à rotina fiscal."],
    role: "Karine analisa documentos e dados fiscais, verifica apurações e procedimentos, aponta pontos de atenção e apresenta informações técnicas que apoiam a empresa na definição das providências adequadas.",
    note: "A auditoria é realizada conforme o escopo contratado e os documentos disponibilizados. A identificação de um risco não significa, por si só, que exista infração ou débito."
  },
  "planejamento-fiscal": {
    title: "Planejamento fiscal",
    intro: "Planejar a tributação é compreender como os impostos afetam a atividade, os custos e as decisões da empresa, considerando as alternativas permitidas pela legislação.",
    importance: "A carga tributária influencia preços, margens, investimentos e fluxo de caixa. Um planejamento bem fundamentado permite antecipar impactos, comparar cenários e evitar decisões tomadas sem conhecer suas consequências fiscais.",
    benefits: ["Entender como os tributos influenciam custos e resultados.", "Avaliar cenários e alternativas legais de tributação.", "Antecipar impactos de mudanças na operação ou na legislação.", "Apoiar decisões com mais informação, organização e previsibilidade."],
    role: "Karine estuda as informações contábeis e fiscais do negócio, avalia os efeitos tributários das alternativas possíveis e apresenta análises para apoiar a tomada de decisão do empresário.",
    note: "O planejamento deve refletir a atividade e a realidade de cada empresa. Não significa eliminar tributos nem garante uma economia predeterminada."
  },
  "imposto-de-renda": {
    title: "Declaração de Imposto de Renda",
    intro: "Preparação de declarações de Imposto de Renda para pessoas físicas e empresas, com atenção aos documentos, às informações prestadas e às regras aplicáveis.",
    importance: "Uma declaração correta e entregue no prazo ajuda a cumprir as obrigações fiscais, reduz o risco de inconsistências e evita transtornos decorrentes de informações incompletas ou divergentes.",
    benefits: ["Organizar documentos e informações necessários à declaração.", "Conferir rendimentos, despesas, bens e demais dados pertinentes ao caso.", "Preparar a declaração conforme as regras e os prazos aplicáveis.", "Orientar sobre pendências e informações que precisam de atenção."],
    role: "Karine reúne e analisa a documentação fornecida, verifica a consistência das informações e prepara a declaração de acordo com a situação do contribuinte e as normas vigentes.",
    note: "O tratamento de cada declaração depende do perfil do contribuinte e da documentação apresentada. A responsabilidade pela veracidade das informações de origem permanece com quem as fornece."
  },
  "consultoria-tributaria": {
    title: "Consultoria tributária",
    intro: "A consultoria tributária aproxima a análise técnica da realidade da empresa. O objetivo é ajudar o empresário a compreender suas obrigações e os efeitos dos tributos sobre a operação.",
    importance: "Quando o empresário entende melhor suas obrigações e os impactos fiscais das decisões, consegue planejar com mais clareza, reduzir incertezas e concentrar esforços na gestão do negócio.",
    benefits: ["Esclarecer dúvidas sobre rotinas e obrigações tributárias.", "Compreender os impactos fiscais de operações e decisões empresariais.", "Identificar pontos que merecem revisão ou acompanhamento.", "Apoiar uma gestão mais organizada e consciente dos riscos."],
    role: "Karine interpreta as informações contábeis e fiscais apresentadas, analisa a questão à luz das regras aplicáveis e oferece orientação técnica dentro de sua atuação profissional.",
    note: "A orientação depende das informações e documentos fornecidos e não substitui análises específicas de outras áreas profissionais quando necessárias."
  },
  "reforma-tributaria": {
    title: "Reforma Tributária",
    intro: "A Reforma Tributária altera gradualmente a tributação sobre o consumo. Empresas de diferentes setores precisarão avaliar como as mudanças podem afetar preços, contratos, sistemas, créditos e processos.",
    importance: "Mesmo antes da transição completa, acompanhar as mudanças permite que a empresa se prepare, identifique áreas impactadas e evite ser surpreendida por ajustes em suas rotinas e decisões.",
    benefits: ["Mapear operações e processos que podem ser afetados.", "Avaliar possíveis reflexos sobre custos, preços, créditos e contratos.", "Identificar necessidades de adaptação em sistemas e documentos fiscais.", "Acompanhar as etapas de transição e planejar ajustes com antecedência."],
    role: "Karine acompanha as mudanças tributárias, analisa seus possíveis reflexos sobre as informações e operações da empresa e ajuda a organizar os pontos que merecem atenção e preparação.",
    note: "Os impactos variam conforme atividade, regime tributário, operações e regulamentação aplicável. As análises devem ser atualizadas à medida que as regras forem detalhadas."
  }
};

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services[slug];

  if (!service) {
    return <main className="service-page"><p>Esta área não foi encontrada.</p><Link className="service-back" href="/#atuacao">Voltar às áreas de atuação</Link></main>;
  }

  return (
    <main className="service-page">
      <header className="service-header">
        <Link className="service-brand" href="/">K<span>.</span> KARINE KLUPPELL</Link>
        <Link className="service-back" href="/#atuacao"><ArrowLeft size={16}/> Todas as áreas</Link>
      </header>
      <section className="service-hero">
        <span className="service-eyebrow">CONTABILIDADE E CONSULTORIA TRIBUTÁRIA · KARINE KLUPPELL</span>
        <h1>{service.title}</h1>
        <p>{service.intro}</p>
      </section>
      <section className="service-content">
        <span className="service-kicker">POR QUE ISSO É IMPORTANTE PARA SUA EMPRESA</span>
        <h2>Tributação bem acompanhada também é gestão do negócio.</h2>
        <p className="service-explanation">{service.importance}</p>
        <h2>O que esse trabalho pode agregar</h2>
        <ul>{service.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
        <h2>Qual é o papel da Karine</h2>
        <p className="service-explanation">{service.role}</p>
        <p className="service-note">{service.note}</p>
        <Link className="service-contact" href="/#contato">Conversar sobre esse serviço <ArrowUpRight size={17}/></Link>
      </section>
      <footer className="service-footer"><Link href="/">KARINE KLUPPELL · CONTABILIDADE & CONSULTORIA TRIBUTÁRIA</Link><span>© {new Date().getFullYear()} — Todos os direitos reservados.</span></footer>
    </main>
  );
}
