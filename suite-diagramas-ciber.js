/* ============================================================
   DIAGRAMAS VISUALES · Suite de estudio Ciberseguridad
   DIAGRAMS[i] = array de { title, anchor, svg } por módulo (0..11).
   - anchor: substring del encabezado <h3>/<h4> tras cuya sección
     se inserta el diagrama. Si no se encuentra, va al inicio.
   Usa variables CSS del tema. DIAGRAMS se declara en el HTML.
   ============================================================ */

const SVGDEF = `
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" fill="var(--ink2)"/>
    </marker>
    <marker id="arrowA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" fill="var(--acc)"/>
    </marker>
  </defs>`;

/* ================= M1 · Ciberseguridad ================= */
DIAGRAMS[0] = [
  {
    title: 'Componentes del ciberespacio',
    anchor: 'concepto de ciberespacio',
    svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
      ${SVGDEF}
      <text x="300" y="26" fill="var(--ink)" font-size="15" font-weight="700" text-anchor="middle">El ciberespacio y sus 5 componentes</text>
      <circle cx="300" cy="150" r="48" fill="var(--acc)" opacity="0.85"/>
      <text x="300" y="146" fill="#fff" font-size="12" font-weight="700" text-anchor="middle">Ciber-</text>
      <text x="300" y="162" fill="#fff" font-size="12" font-weight="700" text-anchor="middle">espacio</text>
      <g text-anchor="middle" font-size="11.5">
        ${['Personas','Software','Servicios en Internet','Dispositivos','Redes digitales'].map((t,i)=>{
          const ang=(-90+i*72)*Math.PI/180; const x=300+150*Math.cos(ang); const y=150+95*Math.sin(ang);
          return `<line x1="300" y1="150" x2="${x}" y2="${y}" stroke="var(--acc)" opacity="0.4"/>
          <rect x="${x-58}" y="${y-15}" width="116" height="30" rx="8" fill="var(--panel2)" stroke="var(--acc2)"/>
          <text x="${x}" y="${y+4}" fill="var(--ink)">${t}</text>`;
        }).join('')}
      </g>
    </svg>`
  },
  {
    title: 'Ataque vs. Amenaza vs. Vulnerabilidad',
    anchor: 'ciberamenazas',
    svg: `<svg viewBox="0 0 620 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
      ${SVGDEF}
      <g text-anchor="middle">
        <rect x="20" y="60" width="170" height="90" rx="12" fill="var(--panel2)" stroke="var(--bad)"/>
        <text x="105" y="88" fill="var(--bad)" font-size="13" font-weight="700">Ciberataque</text>
        <text x="105" y="112" fill="var(--ink2)" font-size="10.5">Maniobra ofensiva</text>
        <text x="105" y="128" fill="var(--ink2)" font-size="10.5">deliberada</text>
        <rect x="225" y="60" width="170" height="90" rx="12" fill="var(--panel2)" stroke="var(--warn)"/>
        <text x="310" y="88" fill="var(--warn)" font-size="13" font-weight="700">Ciberamenaza</text>
        <text x="310" y="112" fill="var(--ink2)" font-size="10.5">Evento con</text>
        <text x="310" y="128" fill="var(--ink2)" font-size="10.5">potencial de daño</text>
        <rect x="430" y="60" width="170" height="90" rx="12" fill="var(--panel2)" stroke="var(--acc)"/>
        <text x="515" y="88" fill="var(--acc)" font-size="13" font-weight="700">Vulnerabilidad</text>
        <text x="515" y="112" fill="var(--ink2)" font-size="10.5">Debilidad que</text>
        <text x="515" y="128" fill="var(--ink2)" font-size="10.5">permite el daño</text>
      </g>
      <text x="310" y="30" fill="var(--ink)" font-size="14" font-weight="700" text-anchor="middle">La amenaza aprovecha la vulnerabilidad; el ataque la concreta</text>
      <text x="310" y="180" fill="var(--ink2)" font-size="11" text-anchor="middle">Tres conceptos que se repiten en toda la materia</text>
    </svg>`
  }
];

/* ================= M2 · Ramas ================= */
DIAGRAMS[1] = [
  {
    title: 'Tipos de pentesting según conocimiento',
    anchor: 'hacking ético',
    svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
      ${SVGDEF}
      <text x="300" y="26" fill="var(--ink)" font-size="14" font-weight="700" text-anchor="middle">¿Cuánto sabe el auditor de antemano?</text>
      <g text-anchor="middle" font-size="12">
        <rect x="30" y="60" width="160" height="100" rx="12" fill="#1a1f29" stroke="var(--ink2)"/>
        <text x="110" y="92" fill="var(--ink)" font-weight="700">Black Box</text>
        <text x="110" y="118" fill="var(--ink2)" font-size="10.5">Nada: solo nombre</text>
        <text x="110" y="134" fill="var(--ink2)" font-size="10.5">y alcance</text>
        <rect x="220" y="60" width="160" height="100" rx="12" fill="var(--panel2)" stroke="var(--warn)"/>
        <text x="300" y="92" fill="var(--warn)" font-weight="700">Grey Box</text>
        <text x="300" y="118" fill="var(--ink2)" font-size="10.5">Conocimiento</text>
        <text x="300" y="134" fill="var(--ink2)" font-size="10.5">parcial</text>
        <rect x="410" y="60" width="160" height="100" rx="12" fill="#eef3f8" stroke="var(--acc)"/>
        <text x="490" y="92" fill="#0f1419" font-weight="700">White Box</text>
        <text x="490" y="118" fill="#3a4655" font-size="10.5">Conoce todo +</text>
        <text x="490" y="134" fill="#3a4655" font-size="10.5">usuario limitado</text>
      </g>
    </svg>`
  },
  {
    title: 'Seguridad ofensiva vs. defensiva',
    anchor: 'seguridad ofensiva vs',
    svg: `<svg viewBox="0 0 600 190" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
      ${SVGDEF}
      <g text-anchor="middle">
        <rect x="40" y="50" width="220" height="100" rx="12" fill="rgba(255,107,107,.10)" stroke="var(--bad)"/>
        <text x="150" y="80" fill="var(--bad)" font-size="13" font-weight="700">Ofensiva (activa)</text>
        <text x="150" y="104" fill="var(--ink2)" font-size="10.5">Identifica amenazas y</text>
        <text x="150" y="120" fill="var(--ink2)" font-size="10.5">brechas para anticiparse</text>
        <rect x="340" y="50" width="220" height="100" rx="12" fill="rgba(78,163,255,.10)" stroke="var(--acc)"/>
        <text x="450" y="80" fill="var(--acc)" font-size="13" font-weight="700">Defensiva (pasiva)</text>
        <text x="450" y="104" fill="var(--ink2)" font-size="10.5">Protege y contiene</text>
        <text x="450" y="120" fill="var(--ink2)" font-size="10.5">los activos</text>
        <text x="300" y="105" fill="var(--ink)" font-size="18" font-weight="700">+</text>
      </g>
      <text x="300" y="30" fill="var(--ink)" font-size="14" font-weight="700" text-anchor="middle">Complementarias: juntas dan el mayor estándar de seguridad</text>
      <text x="300" y="175" fill="var(--ink2)" font-size="11" text-anchor="middle">No compiten: se suman para un ciclo de mejora continua</text>
    </svg>`
  }
];

