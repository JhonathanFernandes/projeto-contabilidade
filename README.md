# Website de Contabilidade

**Desenvolvimento web • Interface responsiva • Experiência visual • Animações interativas**

Projeto de desenvolvimento de um **website de contabilidade**, criado por **Jhonathan Fernandes (JHOWDEV)**, com foco em interface, experiência de navegação e implementação front-end.

O foco deste repositório é demonstrar a implementação técnica, a estrutura do front-end, a experiência de navegação e as decisões de interface. A identidade e os conteúdos profissionais da cliente fazem parte da aplicação, mas não são o tema principal desta documentação.

**[Visualizar projeto online](https://jhonathanfernandes.github.io/projeto-contabilidade/)**

## O projeto

Interface institucional com seções de apresentação, serviços, trajetória, conteúdo informativo e contato. O trabalho inclui:

- Layout responsivo para celular e desktop, com identidade visual e alternância de fundos entre seções.
- Cabeçalho com navegação e menu adaptado ao mobile.
- Seis cards de serviços com páginas específicas de detalhamento.
- Efeitos de entrada de seções durante o scroll e interações nos cards.
- Abertura visual com vídeo e recursos estáticos de imagem.
- Linha do tempo informativa sobre a Reforma Tributária do Consumo.
- Integração de links externos para redes sociais e WhatsApp.
- Publicação estática no GitHub Pages.

## Stack técnica

Versões declaradas em `package.json`:

| Tecnologia | Versão declarada | Aplicação |
| --- | --- | --- |
| Next.js | ^15.5.6 | Framework e roteamento com App Router |
| React / React DOM | ^19.1.1 | Componentes e interface |
| TypeScript | ^5.9.2 | Tipagem do código |
| Framer Motion | ^12.23.24 | Dependência de animações |
| GSAP | ^3.13.0 | Dependência de animações |
| @gsap/react | ^2.1.2 | Integração GSAP/React |
| Lucide React | ^0.468.0 | Biblioteca de ícones |
| CSS | — | Estilos, responsividade e transições |

Essas são versões declaradas, não uma auditoria das versões efetivamente instaladas ou das mais recentes disponíveis. A presença de uma biblioteca no manifesto não garante que ela seja usada em todos os componentes.

## Organização do código

- `app/page.tsx` — página inicial, conteúdo e interações.
- `app/layout.tsx` — estrutura global, metadados e viewport.
- `app/globals.css` — estilos e animações globais.
- `app/atuacao/` — páginas de serviços.
- `public/` — imagens e vídeo utilizados na interface.
- `package.json` — dependências e scripts do projeto.

## Executar localmente

Utilize Node.js e npm compatíveis com Next.js 15.

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

Para gerar a compilação de produção:

```bash
npm run build
```

## Deploy

A publicação utiliza GitHub Pages, sob o caminho `/projeto-contabilidade/`. O código utiliza `NEXT_PUBLIC_BASE_PATH` para compor alguns caminhos de recursos. Alterações em rotas e assets devem respeitar a configuração de publicação.

## Estado atual e melhorias identificadas

- O formulário visual de e-mail não realiza envio: o `onSubmit` cancela a ação. Implementar uma solução real antes de anunciar essa funcionalidade.
- A seção de marcas contém itens demonstrativos. Confirmar autorização e vínculo antes de apresentar as marcas como clientes ou parceiros.
- Validar conteúdos profissionais e informações tributárias com fontes e responsáveis adequados.
- Testar a responsividade, a navegação, as animações e a acessibilidade em dispositivos reais.
- Caso o navegador continue sinalizando o endereço como perigoso, investigar o relatório de segurança; alterações na documentação não removem esse alerta.

## Desenvolvimento

**Jhonathan Fernandes — JHOWDEV**

[GitHub do desenvolvedor](https://github.com/JhonathanFernandes)

Este README documenta o trabalho de desenvolvimento e a implementação do projeto. Os serviços profissionais apresentados no site pertencem ao contexto da aplicação.
