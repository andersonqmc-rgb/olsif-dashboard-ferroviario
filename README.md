# Dashboard Ferroviário OLSIF

Versão 0.4.1 do Dashboard Ferroviário do Observatório de Logística Sustentável e Inovação Ferroviária (OLSIF/UNIPAMPA).

A v0.3 estrutura o **ICTF — Índice de Capilaridade Terminal Ferroviária** como hipótese metodológica conceitual. A v0.3.1 ajusta a página principal para apresentar primeiro o OLSIF e incorpora resultados preliminares do **MVP Territorial-Logístico v0.2**. A v0.3.2 consolida o estado atual e a linha do tempo com marcos de julho de 2026, incluindo o Projeto 5930 e o fechamento auditado da v0.3.1.

A v0.4.0 cria o módulo interno **ANTT / Malha Sul** para acompanhar a frente da AP ANTT nº 11/2026, com prazo crítico, riscos, status de submissão, eixos de contribuição, matriz de argumentos aguardando validação, fontes ANTT e relações estratégicas.

A v0.4.1 é um patch corretivo de governança, versionamento e estado da frente ANTT. Registra que a contribuição técnica foi submetida em 08/07/2026 e reposiciona o módulo para acompanhamento pós-submissão, sem informar número de protocolo.

Esta versão também reorganiza o painel em abas/seções para reduzir a extensão visual da página e facilitar apresentações acadêmicas, extensionistas e institucionais.

## Aviso sobre os dados

Os dados desta versão são **mockados, preliminares, simulados, placeholders metodológicos ou curados manualmente para prototipagem**. Eles não representam diagnóstico final, base oficial consolidada, índice calculado nem posição institucional definitiva.

A finalidade é demonstrar uma arquitetura simples para observar, organizar, validar fontes, mapear cargas e gargalos, acompanhar frentes estratégicas e preparar decisões futuras. O uso é exploratório e interno ao desenvolvimento do projeto.

Este repositório é **público**. Não devem ser incluídos protocolos, comprovantes, dados pessoais, senhas, tokens, documentos institucionais restritos ou conteúdo marcado como não indexável. Esses registros e demais evidências sensíveis permanecem no Google Drive autorizado.

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

## Módulos da v0.4

- Visão Geral: apresentação do OLSIF, objetivo do dashboard e limites da versão.
- ICTF Conceitual: oito dimensões, status metodológico, evidência desejada e cuidado institucional.
- ANTT / Malha Sul: acompanhamento interno da AP nº 11/2026, sem substituir o documento-fonte da contribuição.
- Matriz de Cargas e Fluxos.
- Gargalos do Corredor Mercosul.
- Frentes OLSIF: Radar Estratégico e Extensão / Projeto 5740.
- Fontes, Estado Atual e Linha do Tempo.
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

## Módulo ANTT / Malha Sul na v0.4.1

- Contribuição técnica submetida em 08/07/2026, sem publicação de número de protocolo ou comprovantes.
- Prazo da AP ANTT nº 11/2026 em 10/08/2026 preservado como referência, sem contagem regressiva após a submissão.
- Acompanhamento pós-submissão, incluindo custódia dos comprovantes no Drive, identificação interna da versão protocolada, monitoramento dos desdobramentos e preparação de relatório interno.
- Status de submissão separado da confiabilidade dos dados e das fontes acompanhadas.
- Eixos preliminares de contribuição: capilaridade terminal, integração fronteiriça, cargas potenciais, interoperabilidade, sustentabilidade e dados públicos.
- Matriz de argumentos pronta para receber apenas conteúdo validado no documento-fonte da contribuição.
- Fontes ANTT em validação, com tipo, referência temporal, status e observação de uso.
- Relações estratégicas com Corredor Mercosul / Lote C e Uruguaiana-Paso de los Libres.
- Campo `visibility` nos dados do módulo, com valor inicial `interno`, preparando futura publicação controlada sem implementar filtro nesta versão.

## Patch corretivo v0.4.1

- Atualiza versão, rótulos e estado da frente ANTT sem criar funcionalidades.
- Preserva a contribuição como manifestação individual e técnica no contexto do OLSIF, sem apresentá-la automaticamente como posição oficial da UNIPAMPA.
- Reforça a separação entre o repositório público e protocolos, comprovantes ou documentos sensíveis mantidos no Google Drive.
- Mantém o dashboard como protótipo interno, exploratório, demonstrativo e auditável; não é diagnóstico oficial, sistema público validado, plataforma regulatória ou gêmeo digital.

## Refinamentos da v0.4.0

- Adiciona aba própria ANTT para reduzir refatoração da aba Frentes e dar clareza ao acompanhamento regulatório.
- Cria `src/data/anttData.ts` para concentrar dados locais do módulo ANTT.
- Amplia os tipos TypeScript com `Visibility`, `SubmissionStage` e estruturas específicas do módulo.
- Documenta a distinção entre confiabilidade da informação e estágio de processo.
- Mantém a contribuição ANTT fora do dashboard, preservando o painel como espelho interno de acompanhamento.
- Atualiza README, CHANGELOG e versão do pacote para 0.4.0.

## Refinamentos da v0.3.0

- Reposiciona a versão como **ICTF Conceitual e Capilaridade Terminal**.
- Substitui a leitura de pontuação do ICTF por uma estrutura conceitual sem cálculo real.
- Inclui oito dimensões com pergunta orientadora, status metodológico, evidência desejada e cuidado institucional.
- Adiciona cenário demonstrativo para mostrar como o ICTF pode orientar leitura qualitativa sem virar diagnóstico oficial.
- Reorganiza a interface em abas/seções: Visão Geral, ICTF, Cargas, Gargalos, Frentes, Fontes e Demonstrativos.
- Reforça que valores e cenários são simulados, placeholders ou hipóteses de pesquisa.

## Refinamentos da v0.3.2

- Atualiza a versão do pacote e da interface para 0.3.2.
- Consolida o estado atual do dashboard após a auditoria da v0.3.1.
- Inclui o Projeto 5930 / Inovação como frente ativa de referência para inteligência frugal e evolução tecnológica.
- Acrescenta marcos de linha do tempo sobre o Projeto 5930, o fechamento auditado da v0.3.1 e a incorporação do MVP Territorial-Logístico v0.2.
- Reforça que os marcos são usados para acompanhamento exploratório e não representam produto final, diagnóstico oficial ou solução operacional consolidada.

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





