# Karine Kluppell — Site institucional

Site institucional da profissional **Karine Kluppell**, dedicado à apresentação de sua trajetória e de serviços de contabilidade e consultoria tributária.

**Site:** https://jhonathanfernandes.github.io/projeto-contabilidade/

## Tecnologias utilizadas

Conforme as dependências declaradas em `package.json`:

- **Next.js 15.5.6** — framework React, com App Router.
- **React 19.1.1** e **React DOM 19.1.1** — interface.
- **TypeScript 5.9.2** — tipagem.
- **Framer Motion 12.23.24** e **GSAP 3.13.0** (com `@gsap/react 2.1.2`) — bibliotecas de animação incluídas no projeto.
- **Lucide React 0.468.0** — ícones.
- **CSS global** — estilos e efeitos de apresentação.

As versões acima são as especificadas no manifesto do projeto, não uma afirmação de que sejam as versões mais recentes disponíveis.

## Conteúdo do site

- Página inicial com identidade visual e apresentação de Karine Kluppell.
- Seções **Sobre**, **Trajetória e formação**, **Áreas de atuação**, **Reforma Tributária** e **Contato**.
- Seis áreas de atuação com páginas de detalhes: consultoria tributária, auditoria tributária, recuperação de créditos, planejamento fiscal, declaração de Imposto de Renda e reforma tributária.
- Linha do tempo da transição da Reforma Tributária do Consumo, com link para informações oficiais da Receita Federal.
- Animações de entrada por rolagem, cards interativos e abertura com vídeo.
- Layout adaptado a dispositivos móveis e computadores.
- Links para LinkedIn, Instagram e WhatsApp.

## Estrutura principal

- `app/page.tsx`: página inicial, conteúdo e interações.
- `app/layout.tsx`: layout global e metadados.
- `app/globals.css`: estilos globais.
- `app/atuacao/`: páginas de áreas de atuação.
- `public/`: imagens, vídeo e outros recursos estáticos.
- `package.json`: scripts e dependências.

## Como executar localmente

Requisitos: Node.js e npm compatíveis com Next.js 15.

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

Para compilar a versão de produção:

```bash
npm run build
```

## Publicação

O projeto é publicado no GitHub Pages. O endereço público usa o caminho `/projeto-contabilidade/`. Ao alterar caminhos de recursos ou links internos, considere a configuração de `basePath` do Next.js e a variável `NEXT_PUBLIC_BASE_PATH` utilizada no código.

## Pontos de atenção

- **Informações profissionais:** validar com Karine as datas, formação, credenciais e descrições antes de apresentar tudo como comprovado.
- **Marcas exibidas:** o código inclui uma seção de empresas parceiras com marcas demonstrativas. Não divulgar essas marcas como clientes ou parceiras reais sem autorização e comprovação.
- **Formulário de contato:** o campo de e-mail exibido na página não possui envio funcional no código consultado; o evento de envio é cancelado.
- **Reforma tributária:** verificar periodicamente a legislação e as orientações oficiais, pois regras e obrigações podem mudar.
- **Segurança:** um alerta do navegador/Google Safe Browsing, se ainda presente, deve ser investigado e resolvido separadamente. Atualizar o README não remove esse alerta.

## Manutenção

Mantenha este README sincronizado com as funcionalidades efetivamente implementadas. Antes de publicar alterações, execute a compilação e teste os links, o menu, os efeitos e a responsividade no celular e no computador.
