// NotebookLM Prompt Generator - JavaScript Application

// ============================================
// DATA: Categories and Color Palettes
// ============================================

const categories = [
    { id: 'corporate', name: 'Corporativo & Empresarial' },
    { id: 'technology', name: 'Tecnología & Innovación' },
    { id: 'education', name: 'Educación & Academia' },
    { id: 'healthcare', name: 'Salud & Medicina' },
    { id: 'finance', name: 'Finanzas & Economía' },
    { id: 'marketing', name: 'Marketing & Publicidad' },
    { id: 'architecture', name: 'Arquitectura & Diseño' },
    { id: 'fashion', name: 'Moda & Lujo' },
    { id: 'food', name: 'Gastronomía & Alimentación' },
    { id: 'travel', name: 'Viajes & Turismo' },
    { id: 'entertainment', name: 'Entretenimiento & Medios' },
    { id: 'sports', name: 'Deportes & Fitness' },
    { id: 'environment', name: 'Medio Ambiente & Sostenibilidad' },
    { id: 'science', name: 'Ciencia & Investigación' },
    { id: 'art', name: 'Arte & Cultura' },
    { id: 'nonprofit', name: 'ONG & Sin Ánimo de Lucro' },
    { id: 'legal', name: 'Legal & Consultoría' },
    { id: 'real-estate', name: 'Bienes Raíces' },
    { id: 'automotive', name: 'Automotriz & Transporte' },
    { id: 'creative', name: 'Creativo & Experimental' }
];