/* ================= M3 · Gestión de la seguridad ================= */
DIAGRAMS[2] = [
  {
    title: 'La tríada CID',
    anchor: 'pilares fundamentales',
    svg: `<svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
      ${SVGDEF}
      <polygon points="260,40 460,260 60,260" fill="none" stroke="var(--acc2)" stroke-width="2"/>
      <text x="260" y="34" fill="var(--acc)" font-size="14" font-weight="700" text-anchor="middle">Confidencialidad</text>
      <text x="260" y="20" fill="var(--ink2)" font-size="10.5" text-anchor="middle">solo usuarios autorizados</text>
      <text x="50" y="278" fill="var(--acc)" font-size="14" font-weight="700" text-anchor="start">Integridad</text>
      <text x="50" y="293" fill="var(--ink2)" font-size="10.5" text-anchor="start">sin cambios no autorizados</text>
      <text x="470" y="278" fill="var(--acc)" font-size="14" font-weight="700" text-anchor="end">Disponibilidad</text>
      <text x="470" y="293" fill="var(--ink2)" font-size="10.5" text-anchor="end">accesible cuando se necesita</text>
      <text x="260" y="180" fill="var(--ink)" font-size="16" font-weight="800" text-anchor="middle">CID</text>
      <text x="260" y="200" fill="var(--ink2)" font-size="11" text-anchor="middle">la base de todo</text>
    </svg>`
  },
  {
    title: 'Niveles de detalle de la documentación',
    anchor: 'niveles de detalle',
    svg: `<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
      ${SVGDEF}
      <text x="280" y="24" fill="var(--ink)" font-size="14" font-weight="700" text-anchor="middle">De lo global a lo técnico</text>
      <g text-anchor="middle" font-size="12">
        ${[['Políticas','menor detalle · nivel global','var(--acc)'],['Normas','detallan los puntos de control','var(--acc2)'],['Procedimientos','paso a paso por plataforma','#2f9e6e'],['Estándares / instrucciones','guía técnica de implantación','var(--warn)']].map((r,i)=>`
          <rect x="${60+i*15}" y="${50+i*42}" width="${440-i*30}" height="34" rx="8" fill="var(--panel2)" stroke="${r[2]}"/>
          <text x="280" y="${67+i*42}" fill="var(--ink)" font-weight="700">${r[0]}</text>
          <text x="280" y="${80+i*42}" fill="var(--ink2)" font-size="9.5">${r[1]}</text>
        `).join('')}
      </g>
      <text x="280" y="232" fill="var(--ink2)" font-size="10.5" text-anchor="middle">↓ aumenta el nivel de detalle hacia abajo</text>
    </svg>`
  }
];

