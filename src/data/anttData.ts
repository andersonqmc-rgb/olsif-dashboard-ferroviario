import type { AnttModuleData } from '../types/dashboard'

const internalVisibility = 'interno' as const

export const anttModuleData: AnttModuleData = {
  title: 'ANTT / Malha Sul',
  version: 'v0.4.1',
  summary:
    'A contribuição técnica relacionada à AP ANTT nº 11/2026 foi submetida em 08/07/2026 e permanece em acompanhamento pós-submissão no contexto do OLSIF.',
  scopeNote:
    'Este módulo é um espelho interno de acompanhamento técnico. A contribuição é individual e técnica no contexto do OLSIF e não deve ser apresentada automaticamente como posição oficial da UNIPAMPA. O painel não substitui o documento protocolado nem constitui plataforma regulatória.',
  deadline: {
    label: 'Prazo de referência da AP ANTT nº 11/2026',
    dueDate: '2026-08-10',
    reference: '10/08/2026',
    visibility: internalVisibility,
  },
  submission: {
    stage: 'Submetida',
    lastUpdate: '2026-07-08',
    note: 'Submissão registrada sem número de protocolo neste repositório público; comprovantes e evidências sensíveis permanecem no Google Drive.',
    visibility: internalVisibility,
  },
  risks: [
    {
      id: 'comprovantes-submissao',
      title: 'Custódia dos comprovantes de submissão',
      status: 'Acompanhar',
      lastCheck: '2026-07-08',
      nextAction:
        'Arquivar os comprovantes no Google Drive e identificar internamente a versão protocolada.',
      note: 'Não incluir protocolos, comprovantes, dados pessoais ou documentos institucionais sensíveis no repositório público.',
      visibility: internalVisibility,
    },
    {
      id: 'prazo-submissao',
      title: 'Desdobramentos da AP ANTT nº 11/2026',
      status: 'Monitorar',
      lastCheck: '2026-07-08',
      nextAction: 'Acompanhar os desdobramentos públicos posteriores à submissão.',
      note: 'O estágio do processo não altera, por si só, a confiabilidade das informações e fontes acompanhadas.',
      visibility: internalVisibility,
    },
    {
      id: 'conteudo-nao-validado',
      title: 'Síntese interna pós-submissão',
      status: 'A verificar',
      lastCheck: '2026-07-08',
      nextAction: 'Preparar relatório interno sobre a submissão e seus desdobramentos.',
      note: 'Manter linguagem prudente: a contribuição técnica não equivale automaticamente a posição oficial da UNIPAMPA.',
      visibility: internalVisibility,
    },
  ],
  axes: [
    {
      title: 'Capilaridade terminal',
      description:
        'Relacionar a Malha Sul à capacidade de conversão de carga potencial em fluxo ferroviário real.',
      visibility: internalVisibility,
    },
    {
      title: 'Integração fronteiriça',
      description:
        'Observar fricções e oportunidades no eixo Brasil-Argentina sem atribuir gargalos a atores específicos.',
      visibility: internalVisibility,
    },
    {
      title: 'Cargas potenciais',
      description:
        'Conectar a matriz territorial preliminar a hipóteses de demanda que ainda precisam de validação.',
      visibility: internalVisibility,
    },
    {
      title: 'Interoperabilidade',
      description:
        'Acompanhar temas técnicos de integração operacional como pauta de pesquisa e curadoria documental.',
      visibility: internalVisibility,
    },
    {
      title: 'Sustentabilidade',
      description:
        'Manter a comparação modal como linha demonstrativa, sem inventário oficial de emissões nesta versão.',
      visibility: internalVisibility,
    },
    {
      title: 'Dados públicos',
      description:
        'Separar evidência pública, hipótese, lacuna e ponto a verificar antes de qualquer argumento técnico.',
      visibility: internalVisibility,
    },
  ],
  argumentMatrix: [],
  sources: [
    {
      source: 'ANTT',
      sourceType: 'Oficial',
      referenceDate: '2026',
      theme: 'Audiência Pública nº 11/2026, regulação ferroviária e Malha Sul',
      validationStatus: 'A verificar',
      olsifUse: 'Fonte primária a ser conferida antes de qualquer uso na contribuição técnica.',
      note: 'Usar somente páginas e documentos oficiais identificados pela coordenação.',
      visibility: internalVisibility,
    },
    {
      source: 'ParticipANTT',
      sourceType: 'Oficial',
      referenceDate: '2026',
      theme: 'Canal de participação social e registro de submissão',
      validationStatus: 'A verificar',
      olsifUse: 'Acompanhar os desdobramentos públicos posteriores à submissão.',
      note: 'Protocolos e comprovantes permanecem no Google Drive e não são publicados no repositório.',
      visibility: internalVisibility,
    },
    {
      source: 'Referências públicas sobre Malha Sul',
      sourceType: 'Oficial',
      referenceDate: 'A verificar',
      theme: 'Concessão, infraestrutura, corredor logístico e integração regional',
      validationStatus: 'A verificar',
      olsifUse: 'Subsidiar leitura exploratória e matriz de argumentos após validação.',
      note: 'Não substituir análise jurídica, regulatória ou institucional formal.',
      visibility: internalVisibility,
    },
  ],
  strategicRelations: [
    {
      title: 'Corredor Mercosul / Lote C',
      description:
        'Relação estratégica para acompanhar a Malha Sul como infraestrutura associada à integração regional e à logística do Mercosul.',
      care:
        'Manter a relação como leitura exploratória até haver documento validado pela coordenação.',
      visibility: internalVisibility,
    },
    {
      title: 'Uruguaiana-Paso de los Libres',
      description:
        'Eixo fronteiriço relevante para observar cargas, terminais, porto seco, fricções operacionais e oportunidades intermodais.',
      care:
        'Não afirmar fluxo ferroviário efetivo, parceria formal ou gargalo atribuído sem evidência documentada.',
      visibility: internalVisibility,
    },
  ],
}