const colorPalettes = [
    {
        id: 'monochromatic-blue',
        name: 'Océano Profundo',
        type: 'Monocromática',
        colors: ['#0a1628', '#1e3a5f', '#3d5a80', '#98c1d9', '#e0fbfc'],
        theory: 'Monocromática - Variaciones de un solo tono para coherencia visual'
    },
    {
        id: 'complementary-orange-blue',
        name: 'Atardecer Urbano',
        type: 'Complementaria',
        colors: ['#1a1a2e', '#16213e', '#e94560', '#ff6b6b', '#feca57'],
        theory: 'Complementaria - Contraste máximo entre azul y naranja/rojo'
    },
    {
        id: 'analogous-green',
        name: 'Bosque Esmeralda',
        type: 'Análoga',
        colors: ['#0d1b1e', '#1a3c34', '#2d6a4f', '#52b788', '#d8f3dc'],
        theory: 'Análoga - Colores adyacentes en el círculo cromático'
    },
    {
        id: 'triadic-vibrant',
        name: 'Pop Art Moderno',
        type: 'Triádica',
        colors: ['#2b0f3a', '#6a0dad', '#ff006e', '#ffbe0b', '#00f5d4'],
        theory: 'Triádica - Tres colores equidistantes para energía vibrante'
    },
    {
        id: 'split-complementary',
        name: 'Desierto Místico',
        type: 'Split Complementaria',
        colors: ['#1e1e2e', '#4a3b5a', '#c77dff', '#ffb703', '#fb8500'],
        theory: 'Split Complementaria - Un color base + dos adyacentes al complementario'
    },
    {
        id: 'tetradic-warm',
        name: 'Especias Orientales',
        type: 'Tetrádica',
        colors: ['#2d132c', '#800f2f', '#c1121f', '#dd4124', '#d68c45'],
        theory: 'Tetrádica - Cuatro colores en rectángulo para riqueza cromática'
    },
    {
        id: 'neutral-earth',
        name: 'Tierra Natural',
        type: 'Neutral con Acento',
        colors: ['#1a1a1a', '#3d3d3d', '#6b6b6b', '#a8a8a8', '#e0e0e0'],
        theory: 'Neutral - Escala de grises con sofisticación minimalista'
    },
    {
        id: 'pastel-dream',
        name: 'Sueño Pastel',
        type: 'Pastel Desaturada',
        colors: ['#2d3436', '#b2bec3', '#fab1a0', '#81ecec', '#74b9ff'],
        theory: 'Pastel - Colores suaves desaturados para calma visual'
    },
    {
        id: 'neon-cyberpunk',
        name: 'Cyberpunk Neon',
        type: 'Neón Oscuro',
        colors: ['#0d0d0d', '#1a1a2e', '#00ff88', '#ff00ff', '#00d4ff'],
        theory: 'Neón - Alto contraste entre oscuros profundos y neones vibrantes'
    },
    {
        id: 'vintage-retro',
        name: 'Retro Vintage',
        type: 'Retro Desaturada',
        colors: ['#2c2c2c', '#6b5b4f', '#c9a66b', '#e07a5f', '#81b29a'],
        theory: 'Retro - Tonos desaturados que evocan nostalgia'
    },
    {
        id: 'royal-luxury',
        name: 'Lujo Real',
        type: 'Lujo Dorado',
        colors: ['#0f0f0f', '#1a1a2e', '#c9a227', '#ffd700', '#f5f5f5'],
        theory: 'Lujo - Negro profundo con acentos dorados para elegancia'
    },
    {
        id: 'ocean-gradient',
        name: 'Gradiente Oceánico',
        type: 'Gradiente Frío',
        colors: ['#0a1628', '#1e3a6e', '#4a90d9', '#87ceeb', '#e0f7fa'],
        theory: 'Gradiente - Transición suave de tonos fríos relacionados'
    },
    {
        id: 'forest-mystic',
        name: 'Bosque Místico',
        type: 'Natural Profunda',
        colors: ['#1a1f1a', '#2d3a2d', '#4a5d4a', '#7a8f7a', '#b8c4b8'],
        theory: 'Natural - Verdes profundos para conexión orgánica'
    },
    {
        id: 'sunset-warm',
        name: 'Atardecer Cálido',
        type: 'Cálida Gradiente',
        colors: ['#2d1b2e', '#b94e48', '#e07a5f', '#f4a261', '#f2cc8f'],
        theory: 'Cálida - Transición de púrpuras a dorados cálidos'
    },
    {
        id: 'minimalist-bw',
        name: 'Minimalista B&N',
        type: 'Blanco y Negro',
        colors: ['#000000', '#1a1a1a', '#4a4a4a', '#9a9a9a', '#ffffff'],
        theory: 'Monocromática Extrema - Máximo contraste y elegancia atemporal'
    },
    {
        id: 'jewel-tones',
        name: 'Tonos Joya',
        type: 'Joya Saturada',
        colors: ['#1a0f2e', '#2e4057', '#c30052', '#006494', '#ffd700'],
        theory: 'Joya - Colores saturados que imitan gemas preciosas'
    },
    {
        id: 'arctic-cool',
        name: 'Ártico Gélido',
        type: 'Fría Hielo',
        colors: ['#0d1b2a', '#1b263b', '#415a77', '#a0c4ff', '#eaf4f4'],
        theory: 'Fría - Azules y blancos helados para frescura'
    },
    {
        id: 'volcanic-fire',
        name: 'Fuego Volcánico',
        type: 'Fuego Intenso',
        colors: ['#1a0a0a', '#3d1a1a', '#8b2d2d', '#c94c4c', '#ff6b6b'],
        theory: 'Cálida Intensa - Rojos y naranjas para energía dramática'
    },
    {
        id: 'botanical-fresh',
        name: 'Botánica Fresca',
        type: 'Verde Vital',
        colors: ['#0f1f0f', '#1f3a1f', '#3d5a3d', '#7cb37c', '#c8e6c8'],
        theory: 'Análoga Verde - Vitalidad y crecimiento natural'
    },
    {
        id: 'cosmic-purple',
        name: 'Cósmico Púrpura',
        type: 'Espacial Misteriosa',
        colors: ['#0d0221', '#1e0f3d', '#3d1f6e', '#7b4bcd', '#c7a6ff'],
        theory: 'Monocromática Púrpura - Misterio y profundidad cósmica'
    }
];

// ============================================
// SYSTEM PROMPT (Optimized)
// ============================================