/* ================= M4 · SGSI ================= */
DIAGRAMS[3] = [
  {
    title: 'Ciclo PDCA (mejora continua)',
    anchor: 'ciclo pdca',
    svg: `<svg viewBox="0 0 360 320" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
      ${SVGDEF}
      <text x="180" y="24" fill="var(--ink)" font-size="14" font-weight="700" text-anchor="middle">Plan · Do · Check · Act</text>
      <g text-anchor="middle" font-size="12">
        <rect x="120" y="45" width="120" height="50" rx="10" fill="var(--acc)" opacity="0.85"/><text x="180" y="75" fill="#fff" font-weight="700">PLAN</text>
        <rect x="245" y="135" width="100" height="50" rx="10" fill="var(--acc2)" opacity="0.85"/><text x="295" y="165" fill="#fff" font-weight="700">DO</text>
        <rect x="120" y="225" width="120" height="50" rx="10" fill="#2f9e6e"/><text x="180" y="255" fill="#fff" font-weight="700">CHECK</text>
        <rect x="15" y="135" width="100" height="50" rx="10" fill="var(--warn)"/><text x="65" y="165" fill="#0f1419" font-weight="700">ACT</text>
      </g>
      <g fill="none" stroke="var(--acc)" stroke-width="2">
        <path d="M240 70 q70 10 65 60" marker-end="url(#arrowA)"/>
        <path d="M295 185 q-10 55 -60 50" marker-end="url(#arrowA)"/>
        <path d="M120 250 q-60 5 -55 -55" marker-end="url(#arrowA)"/>
        <path d="M65 135 q5 -60 60 -62" marker-end="url(#arrowA)"/>
      </g>
      <text x="180" y="305" fill="var(--ink2)" font-size="11" text-anchor="middle">El SGSI nunca se detiene: gira y mejora</text>
    </svg>`
  },
  {
    title: 'Las 9 fases de un SGSI ISO 27001',
    anchor: 'fases de un sgsi',
    svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
      ${SVGDEF}
      <text x="300" y="22" fill="var(--ink)" font-size="14" font-weight="700" text-anchor="middle">Las 9 fases en orden</text>
      <g font-size="10.5">
        ${['1. Análisis y evaluación de riesgos','2. Implementación de controles','3. Plan de tratamiento del riesgo','4. Alcance de la gestión','5. Contexto de organización','6. Partes interesadas','7. Fijación y medición de objetivos','8. Proceso documental','9. Auditorías internas y externas'].map((t,i)=>`
          <rect x="40" y="${40+i*26}" width="520" height="22" rx="6" fill="var(--panel2)" stroke="var(--acc)" opacity="0.95"/>
          <text x="54" y="${55+i*26}" fill="var(--ink)">${t}</text>
        `).join('')}
      </g>
    </svg>`
  }
];

/* ================= M5 · Gestión del riesgo ================= */
DIAGRAMS[4] = [
  {
    title: 'Riesgo = Impacto × Probabilidad',
    anchor: 'cálculo del riesgo',
    svg: `<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
      ${SVGDEF}
      <g text-anchor="middle">
        <rect x="30" y="70" width="130" height="60" rx="12" fill="var(--panel2)" stroke="var(--warn)"/>
        <text x="95" y="105" fill="var(--warn)" font-size="14" font-weight="700">Impacto</text>
        <text x="190" y="108" fill="var(--ink)" font-size="24" font-weight="800">×</text>
        <rect x="220" y="70" width="160" height="60" rx="12" fill="var(--panel2)" stroke="var(--acc2)"/>
        <text x="300" y="98" fill="var(--acc2)" font-size="13" font-weight="700">Probabilidad</text>
        <text x="300" y="118" fill="var(--ink2)" font-size="10.5">de ocurrencia</text>
        <text x="410" y="108" fill="var(--ink)" font-size="24" font-weight="800">=</text>
        <rect x="440" y="70" width="100" height="60" rx="12" fill="var(--acc)" opacity="0.9"/>
        <text x="490" y="105" fill="#fff" font-size="15" font-weight="800">RIESGO</text>
      </g>
      <text x="280" y="36" fill="var(--ink)" font-size="14" font-weight="700" text-anchor="middle">La fórmula que ordena la matriz de riesgo</text>
      <text x="280" y="170" fill="var(--ink2)" font-size="11" text-anchor="middle">Cuanto mayor el impacto y la probabilidad, más alto el riesgo</text>
    </svg>`
  },
  {
    title: 'Las 4 formas de tratar el riesgo',
    anchor: 'tratamiento del riesgo',
    svg: `<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
      ${SVGDEF}
      <text x="280" y="24" fill="var(--ink)" font-size="14" font-weight="700" text-anchor="middle">¿Qué hago con un riesgo?</text>
      <g text-anchor="middle" font-size="12">
        ${[['Asumir','está bajo el umbral','var(--ink2)'],['Mitigar','reduzco prob. o impacto','var(--acc)'],['Eliminar','quito el activo o actividad','#2f9e6e'],['Transferir','contrato un seguro','var(--acc2)']].map((r,i)=>`
          <rect x="${20+i*135}" y="55" width="120" height="110" rx="12" fill="var(--panel2)" stroke="${r[2]}"/>
          <text x="${80+i*135}" y="95" fill="${r[2]}" font-weight="700" font-size="13">${r[0]}</text>
          <text x="${80+i*135}" y="125" fill="var(--ink2)" font-size="9.8">${r[1]}</text>
        `).join('')}
      </g>
      <text x="280" y="190" fill="var(--ink2)" font-size="10.5" text-anchor="middle">La elección depende del umbral de aceptación de la organización</text>
    </svg>`
  }
];

/* ================= M6 · Estándares ================= */
DIAGRAMS[5] = [
  {
    title: 'Las 5 funciones del NIST CSF',
    anchor: 'nist - cybersecurity',
    svg: `<svg viewBox="0 0 620 180" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
      ${SVGDEF}
      <text x="310" y="26" fill="var(--ink)" font-size="14" font-weight="700" text-anchor="middle">Identificar · Proteger · Detectar · Responder · Recuperar</text>
      <g text-anchor="middle" font-size="11.5">
        ${['Identificar','Proteger','Detectar','Responder','Recuperar'].map((t,i)=>`
          <rect x="${20+i*120}" y="70" width="105" height="50" rx="10" fill="var(--panel2)" stroke="var(--acc)"/>
          <text x="${72+i*120}" y="100" fill="var(--ink)" font-weight="700">${t}</text>
          ${i<4?`<line x1="${125+i*120}" y1="95" x2="${139+i*120}" y2="95" stroke="var(--acc)" marker-end="url(#arrowA)"/>`:''}
        `).join('')}
      </g>
      <text x="310" y="150" fill="var(--ink2)" font-size="11" text-anchor="middle">Funciones simultáneas y continuas · también son las 5 fases de la ISO 27032</text>
    </svg>`
  }
];

/* ================= M7 · Herramientas defensivas ================= */
DIAGRAMS[6] = [
  {
    title: 'Arquitectura con DMZ',
    anchor: 'dmz',
    svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
      ${SVGDEF}
      <g text-anchor="middle" font-size="11">
        <text x="60" y="110" fill="var(--ink2)" font-size="12">Internet</text>
        <line x1="95" y1="105" x2="150" y2="105" stroke="var(--ink2)" marker-end="url(#arrow)"/>
        <rect x="155" y="80" width="60" height="50" rx="8" fill="var(--panel2)" stroke="var(--warn)"/>
        <text x="185" y="100" fill="var(--warn)" font-size="10" font-weight="700">FW</text>
        <text x="185" y="116" fill="var(--ink2)" font-size="9">firewall</text>
        <rect x="245" y="35" width="150" height="140" rx="10" fill="rgba(255,180,84,.07)" stroke="var(--warn)" stroke-dasharray="5 4"/>
        <text x="320" y="52" fill="var(--warn)" font-size="11" font-weight="700">DMZ</text>
        <rect x="265" y="62" width="110" height="26" rx="6" fill="var(--panel2)" stroke="var(--acc)"/><text x="320" y="79" fill="var(--ink)" font-size="10">Web / WAF</text>
        <rect x="265" y="96" width="110" height="26" rx="6" fill="var(--panel2)" stroke="var(--acc)"/><text x="320" y="113" fill="var(--ink)" font-size="10">Servidor SMTP</text>
        <rect x="265" y="130" width="110" height="26" rx="6" fill="var(--panel2)" stroke="var(--acc)"/><text x="320" y="147" fill="var(--ink)" font-size="10">FTP</text>
        <line x1="395" y1="105" x2="440" y2="105" stroke="var(--ink2)" marker-end="url(#arrow)"/>
        <rect x="445" y="55" width="135" height="100" rx="10" fill="rgba(78,163,255,.07)" stroke="var(--acc)"/>
        <text x="512" y="74" fill="var(--acc)" font-size="11" font-weight="700">Red interna</text>
        <text x="512" y="100" fill="var(--ink2)" font-size="9.5">Active Directory</text>
        <text x="512" y="118" fill="var(--ink2)" font-size="9.5">Workstations</text>
        <text x="512" y="136" fill="var(--ink2)" font-size="9.5">Bases de datos</text>
      </g>
      <text x="300" y="200" fill="var(--ink2)" font-size="10.5" text-anchor="middle">La DMZ aísla lo expuesto a Internet de la red interna sensible</text>
    </svg>`
  },
  {
    title: 'IDS vs. IPS',
    anchor: 'ips e ids',
    svg: `<svg viewBox="0 0 560 180" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
      ${SVGDEF}
      <g text-anchor="middle">
        <rect x="40" y="55" width="220" height="90" rx="12" fill="rgba(78,163,255,.08)" stroke="var(--acc)"/>
        <text x="150" y="82" fill="var(--acc)" font-size="14" font-weight="700">IDS</text>
        <text x="150" y="106" fill="var(--ink2)" font-size="11">Detecta y ALERTA</text>
        <text x="150" y="124" fill="var(--ink2)" font-size="10">(pasivo)</text>
        <rect x="300" y="55" width="220" height="90" rx="12" fill="rgba(57,217,138,.08)" stroke="var(--ok)"/>
        <text x="410" y="82" fill="var(--ok)" font-size="14" font-weight="700">IPS</text>
        <text x="410" y="106" fill="var(--ink2)" font-size="11">Detecta y BLOQUEA</text>
        <text x="410" y="124" fill="var(--ink2)" font-size="10">(activo · la "P" es Prevention)</text>
      </g>
      <text x="280" y="32" fill="var(--ink)" font-size="14" font-weight="700" text-anchor="middle">La diferencia clave: ¿solo avisa o además frena?</text>
    </svg>`
  }
];

