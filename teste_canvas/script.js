const defaultConfig = {
  main_title: 'Álgebra Linear',
  subtitle: 'Combinações, Dependência, Bases e Espaços Vetoriais',
  background_color: '#0a0a0f',
  surface_color: '#141420',
  text_color: '#e8e6f0',
  primary_color: '#7c3aed',
  secondary_color: '#22d3ee'
};

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange: async (config) => {
      document.getElementById('main-title').textContent = config.main_title || defaultConfig.main_title;
      document.getElementById('subtitle').textContent = config.subtitle || defaultConfig.subtitle;
      document.documentElement.style.setProperty('--bg-color', config.background_color || defaultConfig.background_color);
      document.documentElement.style.setProperty('--surface-color', config.surface_color || defaultConfig.surface_color);
      document.documentElement.style.setProperty('--text-color', config.text_color || defaultConfig.text_color);
      document.documentElement.style.setProperty('--primary-color', config.primary_color || defaultConfig.primary_color);
      document.documentElement.style.setProperty('--secondary-color', config.secondary_color || defaultConfig.secondary_color);
    },
    mapToCapabilities: (config) => ({
      recolorables: [
        { get: () => config.background_color || defaultConfig.background_color, set: (value) => window.elementSdk.setConfig({ background_color: value }) },
        { get: () => config.surface_color || defaultConfig.surface_color, set: (value) => window.elementSdk.setConfig({ surface_color: value }) },
        { get: () => config.text_color || defaultConfig.text_color, set: (value) => window.elementSdk.setConfig({ text_color: value }) },
        { get: () => config.primary_color || defaultConfig.primary_color, set: (value) => window.elementSdk.setConfig({ primary_color: value }) },
        { get: () => config.secondary_color || defaultConfig.secondary_color, set: (value) => window.elementSdk.setConfig({ secondary_color: value }) }
      ],
      borderables: [],
      fontEditable: undefined,
      fontSizeable: undefined
    }),
    mapToEditPanelValues: (config) => new Map([
      ['main_title', config.main_title || defaultConfig.main_title],
      ['subtitle', config.subtitle || defaultConfig.subtitle]
    ])
  });
}

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}


// --- CANVAS RENDERING ENGINE ---

// Camera states for each interactive graph
const views = {
    mudanca: { camX: 0, camY: 0, zoom: 16 }, // zoom represents width in math units
    transformacao: { camX: 0, camY: 0, zoom: 16 }
};
let activeDrag = null;

window.addEventListener('DOMContentLoaded', () => {
  initCanvasInteractions();
  showTab('mudanca-int');
});

function showTab(tabId) {
  const panels = ['mudanca-int', 'transformacao-int'];
  panels.forEach(p => {
    document.getElementById(`panel-${p}`).classList.add('hidden');
    document.getElementById(`tab-${p}`).classList.remove('active');
    document.getElementById(`tab-${p}`).classList.add('bg-gray-800');
  });
  document.getElementById(`panel-${tabId}`).classList.remove('hidden');
  document.getElementById(`tab-${tabId}`).classList.add('active');
  document.getElementById(`tab-${tabId}`).classList.remove('bg-gray-800');
  
  // Wait a fraction of a second for CSS 'display: block' to apply before grabbing canvas size
  setTimeout(() => {
      if (tabId === 'mudanca-int') { updateMudancaViz(); }
      if (tabId === 'transformacao-int') { updateTransformacaoViz(); }
  }, 50);
}

