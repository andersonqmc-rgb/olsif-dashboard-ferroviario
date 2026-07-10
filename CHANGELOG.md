# Changelog

## v0.4.1

- Corrige o estado da frente ANTT/AP nº 11/2026 para pós-submissão e acompanhamento, com registro da submissão em 08/07/2026 sem número de protocolo.
- Atualiza a versão corrente e os rótulos da interface para 0.4.1.
- Reforça a governança do repositório público: protocolos, comprovantes, dados pessoais, tokens e documentos institucionais restritos permanecem fora do GitHub.
- Preserva a distinção entre confiabilidade da informação e estágio do processo, com linguagem prudente sobre OLSIF e UNIPAMPA.
- Não adiciona funcionalidades, dependências, APIs, backend, scraping ou banco de dados.

## v0.4.0

- Adiciona módulo interno ANTT / Malha Sul como aba própria do dashboard.
- Inclui acompanhamento da AP ANTT nº 11/2026 com prazo crítico em 10/08/2026 e semáforo calculado localmente.
- Registra riscos da frente, com destaque para bloqueio técnico na plataforma ParticipANTT.
- Inclui status de submissão separado da confiabilidade da informação, sem marcar submissão como realizada.
- Adiciona eixos preliminares de contribuição, matriz de argumentos aguardando validação, fontes ANTT e relações estratégicas.
- Cria `src/data/anttData.ts` para concentrar os dados locais do módulo.
- Amplia os tipos TypeScript com `Visibility`, `SubmissionStage` e estruturas específicas da frente ANTT.
- Mantém o dashboard como espelho interno de acompanhamento, sem backend, APIs, scraping, banco de dados ou dependências novas.
- Atualiza README e versão do pacote para 0.4.0.

## v0.3.2

- Atualiza a versão do dashboard para 0.3.2.
- Consolida o estado atual após fechamento e auditoria da v0.3.1.
- Inclui o Projeto 5930 / Inovação como frente ativa de referência para evolução tecnológica e inteligência frugal.
- Acrescenta marcos de linha do tempo sobre Projeto 5930, Dashboard v0.3.1 e incorporação do MVP Territorial-Logístico v0.2.
- Renomeia a seção de fontes para Fontes, Estado Atual e Linha do Tempo.
- Mantém linguagem de protótipo interno/exploratório, dados preliminares e ausência de diagnóstico oficial.
- Atualiza README e versão do pacote para 0.3.2.

## v0.3.1

- Ajusta a página principal para apresentar o OLSIF e seus objetivos antes do ICTF.
- Renomeia a aba final para Resultados e incorpora dados preliminares do MVP Territorial-Logístico v0.2.
- Inclui síntese da carga-piloto trigo, rota provável, pontos de fronteira, gargalos associados e perguntas em aberto.
- Inclui matriz territorial v0.2 com cargas, origem/destino provável, modal atual, potencial ferroviário e classe de evidência.
- Acrescenta gargalos territoriais e perguntas de validação associadas a atores possíveis.
- Mantém linguagem de resultado preliminar, dado parcial, inferência técnica e hipótese OLSIF, sem diagnóstico oficial.
- Atualiza README e versão do pacote para 0.3.1.

## v0.3.0

- Reposiciona o dashboard como versão de ICTF Conceitual e Capilaridade Terminal.
- Reorganiza a interface em abas/seções para reduzir a página longa e facilitar apresentações.
- Substitui a leitura numérica do ICTF por oito dimensões conceituais com pergunta orientadora, status metodológico, evidência desejada e cuidado institucional.
- Adiciona cenário demonstrativo de leitura terminal/fronteiriça sem cálculo real, ranking oficial ou diagnóstico consolidado.
- Conecta Cargas e Gargalos à lógica de capilaridade terminal sem usar dados reais de parceiros, APIs, scraping ou banco de dados.
- Atualiza README e versão do pacote para 0.3.0.

## v0.2.4

- Reforçado o módulo Projeto 5740 / Extensão com evidências, status da evidência, próximas ações e prazos críticos.
- Destacados os marcos de relatório anual em 31/12/2026 e relatório final em 28/06/2027.
- Mantida linguagem de acompanhamento interno, sem substituir relatório oficial, prestação de contas ou validação institucional final.
- Atualiza README e versão do pacote para 0.2.4.

## v0.2.3

- Reforçado o módulo Fontes e Confiabilidade com tipo de fonte, data de referência, status de validação e observação metodológica.
- Reforçada a Linha do Tempo OLSIF com frente, referência temporal, status e nota de validação.
- Mantida linguagem de curadoria preliminar, sem confirmar parceria formal ou diagnóstico oficial.
- Atualiza README e versão do pacote para 0.2.3.

## v0.2.2

- Enriquecida a Matriz de Cargas e Fluxos com código de rastreabilidade, status da informação, relação com Uruguaiana-Paso de los Libres e próxima validação.
- Enriquecidos os Gargalos com metadados de rastreabilidade, status, relação fronteiriça e validação pendente.
- Mantidos os dados como mockados, preliminares e de uso exploratório.
- Atualiza README e versão do pacote para 0.2.2.

## v0.2.1

- Adiciona navegação interna por módulos para facilitar o uso da página longa.
- Ajusta a leitura visual das seções sem alterar os dados mockados da v0.2.
- Melhora espaçamentos, hierarquia visual e responsividade do painel.
- Atualiza README e versão do pacote para 0.2.1.

## v0.2.0

- Reposiciona o MVP como Painel de Inteligência Frugal do OLSIF.
- Adiciona módulos de Estado do OLSIF, Radar Estratégico, Cargas e Fluxos, Gargalos, ICTF, Fontes, Extensão e Linha do Tempo.
- Organiza dados preliminares e simulados em arquivos TypeScript locais.
- Amplia os tipos TypeScript para preparar futura integração com backend ou APIs.
- Atualiza navegação, textos institucionais, avisos de confiabilidade e documentação.
- Reforça avisos de uso exploratório nos módulos com dados preliminares, simulados ou demonstrativos.

## v0.1.0

- Cria MVP demonstrativo em React + Vite + TypeScript.
- Inclui página institucional, quatro indicadores e comparação simples entre modais.
- Usa apenas dados fictícios locais, sem mapas, APIs externas ou banco de dados.
