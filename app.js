(function () {
  const STORAGE_KEY = "sirep:equipamentos";
  const LEGACY_STORAGE_KEY = "equipamentos";

  const DEFAULT_EQUIPAMENTOS = [
    {
      codigo: "BC00001",
      tipo: "BANCO CAPACITOR",
      alimentador: "EUN-05P1",
      projeto: "B-240815",
      status: "SUBSTITUIÇÃO",
      fabricante: "WEG",
      modelo: "CapBank 420",
      classe: "13,8 kV",
      localizacao: "Polo Leste",
      responsavel: "Time de Expansão",
      resumo: "Banco capacitor em preparação para troca de conjunto e nova parametrização de proteção remota.",
      criticidade: "Alta",
      comunicacao: "ATIVA",
      ultimaAtualizacao: "2026-03-18",
      instalacao: "2024-09-12",
      ultimaManutencao: "2026-02-03",
      documentos: [
        { nome: "Plano-de-Substituicao-BC00001.pdf", data: "18/03/2026", tipo: "Plano" },
        { nome: "Checklist-Inspecao-BC00001.pdf", data: "03/02/2026", tipo: "Checklist" }
      ],
      rastreamento: [
        { titulo: "Peças entregues na base", descricao: "Conjunto de capacitores e ferragens conferidos e liberados para campo.", data: "18/03/2026 09:10", tag: "Logística" },
        { titulo: "Janela operacional aprovada", descricao: "Substituição autorizada para a próxima parada programada do alimentador.", data: "17/03/2026 16:25", tag: "Planejamento" }
      ],
      manutencao: [
        { titulo: "Substituição preventiva", descricao: "Troca do conjunto principal e revisão dos terminais.", data: "26/03/2026", status: "Planejada" },
        { titulo: "Inspeção termográfica", descricao: "Aquecimento identificado em inspeção anterior, sem risco imediato.", data: "03/02/2026", status: "Concluída" }
      ],
      historico: [
        { titulo: "Mudança de criticidade", descricao: "Equipamento passou para criticidade alta por proximidade da janela de intervenção.", data: "18/03/2026", tag: "Operação" },
        { titulo: "Alerta de desequilíbrio", descricao: "Sistema registrou oscilação acima do esperado durante pico de carga.", data: "28/02/2026", tag: "Monitoramento" }
      ],
      dadosAdicionais: [
        { instalacao: "12/09/2024", tarefa: "Pré-montagem do kit", projeto: "B-240815", ultimaManutencao: "03/02/2026", comunicacao: "ATIVA" },
        { instalacao: "03/02/2026", tarefa: "Inspeção termográfica", projeto: "B-240815", ultimaManutencao: "03/02/2026", comunicacao: "ATIVA" }
      ]
    },
    {
      codigo: "CH00001",
      tipo: "CHAVE SECCIONADORA",
      alimentador: "EUN-01P2",
      projeto: "B-240734",
      status: "SUBSTITUIÇÃO",
      fabricante: "Schneider",
      modelo: "KeyGrid S",
      classe: "15 kV",
      localizacao: "Circuito Sul",
      responsavel: "Equipe Campo Sul",
      resumo: "Chave com desgaste mecânico monitorado; troca programada para reduzir risco operacional.",
      criticidade: "Média",
      comunicacao: "ATIVA",
      ultimaAtualizacao: "2026-03-19",
      instalacao: "2023-12-08",
      ultimaManutencao: "2026-01-14",
      documentos: [
        { nome: "Memorial-CH00001.pdf", data: "19/03/2026", tipo: "Memorial" },
        { nome: "Inspecao-CH00001.pdf", data: "14/01/2026", tipo: "Inspeção" }
      ],
      rastreamento: [
        { titulo: "Localização confirmada", descricao: "Georreferenciamento validado com a equipe de campo.", data: "19/03/2026 08:45", tag: "Rastreamento" },
        { titulo: "Componente reservado", descricao: "Conjunto substituto separado no almoxarifado regional.", data: "16/03/2026 13:20", tag: "Logística" }
      ],
      manutencao: [
        { titulo: "Lubrificação do mecanismo", descricao: "Ajuste preventivo executado sem necessidade de parada longa.", data: "14/01/2026", status: "Concluída" },
        { titulo: "Troca do conjunto", descricao: "Substituição já planejada no roteiro da próxima semana.", data: "27/03/2026", status: "Planejada" }
      ],
      historico: [
        { titulo: "Oscilação detectada", descricao: "Equipe registrou variação de esforço no acionamento manual.", data: "11/03/2026", tag: "Manutenção" },
        { titulo: "Validação do projeto", descricao: "Projeto de troca confirmado com engenharia.", data: "25/02/2026", tag: "Projeto" }
      ],
      dadosAdicionais: [
        { instalacao: "08/12/2023", tarefa: "Instalação em campo", projeto: "B-240734", ultimaManutencao: "14/01/2026", comunicacao: "ATIVA" },
        { instalacao: "11/03/2026", tarefa: "Inspeção visual", projeto: "B-240734", ultimaManutencao: "14/01/2026", comunicacao: "ATIVA" }
      ]
    },
    {
      codigo: "RC00001",
      tipo: "REGULADOR",
      alimentador: "EUN-06P4",
      projeto: "B-240998",
      status: "ATIVO",
      fabricante: "ABB",
      modelo: "VoltControl R3",
      classe: "34,5 kV",
      localizacao: "Anel Oeste",
      responsavel: "Sala de Controle",
      resumo: "Regulador operando com comunicação estável e histórico de ajustes recentes de tensão.",
      criticidade: "Baixa",
      comunicacao: "ATIVA",
      ultimaAtualizacao: "2026-03-23",
      instalacao: "2025-05-09",
      ultimaManutencao: "2026-02-26",
      documentos: [
        { nome: "Curva-Ajuste-RC00001.pdf", data: "23/03/2026", tipo: "Configuração" },
        { nome: "Relatorio-Manutencao-RC00001.pdf", data: "26/02/2026", tipo: "Relatório" }
      ],
      rastreamento: [
        { titulo: "Comunicação validada", descricao: "Telemetria ativa com atualização a cada 15 minutos.", data: "23/03/2026 10:10", tag: "Telemetria" },
        { titulo: "Ajuste remoto aplicado", descricao: "Nível de tensão recalibrado sem impacto para os consumidores.", data: "20/03/2026 15:00", tag: "Operação" }
      ],
      manutencao: [
        { titulo: "Revisão remota", descricao: "Parâmetros auditados pela engenharia de proteção.", data: "26/02/2026", status: "Concluída" },
        { titulo: "Inspeção de rotina", descricao: "Nova revisão prevista no cronograma trimestral.", data: "12/05/2026", status: "Planejada" }
      ],
      historico: [
        { titulo: "Inclusão no anel prioritário", descricao: "Equipamento passou a compor o circuito de maior criticidade da região.", data: "07/03/2026", tag: "Operação" },
        { titulo: "Troca de firmware", descricao: "Atualização concluída com sucesso.", data: "18/01/2026", tag: "Firmware" }
      ],
      dadosAdicionais: [
        { instalacao: "09/05/2025", tarefa: "Comissionamento", projeto: "B-240998", ultimaManutencao: "26/02/2026", comunicacao: "ATIVA" },
        { instalacao: "20/03/2026", tarefa: "Ajuste remoto de tensão", projeto: "B-240998", ultimaManutencao: "26/02/2026", comunicacao: "ATIVA" }
      ]
    },
    {
      codigo: "RL00001",
      tipo: "RELIGADOR",
      alimentador: "EUN-01P2",
      projeto: "B-240701",
      status: "ATIVO",
      fabricante: "Siemens",
      modelo: "RX-Plus 27",
      classe: "15 kV",
      localizacao: "Subestação Norte",
      responsavel: "Equipe Campo Norte",
      resumo: "Religador com rastreamento em tempo real e comunicação estável desde a última intervenção preventiva.",
      criticidade: "Baixa",
      comunicacao: "ATIVA",
      ultimaAtualizacao: "2026-03-24",
      instalacao: "2025-11-20",
      ultimaManutencao: "2026-02-12",
      documentos: [
        { nome: "Projeto-Religador-RL00001.pdf", data: "24/03/2026", tipo: "Projeto" },
        { nome: "Checklist-RL00001.pdf", data: "12/02/2026", tipo: "Checklist" }
      ],
      rastreamento: [
        { titulo: "Sinal confirmado", descricao: "Última telemetria recebida com latência dentro do esperado.", data: "24/03/2026 08:30", tag: "Telemetria" },
        { titulo: "Rota revisada", descricao: "Equipe de atendimento recalculou o trajeto de inspeção para este ativo.", data: "22/03/2026 14:12", tag: "Campo" }
      ],
      manutencao: [
        { titulo: "Manutenção preventiva", descricao: "Limpeza, reaperto e teste funcional executados.", data: "12/02/2026", status: "Concluída" },
        { titulo: "Nova inspeção", descricao: "Revisão leve programada para o próximo ciclo quinzenal.", data: "08/04/2026", status: "Planejada" }
      ],
      historico: [
        { titulo: "Inclusão na malha ativa", descricao: "Equipamento passou a integrar o conjunto principal de rastreamento remoto.", data: "05/03/2026", tag: "Operação" },
        { titulo: "Sincronização de dados", descricao: "Base local sincronizada com o centro de monitoramento.", data: "14/02/2026", tag: "Sistema" }
      ],
      dadosAdicionais: [
        { instalacao: "20/11/2025", tarefa: "Instalação em campo", projeto: "B-240701", ultimaManutencao: "12/02/2026", comunicacao: "ATIVA" },
        { instalacao: "24/03/2026", tarefa: "Telemetria validada", projeto: "B-240701", ultimaManutencao: "12/02/2026", comunicacao: "ATIVA" }
      ]
    },
    {
      codigo: "RL00002",
      tipo: "RELIGADOR",
      alimentador: "EUN-07P3",
      projeto: "B-241044",
      status: "ATIVO",
      fabricante: "NOJA Power",
      modelo: "RC10",
      classe: "27 kV",
      localizacao: "Trecho Industrial",
      responsavel: "Operação Metropolitana",
      resumo: "Religador recém integrado ao circuito industrial com histórico limpo e forte estabilidade de comunicação.",
      criticidade: "Baixa",
      comunicacao: "ATIVA",
      ultimaAtualizacao: "2026-03-22",
      instalacao: "2026-01-06",
      ultimaManutencao: "2026-03-02",
      documentos: [
        { nome: "Comissionamento-RL00002.pdf", data: "22/03/2026", tipo: "Comissionamento" },
        { nome: "Plano-Testes-RL00002.pdf", data: "02/03/2026", tipo: "Testes" }
      ],
      rastreamento: [
        { titulo: "Circuito comissionado", descricao: "Integração concluída sem alarmes.", data: "22/03/2026 11:25", tag: "Comissionamento" },
        { titulo: "Teste remoto aprovado", descricao: "Abertura e fechamento executados pelo centro de operação.", data: "15/03/2026 09:18", tag: "Operação" }
      ],
      manutencao: [
        { titulo: "Inspeção pós-implantação", descricao: "Auditoria inicial concluída após 60 dias de uso.", data: "02/03/2026", status: "Concluída" },
        { titulo: "Revisão trimestral", descricao: "Próxima manutenção já incluída no cronograma.", data: "05/06/2026", status: "Planejada" }
      ],
      historico: [
        { titulo: "Entrada em operação", descricao: "Ativo liberado para monitoramento completo.", data: "06/01/2026", tag: "Operação" },
        { titulo: "Ajuste de parâmetros", descricao: "Configuração de tempo de religamento refinada.", data: "15/03/2026", tag: "Proteção" }
      ],
      dadosAdicionais: [
        { instalacao: "06/01/2026", tarefa: "Comissionamento inicial", projeto: "B-241044", ultimaManutencao: "02/03/2026", comunicacao: "ATIVA" },
        { instalacao: "15/03/2026", tarefa: "Teste remoto", projeto: "B-241044", ultimaManutencao: "02/03/2026", comunicacao: "ATIVA" }
      ]
    },
    {
      codigo: "SE00001",
      tipo: "SENSOR DE ENERGIA",
      alimentador: "EUN-03P7",
      projeto: "B-240933",
      status: "ATIVO",
      fabricante: "Landis+Gyr",
      modelo: "SenseGrid X",
      classe: "BT",
      localizacao: "Corredor Central",
      responsavel: "Equipe de Medição",
      resumo: "Sensor de energia responsável pelo apoio ao rastreamento de perdas e leitura operacional.",
      criticidade: "Baixa",
      comunicacao: "ATIVA",
      ultimaAtualizacao: "2026-03-21",
      instalacao: "2025-08-18",
      ultimaManutencao: "2026-01-30",
      documentos: [
        { nome: "Ficha-Tecnica-SE00001.pdf", data: "21/03/2026", tipo: "Ficha técnica" },
        { nome: "Relatorio-Afericao-SE00001.pdf", data: "30/01/2026", tipo: "Aferição" }
      ],
      rastreamento: [
        { titulo: "Coleta normalizada", descricao: "Sensor segue enviando leituras em janela regular.", data: "21/03/2026 07:40", tag: "Medição" },
        { titulo: "Canal redundante validado", descricao: "Teste de redundância completado com sucesso.", data: "09/03/2026 13:55", tag: "Telemetria" }
      ],
      manutencao: [
        { titulo: "Aferição anual", descricao: "Aferição concluída com desvio dentro do limite.", data: "30/01/2026", status: "Concluída" },
        { titulo: "Inspeção de rotina", descricao: "Nova auditoria de leituras prevista.", data: "28/05/2026", status: "Planejada" }
      ],
      historico: [
        { titulo: "Integração com BI", descricao: "Sensor passou a alimentar os dashboards analíticos.", data: "09/03/2026", tag: "Dados" },
        { titulo: "Canal secundário ativado", descricao: "Failover pronto para uso em caso de indisponibilidade.", data: "02/02/2026", tag: "Sistema" }
      ],
      dadosAdicionais: [
        { instalacao: "18/08/2025", tarefa: "Instalação e aferição", projeto: "B-240933", ultimaManutencao: "30/01/2026", comunicacao: "ATIVA" },
        { instalacao: "09/03/2026", tarefa: "Validação de redundância", projeto: "B-240933", ultimaManutencao: "30/01/2026", comunicacao: "ATIVA" }
      ]
    },
    {
      codigo: "TF00001",
      tipo: "TRANSFORMADOR",
      alimentador: "EUN-01P2",
      projeto: "B-240688",
      status: "REALOCAÇÃO",
      fabricante: "TrafoMax",
      modelo: "T-900",
      classe: "34,5/13,8 kV",
      localizacao: "Base de apoio Norte",
      responsavel: "Logística Operacional",
      resumo: "Transformador retirado de campo para realocação planejada em novo circuito de demanda crescente.",
      criticidade: "Média",
      comunicacao: "INATIVA",
      ultimaAtualizacao: "2026-03-17",
      instalacao: "2024-06-04",
      ultimaManutencao: "2026-02-25",
      documentos: [
        { nome: "Laudo-TF00001.pdf", data: "17/03/2026", tipo: "Laudo" },
        { nome: "Plano-Realocacao-TF00001.pdf", data: "25/02/2026", tipo: "Plano" }
      ],
      rastreamento: [
        { titulo: "Equipamento em base", descricao: "Transformador encontra-se estacionado na base Norte para transporte interno.", data: "17/03/2026 12:20", tag: "Logística" },
        { titulo: "Rota aprovada", descricao: "Nova rota operacional validada pela equipe de transporte.", data: "15/03/2026 10:40", tag: "Planejamento" }
      ],
      manutencao: [
        { titulo: "Inspeção antes da realocação", descricao: "Checklist elétrico e mecânico concluído.", data: "25/02/2026", status: "Concluída" },
        { titulo: "Instalação em novo ponto", descricao: "Montagem prevista após confirmação do alimentador.", data: "04/04/2026", status: "Planejada" }
      ],
      historico: [
        { titulo: "Retirada programada", descricao: "Ativo foi removido do circuito original.", data: "14/03/2026", tag: "Operação" },
        { titulo: "Análise de reutilização", descricao: "Engenharia liberou ativo para nova aplicação.", data: "26/02/2026", tag: "Engenharia" }
      ],
      dadosAdicionais: [
        { instalacao: "04/06/2024", tarefa: "Instalação original", projeto: "B-240688", ultimaManutencao: "25/02/2026", comunicacao: "INATIVA" },
        { instalacao: "17/03/2026", tarefa: "Movimentação para base", projeto: "B-240688", ultimaManutencao: "25/02/2026", comunicacao: "INATIVA" }
      ]
    },
    {
      codigo: "TF00002",
      tipo: "TRANSFORMADOR",
      alimentador: "EUN-02P5",
      projeto: "B-240642",
      status: "INATIVO",
      fabricante: "Hitachi Energy",
      modelo: "PrimeTrans 65",
      classe: "69/13,8 kV",
      localizacao: "Pátio Reserva",
      responsavel: "Base de Reserva Técnica",
      resumo: "Transformador reservado e temporariamente inativo aguardando decisão sobre descarte técnico ou reaproveitamento.",
      criticidade: "Alta",
      comunicacao: "INATIVA",
      ultimaAtualizacao: "2026-03-15",
      instalacao: "2022-04-11",
      ultimaManutencao: "2025-12-19",
      documentos: [
        { nome: "Laudo-Reserva-TF00002.pdf", data: "15/03/2026", tipo: "Laudo" },
        { nome: "Historico-TF00002.pdf", data: "19/12/2025", tipo: "Histórico" }
      ],
      rastreamento: [
        { titulo: "Sem telemetria", descricao: "Comunicação permanece desligada por decisão operacional.", data: "15/03/2026 09:50", tag: "Sistema" },
        { titulo: "Avaliação em aberto", descricao: "Equipamento segue aguardando parecer final da engenharia.", data: "10/03/2026 17:40", tag: "Engenharia" }
      ],
      manutencao: [
        { titulo: "Inspeção estrutural", descricao: "Revisão visual executada para garantir armazenamento seguro.", data: "19/12/2025", status: "Concluída" },
        { titulo: "Laudo complementar", descricao: "Nova vistoria prevista para apoiar a decisão final.", data: "09/04/2026", status: "Planejada" }
      ],
      historico: [
        { titulo: "Saída de operação", descricao: "Equipamento foi movido para a reserva técnica.", data: "05/03/2026", tag: "Operação" },
        { titulo: "Abertura de análise", descricao: "Pedido de avaliação de reaproveitamento registrado.", data: "20/02/2026", tag: "Processo" }
      ],
      dadosAdicionais: [
        { instalacao: "11/04/2022", tarefa: "Instalação original", projeto: "B-240642", ultimaManutencao: "19/12/2025", comunicacao: "INATIVA" },
        { instalacao: "05/03/2026", tarefa: "Transferência para reserva", projeto: "B-240642", ultimaManutencao: "19/12/2025", comunicacao: "INATIVA" }
      ]
    }
  ];

  let cache = null;

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function safeArrayParse(rawValue) {
    if (!rawValue) {
      return null;
    }

    try {
      const parsed = JSON.parse(rawValue);
      return Array.isArray(parsed) ? parsed : null;
    } catch (error) {
      return null;
    }
  }

  function stripAccents(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function slugify(value) {
    return stripAccents(value)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function formatDate(dateValue) {
    if (!dateValue) {
      return "--";
    }

    if (String(dateValue).includes("/")) {
      return String(dateValue);
    }

    const parsed = new Date(dateValue);

    if (Number.isNaN(parsed.getTime())) {
      return String(dateValue);
    }

    return parsed.toLocaleDateString("pt-BR");
  }

  function formatDateTime(dateValue) {
    if (!dateValue) {
      return "--";
    }

    if (String(dateValue).includes(":") && String(dateValue).includes("/")) {
      return String(dateValue);
    }

    const parsed = new Date(dateValue);

    if (Number.isNaN(parsed.getTime())) {
      return String(dateValue);
    }

    return parsed.toLocaleString("pt-BR");
  }

  function normalizeList(list) {
    return Array.isArray(list) ? list : [];
  }

  function normalizeEquipamento(equipamento) {
    const normalized = {
      codigo: equipamento.codigo || "",
      tipo: equipamento.tipo || "Equipamento",
      alimentador: equipamento.alimentador || "--",
      projeto: equipamento.projeto || "--",
      status: equipamento.status || "ATIVO",
      fabricante: equipamento.fabricante || "--",
      modelo: equipamento.modelo || "--",
      classe: equipamento.classe || "--",
      localizacao: equipamento.localizacao || "--",
      responsavel: equipamento.responsavel || "--",
      resumo: equipamento.resumo || "Equipamento sem resumo operacional cadastrado.",
      criticidade: equipamento.criticidade || "Baixa",
      comunicacao: equipamento.comunicacao || "ATIVA",
      ultimaAtualizacao: equipamento.ultimaAtualizacao || new Date().toISOString().slice(0, 10),
      instalacao: equipamento.instalacao || "--",
      ultimaManutencao: equipamento.ultimaManutencao || "--",
      documentos: normalizeList(equipamento.documentos),
      rastreamento: normalizeList(equipamento.rastreamento),
      manutencao: normalizeList(equipamento.manutencao),
      historico: normalizeList(equipamento.historico),
      dadosAdicionais: normalizeList(equipamento.dadosAdicionais)
    };

    normalized.sigla = stripAccents(normalized.tipo)
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((parte) => parte[0])
      .join("")
      .toUpperCase();

    return normalized;
  }

  function mergeEquipamento(defaultItem, storedItem) {
    const merged = {
      ...defaultItem,
      ...storedItem,
      documentos: normalizeList(storedItem.documentos).length ? storedItem.documentos : defaultItem.documentos,
      rastreamento: normalizeList(storedItem.rastreamento).length ? storedItem.rastreamento : defaultItem.rastreamento,
      manutencao: normalizeList(storedItem.manutencao).length ? storedItem.manutencao : defaultItem.manutencao,
      historico: normalizeList(storedItem.historico).length ? storedItem.historico : defaultItem.historico,
      dadosAdicionais: normalizeList(storedItem.dadosAdicionais).length ? storedItem.dadosAdicionais : defaultItem.dadosAdicionais
    };

    return normalizeEquipamento(merged);
  }

  function saveEquipamentos(equipamentos) {
    cache = equipamentos.map(normalizeEquipamento);
    const payload = JSON.stringify(cache);
    window.localStorage.setItem(STORAGE_KEY, payload);
    window.localStorage.setItem(LEGACY_STORAGE_KEY, payload);
  }

  function ensureDemoData() {
    if (cache) {
      return clone(cache);
    }

    const defaults = clone(DEFAULT_EQUIPAMENTOS).map(normalizeEquipamento);
    const defaultsByCode = new Map(defaults.map((item) => [item.codigo, item]));
    const stored = safeArrayParse(window.localStorage.getItem(STORAGE_KEY)) ||
      safeArrayParse(window.localStorage.getItem(LEGACY_STORAGE_KEY));

    const merged = [];

    if (stored && stored.length) {
      stored.forEach((item) => {
        const normalized = normalizeEquipamento(item);

        if (defaultsByCode.has(normalized.codigo)) {
          merged.push(mergeEquipamento(defaultsByCode.get(normalized.codigo), normalized));
          defaultsByCode.delete(normalized.codigo);
          return;
        }

        merged.push(normalized);
      });

      defaultsByCode.forEach((item) => {
        merged.push(item);
      });
    } else {
      merged.push(...defaults);
    }

    merged.sort((firstItem, secondItem) => firstItem.codigo.localeCompare(secondItem.codigo, "pt-BR"));
    saveEquipamentos(merged);
    return clone(merged);
  }

  function getEquipamentos() {
    if (!cache) {
      ensureDemoData();
    }

    return clone(cache);
  }

  function getEquipamentoByCodigo(codigo) {
    return getEquipamentos().find((item) => item.codigo === codigo) || null;
  }

  function updateEquipamento(codigo, changes) {
    const equipamentos = getEquipamentos();
    const updated = equipamentos.map((item) => {
      if (item.codigo !== codigo) {
        return item;
      }

      return normalizeEquipamento({
        ...item,
        ...changes,
        ultimaAtualizacao: new Date().toISOString().slice(0, 10)
      });
    });

    saveEquipamentos(updated);
    return getEquipamentoByCodigo(codigo);
  }

  function statusClass(status) {
    const normalized = slugify(status || "");
    return normalized || "ativo";
  }

  function createToastStack() {
    let stack = document.querySelector(".toast-stack");

    if (!stack) {
      stack = document.createElement("div");
      stack.className = "toast-stack";
      document.body.appendChild(stack);
    }

    return stack;
  }

  function showToast(message, type) {
    const stack = createToastStack();
    const toast = document.createElement("div");

    toast.className = `toast ${type || "info"}`;
    toast.textContent = message;
    stack.appendChild(toast);

    window.requestAnimationFrame(() => {
      toast.classList.add("visible");
    });

    window.setTimeout(() => {
      toast.classList.add("is-leaving");
      window.setTimeout(() => {
        toast.remove();
      }, 220);
    }, 3200);
  }

  function downloadTextFile(filename, content) {
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();

    window.setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 1000);
  }

  window.SirepApp = {
    ensureDemoData,
    getEquipamentos,
    getEquipamentoByCodigo,
    updateEquipamento,
    statusClass,
    showToast,
    slugify,
    stripAccents,
    formatDate,
    formatDateTime,
    downloadTextFile
  };
})();