const systemPrompt = `Eres un director creativo de nivel mundial con 20 años de experiencia en diseño de identidad visual, presentaciones de alto impacto, infografías editoriales y comunicación visual estratégica para marcas Fortune 500, agencias de diseño premiadas y proyectos culturales internacionales. Has ganado reconocimientos en diseño tipográfico, dirección de arte editorial y experiencia visual inmersiva.

Tu única obsesión es crear prompts de diseño que sean extraordinarios: no funcionales, no correctos, sino MEMORABLES e INESPERADOS.

Cuando el usuario te proporcione una idea inicial (aunque sea vaga, incompleta o básica), tu trabajo es transformarla en un PROMPT MAESTRO DE DISEÑO con la siguiente arquitectura obligatoria:

---

## 🎨 BLOQUE 1 — CONCEPTO CENTRAL Y METÁFORA VISUAL DOMINANTE

No describas el tema. REIMAGÍNALO. Define:
• La metáfora visual central (una sola, poderosa, coherente)
• Lo que hace este diseño RADICALMENTE diferente a cualquier otro
• La tensión visual elegida (lo clásico vs lo moderno, lo visible vs lo oculto, el orden vs la ruptura, lo mínimo vs lo expresivo)
• La emoción que debe despertar al primer vistazo
• El elemento que nadie olvidará

---

## 🌈 BLOQUE 2 — SISTEMA CROMÁTICO CON ROLES Y JERARQUÍA

Entrega una paleta de 5 colores con roles diferenciados que NO sea genérica ni predecible. Incluye:
• Rol de cada color: base, estructura, acento primario, acento de contraste, neutro funcional
• Código Hexadecimal exacto
• Nombre descriptivo del color
• Uso específico en el diseño
• Instrucción explícita de escasez: cuándo aparece el acento y por qué
• Slides de alto impacto: combinación cromática invertida o disruptiva (ej. fondo oscuro + texto en acento) con frecuencia recomendada
• Relación psicológica entre la paleta y el tema del diseño

PALETA SELECCIONADA POR EL USUARIO: ${JSON.stringify(colorPalettes.map(p => ({name: p.name, colors: p.colors})))}

---

## 🔤 BLOQUE 3 — SISTEMA TIPOGRÁFICO CON TENSIÓN Y CARÁCTER

Rechaza fuentes genéricas (Inter, Roboto, Lato, Montserrat, Arial). Proporciona:
• Pareja tipográfica principal: Display + Cuerpo (con nombres exactos disponibles en Google Fonts o Adobe Fonts)
• Tipografía de contraste funcional (datos, etiquetas, números)
• Para cada fuente: peso(s) recomendados, tamaño en contexto, tracking sugerido, uso narrativo
• El "momento estelar" tipográfico: un slide o sección donde la tipografía SE CONVIERTE en el diseño (tamaño, peso, posición)
• La tensión tipográfica elegida: ¿dónde chocan intencionalmente dos fuentes para crear drama visual?

---

## ✦ BLOQUE 4 — SISTEMA DE ELEMENTOS GRÁFICOS ÚNICOS

Define al menos 5 elementos visuales propios de ESTE diseño (no stock, no genéricos, no iconos convencionales). Para cada uno:
• Nombre del elemento y descripción visual precisa
• Función narrativa (qué comunica, no solo cómo se ve)
• Cómo se construye o de dónde proviene conceptualmente
• Cómo evoluciona o se repite a lo largo de la pieza

---

## 📐 BLOQUE 5 — PRINCIPIOS DE COMPOSICIÓN Y ESPACIO

Rechaza el diseño centrado y simétrico por defecto. Define:
• Regla de distribución espacial (ej. 70/30, diagonal dominante, columnas asimétricas)
• Tratamiento del silencio/espacio negativo: ¿es decorativo o portador de significado?
• El "elemento roto": qué regla compositiva se romperá intencionalmente y por qué
• Ritmo visual entre slides: alternancia de densidad/ligereza, oscuridad/claridad, texto/imagen

---

## 📊 BLOQUE 6 — ESTRUCTURA NARRATIVA SLIDE A SLIDE

Construye un storyboard visual detallado. Para cada slide incluye:
| # | Título | Concepto Visual | Elemento Dominante | Tono Emocional |

Requisitos del arco narrativo:
• Slide 1: apertura de máximo impacto (no introducción tímida)
• Al menos 2 slides de "alto contraste" (disruptivos, oscuros, tipográficamente radicales)
• Al menos 1 slide donde un solo dato o cita llene el 80% del espacio
• Cierre con imagen/concepto que resuene con la apertura (arco cerrado)
• Variación intencional de densidad: ningún slide debe verse igual al anterior

FORMATO DE SALIDA: {{format}} (ajusta la estructura según sea presentación, infografía o video)

---

## ⚡ BLOQUE 7 — DIFERENCIADORES ABSOLUTOS

Lista explícita de:
• Lo que este diseño NUNCA hará (rechazos estéticos conscientes)
• Lo que ningún otro diseñador haría pero TÚ sí (las 3 decisiones más arriesgadas y por qué funcionan)
• El elemento que hará que el auditorio/usuario pregunte "¿cómo lo hicieron?"

---

## 🏷️ BLOQUE 8 — TAGS CONCEPTUALES Y DE ESTILO

Finaliza con tags en dos categorías:
• Estilo visual: términos de diseño precisos que capturen la estética
• Concepto/tema: términos que conecten el diseño con su significado

---

## ⚠️ REGLAS ABSOLUTAS PARA GENERAR EL PROMPT:

1. NUNCA repitas el estilo de un prompt anterior. Cada prompt es una dirección estética completamente diferente.
2. NUNCA uses como referencia los jardines zen, los degradados púrpura, el minimalismo blanco genérico ni ningún cliché visual.
3. SIEMPRE parte de una metáfora conceptual antes de pensar en colores.
4. Los colores TIENEN ROLES NARRATIVOS, no son solo estética.
5. La tipografía debe SORPRENDER: si la primera fuente que piensas es obvia, descártala.
6. Cada elemento gráfico debe JUSTIFICAR SU EXISTENCIA conceptualmente, no solo visualmente.
7. El slide más poderoso debe hacer que el diseñador promedio sienta incomodidad al verlo (demasiado atrevido para él).
8. Si el usuario da una idea tímida, AMPLÍALA radicalmente. Tu trabajo es elevar, no confirmar.
9. Entrega SIEMPRE una paleta de colores con teoría del color, nombres tipográficos exactos y el storyboard completo. Sin estos elementos, el prompt está incompleto.
10. El prompt final debe poder ser ejecutado por otro diseñador sin necesidad de interpretación adicional.
11. ADAPTA el lenguaje y formato según el tipo de salida seleccionado (presentación, infografía o video).

---

Ahora genera el PROMPT MAESTRO completo basado en la siguiente información del usuario:`;

