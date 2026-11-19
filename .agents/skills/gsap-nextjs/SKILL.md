---
name: gsap-nextjs
description: Implementar, revisar e corrigir animações GSAP em projetos React e Next.js, incluindo ScrollTrigger, timelines, acessibilidade e responsividade. Use quando o pedido envolver GSAP, animações por rolagem ou efeitos de interface.
---

# GSAP com React e Next.js

Esta skill orienta o Codex a implementar animações GSAP com segurança neste repositório. Consulte a documentação oficial sempre que precisar confirmar APIs e opções: https://gsap.com/docs/v3/ e https://gsap.com/resources/React/ .

## Antes de editar

1. Leia `package.json`, o componente envolvido e os estilos relacionados. Confirme quais bibliotecas são de fato utilizadas.
2. Preserve o conteúdo, as rotas, o design e a experiência mobile existentes, salvo pedido explícito.
3. Descreva brevemente o efeito proposto e a área afetada. Não introduza animações gratuitas em toda a página.
4. Use GSAP apenas quando houver benefício claro; CSS ou Framer Motion podem ser suficientes para efeitos simples já existentes. Evite animar o mesmo elemento simultaneamente com bibliotecas diferentes.

## Integração React / Next.js

- Em componentes que usam hooks e APIs do navegador, use `"use client"` quando exigido pelo App Router.
- Prefira `useGSAP()` de `@gsap/react`, com `gsap.registerPlugin(useGSAP)`, escopo via `useRef` e `scope` no hook.
- Use cleanup automático do hook e `contextSafe` para callbacks que criam animações depois da execução do hook.
- Não acesse `window` ou `document` durante renderização no servidor.
- Não deixe listeners, ScrollTriggers ou timelines duplicados após remontagem de componentes.

## APIs e padrões

- `gsap.to()`, `gsap.from()`, `gsap.fromTo()`, `gsap.set()`: propriedades, estados iniciais e finais.
- `gsap.timeline()`: sequências, labels e sobreposição de animações.
- `duration`, `delay`, `ease`, `stagger`, `repeat`, `yoyo`: ritmo e repetição.
- `ScrollTrigger`: registrar plugin explicitamente, configurar `trigger`, `start`, `end`, `scrub`, `toggleActions` ou `pin` conforme o caso. Consulte a documentação para cada opção.
- `gsap.matchMedia()`: adaptar animações a breakpoints e preferência por movimento reduzido; fazer revert/cleanup.
- Priorize `transform` e `opacity` para animações suaves; evite animar propriedades que causam recálculo de layout sem necessidade.

## Mobile e acessibilidade

- Nunca aplique zoom/scale em toda a página ou em containers estruturais que causem corte, sobreposição ou distorção no celular.
- Evite scroll horizontal, elementos clicáveis fora da viewport e pinning que bloqueie a navegação.
- Respeite `prefers-reduced-motion: reduce`: remova ou reduza efeitos não essenciais, mantendo conteúdo visível e utilizável.
- Não esconda conteúdo permanentemente caso JS falhe ou a animação seja interrompida.
- Teste em telas estreitas e largas; verifique orientação, toque, navegação por teclado e desempenho.

## Processo de implementação

1. Localize a seção e identifique a animação existente.
2. Faça alterações pequenas, preferencialmente em componentes específicos.
3. Configure gatilhos de rolagem e limpezas corretamente.
4. Rode `npm run build` quando o ambiente permitir e relate erros reais.
5. Revise comportamento em desktop e mobile. Se não puder testar visualmente, diga isso expressamente.
6. Ao entregar, resuma os arquivos modificados e o efeito obtido; não afirme ter testado o que não testou.

## Exemplos oficiais

- GSAP: https://gsap.com/docs/v3/
- ScrollTrigger: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- Timeline: https://gsap.com/docs/v3/GSAP/Timeline/
- React: https://gsap.com/resources/React/

Esta skill é uma orientação de trabalho, não instala a biblioteca nem incorpora uma cópia offline de toda a documentação.