/* ================= M8 · Gestión de incidentes ================= */
DIAGRAMS[7] = [
  {
    title: 'Niveles de la mesa de ayuda',
    anchor: 'roles',
    svg: `<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
      ${SVGDEF}
      <text x="280" y="22" fill="var(--ink)" font-size="14" font-weight="700" text-anchor="middle">Escalado del incidente</text>
      <g text-anchor="middle" font-size="11">
        <rect x="200" y="40" width="160" height="34" rx="8" fill="var(--panel2)" stroke="var(--ink2)"/><text x="280" y="62" fill="var(--ink)">Usuario final (ticket)</text>
        <rect x="200" y="86" width="160" height="34" rx="8" fill="var(--panel2)" stroke="var(--acc)"/><text x="280" y="108" fill="var(--ink)">Mesa Nivel 1</text>
        <rect x="200" y="132" width="160" height="34" rx="8" fill="var(--panel2)" stroke="var(--acc2)"/><text x="280" y="154" fill="var(--ink)">Mesa Nivel 2</text>
        <rect x="200" y="178" width="160" height="34" rx="8" fill="var(--panel2)" stroke="var(--warn)"/><text x="280" y="200" fill="var(--ink)">Mesa Nivel 3 (especialistas)</text>
        <line x1="280" y1="74" x2="280" y2="84" stroke="var(--acc)" marker-end="url(#arrowA)"/>
        <line x1="280" y1="120" x2="280" y2="130" stroke="var(--acc)" marker-end="url(#arrowA)"/>
        <line x1="280" y1="166" x2="280" y2="176" stroke="var(--acc)" marker-end="url(#arrowA)"/>
      </g>
      <text x="400" y="130" fill="var(--ink2)" font-size="10" text-anchor="start">↑ a mayor</text>
      <text x="400" y="144" fill="var(--ink2)" font-size="10" text-anchor="start">complejidad,</text>
      <text x="400" y="158" fill="var(--ink2)" font-size="10" text-anchor="start">se escala</text>
    </svg>`
  },
  {
    title: 'Circuito de resolución de un incidente',
    anchor: 'circuito de resolución',
    svg: `<svg viewBox="0 0 620 150" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
      ${SVGDEF}
      <g text-anchor="middle" font-size="10.5">
        ${['Notificación','Clasificación','Tratamiento','Cierre','Base de conocimiento'].map((t,i)=>`
          <rect x="${15+i*120}" y="55" width="108" height="46" rx="9" fill="var(--panel2)" stroke="var(--acc)"/>
          <text x="${69+i*120}" y="82" fill="var(--ink)">${t}</text>
          ${i<4?`<line x1="${123+i*120}" y1="78" x2="${135+i*120}" y2="78" stroke="var(--acc)" marker-end="url(#arrowA)"/>`:''}
        `).join('')}
      </g>
      <text x="310" y="32" fill="var(--ink)" font-size="14" font-weight="700" text-anchor="middle">Del reporte al aprendizaje</text>
      <text x="310" y="130" fill="var(--ink2)" font-size="10.5" text-anchor="middle">La base de conocimiento alimenta la resolución de futuros incidentes</text>
    </svg>`
  }
];