// ============================================
// STATE MANAGEMENT
// ============================================

let appState = {
    selectedFormat: 'presentation',
    selectedPalette: null,
    customColors: {},
    history: [],
    isGenerating: false
};

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    loadHistory();
    populateCategories();
    populatePalettes();
    setupEventListeners();
}

// ============================================
// DOM POPULATION
// ============================================

function populateCategories() {
    const select = document.getElementById('categorySelect');
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = category.name;
        select.appendChild(option);
    });
}

function populatePalettes() {
    const grid = document.getElementById('paletteGrid');
    colorPalettes.forEach((palette, index) => {
        const paletteEl = createPaletteElement(palette, index);
        grid.appendChild(paletteEl);
    });
}

function createPaletteElement(palette, index) {
    const div = document.createElement('div');
    div.className = 'palette-option';
    div.dataset.paletteId = palette.id;
    div.dataset.index = index;
    
    const colorsHtml = palette.colors.map(color => 
        `<div class="palette-color-swatch" style="background-color: ${color};"></div>`
    ).join('');
    
    div.innerHTML = `
        <div class="palette-colors">${colorsHtml}</div>
        <div class="palette-name">${palette.name}</div>
        <div style="font-size: 0.65rem; color: var(--text-muted); margin-top: 0.25rem;">${palette.type}</div>
    `;
    
    div.addEventListener('click', () => selectPalette(index));
    
    return div;
}

// ============================================
// EVENT LISTENERS
// ============================================

function setupEventListeners() {
    // Format selector buttons
    document.querySelectorAll('.format-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.format-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            appState.selectedFormat = e.target.dataset.format;
        });
    });
    
    // Advanced options toggle
    const advancedToggle = document.getElementById('advancedToggle');
    const advancedContent = document.getElementById('advancedContent');
    advancedToggle.addEventListener('click', () => {
        advancedToggle.classList.toggle('active');
        advancedContent.classList.toggle('active');
    });
    
    // Form submission
    document.getElementById('promptForm').addEventListener('submit', handleFormSubmit);
    
    // Copy button
    document.getElementById('copyBtn').addEventListener('click', copyToClipboard);
    
    // Download button
    document.getElementById('downloadBtn').addEventListener('click', downloadPrompt);
    
    // Clear history button
    document.getElementById('clearHistoryBtn').addEventListener('click', clearHistory);
}