// Vector Drawing Helper
function drawArrow(ctx, start, end, color, isDashed = false) {
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.setLineDash(isDashed ? [6, 6] : []);
    ctx.stroke();

    // Arrowhead logic
    ctx.setLineDash([]);
    const angle = Math.atan2(end.y - start.y, end.x - start.x);
    const headlen = 10;
    ctx.beginPath();
    ctx.moveTo(end.x, end.y);
    ctx.lineTo(end.x - headlen * Math.cos(angle - Math.PI / 6), end.y - headlen * Math.sin(angle - Math.PI / 6));
    ctx.lineTo(end.x - headlen * Math.cos(angle + Math.PI / 6), end.y - headlen * Math.sin(angle + Math.PI / 6));
    ctx.lineTo(end.x, end.y);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(ctx, start, end, color, width=1, isDashed=false) {
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.setLineDash(isDashed ? [4, 4] : []);
    ctx.stroke();
    ctx.setLineDash([]);
}

// Master Canvas Rendering Loop
function renderCanvas(canvasId, type) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const rect = canvas.parentElement.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    
    const width = rect.width;
    const height = rect.height;
    const view = views[type];
    const scale = width / view.zoom;
    const viewHeightWorld = height / scale;
    
    const toScreen = (wx, wy) => ({
        x: (wx - (view.camX - view.zoom/2)) * scale,
        y: ((view.camY + viewHeightWorld/2) - wy) * scale
    });

    // 1. Clear Canvas
    ctx.clearRect(0, 0, width, height);

    // 2. Draw Mathematical Grid
    ctx.strokeStyle = 'rgba(124,58,237,0.12)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    const startX = Math.floor(view.camX - view.zoom/2);
    const endX = Math.ceil(view.camX + view.zoom/2);
    const startY = Math.floor(view.camY - viewHeightWorld/2);
    const endY = Math.ceil(view.camY + viewHeightWorld/2);

    for (let x = startX; x <= endX; x++) {
        const p1 = toScreen(x, startY);
        const p2 = toScreen(x, endY);
        ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y);
    }
    for (let y = startY; y <= endY; y++) {
        const p1 = toScreen(startX, y);
        const p2 = toScreen(endX, y);
        ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y);
    }
    ctx.stroke();

    // 3. Draw Main Axes
    ctx.strokeStyle = 'rgba(255,255,255,0.2)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    const yAxis1 = toScreen(0, startY), yAxis2 = toScreen(0, endY);
    ctx.moveTo(yAxis1.x, yAxis1.y); ctx.lineTo(yAxis2.x, yAxis2.y);
    const xAxis1 = toScreen(startX, 0), xAxis2 = toScreen(endX, 0);
    ctx.moveTo(xAxis1.x, xAxis1.y); ctx.lineTo(xAxis2.x, xAxis2.y);
    ctx.stroke();

    const origin = toScreen(0, 0);
    ctx.font = "bold 14px 'JetBrains Mono'";
    ctx.textBaseline = "middle";

    // 4. Render Specific Graph Type
    if (type === 'mudanca') {
        const b1x = parseFloat(document.getElementById('b1x').value) || 0;
        const b1y = parseFloat(document.getElementById('b1y').value) || 0;
        const b2x = parseFloat(document.getElementById('b2x').value) || 0;
        const b2y = parseFloat(document.getElementById('b2y').value) || 0;
        const vx = parseFloat(document.getElementById('vx').value) || 0;
        const vy = parseFloat(document.getElementById('vy').value) || 0;
        
        const det = b1x * b2y - b2x * b1y;
        if (Math.abs(det) > 0.0001) {
            const l1 = (b2y * vx - b2x * vy) / det;
            const l2 = (b1x * vy - b1y * vx) / det;
            
            const comp1 = toScreen(l1*b1x, l1*b1y);
            const comp2 = toScreen(l1*b1x + l2*b2x, l1*b1y + l2*b2y);
            
            drawLine(ctx, origin, comp1, 'rgba(236,72,153,0.5)', 2, true);
            drawLine(ctx, comp1, comp2, 'rgba(6,182,212,0.5)', 2, true);
        }

        const pb1 = toScreen(b1x, b1y);
        drawArrow(ctx, origin, pb1, '#ec4899', true);
        ctx.fillStyle = '#ec4899';
        ctx.fillText("b₁", pb1.x + 8, pb1.y - 8);

        const pb2 = toScreen(b2x, b2y);
        drawArrow(ctx, origin, pb2, '#22d3ee', true);
        ctx.fillStyle = '#22d3ee';
        ctx.fillText("b₂", pb2.x + 8, pb2.y - 8);

        const pv = toScreen(vx, vy);
        drawArrow(ctx, origin, pv, '#7c3aed', false);
        ctx.fillStyle = '#7c3aed';
        ctx.fillText("v", pv.x + 8, pv.y - 8);

    } else if (type === 'transformacao') {
        const t1x = parseFloat(document.getElementById('t1x').value) || 0;
        const t1y = parseFloat(document.getElementById('t1y').value) || 0;
        const t2x = parseFloat(document.getElementById('t2x').value) || 0;
        const t2y = parseFloat(document.getElementById('t2y').value) || 0;
        const tvx = parseFloat(document.getElementById('tvx').value) || 0;
        const tvy = parseFloat(document.getElementById('tvy').value) || 0;

        const w1 = t1x * tvx + t1y * tvy;
        const w2 = t2x * tvx + t2y * tvy;

        const pw = toScreen(w1, w2);
        drawArrow(ctx, origin, pw, '#22d3ee', false);
        ctx.fillStyle = '#22d3ee';
        ctx.fillText("w", pw.x + 8, pw.y - 8);

        const pv = toScreen(tvx, tvy);
        drawArrow(ctx, origin, pv, '#7c3aed', false);
        ctx.fillStyle = '#7c3aed';
        ctx.fillText("v", pv.x + 8, pv.y - 8);
    }
}


