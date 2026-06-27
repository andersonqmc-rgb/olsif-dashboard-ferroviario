# Dashboard Ferroviário OLSIF

Versão 0.2 do Dashboard Ferroviário do Observatório de Logística Sustentável e Inovação Ferroviária (OLSIF/UNIPAMPA).

A v0.2 transforma o MVP em um **Painel de Inteligência Frugal do OLSIF**. O objetivo é organizar informações preliminares sobre Malha Sul, Corredor Mercosul, AP ANTT nº 11/2026, cargas, fluxos, terminais, gargalos, fontes, extensão universitária e linha do tempo institucional.

## Aviso sobre os dados

Os dados desta versão são **mockados, preliminares, simulados ou curados manualmente para prototipagem**. Eles não representam diagnóstico final, base oficial consolidada nem posição institucional definitiva.

A finalidade é demonstrar uma arquitetura simples para observar, organizar, validar fontes, mapear cargas e gargalos, acompanhar frentes estratégicas e preparar decisões futuras. O uso é exploratório e interno ao desenvolvimento do projeto.

## Como executar

1. Instale o Node.js em versão LTS.
2. No terminal, execute `npm install`.
3. Execute `npm run dev`.
4. Abra o endereço mostrado pelo Vite no navegador.

## Estrutura principal

- `src/components`: peças visuais reutilizáveis.
- `src/pages`: páginas completas da aplicação.
- `src/features`: áreas reservadas para evoluções futuras.
- `src/data`: dados demonstrativos, simulados e curados manualmente.
- `src/services`: futura comunicação com APIs.
- `src/styles`: estilos visuais compartilhados.
- `src/types`: definições TypeScript usadas em mais de um arquivo.

## Módulos da v0.2

- Estado do OLSIF.
- Radar Estratégico.
- Matriz de Cargas e Fluxos.
- Gargalos do Corredor Mercosul.
- ICTF — Capilaridade Terminal Ferroviária.
- Fontes e Confiabilidade.
- Extensão / Projeto 5740.
- Linha do Tempo OLSIF.
- Indicadores demonstrativos e comparação modal herdados da v0.1.

## Escopo técnico

- Não utiliza backend.
- Não utiliza APIs externas.
- Não faz scraping.
- Não utiliza banco de dados.
- Não utiliza dados sensíveis, senhas, tokens ou informações institucionais privadas.
- Mantém dados iniciais em arquivos TypeScript locais.

## Próximas versões previstas

- v0.3: revisar dados mockados, separar módulos maiores em componentes próprios e melhorar navegação interna.
- v0.4: iniciar gráficos com biblioteca dedicada, mantendo dados locais e auditáveis.
- v0.5: estudar mapas e camadas territoriais com Leaflet, ainda sem depender de backend.
- v1.0: consolidar metodologia, fontes validadas e critérios de publicação institucional.

## Comandos

- `npm run dev`: inicia o ambiente de desenvolvimento.
- `npm run build`: verifica o TypeScript e gera a versão de publicação.
- `npm run preview`: visualiza localmente a versão de publicação.
