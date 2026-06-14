# Fundamentos de Ciberseguridad - Study Suite

Interactive study material for the **Cybersecurity Fundamentals** course in the Cybersecurity program at Universidad de Palermo, Buenos Aires.

**[View live suite](https://catalinacarlen.github.io/fund-ciberseguridad-suite/)**

---

## About

A single self-contained HTML study app covering the full course syllabus across twelve modules. It runs without a server, requires no internet connection beyond the initial load, and can be shared as a folder of three plain files.

The suite follows an ascending pedagogical order - from understanding the cyberspace and its threats, through security and risk management, standards and defensive tools, up to incident response, business continuity and auditing - and closes with a real-world case study that ties all the theory together. Each module opens where the previous one left off, with a visible *thread* (hilo conductor) connecting them.

Every module includes faithful content from the course notes, plus added context and examples, inline **SVG diagrams** injected into their matching section, **flashcards** for active recall, and an auto-graded **quiz**.

---

## Modules

| # | Module | Key topics |
|---|--------|------------|
| 01 | **Ciberseguridad** | Cyberspace, threats (malware, phishing, ransomware, DDoS...), ISACA definition, security officer role |
| 02 | **Ramas de la Ciberseguridad** | Digital forensics, network security, ethical hacking, pentesting, offensive security, cyber patrolling |
| 03 | **Gestión de la seguridad de la información** | CIA triad, security policies, CISO and Committee, asset classification, ISO 17799 |
| 04 | **SGSI** | ISO 27001, PDCA cycle, the 9 phases, controls, audits, benefits |
| 05 | **Gestión del riesgo** | Asset/threat/vulnerability/impact, Risk = Impact × Probability, risk treatment, ISO 27005, MAGERIT, NIST SP 800-30 |
| 06 | **Estándares de Ciberseguridad** | ISO/IEC 27032, NIST CSF (Identify-Protect-Detect-Respond-Recover), cyber resilience, C-SCRM |
| 07 | **Herramientas defensivas** | OSI, DMZ, VLAN, ACL, auth factors; antivirus, IAM, OTP, NAC, VPN, WAF, IDS/IPS, SIEM, Proxy, DLP, DAM |
| 08 | **Gestión de incidentes** | Incident concept, help-desk levels, ITIL framework, security incident workflow, NIST 800-61 |
| 09 | **Plan de IR** | The 5 IR phases, Windows forensic analysis (accounts, logs, processes, registry), Nobelium/SolarWinds case |
| 10 | **Continuidad de negocio** | BCM, BCP, BIA (RTO & RPO), DRP, plan components, ransomware as a case study |
| 11 | **Auditoría** | Audit concept and types, systems audit, COBIT 5, continuous audit, three lines of defense |
| 12 | **Caso práctico: ABC S.A.** | Group project: a full security plan - standards, CID asset classification, risks, gaps, budgeted investment, segmented network architecture |

### Thread through the syllabus

```
Cyberspace -> Branches -> Information security mgmt -> ISMS -> Risk mgmt
    -> Standards -> Defensive tools -> Incident mgmt -> IR plan
    -> Business continuity -> Auditing -> Practical case (ABC S.A.)
```

---

## Tech

- Pure HTML/CSS/JS, no dependencies or frameworks
- No build step, no server - opens directly in the browser
- Three files in one folder: `index.html` (engine), `suite-data-ciber.js` (content), `suite-diagramas-ciber.js` (SVG diagrams)
- Dark theme, global search, progress tracking saved across sessions
- Per-module **TL;DR**, navigable mini-index with scroll-spy, reading time and collapsible sections
- Auto card/chip layout for catalog lists, inline SVG icons, progress ring and richer visuals
- **Flashcards** with know/review tracking and **quiz** with best-score memory plus an exam mode
- Mobile responsive

---

## Local use

```bash
git clone https://github.com/catalinacarlen/fund-ciberseguridad-suite
# open index.html in the browser (keep the 3 files together)
open index.html
```

---

Made by [Catalina Carlen](https://github.com/catalinacarlen) - Universidad de Palermo, Cybersecurity

---
---

# Fundamentos de Ciberseguridad - Suite de Estudio

Material interactivo para la materia **Fundamentos de Ciberseguridad** de la carrera de Ciberseguridad en la Universidad de Palermo.

**[Ver suite en vivo](https://catalinacarlen.github.io/fund-ciberseguridad-suite/)**

---

## Sobre el proyecto

Una única aplicación HTML autocontenida que cubre el temario completo de la materia en doce módulos. No requiere servidor, no necesita conexión adicional, y puede compartirse como una carpeta de tres archivos planos.

La suite sigue un orden pedagógico ascendente - desde entender el ciberespacio y sus amenazas, pasando por la gestión de la seguridad y del riesgo, los estándares y las herramientas defensivas, hasta la respuesta a incidentes, la continuidad del negocio y la auditoría - y cierra con un caso práctico real que une toda la teoría. Cada módulo abre donde terminó el anterior, con un hilo conductor visible que los conecta.

Cada módulo incluye el contenido fiel de los apuntes, más contexto y ejemplos añadidos, **diagramas SVG** inyectados en su apartado correspondiente, **flashcards** para repaso activo y un **quiz** con corrección automática.

---

## Modulos

| # | Modulo | Temas principales |
|---|--------|-------------------|
| 01 | **Ciberseguridad** | Ciberespacio, amenazas (malware, phishing, ransomware, DDoS...), definición de ISACA, oficial de seguridad |
| 02 | **Ramas de la Ciberseguridad** | Informática forense, seguridad de redes, hacking ético, pentesting, seguridad ofensiva, ciberpatrullaje |
| 03 | **Gestión de la seguridad de la información** | Tríada CID, políticas, CISO y Comité, clasificación de activos, ISO 17799 |
| 04 | **SGSI** | ISO 27001, ciclo PDCA, las 9 fases, controles, auditorías, beneficios |
| 05 | **Gestión del riesgo** | Activo/amenaza/vulnerabilidad/impacto, Riesgo = Impacto × Probabilidad, tratamiento, ISO 27005, MAGERIT, NIST SP 800-30 |
| 06 | **Estándares de Ciberseguridad** | ISO/IEC 27032, NIST CSF (Identificar-Proteger-Detectar-Responder-Recuperar), ciberresiliencia, C-SCRM |
| 07 | **Herramientas defensivas** | OSI, DMZ, VLAN, ACL, factores de autenticación; antivirus, IAM, OTP, NAC, VPN, WAF, IDS/IPS, SIEM, Proxy, DLP, DAM |
| 08 | **Gestión de incidentes** | Concepto de incidente, niveles de mesa de ayuda, marco ITIL, circuito de incidentes de seguridad, NIST 800-61 |
| 09 | **Plan de IR** | Las 5 fases de IR, análisis forense en Windows (cuentas, logs, procesos, registro), caso Nobelium/SolarWinds |
| 10 | **Continuidad de negocio** | BCM, BCP, BIA (RTO y RPO), DRP, componentes del plan, el ransomware como caso testigo |
| 11 | **Auditoría** | Concepto y tipos de auditoría, auditoría de sistemas, COBIT 5, auditoría continua, tres líneas de defensa |
| 12 | **Caso práctico: ABC S.A.** | Trabajo grupal: un plan de seguridad completo - estándares, clasificación CID de activos, riesgos, brechas, inversión con presupuesto, arquitectura de red segmentada |

### Hilo conductor

```
Ciberespacio -> Ramas -> Gestión de la seguridad -> SGSI -> Gestión del riesgo
     -> Estándares -> Herramientas defensivas -> Gestión de incidentes -> Plan de IR
     -> Continuidad de negocio -> Auditoría -> Caso práctico (ABC S.A.)
```

---

## Tecnologia

- HTML/CSS/JS puro, sin dependencias ni frameworks
- Sin build step, sin servidor - abre directo en el navegador
- Tres archivos en una carpeta: `index.html` (motor), `suite-data-ciber.js` (contenido), `suite-diagramas-ciber.js` (diagramas SVG)
- Tema oscuro, búsqueda global y seguimiento de progreso que se guarda entre sesiones
- **TL;DR** por módulo, mini-índice navegable con scroll-spy, tiempo de lectura y secciones colapsables
- Tarjetas/chips automáticos para las listas, íconos SVG, anillo de progreso y mejor diseño visual
- **Flashcards** con marca de "la sé/repasar" y **quiz** con memoria de mejor puntaje y modo examen
- Responsive para móvil

---

## Uso local

```bash
git clone https://github.com/catalinacarlen/fund-ciberseguridad-suite
# abrir index.html en el navegador (mantené los 3 archivos juntos)
open index.html
```

---

Hecho por [Catalina Carlen](https://github.com/catalinacarlen) - Universidad de Palermo, Ciberseguridad