// --- INTERACTION & DRAGGING LOGIC ---

function initCanvasInteractions() {
    setupCanvas('mudanca-canvas', 'mudanca', 'vx', 'vy');
    setupCanvas('transformacao-canvas', 'transformacao', 'tvx', 'tvy');

    window.addEventListener('resize', () => {
        renderCanvas('mudanca-canvas', 'mudanca');
        renderCanvas('transformacao-canvas', 'transformacao');
    });
}

function setupCanvas(canvasId, type, vxId, vyId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const getMouseWorld = (e) => {
        const rect = canvas.getBoundingClientRect();
        const sx = e.clientX - rect.left;
        const sy = e.clientY - rect.top;
        
        const view = views[type];
        const width = rect.width;
        const height = rect.height;
        const scale = width / view.zoom;
        const viewHeightWorld = height / scale;
        
        const wx = (sx / scale) + (view.camX - view.zoom/2);
        const wy = (view.camY + viewHeightWorld/2) - (sy / scale);
        return {wx, wy};
    };

    canvas.addEventListener('mousedown', (e) => {
        const world = getMouseWorld(e);
        const vx = parseFloat(document.getElementById(vxId).value) || 0;
        const vy = parseFloat(document.getElementById(vyId).value) || 0;
        
        const dist = Math.hypot(world.wx - vx, world.wy - vy);
        const view = views[type];
        
        if (dist < view.zoom * 0.05) { // Threshold size scales with camera zoom
            activeDrag = { type, mode: 'vector', vxId, vyId };
            canvas.style.cursor = 'grabbing';
        } else {
            activeDrag = { 
                type, mode: 'pan', 
                startX: e.clientX, startY: e.clientY,
                startCamX: view.camX, startCamY: view.camY 
            };
            canvas.style.cursor = 'grabbing';
        }
    });

    canvas.addEventListener('wheel', (e) => {
        e.preventDefault();
        const view = views[type];
        const zoomFactor = e.deltaY > 0 ? 1.1 : 0.9;
        const worldBefore = getMouseWorld(e);
        
        view.zoom *= zoomFactor;
        
        const rect = canvas.getBoundingClientRect();
        const sx = e.clientX - rect.left;
        const sy = e.clientY - rect.top;
        const scaleNew = rect.width / view.zoom;
        const viewHeightWorldNew = rect.height / scaleNew;
        
        view.camX = worldBefore.wx - (sx / scaleNew) + view.zoom / 2;
        view.camY = worldBefore.wy + (sy / scaleNew) - viewHeightWorldNew / 2;

        renderCanvas(canvasId, type);
    });
}

