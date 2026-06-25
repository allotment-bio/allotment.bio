(function () {
  const PLOTS_ACTIVE = 14;
  const SCATTER_ORDER = [18, 19, 10, 27, 11, 26, 9, 20, 28, 12, 17, 35, 5, 34, 6, 13, 25, 36, 4, 21, 33, 14, 2, 29, 38, 7, 22, 31, 1, 15, 37, 8, 24, 30, 0, 16, 39, 3, 23, 32];

  const STAGES = [
    { n: '01', title: 'New targets', desc: 'Detailed, multi-modal data surfaces the targets worth pursuing.', on: [0, 4] },
    { n: '02', title: 'AI design', desc: 'We apply the best AI tools to design molecules and peptides for each target.', on: [0, 4, 1, 5] },
    { n: '03', title: 'In-silico validation', desc: 'Predictive tools rank, refine and de-risk candidates before the bench.', on: [0, 4, 1, 5, 2, 8] },
    { n: '04', title: 'Actionable leads', desc: 'Validated molecules and peptides, ready for partners to advance.', on: [0, 4, 1, 5, 2, 8, 3, 6, 7] },
  ];

  const PILLARS = [
    { n: '01 — Data', title: 'Data at the root', desc: 'Detailed, multi-modal biological data built for decision-making, not decoration.' },
    { n: '02 — AI', title: 'Best tool for the job', desc: 'We build where it counts and adopt the best AI elsewhere — chosen for the target, not the brand.' },
    { n: '03 — Output', title: 'Actionable leads', desc: 'Every program ends in a validated lead, targeted against new biology.' },
  ];

  function renderPlotGrid() {
    const grid = document.getElementById('plot-grid');
    const grownSet = new Set(SCATTER_ORDER.slice(0, PLOTS_ACTIVE));
    for (let i = 0; i < 40; i++) {
      const cell = document.createElement('div');
      cell.className = 'plot-cell ' + (grownSet.has(i) ? 'grown' : 'empty');
      grid.appendChild(cell);
    }
    document.getElementById('plots-active').textContent = PLOTS_ACTIVE + ' active';
  }

  function renderPipeline() {
    const grid = document.getElementById('pipeline-grid');
    STAGES.forEach((stage) => {
      const stageEl = document.createElement('div');
      stageEl.className = 'stage';

      const dotsEl = document.createElement('div');
      dotsEl.className = 'stage-dots';
      for (let i = 0; i < 9; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot ' + (stage.on.includes(i) ? 'on' : 'off');
        dotsEl.appendChild(dot);
      }

      const textEl = document.createElement('div');
      textEl.innerHTML =
        '<div class="stage-n">' + stage.n + '</div>' +
        '<div class="stage-title">' + stage.title + '</div>' +
        '<div class="stage-desc">' + stage.desc + '</div>';

      stageEl.appendChild(dotsEl);
      stageEl.appendChild(textEl);
      grid.appendChild(stageEl);
    });
  }

  function renderThesis() {
    const grid = document.getElementById('thesis-grid');
    PILLARS.forEach((p) => {
      const el = document.createElement('div');
      el.innerHTML =
        '<div class="pillar-n">' + p.n + '</div>' +
        '<div class="pillar-title">' + p.title + '</div>' +
        '<div class="pillar-desc">' + p.desc + '</div>';
      grid.appendChild(el);
    });
  }

  renderPlotGrid();
  renderPipeline();
  renderThesis();
})();