// ============================================
// PALETTE SELECTION
// ============================================

function selectPalette(index) {
    appState.selectedPalette = colorPalettes[index];
    
    // Update UI
    document.querySelectorAll('.palette-option').forEach(el => {
        el.classList.remove('selected');
    });
    document.querySelector(`[data-index="${index}"]`).classList.add('selected');
    
    // Setup custom color inputs
    setupCustomColorInputs(appState.selectedPalette);
}

function setupCustomColorInputs(palette) {
    const container = document.getElementById('customColorInputs');
    container.innerHTML = '';
    
    const roleNames = ['Base', 'Estructura', 'Acento Primario', 'Contraste', 'Neutro'];
    
    palette.colors.forEach((color, index) => {
        const group = document.createElement('div');
        group.className = 'color-input-group';
        group.innerHTML = `
            <div class="color-input-label">${roleNames[index] || `Color ${index + 1}`}</div>
            <div class="color-picker-wrapper">
                <input type="color" class="color-picker" value="${color}" data-index="${index}">
                <input type="text" class="color-hex" value="${color}" data-index="${index}" maxlength="7">
            </div>
        `;
        
        container.appendChild(group);
        
        // Add event listeners for color sync
        const colorPicker = group.querySelector('.color-picker');
        const colorHex = group.querySelector('.color-hex');
        
        colorPicker.addEventListener('input', (e) => {
            colorHex.value = e.target.value;
            updatePaletteColor(index, e.target.value);
        });
        
        colorHex.addEventListener('input', (e) => {
            let value = e.target.value;
            if (!value.startsWith('#')) value = '#' + value;
            if (/^#[0-9A-F]{6}$/i.test(value)) {
                colorPicker.value = value;
                updatePaletteColor(index, value);
            }
        });
    });
}

function updatePaletteColor(index, color) {
    if (appState.customColors) {
        appState.customColors[index] = color;
        
        // Update the selected palette colors temporarily
        const paletteOption = document.querySelector(`[data-index="${appState.selectedPalette ? colorPalettes.indexOf(appState.selectedPalette) : ''}"]`);
        if (paletteOption) {
            const swatches = paletteOption.querySelectorAll('.palette-color-swatch');
            if (swatches[index]) {
                swatches[index].style.backgroundColor = color;
            }
        }
    }
}

// ============================================
// FORM HANDLING
// ============================================

async function handleFormSubmit(e) {
    e.preventDefault();
    
    if (appState.isGenerating) return;
    
    const theme = document.getElementById('projectTheme').value.trim();
    const categoryId = document.getElementById('categorySelect').value;
    
    if (!theme || !categoryId) {
        showToast('Por favor completa todos los campos requeridos', 'error');
        return;
    }
    
    if (!appState.selectedPalette) {
        showToast('Selecciona una paleta de colores', 'error');
        return;
    }
    
    appState.isGenerating = true;
    showLoadingState();
    
    try {
        // Get final colors (custom or default)
        const finalColors = Object.keys(appState.customColors).length > 0 
            ? Object.values(appState.customColors)
            : appState.selectedPalette.colors;
        
        // Generate the prompt
        const prompt = await generatePrompt(theme, categoryId, finalColors);
        
        // Display the result
        displayPrompt(prompt);
        
        // Save to history
        saveToHistory({
            theme,
            category: categories.find(c => c.id === categoryId)?.name || categoryId,
            format: appState.selectedFormat,
            palette: appState.selectedPalette.name,
            prompt,
            timestamp: new Date().toISOString()
        });
        
        showToast('¡Prompt generado exitosamente!', 'success');
    } catch (error) {
        console.error('Error generating prompt:', error);
        showToast('Error al generar el prompt. Inténtalo de nuevo.', 'error');
    } finally {
        appState.isGenerating = false;
        hideLoadingState();
    }
}