/* ================= M9 · Plan de IR ================= */
DIAGRAMS[8] = [
  {
    title: 'Las 5 fases del plan de IR',
    anchor: 'proceso de planificación',
    svg: `<svg viewBox="0 0 620 160" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
      ${SVGDEF}
      <text x="310" y="28" fill="var(--ink)" font-size="14" font-weight="700" text-anchor="middle">Ciclo de respuesta a incidentes</text>
      <g text-anchor="middle" font-size="11">
        ${[['Preparación','var(--acc)'],['Detección','var(--acc2)'],['Respuesta','var(--bad)'],['Recuperación','#2f9e6e'],['Seguimiento','var(--warn)']].map((r,i)=>`
          <rect x="${15+i*120}" y="60" width="108" height="48" rx="9" fill="var(--panel2)" stroke="${r[1]}"/>
          <text x="${69+i*120}" y="89" fill="var(--ink)">${r[0]}</text>
          ${i<4?`<line x1="${123+i*120}" y1="84" x2="${135+i*120}" y2="84" stroke="var(--ink2)" marker-end="url(#arrow)"/>`:''}
        `).join('')}
      </g>
      <text x="310" y="138" fill="var(--ink2)" font-size="10.5" text-anchor="middle">El Seguimiento retroalimenta a la Preparación (mejora continua)</text>
    </svg>`
  }
];

