import type { AnttModuleData } from '../types/dashboard'

const internalVisibility = 'interno' as const

export const anttModuleData: AnttModuleData = {
  title: 'ANTT / Malha Sul',
  version: 'v0.4.0',
  summary:
    '[TEXTO-COORDENACAO] Resumo institucional a ser fornecido pela coordenação OLSIF para explicar por que a AP ANTT nº 11/2026 importa para o observatório.',
  scopeNote:
    'Este módulo é um espelho interno de acompanhamento técnico. A contribuição regulatória é redigida fora do dashboard, em documento próprio da coordenação, e este painel não representa submissão, posição oficial da UNIPAMPA ou plataforma regulatória.',
  deadline: {
    label: 'Prazo crítico da AP ANTT nº 11/2026',
    dueDate: '2026-08-10',
    reference: '10/08/2026',
    visibility: internalVisibility,
  },
  submission: {
    stage: 'Em preparação',
    lastUpdate: '2026-07-06',
    note: 'Não exibir como submetida antes de confirmação explícita da coordenação OLSIF.',
    visibility: internalVisibility,
  },
  risks: [
    {
      id: 'participantt-bloqueio',
      title: 'Bloqueio técnico na plataforma ParticipANTT',
      status: 'Bloqueio persiste',
      lastCheck: 'A verificar pela coordenação',
      nextAction:
        'Registrar nova tentativa, evidência do bloqueio e alternativa institucional orientada pela coordenação.',
      note: 'Problema externo ao dashboard; acompanhar sem atribuir responsabilidade institucional sem evidência formal.',
      visibility: internalVisibility,
    },
    {
      id: 'prazo-submissao',
      title: 'Prazo regulatório concentrado',
      status: 'Monitorar',
      lastCheck: '2026-07-06',
      nextAction: 'Revisar pendências da matriz de argumentos antes da janela final de submissão.',
      note: 'Risco de agenda, revisão e documentação; não indica submissão realizada.',
      visibility: internalVisibility,
    },
    {
      id: 'conteudo-nao-validado',
      title: 'Argumentos ainda não validados pela coordenação',
      status: 'A verificar',
      lastCheck: '2026-07-06',
      nextAction: 'Inserir apenas conteúdo validado no documento-fonte da contribuição.',
      note: 'Evita transformar hipóteses de pesquisa em posição oficial ou diagnóstico consolidado.',
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
      olsifUse: 'Acompanhar tentativa de submissão, bloqueios técnicos e evidências de protocolo.',
      note: 'Não registrar submissão como concluída sem confirmação explícita.',
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
