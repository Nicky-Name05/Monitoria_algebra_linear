
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

    function showTab(tabId) {
      const panels = ['mudanca-int'];
      panels.forEach(p => {
        document.getElementById(`panel-${p}`).classList.add('hidden');
        document.getElementById(`tab-${p}`).classList.remove('active');
        document.getElementById(`tab-${p}`).classList.add('bg-gray-800');
      });
      document.getElementById(`panel-${tabId}`).classList.remove('hidden');
      document.getElementById(`tab-${tabId}`).classList.add('active');
      document.getElementById(`tab-${tabId}`).classList.remove('bg-gray-800');
      if (tabId === 'mudanca-int') {
        setTimeout(() => updateMudancaViz(), 50);
      }
    }

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
        html = `<div class="p-4 rounded-xl bg-red-500/20 border border-red-500/30"><p class="text-red-400 font-semibold text-center">Os vetores da base são LD (det = 0)</p><p class="text-gray-400 text-center mt-2">Não formam uma base válida</p></div>`;
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
        html = `<div class="p-4 rounded-xl bg-green-500/20 border border-green-500/30 mb-4"><p class="text-green-400 font-semibold text-center">Base válida (det = ${det})</p></div><div class="math-block rounded-xl p-4 mb-4"><p class="mono text-sm text-gray-400 mb-2">Calculando λ₁ e λ₂:</p><p class="mono text-center">λ₁ = (${b2y}·${vx} - ${b2x}·${vy}) / ${det} = <span class="text-cyan-400">${formatNum(lambda1)}</span></p><p class="mono text-center">λ₂ = (${b1x}·${vy} - ${b1y}·${vx}) / ${det} = <span class="text-cyan-400">${formatNum(lambda2)}</span></p></div><div class="p-6 rounded-xl bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30"><p class="text-center text-xl"><span class="mono text-cyan-400">(${vx}, ${vy})</span> <span class="mx-4">→</span> <span class="mono text-purple-400">(${formatNum(lambda1)}, ${formatNum(lambda2)})<sub>β</sub></span></p></div>`;
      }
      document.getElementById('resultado-mudanca').innerHTML = html;
      document.getElementById('resultado-mudanca').classList.remove('hidden');
    }

    function updateMudancaViz() {
      const b1x = parseFloat(document.getElementById('b1x').value) || 1;
      const b1y = parseFloat(document.getElementById('b1y').value) || 4;
      const b2x = parseFloat(document.getElementById('b2x').value) || 2;
      const b2y = parseFloat(document.getElementById('b2y').value) || 0;
      const vx = parseFloat(document.getElementById('vx').value) || 2;
      const vy = parseFloat(document.getElementById('vy').value) || 4;

      const svg = document.getElementById('mudanca-svg');
      if (!svg) return;

      const scale = 0.8;
      const b1x_scaled = b1x * scale;
      const b1y_scaled = b1y * scale;
      const b2x_scaled = b2x * scale;
      const b2y_scaled = b2y * scale;
      const vx_scaled = vx * scale;
      const vy_scaled = vy * scale;

      const base1 = document.getElementById('mudanca-base1');
      const base2 = document.getElementById('mudanca-base2');
      const vec = document.getElementById('mudanca-vec');

      base1.setAttribute('x2', b1x_scaled);
      base1.setAttribute('y2', -b1y_scaled);
      base2.setAttribute('x2', b2x_scaled);
      base2.setAttribute('y2', -b2y_scaled);
      vec.setAttribute('x2', vx_scaled);
      vec.setAttribute('y2', -vy_scaled);

      const label_b1 = document.getElementById('mudanca-label-b1');
      const label_b2 = document.getElementById('mudanca-label-b2');
      const label_v = document.getElementById('mudanca-label-v');

      label_b1.setAttribute('x', b1x_scaled + 0.4);
      label_b1.setAttribute('y', -b1y_scaled - 0.4);
      label_b2.setAttribute('x', b2x_scaled + 0.4);
      label_b2.setAttribute('y', -b2y_scaled + 0.6);
      label_v.setAttribute('x', vx_scaled + 0.4);
      label_v.setAttribute('y', -vy_scaled - 0.6);

      const det = b1x * b2y - b2x * b1y;
      document.getElementById('mudanca-det').textContent = det.toFixed(2);

      if (Math.abs(det) > 0.0001) {
        const lambda1 = (b2y * vx - b2x * vy) / det;
        const lambda2 = (b1x * vy - b1y * vx) / det;
        
        document.getElementById('mudanca-l1-val').textContent = lambda1.toFixed(2);
        document.getElementById('mudanca-l2-val').textContent = lambda2.toFixed(2);

        let decompositionGroup = document.getElementById('decomposition-group');
        if (!decompositionGroup) {
          decompositionGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
          decompositionGroup.id = 'decomposition-group';
          svg.appendChild(decompositionGroup);
        }
        decompositionGroup.innerHTML = '';

        const comp1_x = lambda1 * b1x_scaled;
        const comp1_y = lambda1 * b1y_scaled;
        const line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line1.setAttribute('x1', '0');
        line1.setAttribute('y1', '0');
        line1.setAttribute('x2', comp1_x);
        line1.setAttribute('y2', -comp1_y);
        line1.setAttribute('stroke', '#ec4899');
        line1.setAttribute('stroke-width', '0.15');
        line1.setAttribute('stroke-dasharray', '0.2,0.1');
        line1.setAttribute('opacity', '0.4');
        decompositionGroup.appendChild(line1);

        const line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line2.setAttribute('x1', comp1_x);
        line2.setAttribute('y1', -comp1_y);
        line2.setAttribute('x2', comp1_x + lambda2 * b2x_scaled);
        line2.setAttribute('y2', -comp1_y - lambda2 * b2y_scaled);
        line2.setAttribute('stroke', '#06b6d4');
        line2.setAttribute('stroke-width', '0.15');
        line2.setAttribute('stroke-dasharray', '0.2,0.1');
        line2.setAttribute('opacity', '0.4');
        decompositionGroup.appendChild(line2);
      } else {
        document.getElementById('mudanca-l1-val').textContent = '—';
        document.getElementById('mudanca-l2-val').textContent = '—';
        let decompositionGroup = document.getElementById('decomposition-group');
        if (decompositionGroup) decompositionGroup.innerHTML = '';
      }
    }

    // Dragging functionality for vector manipulation and canvas panning
    let isDragging = false;
    let dragMode = 'none'; // 'vector' or 'pan'
    let lastX = 0;
    let lastY = 0;
    let viewBoxX = -8;
    let viewBoxY = -8;
    const svg = document.getElementById('mudanca-svg');
    const DRAG_DISTANCE_THRESHOLD = 3; // pixels
    let dragStartX = 0;
    let dragStartY = 0;

    function startDragging(event) {
      const svg = document.getElementById('mudanca-svg');
      if (!svg) return;
      
      dragStartX = event.clientX;
      dragStartY = event.clientY;
      lastX = event.clientX;
      lastY = event.clientY;
      
      const vec = document.getElementById('mudanca-vec');
      const label_v = document.getElementById('mudanca-label-v');
      
      // Check if clicking on the vector line or its label for vector dragging
      if (event.target === vec || event.target === label_v) {
        dragMode = 'vector';
        isDragging = true;
        svg.style.cursor = 'grabbing';
      } else if (event.target.id === 'grid-background' || event.target === svg) {
        // Pan mode - but wait for threshold
        dragMode = 'pending-pan';
        isDragging = true;
      }
    }

    function dragVector(event) {
      if (!isDragging || !svg) return;

      if (dragMode === 'vector') {
        const rect = svg.getBoundingClientRect();
        
        // Get the viewBox coordinates
        const viewBox = svg.getAttribute('viewBox').split(' ').map(Number);
        const viewBoxWidth = viewBox[2];
        const viewBoxHeight = viewBox[3];
        
        // Calculate coordinates from mouse position
        const x = viewBox[0] + (event.clientX - rect.left) / rect.width * viewBoxWidth;
        const y = viewBox[1] + (event.clientY - rect.top) / rect.height * viewBoxHeight;
        
        // Convert to array coordinates (y is negated for SVG coordinate system)
        const vx = Math.round(x * 10) / 10;
        const vy = Math.round(-y * 10) / 10;
        
        // Update the input fields
        document.getElementById('vx').value = vx;
        document.getElementById('vy').value = vy;
        
        // Redraw the visualization
        updateMudancaViz();
      } else if (dragMode === 'pending-pan' || dragMode === 'pan') {
        const dx = event.clientX - dragStartX;
        const dy = event.clientY - dragStartY;
        
        // Only switch to pan mode if user dragged far enough
        if (dragMode === 'pending-pan' && (Math.abs(dx) > DRAG_DISTANCE_THRESHOLD || Math.abs(dy) > DRAG_DISTANCE_THRESHOLD)) {
          dragMode = 'pan';
          svg.style.cursor = 'grabbing';
        }
        
        if (dragMode === 'pan') {
          const currentDx = event.clientX - lastX;
          const currentDy = event.clientY - lastY;
          
          const rect = svg.getBoundingClientRect();
          const viewBox = svg.getAttribute('viewBox').split(' ').map(Number);
          const viewBoxWidth = viewBox[2];
          const viewBoxHeight = viewBox[3];
          
          // Pan based on mouse movement relative to current view
          const panX = -(currentDx / rect.width) * viewBoxWidth;
          const panY = -(currentDy / rect.height) * viewBoxHeight;
          
          viewBoxX += panX;
          viewBoxY += panY;
          
          svg.setAttribute('viewBox', `${viewBoxX} ${viewBoxY} 16 16`);
          
          lastX = event.clientX;
          lastY = event.clientY;
        }
      }
    }

    function stopDragging() {
      if (isDragging) {
        isDragging = false;
        dragMode = 'none';
        if (svg) svg.style.cursor = 'grab';
      }
    }

    // Mouse wheel zoom functionality
    svg?.addEventListener('wheel', (event) => {
      event.preventDefault();
      const zoomFactor = event.deltaY > 0 ? 1.2 : 0.8; // zoom out or in
      const rect = svg.getBoundingClientRect();
      const viewBox = svg.getAttribute('viewBox').split(' ').map(Number);
      
      const mouseX = (event.clientX - rect.left) / rect.width;
      const mouseY = (event.clientY - rect.top) / rect.height;
      
      const newWidth = viewBox[2] * zoomFactor;
      const newHeight = viewBox[3] * zoomFactor;
      
      // Zoom towards mouse position
      const newX = viewBox[0] + (viewBox[2] - newWidth) * mouseX;
      const newY = viewBox[1] + (viewBox[3] - newHeight) * mouseY;
      
      viewBoxX = newX;
      viewBoxY = newY;
      
      svg.setAttribute('viewBox', `${newX} ${newY} ${newWidth} ${newHeight}`);
    });

    // Set initial cursor style on SVG
    if (svg) {
      svg.style.cursor = 'grab';
    }