// Global mouse tracker allows dragging smoothly even if mouse accidentally leaves the canvas border
window.addEventListener('mousemove', (e) => {
    if (!activeDrag) return;
    
    const canvasId = activeDrag.type === 'mudanca' ? 'mudanca-canvas' : 'transformacao-canvas';
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    if (activeDrag.mode === 'vector') {
        const rect = canvas.getBoundingClientRect();
        const sx = e.clientX - rect.left;
        const sy = e.clientY - rect.top;
        
        const view = views[activeDrag.type];
        const scale = rect.width / view.zoom;
        const viewHeightWorld = rect.height / scale;
        
        const wx = (sx / scale) + (view.camX - view.zoom/2);
        const wy = (view.camY + viewHeightWorld/2) - (sy / scale);
        
        document.getElementById(activeDrag.vxId).value = (Math.round(wx * 10) / 10).toFixed(1);
        document.getElementById(activeDrag.vyId).value = (Math.round(wy * 10) / 10).toFixed(1);
        
        if (activeDrag.type === 'mudanca') { 
            updateMudancaViz(); 
        } else { 
            updateTransformacaoViz(); 
        }
    } else if (activeDrag.mode === 'pan') {
        const dx = e.clientX - activeDrag.startX;
        const dy = e.clientY - activeDrag.startY;
        
        const view = views[activeDrag.type];
        const rect = canvas.getBoundingClientRect();
        const scale = rect.width / view.zoom;
        
        view.camX = activeDrag.startCamX - (dx / scale);
        view.camY = activeDrag.startCamY + (dy / scale);
        
        renderCanvas(canvasId, activeDrag.type);
    }
});

window.addEventListener('mouseup', () => {
    if (activeDrag) {
        const canvasId = activeDrag.type === 'mudanca' ? 'mudanca-canvas' : 'transformacao-canvas';
        const canvas = document.getElementById(canvasId);
        if (canvas) canvas.style.cursor = 'grab';
        activeDrag = null;
    }
});


// --- MATH COMPUTATIONS & UPDATES ---

function mudancaBase() {
  const b1x = parseFloat(document.getElementById('b1x').value) || 0;
  const b1y = parseFloat(document.getElementById('b1y').value) || 0;
  const b2x = parseFloat(document.getElementById('b2x').value) || 0;
  const b2y = parseFloat(document.getElementById('b2y').value) || 0;
  const vx = parseFloat(document.getElementById('vx').value) || 0;
  const vy = parseFloat(document.getElementById('vy').value) || 0;
  const det = b1x * b2y - b2x * b1y;
  let html = '';
  if (det === 0) {
    html = `
    <div class="p-4 rounded-xl bg-red-500/20 border border-red-500/30">
      <p class="text-red-400 font-semibold text-center">Os vetores da base são LD (det = 0)</p>
      <p class="text-gray-400 text-center mt-2">Não formam uma base válida</p>
    </div>`;
  } else {
    const lambda1 = (b2y * vx - b2x * vy) / det;
    const lambda2 = (b1x * vy - b1y * vx) / det;
    const formatNum = (n) => {
      if (Number.isInteger(n)) return n.toString();
      for (let d = 1; d <= 16; d++) {
        const nu = Math.round(n * d);
        if (Math.abs(nu / d - n) < 0.0001) return d === 1 ? nu.toString() : `${nu}/${d}`;
      }
      return n.toFixed(4);
    };
    html = `
    <div class="p-4 rounded-xl bg-green-500/20 border border-green-500/30 mb-4">
      <p class="text-green-400 font-semibold text-center">Base válida (det = ${det})</p>
    </div>
    <div class="math-block rounded-xl p-4 mb-4">
      <p class="mono text-sm text-gray-400 mb-2">Calculando λ₁ e λ₂:</p>
      <p class="mono text-center">λ₁ = (${b2y}·${vx} - ${b2x}·${vy}) / ${det} = <span class="text-cyan-400">${formatNum(lambda1)}</span></p>
      <p class="mono text-center">λ₂ = (${b1x}·${vy} - ${b1y}·${vx}) / ${det} = <span class="text-cyan-400">${formatNum(lambda2)}</span></p>
    </div>
    <div class="p-6 rounded-xl bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30">
      <p class="text-center text-xl">
      <span class="mono text-cyan-400">(${vx}, ${vy})</span> <span class="mx-4">→</span> <span class="mono text-purple-400">(${formatNum(lambda1)}, ${formatNum(lambda2)})<sub>β</sub></span>
    </p>
    </div>`;
  }
  document.getElementById('resultado-mudanca').innerHTML = html;
  document.getElementById('resultado-mudanca').classList.remove('hidden');
}

