# Dashboard Ferroviário OLSIF

Versão 0.1 demonstrativa do Dashboard Ferroviário do Observatório de Logística
Sustentável e Inovação Ferroviária (OLSIF).

O painel apresenta quatro indicadores e uma comparação ilustrativa entre os
modais rodoviário e ferroviário. Todos os valores são fictícios e estão
identificados como demonstrativos.

## Como executar

1. Instale o Node.js em versão LTS.
2. No terminal, execute `npm install`.
3. Execute `npm run dev`.
4. Abra o endereço mostrado pelo Vite no navegador.

## Estrutura principal

- `src/components`: peças visuais reutilizáveis.
- `src/pages`: páginas completas da aplicação.
- `src/features`: áreas reservadas para evoluções futuras.
- `src/data`: dados demonstrativos locais.
- `src/services`: futura comunicação com APIs.
- `src/styles`: estilos visuais compartilhados.
- `src/types`: definições TypeScript usadas em mais de um arquivo.

## Escopo da versão 0.1

- Não utiliza mapas.
- Não utiliza APIs externas.
- Não utiliza banco de dados.
- Não utiliza dados reais ou institucionais privados.

## Comandos

- `npm run dev`: inicia o ambiente de desenvolvimento.
- `npm run build`: verifica o TypeScript e gera a versão de publicação.
- `npm run preview`: visualiza localmente a versão de publicação.