async function generatePrompt(theme, categoryId, colors) {
    // Simulate AI generation with a sophisticated template-based approach
    // In production, this would call an actual AI API
    
    const category = categories.find(c => c.id === categoryId);
    const formatNames = {
        presentation: 'Presentación Ejecutiva',
        infographic: 'Infografía Editorial',
        video: 'Producción de Video'
    };
    
    // This is a simulation - in real implementation, you'd call an AI API
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const prompt = `${systemPrompt}

TEMÁTICA DEL PROYECTO: ${theme}

CATEGORÍA: ${category?.name || categoryId}

FORMATO DE SALIDA: ${formatNames[appState.selectedFormat]}

PALETA DE COLORES PERSONALIZADA: ${colors.join(', ')}

---

[GENERANDO PROMPT MAESTRO...]

`;

    // Enhanced prompt generation based on inputs
    const generatedContent = generateEnhancedPrompt(theme, category, colors, appState.selectedFormat);
    
    return prompt + generatedContent;
}

function generateEnhancedPrompt(theme, category, colors, format) {
    // This creates a structured prompt based on the system instructions
    // In production, this would be replaced by actual AI generation
    
    const colorRoles = ['BASE', 'ESTRUCTURA', 'ACENTO PRIMARIO', 'CONTRASTE', 'NEUTRO'];
    
    return `
═══════════════════════════════════════════════════════════════
PROMPT MAESTRO DE DISEÑO - ${format.toUpperCase()}
═══════════════════════════════════════════════════════════════

🎯 BLOQUE 1 — CONCEPTO CENTRAL Y METÁFORA VISUAL DOMINANTE

Metáfora Visual Central: [La IA generará una metáfora poderosa basada en "${theme}"]

Tensión Visual Elegida: Modernidad radical vs. principios clásicos del diseño
Emoción Objetivo: Impacto inmediato que combine sofisticación con accesibilidad
Elemento Inolvidable: [Se definirá según la categoría ${category?.name}]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌈 BLOQUE 2 — SISTEMA CROMÁTICO CON ROLES Y JERARQUÍA

${colors.map((color, i) => `• ${colorRoles[i] || `COLOR ${i+1}`}: ${color} - [Rol narrativo específico]`).join('\n')}

Instrucción de Escasez: El color de acento aparecerá únicamente en elementos críticos (máximo 10% del espacio visual)
Slides de Alto Impacto: Invertir paleta en transiciones clave (fondo ${colors[4]} + texto ${colors[2]})
Relación Psicológica: [La IA conectará la paleta con "${theme}"]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔤 BLOQUE 3 — SISTEMA TIPOGRÁFICO CON TENSIÓN Y CARÁCTER

Pareja Principal: 
• Display: [Fuente impactante de Google/Adobe Fonts]
• Cuerpo: [Fuente legible complementaria]

Momento Estelar Tipográfico: [Slide donde la tipografía ES el diseño]
Tensión Tipográfica: [Contraste intencional entre pesos o estilos]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✦ BLOQUE 4 — SISTEMA DE ELEMENTOS GRÁFICOS ÚNICOS

1. [Elemento 1]: [Descripción y función narrativa]
2. [Elemento 2]: [Descripción y función narrativa]
3. [Elemento 3]: [Descripción y función narrativa]
4. [Elemento 4]: [Descripción y función narrativa]
5. [Elemento 5]: [Descripción y función narrativa]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📐 BLOQUE 5 — PRINCIPIOS DE COMPOSICIÓN Y ESPACIO

Regla de Distribución: [Sistema asimétrico específico]
Espacio Negativo: [Tratamiento significativo]
Elemento Roto: [Regla compositiva a violar intencionalmente]
Ritmo Visual: [Patrón de alternancia entre slides/secciones]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 BLOQUE 6 — ESTRUCTURA NARRATIVA ${format === 'presentation' ? 'SLIDE A SLIDE' : format === 'infographic' ? 'SECCIONAL' : 'ESCENA A ESCENA'}

${generateStoryboard(format, theme)}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚡ BLOQUE 7 — DIFERENCIADORES ABSOLUTOS

Lo que este diseño NUNCA hará:
• [Rechazo estético 1]
• [Rechazo estético 2]
• [Rechazo estético 3]

Decisiones Arriesgadas que Funcionan:
1. [Decisión 1 y justificación]
2. [Decisión 2 y justificación]
3. [Decisión 3 y justificación]

Elemento "¿Cómo lo hicieron?": [Técnica o efecto sorprendente]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏷️ BLOQUE 8 — TAGS CONCEPTUALES Y DE ESTILO

Estilo Visual: #[estilo1] #[estilo2] #[estilo3] #[estilo4]
Concepto/Tema: #${(category?.name || 'general').toLowerCase().replace(/\s+/g, '')} #${theme.split(' ')[0].toLowerCase()} #[concepto3]

═══════════════════════════════════════════════════════════════
NOTA: Este prompt está listo para ser ejecutado en NotebookLM.
Copiar y pegar tal cual para generar el diseño completo.
═══════════════════════════════════════════════════════════════
`;
}

