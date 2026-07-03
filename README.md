# Dashboard Ferroviário OLSIF

Versão 0.2.3 do Dashboard Ferroviário do Observatório de Logística Sustentável e Inovação Ferroviária (OLSIF/UNIPAMPA).

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

## Refinamentos da v0.2.1

- Navegação interna por módulos logo após a abertura do painel.
- Ajustes visuais para reduzir a sensação de página longa.
- Melhor hierarquia de seções, cards e leitura em desktop, notebook e telas menores.
- Preservação dos avisos de dados preliminares, simulados, demonstrativos e não oficiais.

## Refinamentos da v0.2.2

- Acrescenta rastreabilidade interna à Matriz de Cargas e Fluxos.
- Inclui status da informação: Confirmado, Hipótese forte, Hipótese fraca e A verificar.
- Inclui relação com Uruguaiana-Paso de los Libres: Direta, Indireta ou A verificar.
- Expande os cards de Gargalos com código, status, relação fronteiriça e próxima validação.
- Mantém linguagem de hipótese e uso exploratório, sem diagnóstico oficial.

## Refinamentos da v0.2.3

- Reforça o módulo Fontes e Confiabilidade com tipo de fonte, data de referência, status e observação de uso.
- Reorganiza a Linha do Tempo com frente, referência temporal, status e nota de validação.
- Mantém a classificação como curadoria preliminar, sem confirmar parceria formal ou diagnóstico oficial.
- Preserva dados mockados/curados manualmente em arquivos locais.

## Escopo técnico

- Não utiliza backend.
- Não utiliza APIs externas.
- Não faz scraping.
- Não utiliza banco de dados.
- Não utiliza dados sensíveis, senhas, tokens ou informações institucionais privadas.
- Mantém dados iniciais em arquivos TypeScript locais.

## Próximas versões previstas

- v0.2.4: melhorar o acompanhamento do Projeto 5740 / Extensão.
- v0.3: evoluir o ICTF conceitual e a capilaridade terminal, ainda com valores demonstrativos.

## Comandos

- `npm run dev`: inicia o ambiente de desenvolvimento.
- `npm run build`: verifica o TypeScript e gera a versão de publicação.
- `npm run preview`: visualiza localmente a versão de publicação.