function updateMudancaViz() {
  const b1x = parseFloat(document.getElementById('b1x').value) || 0;
  const b1y = parseFloat(document.getElementById('b1y').value) || 0;
  const b2x = parseFloat(document.getElementById('b2x').value) || 0;
  const b2y = parseFloat(document.getElementById('b2y').value) || 0;
  const vx = parseFloat(document.getElementById('vx').value) || 0;
  const vy = parseFloat(document.getElementById('vy').value) || 0;

  const det = b1x * b2y - b2x * b1y;
  document.getElementById('mudanca-det').textContent = det.toFixed(2);

  if (Math.abs(det) > 0.0001) {
    const lambda1 = (b2y * vx - b2x * vy) / det;
    const lambda2 = (b1x * vy - b1y * vx) / det;
    document.getElementById('mudanca-l1-val').textContent = lambda1.toFixed(2);
    document.getElementById('mudanca-l2-val').textContent = lambda2.toFixed(2);
  } else {
    document.getElementById('mudanca-l1-val').textContent = '—';
    document.getElementById('mudanca-l2-val').textContent = '—';
  }

  renderCanvas('mudanca-canvas', 'mudanca');
}

function transformacaoLinear(){
  const t1x = parseFloat(document.getElementById('t1x').value) || 0;
  const t1y = parseFloat(document.getElementById('t1y').value) || 0;
  const t2x = parseFloat(document.getElementById('t2x').value) || 0;
  const t2y = parseFloat(document.getElementById('t2y').value) || 0;
  const tvx = parseFloat(document.getElementById('tvx').value) || 0;
  const tvy = parseFloat(document.getElementById('tvy').value) || 0;
  
  const transf = t1x * t2y - t2x * t1y;
  let html = '';
  if (transf === 0) {
    html = `
    <div class="p-4 rounded-xl bg-red-500/20 border border-red-500/30">
      <p class="text-red-400 font-semibold text-center">Os vetores da base são LD (det = 0)</p>
      <p class="text-gray-400 text-center mt-2">T não é transformação linear</p>
    </div>`;
  } else {
    const w1 = ((t1x * tvx) + (t1y * tvy));
    const w2 = ((t2x * tvx) + (t2y * tvy));
    const formatNum = (n) => {
      if (Number.isInteger(n)) return n.toString();
      for (let d = 1; d <= 16; d++) {
        const nu = Math.round(n * d);
        if (Math.abs(nu / d - n) < 0.0001) return d === 1 ? nu.toString() : `${nu}/${d}`;
      }
      return n.toFixed(4);
    };
    html = `
    <div class="p-4 rounded-xl bg-green-500/20 border border-green-500/30 mb-4">
      <p class="text-green-400 font-semibold text-center">T é transformação linear</p>
    </div>
    <div class="math-block rounded-xl p-4 mb-4">
      <p class="mono text-sm text-gray-400 mb-2">Calculando w<sub>x</sub> e w<sub>y</sub>:</p>
      <p class="mono text-center">w<sub>x</sub> = (${t1x}·${tvx} + ${t1y}·${tvy}) = <span class="text-cyan-400">${formatNum(w1)}</span></p>
      <p class="mono text-center">w<sub>y</sub> = (${t2x}·${tvx} + ${t2y}·${tvy}) = <span class="text-cyan-400">${formatNum(w2)}</span></p>
    </div>
    <div class="p-6 rounded-xl bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30">
      <p class="text-center text-xl">
      <span class="mono text-cyan-400">T(${tvx}, ${tvy})</span> <span class="mx-4"> = </span> <span class="mono text-purple-400">(${formatNum(w1)}, ${formatNum(w2)})</span>
    </p>
    </div>`;
  }
  document.getElementById('resultado-transformacao').innerHTML = html;
  document.getElementById('resultado-transformacao').classList.remove('hidden');
}

function updateTransformacaoViz(){
  const t1x = parseFloat(document.getElementById('t1x').value) || 0;
  const t1y = parseFloat(document.getElementById('t1y').value) || 0;
  const t2x = parseFloat(document.getElementById('t2x').value) || 0;
  const t2y = parseFloat(document.getElementById('t2y').value) || 0;
  const tvx = parseFloat(document.getElementById('tvx').value) || 0;
  const tvy = parseFloat(document.getElementById('tvy').value) || 0;

  const w1 = ((t1x * tvx) + (t1y * tvy));
  const w2 = ((t2x * tvx) + (t2y * tvy));

  document.getElementById('wx').textContent = w1.toFixed(2);
  document.getElementById('wy').textContent = w2.toFixed(2);
  
  renderCanvas('transformacao-canvas', 'transformacao');
}