function generateStoryboard(format, theme) {
    if (format === 'presentation') {
        return `| #  | Título                  | Concepto Visual              | Elemento Dominante      | Tono Emocional     |
|----|-------------------------|------------------------------|-------------------------|--------------------|
| 01 | [Apertura Impactante]   | [Imagen conceptual fuerte]   | [Elemento dominante]    | [Emoción]          |
| 02 | [Introducción]          | [Establecimiento visual]     | [Elemento]              | [Emoción]          |
| 03 | [Desarrollo 1]          | [Progresión narrativa]       | [Elemento]              | [Emoción]          |
| 04 | [ALTO CONTRASTE]        | [Disruptivo/Oscuro]          | [Tipografía radical]    | [Tensión]          |
| 05 | [Desarrollo 2]          | [Continuidad con variación]  | [Elemento]              | [Emoción]          |
| 06 | [DATO/CITA 80% ESPACIO] | [Minimalismo extremo]        | [Texto gigante]         | [Impacto]          |
| 07 | [Desarrollo 3]          | [Acumulación narrativa]      | [Elemento]              | [Emoción]          |
| 08 | [ALTO CONTRASTE 2]      | [Inversión cromática]        | [Composición rota]      | [Drama]            |
| 09 | [Conclusión]            | [Síntesis visual]            | [Elemento]              | [Resolución]       |
| 10 | [CIERRE - ARCO]         | [Eco visual de apertura]     | [Elemento memorable]    | [Resonancia]       |`;
    } else if (format === 'infographic') {
        return `| Sección | Contenido                    | Tratamiento Visual           | Jerarquía        |
|---------|------------------------------|------------------------------|------------------|
| 01      | [Titular Impactante]         | [Composición hero]           | Primaria         |
| 02      | [Introducción/Contexto]      | [Establecimiento]            | Secundaria       |
| 03      | [DATO PRINCIPAL]             | [Visualización 80% espacio]  | Máxima           |
| 04      | [Desarrollo Información]     | [Flujo visual guiado]        | Media            |
| 05      | [Comparativa/Contraste]      | [División asimétrica]        | Media-Alta       |
| 06      | [Proceso/Timeline]           | [Secuencia narrativa]        | Media            |
| 07      | [Conclusión/Call-to-Action]  | [Cierre resonante]           | Alta             |`;
    } else {
        return `| Escena | Duración | Concepto Visual              | Movimiento/Cámara    | Audio/Texto      |
|--------|----------|------------------------------|----------------------|------------------|
| 01     | 0:00-0:05| [Apertura cinematográfica]   | [Tipo de plano]      | [Música/VO]      |
| 02     | 0:05-0:15| [Establecimiento]            | [Movimiento]         | [Narrativa]      |
| 03     | 0:15-0:25| [Desarrollo 1]               | [Transición]         | [Contenido]      |
| 04     | 0:25-0:35| [CLÍMAX VISUAL]              | [Plano impactante]   | [Silencio/Pico]  |
| 05     | 0:35-0:45| [Desarrollo 2]               | [Variación]          | [Continuidad]    |
| 06     | 0:45-0:55| [Resolución]                 | [Suavizado]          | [Conclusión]     |
| 07     | 0:55-1:00| [CIERRE MEMORABLE]           | [Plano final]        | [Fade out]       |`;
    }
}

// ============================================
// UI UPDATES
// ============================================

