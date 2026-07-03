# Dashboard Ferroviário OLSIF

Versão 0.3.1 do Dashboard Ferroviário do Observatório de Logística Sustentável e Inovação Ferroviária (OLSIF/UNIPAMPA).

A v0.3 estrutura o **ICTF — Índice de Capilaridade Terminal Ferroviária** como hipótese metodológica conceitual. A v0.3.1 ajusta a página principal para apresentar primeiro o OLSIF e incorpora resultados preliminares do **MVP Territorial-Logístico v0.2**.

Esta versão também reorganiza o painel em abas/seções para reduzir a extensão visual da página e facilitar apresentações acadêmicas, extensionistas e institucionais.

## Aviso sobre os dados

Os dados desta versão são **mockados, preliminares, simulados, placeholders metodológicos ou curados manualmente para prototipagem**. Eles não representam diagnóstico final, base oficial consolidada, índice calculado nem posição institucional definitiva.

A finalidade é demonstrar uma arquitetura simples para observar, organizar, validar fontes, mapear cargas e gargalos, acompanhar frentes estratégicas e preparar decisões futuras. O uso é exploratório e interno ao desenvolvimento do projeto.

Na v0.3, o ICTF **não calcula pontuação real**, **não ranqueia terminais**, **não avalia operadores** e **não produz decisão operacional**. As dimensões são perguntas de pesquisa para futura validação acadêmica, extensionista e institucional.

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

## Módulos da v0.3

- Visão Geral: apresentação do OLSIF, objetivo do dashboard e limites da versão.
- ICTF Conceitual: oito dimensões, status metodológico, evidência desejada e cuidado institucional.
- Matriz de Cargas e Fluxos.
- Gargalos do Corredor Mercosul.
- Frentes OLSIF: Radar Estratégico e Extensão / Projeto 5740.
- Fontes e Linha do Tempo.
- Resultados: síntese do MVP Territorial-Logístico v0.2, carga-piloto trigo, matriz territorial, gargalos e indicadores demonstrativos.

## Dimensões conceituais do ICTF na v0.3

- Acesso ferroviário.
- Acesso rodoviário/intermodal.
- Pátio, retroárea e capacidade física.
- Capacidade de transbordo.
- Integração aduaneira/fronteiriça.
- Conexão com cargas potenciais.
- Disponibilidade e qualidade dos dados.
- Governança, coordenação e operação.

## Refinamentos da v0.3.0

- Reposiciona a versão como **ICTF Conceitual e Capilaridade Terminal**.
- Substitui a leitura de pontuação do ICTF por uma estrutura conceitual sem cálculo real.
- Inclui oito dimensões com pergunta orientadora, status metodológico, evidência desejada e cuidado institucional.
- Adiciona cenário demonstrativo para mostrar como o ICTF pode orientar leitura qualitativa sem virar diagnóstico oficial.
- Reorganiza a interface em abas/seções: Visão Geral, ICTF, Cargas, Gargalos, Frentes, Fontes e Demonstrativos.
- Reforça que valores e cenários são simulados, placeholders ou hipóteses de pesquisa.

## Refinamentos da v0.3.1

- Reposiciona a página principal para apresentar o OLSIF antes do ICTF.
- Renomeia a aba final para Resultados e incorpora síntese do MVP Territorial-Logístico v0.2.
- Inclui carga-piloto trigo, rota provável, gargalos associados, perguntas em aberto e atores de validação.
- Inclui matriz territorial v0.2 com cargas, origem/destino provável, modal atual, potencial ferroviário e classe de evidência.
- Mantém os resultados como preliminares, parciais, inferências técnicas ou hipóteses OLSIF, sem diagnóstico oficial.

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

## Refinamentos da v0.2.4

- Reforça o módulo Projeto 5740 / Extensão com evidências, status da evidência, próximas ações e prazos críticos.
- Destaca os prazos de relatório anual em 31/12/2026 e relatório final em 28/06/2027.
- Mantém o módulo como acompanhamento interno, sem substituir relatório oficial ou prestação de contas.
- Preserva dados mockados/curados manualmente e sem integração com Google Forms ou APIs.

## Escopo técnico

- Não utiliza backend.
- Não utiliza APIs externas.
- Não faz scraping.
- Não utiliza banco de dados.
- Não utiliza dados sensíveis, senhas, tokens ou informações institucionais privadas.
- Mantém dados iniciais em arquivos TypeScript locais.

## Próximas versões previstas

- v0.3.2: atualizar Estado Atual e Linha do Tempo com marcos consolidados em julho.
- v0.4: organizar módulo interno ANTT / Malha Sul, se ainda fizer sentido antes do prazo da AP nº 11/2026.
- v0.5: criar camada interna de acompanhamento das ICs, sem avaliação pública de estudantes.
- v0.6: organizar Escuta Externa / Evidências 5740 somente após aplicação piloto real.
- v0.7: aprimorar Radar e Fontes com curadoria manual/semiautomatizada, sem scraping e sem APIs.
- v0.8: aproximar Dashboard e OLSIF-CALC com cenários demonstrativos transparentes.
- v0.9: protótipo integrado de inteligência frugal.
- v1.0: versão demonstrável institucionalmente, apenas após maturidade documental, metodológica e institucional.

## Comandos

- `npm run dev`: inicia o ambiente de desenvolvimento.
- `npm run build`: verifica o TypeScript e gera a versão de publicação.
- `npm run preview`: visualiza localmente a versão de publicação.