/* ================= M10 · Continuidad de negocio ================= */
DIAGRAMS[9] = [
  {
    title: 'RTO vs. RPO en la línea de tiempo',
    anchor: 'análisis de impacto en el negocio',
    svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
      ${SVGDEF}
      <line x1="40" y1="110" x2="560" y2="110" stroke="var(--ink2)" stroke-width="2"/>
      <circle cx="300" cy="110" r="7" fill="var(--bad)"/>
      <text x="300" y="138" fill="var(--bad)" font-size="11" font-weight="700" text-anchor="middle">INCIDENTE</text>
      <line x1="180" y1="110" x2="180" y2="60" stroke="var(--acc2)" stroke-dasharray="4 3"/>
      <text x="180" y="50" fill="var(--acc2)" font-size="11" font-weight="700" text-anchor="middle">último backup</text>
      <line x1="430" y1="110" x2="430" y2="60" stroke="var(--ok)" stroke-dasharray="4 3"/>
      <text x="430" y="50" fill="var(--ok)" font-size="11" font-weight="700" text-anchor="middle">servicio restaurado</text>
      <path d="M180 80 H300" stroke="var(--acc2)" stroke-width="2" marker-start="url(#arrow)"/>
      <text x="240" y="74" fill="var(--acc2)" font-size="11" text-anchor="middle" font-weight="700">RPO</text>
      <text x="240" y="98" fill="var(--ink2)" font-size="9" text-anchor="middle">datos que puedo perder</text>
      <path d="M300 80 H430" stroke="var(--ok)" stroke-width="2" marker-end="url(#arrow)"/>
      <text x="365" y="74" fill="var(--ok)" font-size="11" text-anchor="middle" font-weight="700">RTO</text>
      <text x="365" y="98" fill="var(--ink2)" font-size="9" text-anchor="middle">tiempo caído tolerable</text>
      <text x="300" y="185" fill="var(--ink2)" font-size="10.5" text-anchor="middle">RPO mira hacia atrás (datos) · RTO mira hacia adelante (tiempo)</text>
    </svg>`
  },
  {
    title: 'BCP y sus componentes (DRP dentro)',
    anchor: 'plan de recuperación de desastres',
    svg: `<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
      ${SVGDEF}
      <rect x="40" y="45" width="480" height="130" rx="14" fill="rgba(124,92,255,.06)" stroke="var(--acc2)"/>
      <text x="280" y="68" fill="var(--acc2)" font-size="13" font-weight="700" text-anchor="middle">BCP · Plan de Continuidad de Negocio (toda la organización)</text>
      <g text-anchor="middle" font-size="9.5">
        ${['BRP','OEP','COP','IMP'].map((t,i)=>`
          <rect x="${60+i*88}" y="95" width="78" height="60" rx="8" fill="var(--panel2)" stroke="var(--ink2)"/>
          <text x="${99+i*88}" y="130" fill="var(--ink)" font-weight="700" font-size="11">${t}</text>`).join('')}
        <rect x="412" y="95" width="90" height="60" rx="8" fill="rgba(57,217,138,.10)" stroke="var(--ok)"/>
        <text x="457" y="122" fill="var(--ok)" font-weight="700" font-size="11">DRP</text>
        <text x="457" y="140" fill="var(--ink2)" font-size="8.5">solo TI</text>
      </g>
      <text x="280" y="192" fill="var(--ink2)" font-size="10.5" text-anchor="middle">El DRP (recuperación de TI) es una parte del BCP</text>
    </svg>`
  }
];

/* ================= M11 · Auditoría ================= */
DIAGRAMS[10] = [
  {
    title: 'Modelo de las tres líneas de defensa',
    anchor: 'tres líneas de defensa',
    svg: `<svg viewBox="0 0 580 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
      ${SVGDEF}
      <text x="290" y="26" fill="var(--ink)" font-size="14" font-weight="700" text-anchor="middle">Tres capas que protegen el control interno</text>
      <g text-anchor="middle" font-size="11">
        <rect x="30" y="55" width="165" height="110" rx="12" fill="var(--panel2)" stroke="var(--acc)"/>
        <text x="112" y="82" fill="var(--acc)" font-weight="700">1ª línea</text>
        <text x="112" y="106" fill="var(--ink2)" font-size="9.8">Dueños de procesos</text>
        <text x="112" y="122" fill="var(--ink2)" font-size="9.8">seguimiento de riesgos</text>
        <rect x="207" y="55" width="165" height="110" rx="12" fill="var(--panel2)" stroke="var(--acc2)"/>
        <text x="289" y="82" fill="var(--acc2)" font-weight="700">2ª línea</text>
        <text x="289" y="106" fill="var(--ink2)" font-size="9.8">Indicadores de contraste</text>
        <text x="289" y="122" fill="var(--ink2)" font-size="9.8">y soporte al análisis</text>
        <rect x="384" y="55" width="165" height="110" rx="12" fill="var(--panel2)" stroke="var(--warn)"/>
        <text x="466" y="82" fill="var(--warn)" font-weight="700">3ª línea</text>
        <text x="466" y="106" fill="var(--ink2)" font-size="9.8">Auditoría interna</text>
        <text x="466" y="122" fill="var(--ink2)" font-size="9.8">reevaluación continua</text>
      </g>
    </svg>`
  },
  {
    title: 'Tipos de auditoría',
    anchor: 'clasificación de las auditorías',
    svg: `<svg viewBox="0 0 580 190" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
      ${SVGDEF}
      <text x="290" y="24" fill="var(--ink)" font-size="14" font-weight="700" text-anchor="middle">5 tipos de auditoría</text>
      <g text-anchor="middle" font-size="10">
        ${[['Financiera','exactitud de los EECC'],['Operativa','control interno de un área'],['Integrada','financiera + operativa'],['De sistemas','protege activos de SI'],['Forense','rastrea fraudes y crímenes']].map((r,i)=>`
          <rect x="${15+i*113}" y="50" width="103" height="90" rx="10" fill="var(--panel2)" stroke="var(--acc)"/>
          <text x="${66+i*113}" y="88" fill="var(--ink)" font-weight="700" font-size="11">${r[0]}</text>
          <text x="${66+i*113}" y="112" fill="var(--ink2)" font-size="8.6">${r[1]}</text>
        `).join('')}
      </g>
    </svg>`
  }
];

/* ================= M12 · Caso práctico ABC S.A. ================= */
DIAGRAMS[11] = [
  {
    title: 'Arquitectura de red segmentada de ABC S.A.',
    anchor: 'nueva arquitectura de red segmentada',
    svg: `<svg viewBox="0 0 620 240" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
      ${SVGDEF}
      <g font-size="10" text-anchor="middle">
        <text x="45" y="120" fill="var(--ink2)" font-size="11">Internet</text>
        <line x1="80" y1="115" x2="120" y2="115" stroke="var(--ink2)" marker-end="url(#arrow)"/>
        <rect x="125" y="90" width="70" height="50" rx="8" fill="var(--panel2)" stroke="var(--warn)"/>
        <text x="160" y="112" fill="var(--warn)" font-weight="700" font-size="11">NGFW</text>
        <text x="160" y="128" fill="var(--ink2)" font-size="8.5">perímetro</text>
        <rect x="220" y="35" width="170" height="170" rx="12" fill="rgba(255,180,84,.06)" stroke="var(--warn)" stroke-dasharray="5 4"/>
        <text x="305" y="54" fill="var(--warn)" font-size="11" font-weight="700">DMZ</text>
        <rect x="238" y="64" width="134" height="26" rx="6" fill="var(--panel2)" stroke="var(--acc)"/><text x="305" y="81" fill="var(--ink)" font-size="9.5">Web + WAF</text>
        <rect x="238" y="98" width="134" height="26" rx="6" fill="var(--panel2)" stroke="var(--acc)"/><text x="305" y="115" fill="var(--ink)" font-size="9.5">Servidor SMTP</text>
        <rect x="238" y="132" width="134" height="26" rx="6" fill="var(--panel2)" stroke="var(--acc)"/><text x="305" y="149" fill="var(--ink)" font-size="9.5">App Server A</text>
        <rect x="238" y="166" width="134" height="26" rx="6" fill="var(--panel2)" stroke="var(--ink2)"/><text x="305" y="183" fill="var(--ink2)" font-size="9">IPS supervisa</text>
        <line x1="390" y1="115" x2="420" y2="115" stroke="var(--ink2)" marker-end="url(#arrow)"/>
        <rect x="425" y="45" width="180" height="160" rx="12" fill="rgba(78,163,255,.06)" stroke="var(--acc)"/>
        <text x="515" y="64" fill="var(--acc)" font-size="11" font-weight="700">Red interna</text>
        <rect x="440" y="74" width="150" height="24" rx="6" fill="var(--panel2)" stroke="var(--acc2)"/><text x="515" y="90" fill="var(--ink)" font-size="9">App Server B</text>
        <rect x="440" y="104" width="150" height="24" rx="6" fill="var(--panel2)" stroke="var(--acc2)"/><text x="515" y="120" fill="var(--ink)" font-size="9">Active Directory (IAM)</text>
        <rect x="440" y="134" width="150" height="24" rx="6" fill="var(--panel2)" stroke="var(--acc2)"/><text x="515" y="150" fill="var(--ink)" font-size="9">VLAN Endpoints + AV</text>
        <rect x="440" y="164" width="150" height="24" rx="6" fill="var(--panel2)" stroke="var(--acc2)"/><text x="515" y="180" fill="var(--ink)" font-size="9">Base de Datos + IPS</text>
      </g>
      <text x="310" y="222" fill="var(--ink2)" font-size="10.5" text-anchor="middle">Defensa en profundidad: cada zona con sus propios controles</text>
    </svg>`
  },
  {
    title: 'Distribución del presupuesto (USD 650.000)',
    anchor: 'propuesta de inversión',
    svg: `<svg viewBox="0 0 580 230" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
      ${SVGDEF}
      <text x="290" y="24" fill="var(--ink)" font-size="14" font-weight="700" text-anchor="middle">¿En qué se invierte el presupuesto?</text>
      <g font-size="11">
        ${[['IAM',225,'var(--acc)'],['NGFW',130,'var(--acc2)'],['WAF',105,'#2f9e6e'],['IPS',90,'var(--warn)'],['Concientización',50,'var(--bad)'],['Margen (backup/BCP)',50,'var(--ink2)']].map((r,i)=>`
          <text x="160" y="${56+i*28}" fill="var(--ink)" text-anchor="end">${r[0]}</text>
          <rect x="170" y="${45+i*28}" width="${r[1]*1.5}" height="18" rx="4" fill="${r[2]}" opacity="0.88"/>
          <text x="${178+r[1]*1.5}" y="${59+i*28}" fill="var(--ink2)" font-size="10">${r[1]}k</text>
        `).join('')}
      </g>
      <text x="290" y="222" fill="var(--ink2)" font-size="10.5" text-anchor="middle">Total: 600k en herramientas + 50k de margen = 650.000 USD</text>
    </svg>`
  }
];