function showLoadingState() {
    const output = document.getElementById('promptOutput');
    output.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
        </div>
        <p style="text-align: center; margin-top: 1rem; color: var(--text-secondary);">
            Generando prompt maestro...<br>
            <span style="font-size: 0.8125rem;">Creando dirección creativa única</span>
        </p>
    `;
}

function hideLoadingState() {
    // Loading state is replaced by displayPrompt
}

function displayPrompt(prompt) {
    const outputContainer = document.getElementById('promptOutput');
    const outputActions = document.getElementById('outputActions');
    
    outputContainer.innerHTML = `<div class="prompt-output">${escapeHtml(prompt)}</div>`;
    outputActions.style.display = 'flex';
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ============================================
// HISTORY MANAGEMENT
// ============================================

function loadHistory() {
    const saved = localStorage.getItem('promptHistory');
    if (saved) {
        appState.history = JSON.parse(saved);
        renderHistory();
    }
}

function saveToHistory(item) {
    appState.history.unshift(item);
    // Keep only last 20 items
    if (appState.history.length > 20) {
        appState.history = appState.history.slice(0, 20);
    }
    localStorage.setItem('promptHistory', JSON.stringify(appState.history));
    renderHistory();
}

function renderHistory() {
    const container = document.getElementById('historyContent');
    const clearBtn = document.getElementById('clearHistoryBtn');
    
    if (appState.history.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
                <p>No hay prompts en el historial.<br>Genera tu primer prompt creativo.</p>
            </div>
        `;
        clearBtn.style.display = 'none';
        return;
    }
    
    clearBtn.style.display = 'block';
    
    container.innerHTML = appState.history.map((item, index) => `
        <div class="history-item" data-index="${index}">
            <div class="history-category">${item.category} • ${getFormatName(item.format)}</div>
            <div class="history-preview">${escapeHtml(item.theme)}</div>
            <div class="history-time">${formatTimestamp(item.timestamp)}</div>
        </div>
    `).join('');
    
    // Add click handlers
    container.querySelectorAll('.history-item').forEach(el => {
        el.addEventListener('click', () => loadFromHistory(parseInt(el.dataset.index)));
    });
}

function loadFromHistory(index) {
    const item = appState.history[index];
    if (!item) return;
    
    document.getElementById('projectTheme').value = item.theme;
    
    // Find and select category
    const category = categories.find(c => c.name === item.category);
    if (category) {
        document.getElementById('categorySelect').value = category.id;
    }
    
    // Select format
    document.querySelectorAll('.format-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.format === item.format);
    });
    appState.selectedFormat = item.format;
    
    // Find and select palette
    const palette = colorPalettes.find(p => p.name === item.palette);
    if (palette) {
        const paletteIndex = colorPalettes.indexOf(palette);
        selectPalette(paletteIndex);
    }
    
    // Display the prompt
    displayPrompt(item.prompt);
    
    // Scroll to studio panel on mobile
    if (window.innerWidth <= 1200) {
        document.getElementById('studioPanel').scrollIntoView({ behavior: 'smooth' });
    }
}

function clearHistory() {
    if (confirm('¿Estás seguro de que deseas limpiar todo el historial?')) {
        appState.history = [];
        localStorage.removeItem('promptHistory');
        renderHistory();
        showToast('Historial limpiado', 'success');
    }
}

// ============================================
// UTILITIES
// ============================================

function getFormatName(format) {
    const names = {
        presentation: 'Presentación',
        infographic: 'Infografía',
        video: 'Video'
    };
    return names[format] || format;
}

function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;
    
    if (diff < 60000) return 'Ahora mismo';
    if (diff < 3600000) return `Hace ${Math.floor(diff / 60000)} min`;
    if (diff < 86400000) return `Hace ${Math.floor(diff / 3600000)} h`;
    if (diff < 604800000) return `Hace ${Math.floor(diff / 86400000)} días`;
    
    return date.toLocaleDateString('es-ES', { 
        day: 'numeric', 
        month: 'short' 
    });
}

function copyToClipboard() {
    const promptText = document.querySelector('.prompt-output')?.textContent;
    if (!promptText) return;
    
    navigator.clipboard.writeText(promptText).then(() => {
        showToast('¡Copiado al portapapeles!', 'success');
    }).catch(err => {
        console.error('Failed to copy:', err);
        showToast('Error al copiar', 'error');
    });
}

function downloadPrompt() {
    const promptText = document.querySelector('.prompt-output')?.textContent;
    if (!promptText) return;
    
    const blob = new Blob([promptText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `notebooklm-prompt-${new Date().getTime()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showToast('¡Prompt descargado!', 'success');
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toast.style.borderColor = type === 'success' ? 'var(--success)' : '#ef4444';
    toast.style.color = type === 'success' ? 'var(--success)' : '#ef4444';
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
