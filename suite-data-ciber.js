/* ============================================================
   DATOS DE LA SUITE · Fundamentos de Ciberseguridad
   Contenido íntegro de los apuntes (UP) + caso práctico (TP Grupo 2).
   12 módulos en orden pedagógico.
   ============================================================ */

/* -------- MÓDULO 1 -------- */
MODULES.push({
title: "Ciberseguridad",
lead: "Punto de partida: qué es el ciberespacio, qué problemas trae, cuáles son las ciberamenazas actuales y cómo nace la ciberseguridad como disciplina para protegernos.",
body: `
<div class="thread"><div class="nt">Hilo conductor</div>
Antes de aprender a defender, hay que entender el terreno. Este módulo define el <strong>ciberespacio</strong> (el campo de batalla), las <strong>amenazas</strong> que viven en él y el concepto de <strong>ciberseguridad</strong>. Todo lo que sigue —ramas, gestión, riesgo, herramientas, incidentes— son las formas concretas de proteger lo que acá presentamos.</div>

<h3>Concepto de ciberespacio</h3>
<p>El <strong>ciberespacio</strong> es un ambiente complejo en donde interactúan los seres humanos, el software y los servicios disponibles en Internet, soportados por el hardware y las redes de comunicaciones de todo el mundo.</p>
<h4>Componentes que integran el ciberespacio</h4>
<ul>
<li>Personas.</li>
<li>Software.</li>
<li>Servicios en Internet.</li>
<li>Dispositivos informáticos.</li>
<li>Redes digitales.</li>
</ul>

<h3>Problemáticas del ciberespacio</h3>
<p>El mismo ambiente que conecta al mundo también habilita conductas dañinas:</p>
<ul>
<li>Ciberdelincuencia.</li>
<li>Robo de información.</li>
<li>Fraude informático.</li>
<li>Ciberterrorismo.</li>
<li>Hacktivismo.</li>
<li>Daños informáticos.</li>
<li>Ciberataques.</li>
</ul>

<h3>Ciberamenazas</h3>
<h4>Definiciones</h4>
<ul>
<li><strong>Ciberataque:</strong> cualquier maniobra ofensiva de explotación deliberada que tiene como objetivo tomar el control, desestabilizar o dañar un sistema informático.</li>
<li><strong>Ciberamenaza:</strong> representa un evento con potencial de daño que puede afectar negativamente a las operaciones de una organización o a sus activos.</li>
<li><strong>Vulnerabilidad:</strong> representa una condición de debilidad en los sistemas informáticos que permite la materialización del daño.</li>
</ul>
<div class="note"><div class="nt">Clave para todo el curso</div>Amenaza, vulnerabilidad e impacto son los tres conceptos base que se repiten en la gestión de la seguridad, la gestión del riesgo y la respuesta a incidentes.</div>

<h4>Ciberamenazas actuales</h4>
<table class="tbl">
<tr><th>Amenaza</th><th>Descripción</th></tr>
<tr><td><strong>Malware</strong></td><td>Programa malicioso que realiza acciones dañinas en un sistema informático de forma intencionada y sin el conocimiento del usuario.</td></tr>
<tr><td><strong>Web-based attacks</strong></td><td>Todo tipo de ataque que se realiza a la infraestructura web de una organización.</td></tr>
<tr><td><strong>Phishing</strong></td><td>Conjunto de técnicas que busca obtener a través de Internet datos privados de los usuarios, especialmente para acceder a sus cuentas o datos bancarios. Se basa en la ingeniería social.</td></tr>
<tr><td><strong>Web Application Attacks</strong></td><td>Ataques dirigidos a errores de codificación en los sitios web, por ejemplo XSS, SQL Injection, LFI, etc.</td></tr>
<tr><td><strong>SPAM</strong></td><td>"Correo basura": correo electrónico no solicitado que se envía a un gran número de destinatarios con fines publicitarios o comerciales.</td></tr>
<tr><td><strong>DDoS</strong></td><td>Versión distribuida de una denegación de servicio; tiene como objetivo afectar la disponibilidad de los servicios de una organización.</td></tr>
<tr><td><strong>Identity Theft</strong></td><td>Robo de identidad: utilizar de manera ilícita los datos personales de otra persona persiguiendo un fin lucrativo.</td></tr>
<tr><td><strong>Data Breach</strong></td><td>Incidente en el que se roba o se toma información de un sistema sin el conocimiento o autorización del propietario.</td></tr>
<tr><td><strong>Insider Threat</strong></td><td>Riesgo de seguridad que se origina dentro de la organización objetivo. El actor no necesariamente es un empleado o funcionario actual.</td></tr>
<tr><td><strong>Botnets</strong></td><td>Red de computadoras zombies secuestradas que están controladas de forma remota por un hacker.</td></tr>
<tr><td><strong>Data manipulation attack</strong></td><td>El ciberdelincuente no toma posesión de los datos, sino que hace ajustes sutiles y sigilosos a los mismos con el fin de obtener algún tipo de ganancia.</td></tr>
<tr><td><strong>Information leakage</strong></td><td>Fuga de información: transmisión no autorizada de datos desde dentro de una organización a un destino o destinatario externo.</td></tr>
<tr><td><strong>Ransomware</strong></td><td>Programa malicioso que persigue el cifrado de archivos y/o datos a fin de cobrar un rescate para su restitución.</td></tr>
<tr><td><strong>Cyberespionage</strong></td><td>Estrategia de irrumpir en sistemas y/o redes informáticas a fin de extraer información sensible de un gobierno o corporación.</td></tr>
<tr><td><strong>Criptojacking</strong></td><td>Uso no autorizado de una computadora o red informática ajena a fin de minar criptomonedas.</td></tr>
</table>

<h3>Surgimiento y definición de la Ciberseguridad</h3>
<p>La <strong>Ciberseguridad</strong> surge como resultado de una visión amplia de los aspectos de seguridad que se deben tener a fin de poder minimizar los riesgos que proponen los nuevos desafíos y retos del ciberespacio.</p>
<blockquote>Se define como el conjunto de medidas de protección de la información, a través del tratamiento de las amenazas que ponen en riesgo a la misma y que es tratada por los sistemas de información interconectados. — <strong>ISACA</strong> (Information Systems Audit and Control Association)</blockquote>

<h4>Alcance de la Ciberseguridad</h4>
<ul>
<li>Se centra únicamente en los activos digitales conectados a Internet.</li>
<li>Mantiene su atención principalmente en los riesgos provenientes únicamente del ciberespacio.</li>
<li>Extiende su visión a la protección de la infraestructura crítica de información.</li>
</ul>

<h3>Perfil del oficial de seguridad</h3>
<p>El <strong>oficial de seguridad informática</strong> tiene la función de brindar los servicios de seguridad en la organización, a través de la planeación, coordinación y administración de los procesos de seguridad informática, así como difundir la cultura de seguridad informática entre todos los miembros de la organización.</p>
<h4>Funciones principales</h4>
<ul>
<li>Analizar las necesidades particulares de la organización en cuestión de seguridad digital.</li>
<li>Elaborar y presupuestar un plan de prevención y de actuación ante los posibles ciberataques.</li>
<li>Determinar los requisitos de seguridad para el sistema en red de la organización.</li>
<li>Proteger los equipos de la organización contra accesos no autorizados o maliciosos.</li>
<li>Configurar las diferentes herramientas de software de seguridad.</li>
<li>Realizar pruebas y análisis de vulnerabilidades.</li>
<li>Llevar a cabo auditorías de seguridad informática.</li>
<li>Responder de manera inmediata ante incidentes de seguridad informática.</li>
<li>Investigar los ciberdelitos.</li>
</ul>

<h3>Criterios de seguridad ante una evaluación tecnológica</h3>
<ul>
<li>Debido a los nuevos desafíos que vienen aparejados con las tecnologías, la rama de la ciberseguridad dentro de una organización debe ser considerada <strong>transversal</strong>, enfocándose principalmente en el resguardo de sus activos informáticos, pero también haciendo hincapié en la concientización del factor humano.</li>
<li>Al momento de evaluar una tecnología, se debe prestar atención al entorno donde se va a implementar, su relación con otros entornos y/o plataformas y/o servicios, su alcance y sus canales de comunicación.</li>
<li>Se deben tener en cuenta sus vulnerabilidades asociadas y los riesgos inherentes y externos.</li>
<li>Se debe considerar quiénes serán los actores principales y los secundarios, a fin de efectuar una correcta segregación de funciones y/o roles.</li>
<li>Es importante efectuar una validación unívoca de la identidad de los actores.</li>
<li>Se debe poder garantizar, en todo momento, una trazabilidad completa de la operatoria.</li>
</ul>
`
});

/* -------- MÓDULO 2 -------- */
MODULES.push({
title: "Ramas de la Ciberseguridad",
lead: "El mapa de especialidades: informática forense, seguridad de redes, hacking ético, seguridad ofensiva y ciberpatrullaje, con casos reales de investigación de cibercrimen.",
body: `
<div class="thread"><div class="nt">Hilo conductor</div>
Ya sabemos qué amenaza al ciberespacio (M1). Ahora vemos las <strong>especialidades</strong> que se reparten el trabajo de prevenir, resolver e investigar ataques. Cada rama es una salida laboral concreta dentro de la ciberseguridad.</div>

<h3>Concepto</h3>
<p>En Ciberseguridad se pueden realizar diferentes acciones para <strong>prevenir</strong> ataques informáticos, llevar a cabo procesos para <strong>solucionar</strong> los efectos de un ataque, y realizar actuaciones para tratar de <strong>determinar quién</strong> ha realizado esos ataques. Las distintas ramas se encargan de algunos de estos puntos.</p>
<h4>Ramas de la Ciberseguridad</h4>
<ul>
<li>El peritaje judicial.</li>
<li>La investigación y la persecución del cibercrimen (ciberpatrullaje).</li>
<li>La seguridad en las redes informáticas.</li>
<li>La seguridad en la nube (Cloud).</li>
<li>La protección de bases de datos.</li>
<li>La seguridad ofensiva.</li>
<li>La informática forense.</li>
<li>La auditoría de seguridad digital.</li>
<li>El hacking ético.</li>
<li>La consultoría de ciberseguridad.</li>
</ul>

<h3>Informática forense</h3>
<p>Es la disciplina que combina los elementos del <strong>derecho y la informática</strong> para recopilar y analizar datos de sistemas informáticos, redes, comunicaciones inalámbricas y dispositivos de almacenamiento de una manera que sea <strong>admisible como prueba en un tribunal de justicia</strong>.</p>
<h4>Objetivos</h4>
<ul>
<li>Recuperar, analizar y preservar el dispositivo informático y los materiales relacionados de tal manera que sirvan como evidencia ante un tribunal.</li>
<li>Postular el motivo detrás del cibercrimen y la identidad del autor principal.</li>
<li>Diseñar procedimientos que garanticen la integridad de la evidencia digital obtenida.</li>
<li>Adquisición y duplicación de datos: recuperación de archivos eliminados y particiones eliminadas de medios digitales para extraer la evidencia y validarla.</li>
<li>Redacción de un informe forense informático que facilite el proceso de investigación.</li>
<li>Preservar la evidencia digital mediante el uso de una <strong>cadena de custodia</strong>.</li>
</ul>
<h4>Tipos de investigaciones forenses</h4>
<ul>
<li>Análisis forense sobre equipos informáticos.</li>
<li>Análisis forense sobre redes informáticas.</li>
<li>Análisis forense sobre sistemas embebidos.</li>
<li>Análisis forense sobre la memoria volátil de un sistema informático.</li>
<li>Análisis forense sobre periféricos.</li>
<li>Análisis forense sobre dispositivos móviles.</li>
</ul>

<h3>Seguridad en las redes informáticas</h3>
<p>Consiste en las <strong>políticas y prácticas</strong> adoptadas para prevenir y supervisar el acceso no autorizado, el uso indebido, la modificación o la denegación de una red informática y sus recursos accesibles.</p>
<h4>Objetivos</h4>
<ul>
<li>Autorizar y asegurar el funcionamiento de la red informática.</li>
<li>Monitorear el tráfico de la red informática.</li>
<li>Garantizar la disponibilidad de la red ante eventuales ataques.</li>
<li>Garantizar la integridad de los datos que se transfieren por la red.</li>
<li>Cifrar comunicaciones donde se transfiere información de carácter sensible.</li>
</ul>
<h4>Técnicas utilizadas</h4>
<ul>
<li>Aplicación de políticas de autorización a la red (ej.: Norma IEEE 802.1X).</li>
<li>Aplicación de políticas de seguridad a usuarios de red (ej.: políticas de dominio, Identity Management).</li>
<li>Configuración de mecanismos de alta disponibilidad en los dispositivos de red.</li>
<li>Uso de dispositivos de seguridad que permitan la segmentación y control del tráfico.</li>
<li>Uso de canales cifrados, VPNs, terminadores SSL.</li>
<li>Uso de dispositivos que analicen y bloqueen tráfico anómalo en la capa de aplicación (capa 7 del modelo OSI).</li>
</ul>
<h4>Dispositivos utilizados</h4>
<p>NAC, Firewall, Proxy, IDS/IPS, Identity Management, WAF, WebFiltering / Email Filtering.</p>

<h3>Hacking ético</h3>
<p>Es la forma de referirse al acto que efectúa una persona, también conocida como <strong>hacker</strong>, donde utiliza sus conocimientos de informática y de seguridad a fin de encontrar vulnerabilidades o fallas en los sistemas de información.</p>
<h4>Objetivo</h4>
<p>Reportar a las organizaciones las fallas de seguridad y/o vulnerabilidades a fin de que estas puedan corregirlas y así elevar sus niveles de seguridad.</p>
<h4>Pentesting</h4>
<p>El <strong>pentesting</strong> o test de penetración es la actividad realizada por los consultores de seguridad a fin de evaluar el nivel de seguridad de una organización. Este servicio mayormente es comercializado por empresas dedicadas a la seguridad informática.</p>
<h4>Metodologías más utilizadas en el mercado</h4>
<ul>
<li><strong>OWASP</strong> (Open Web Application Security Project).</li>
<li><strong>OSSTMM</strong> (Open Source Security Testing Methodology Manual).</li>
<li><strong>PTES</strong> (Penetration Testing Methodologies and Standards).</li>
<li><strong>ISSAF</strong> (Information System Security Assessment Framework).</li>
<li><strong>CVSS</strong> (Common Vulnerability Scoring System).</li>
</ul>
<h4>Tipos de pentesting</h4>
<table class="tbl">
<tr><th>Tipo</th><th>Conocimiento del auditor</th></tr>
<tr><td><strong>Black Box</strong></td><td>No conoce información alguna de la infraestructura, aplicación o sistemas a analizar. Únicamente cuenta con el nombre de la organización y el alcance definido.</td></tr>
<tr><td><strong>White Box</strong></td><td>Conoce información sobre la infraestructura, aplicación o sistemas a analizar y mayormente dispone de un usuario con permisos limitados.</td></tr>
<tr><td><strong>Grey Box</strong></td><td>Conoce información parcial sobre la infraestructura, aplicación o sistema a analizar.</td></tr>
</table>

<h3>Seguridad ofensiva</h3>
<p>Es un conjunto de técnicas, procedimientos y soluciones tecnológicas cuya finalidad es la de <strong>defender activamente</strong> a una organización.</p>
<h4>Objetivo</h4>
<p>Identificar en tiempo real el grado de exposición que tiene una organización y cómo afectaría en cualquier incidente que se produjera.</p>
<h4>Seguridad ofensiva vs. seguridad defensiva</h4>
<p>La seguridad ofensiva (<strong>activa</strong>) se diferencia de la defensiva (<strong>pasiva</strong>) porque brinda un enfoque focalizado en identificar posibles amenazas y brechas dentro de la organización, a fin de mitigarlas y anticiparse al impacto de un ciberataque. Este enfoque aporta un ciclo de mejora continua. Finalmente, <strong>ambas seguridades son complementarias</strong> a fin de garantizar los más altos estándares.</p>
<h4>Actividades comprendidas</h4>
<ul>
<li>Penetration Tests.</li>
<li>Honey Pots.</li>
<li>Vulnerability Scanning.</li>
<li>Vulnerability Assessments.</li>
<li>Ejercicios de Red &amp; Blue teams, para adiestramiento del personal de seguridad y para la validación de los circuitos y procedimientos de Incident Response.</li>
</ul>

<h3>Ciberpatrullaje</h3>
<p>Es la actividad de <strong>monitoreo y vigilancia del ciberespacio</strong> a fin de prevenir la comisión de ciberdelitos.</p>
<h4>Objetivo</h4>
<ul>
<li>Prevención en la concreción de actos delictivos a través del ciberespacio.</li>
<li>Prevención en la concreción de actos terroristas a través del ciberespacio.</li>
<li>Monitoreo de la Dark Web.</li>
<li>Monitoreo del Hacktivismo.</li>
</ul>
<h4>Organismos que realizan ciberpatrullaje</h4>
<p>Organismos policiales (nacionales e internacionales), organismos de defensa nacional y organismos de inteligencia nacional.</p>
<h4>Fuentes y técnicas utilizadas</h4>
<ul>
<li><strong>OSINT</strong> (fuentes abiertas).</li>
<li><strong>SOCMINT</strong> (redes sociales).</li>
<li><strong>IMINT</strong> (imágenes).</li>
<li>Dark Web.</li>
<li>Ingeniería social.</li>
<li>Investigación digital.</li>
</ul>

<h3>Casos de ciberpatrullaje</h3>
<div class="example"><div class="nt">Caso Alexandria Ocasio-Cortez</div>
La División de Operaciones Internacionales del FBI detectó mensajes intimidatorios contra una legisladora a través de la red social PARLER. El IP pertenecía a la empresa Telecentro y la cuenta estaba asociada a un teléfono celular argentino. El FBI envió el reporte a la Unidad Fiscal Especializada en Ciberdelincuencia (UFECI), que procedió con el allanamiento del lugar, la detención del individuo y el inicio de la causa judicial pertinente.</div>
<div class="example"><div class="nt">Caso Playpen</div>
En agosto de 2004 el FBI fue notificado por una agencia internacional de un sitio donde se publicaba pornografía infantil en la red TOR. El FBI ejecutó la operación "Pacifier", que consistió en secuestrar el sitio web mediante técnicas de "hijacking" e incluir un malware NIT (Network Investigate Technique) que recolectaba información de los navegadores que accedían al sitio, revelando las identidades de los visitantes. El operativo resultó en la detención de 900 usuarios y tres sentencias judiciales en el fuero penal.</div>
<div class="example"><div class="nt">Caso Uniformes Policiales</div>
La División Conductas Ilícitas del Departamento de Cibercrimen de la Policía de la Ciudad detectó la comercialización de uniformes falsos publicados en un sitio de Internet. Se inició la investigación y la causa por infringir la Ley 22.362 "Ley de Marcas". Se comprobó que las ventas se realizaban a cualquier persona sin el debido registro y certificación que pertenecían a una fuerza de seguridad.</div>
`
});

/* -------- MÓDULO 3 -------- */
MODULES.push({
title: "Gestión de la seguridad de la información",
lead: "Los pilares CID, las políticas de seguridad, los roles (CISO y Comité), la clasificación de activos y la norma ISO 17799 como código de buenas prácticas.",
body: `
<div class="thread"><div class="nt">Hilo conductor</div>
Conocido el terreno (M1) y las especialidades (M2), arranca la parte de <strong>gestión</strong>. Acá se define qué protegemos (la tríada CID), con qué reglas (políticas), quién manda (CISO, Comité) y cómo se ordena la información (clasificación de activos). Es la base de los módulos de SGSI (M4) y riesgo (M5).</div>

<h3>¿Qué es la seguridad de la información?</h3>
<p>Es el conjunto de <strong>medidas preventivas y reactivas</strong> que permiten resguardar y proteger la información. Tiene como finalidad la protección de la información y de los sistemas de información en cuanto a su acceso, uso, divulgación, interrupción o destrucción no autorizada.</p>
<h4>¿Por qué es importante?</h4>
<p>En la actualidad los bienes más importantes de una organización están representados por sus <strong>activos informáticos</strong>, que requieren un tratamiento especial para asegurar su confidencialidad, integridad y disponibilidad. Además, en la era digital otro bien preciado es su <strong>imagen y reputación</strong>.</p>

<h3>Pilares fundamentales de la seguridad</h3>
<ul>
<li><strong>Confidencialidad:</strong> la información solo puede ser accedida por los usuarios autorizados.</li>
<li><strong>Integridad:</strong> la información debe estar íntegra, sin modificaciones no autorizadas.</li>
<li><strong>Disponibilidad:</strong> la información debe estar disponible para todos los usuarios autorizados.</li>
</ul>
<div class="note"><div class="nt">Tríada CID</div>Confidencialidad, Integridad y Disponibilidad son la columna vertebral de toda la materia. Cada control, herramienta y plan que veremos busca proteger uno o más de estos tres pilares.</div>

<h4>Alcance</h4>
<p>La seguridad de la información alcanza a: personas, software, hardware, entorno de TI e información.</p>

<h3>Definiciones</h3>
<ul>
<li><strong>Amenaza:</strong> evento que podría causar daños al violar la seguridad.</li>
<li><strong>Vulnerabilidad:</strong> debilidad en el sistema que permite que la seguridad sea violada.</li>
<li><strong>Activos de información:</strong> todos los recursos necesarios para la gestión de la información; incluye hardware, software, datos, infraestructura y personal.</li>
<li><strong>Impacto:</strong> daño producido si se materializa una amenaza.</li>
<li><strong>Riesgo:</strong> probabilidad de que una amenaza se materialice sobre una vulnerabilidad de un sistema informático, causando un impacto negativo en la organización.</li>
</ul>

<h3>Políticas de la seguridad de la información</h3>
<p>Las <strong>políticas de seguridad de la información</strong> consisten en una serie de normas y directrices que permiten garantizar la confidencialidad, integridad y disponibilidad de la información, minimizando de esta forma los riesgos inherentes y relacionados a la misma.</p>
<h4>Objetivo</h4>
<p>Proporcionar a la gerencia la dirección y soporte para la seguridad de la información en concordancia con los requerimientos comerciales y las leyes y regulaciones relevantes. La gerencia debe establecer claramente la dirección de la política en línea con los objetivos comerciales y demostrar su apoyo y compromiso a través de la emisión y mantenimiento de una política de seguridad en toda la organización.</p>
<h4>¿Por qué su implementación?</h4>
<ul>
<li>Para establecer un marco de guía para la seguridad.</li>
<li>Para definir claramente qué comportamientos están o no permitidos.</li>
<li>Para comunicar el consenso sobre cómo deben ser manejados los aspectos de seguridad en la organización.</li>
</ul>
<h4>Niveles de detalle</h4>
<table class="tbl">
<tr><th>Nivel</th><th>Detalle</th></tr>
<tr><td><strong>Políticas</strong></td><td>Menor nivel de detalle. Abarca temas a nivel global.</td></tr>
<tr><td><strong>Normas</strong></td><td>Detalla cada uno de los puntos de control de la política.</td></tr>
<tr><td><strong>Procedimientos</strong></td><td>Mayor nivel de detalle. Define paso a paso el procedimiento para cada plataforma informática en que aplica la norma.</td></tr>
<tr><td><strong>Estándares o instrucciones técnicas</strong></td><td>Documentos de guía para la implantación, administración y control de los recursos informáticos.</td></tr>
</table>

<h3>ISO 17799:2005</h3>
<p>El objetivo de la norma <strong>ISO 17799:2005</strong> "Tecnología de la Información – Técnicas de seguridad – Código para la práctica de la gestión de la seguridad de la información" es proporcionar una base común para desarrollar normas de seguridad dentro de las organizaciones, un método de gestión eficaz de la seguridad y para establecer transacciones y relaciones de confianza entre las empresas.</p>
<h4>Documento de una política de SI</h4>
<p>El documento de la política debiera contener enunciados relacionados con:</p>
<ul>
<li>Una definición de seguridad de la información, sus objetivos y alcance generales, y la importancia de la seguridad como mecanismo facilitador para intercambiar información.</li>
<li>Un enunciado de la intención de la gerencia, fundamentando sus objetivos y los principios de la seguridad en línea con la estrategia y los objetivos comerciales.</li>
<li>Un marco referencial para establecer los objetivos de control y los controles, incluyendo la estructura de la evaluación del riesgo y la gestión de riesgo.</li>
<li>Una explicación breve de las políticas, principios, estándares y requerimientos de conformidad, incluyendo: conformidad con requerimientos legislativos, reguladores y restrictivos; educación, capacitación y conocimiento de seguridad; gestión de la continuidad del negocio; y consecuencias de las violaciones de la política.</li>
<li>Una definición de las responsabilidades generales y específicas, incluyendo el reporte de incidentes de seguridad.</li>
<li>Referencias a la documentación que fundamenta la política.</li>
<li>La política se debe comunicar a través de toda la organización en una forma relevante, accesible y entendible para el lector objetivo.</li>
</ul>

<h3>Seguridad de la organización</h3>
<p>Para gestionar la seguridad de la información se debe establecer un marco apropiado para su implementación y control. La <strong>Dirección</strong> debe aprobar la política de seguridad y asignar los roles y funciones de quienes deban llevarla adelante.</p>
<h4>Roles y funciones</h4>
<table class="tbl">
<tr><th>Rol</th><th>Función</th></tr>
<tr><td><strong>CISO</strong> (Chief Information Security Officer)</td><td>Director de seguridad de la información. Su función principal es alinear la seguridad de la información con los objetivos de negocio, garantizando en todo momento que la información esté protegida adecuadamente.</td></tr>
<tr><td><strong>Comité de Seguridad</strong></td><td>Compuesto por el CISO y directivos de la organización. Implanta las directrices de la Dirección, valida y presenta para su aprobación las políticas y plan de seguridad, y promueve la concientización y formación de los empleados.</td></tr>
</table>

<h3>Clasificación y control de activos</h3>
<h4>Clasificación de la información</h4>
<p>El objetivo es asegurar que la información reciba un nivel de protección apropiado. La información debe clasificarse para indicar la necesidad, prioridades y grado de protección esperado. Tiene diversos grados de confidencialidad e importancia; algunos ítems requieren un nivel de protección adicional o manejo especial. Se debe utilizar un esquema de clasificación para definir un conjunto apropiado de niveles de protección.</p>
<h4>Control de activos</h4>
<p>El objetivo es lograr y mantener una apropiada protección de los activos. <strong>Todos los activos deben ser inventariados y contar con un propietario nombrado.</strong> Los propietarios identifican los activos y asignan la responsabilidad del mantenimiento de los controles apropiados. La implementación de controles específicos puede delegarse, pero el propietario sigue siendo responsable de la protección apropiada.</p>

<h3>Gestión de comunicaciones y operaciones</h3>
<p>El objetivo es asegurar la correcta operación de los medios de procesamiento de la información. Se deben establecer responsabilidades y procedimientos para la gestión y operación de todos los medios, incluyendo procedimientos de operación apropiados, segregación de funciones y separación de ambientes para reducir riesgos.</p>
<h4>Gestión del cambio</h4>
<p>Controla los cambios que se efectúan en los medios y sistemas de procesamiento. Se deben considerar: identificación y registro de cambios significativos; planeación y prueba de cambios; evaluación de impactos potenciales (incluyendo los de seguridad); procedimiento de aprobación formal; comunicación de los detalles a las personas relevantes; y procedimientos de emergencia y respaldo para abortar y recuperarse de cambios fallidos.</p>
<h4>Separación de ambientes</h4>
<p>Los medios de desarrollo, prueba y operación deben estar <strong>separados</strong> para reducir riesgos de acceso no autorizado o cambios en el sistema productivo. Los ambientes de desarrollo y prueba deben ser reflejo del productivo para emular cambios y evaluar impacto. Los datos usados en desarrollo deben estar <strong>enmascarados</strong>.</p>
<h4>Gestión de seguridad de la red y monitoreo</h4>
<p>La gestión de seguridad de la red asegura la protección de la información en redes y de la infraestructura de soporte, considerando el flujo de datos, implicancias legales, monitoreo y protección (con controles adicionales para información confidencial que pasa por redes públicas). El <strong>monitoreo</strong> detecta actividades de procesamiento no autorizadas: se monitorean los sistemas, se reportan los eventos de seguridad y se emplean bitácoras de operador donde se registran las fallas.</p>

<h3>Gestión de continuidad del negocio</h3>
<p>El objetivo es contraatacar las interrupciones a las actividades comerciales y proteger los procesos comerciales críticos de los efectos de fallas importantes o desastres en los sistemas de información, asegurando su reanudación oportuna. Se debe implementar un proceso de gestión de la continuidad del negocio mediante una combinación de controles preventivos y de recuperación. La seguridad de la información debe ser parte integral del proceso general de continuidad y debe identificar los procesos comerciales críticos.</p>
<div class="thread"><div class="nt">Conecta con…</div>Este apartado es la semilla del Módulo 10 (Continuidad de negocio), donde se desarrollan BCM, BCP, BIA y DRP en profundidad.</div>
`
});

/* -------- MÓDULO 4 -------- */
MODULES.push({
title: "Sistema de gestión de la seguridad de la información (SGSI)",
lead: "Cómo se ordena todo en un sistema vivo basado en ISO 27001 y el ciclo PDCA de mejora continua: fases, controles, auditorías y beneficios de implementarlo.",
body: `
<div class="thread"><div class="nt">Hilo conductor</div>
En M3 vimos las piezas (políticas, roles, activos). El <strong>SGSI</strong> es la maquinaria que las pone a funcionar juntas y de forma continua, apoyada en la norma ISO 27001 y en el ciclo PDCA. Es el marco formal que después permite certificar y que da contexto al análisis de riesgo del M5.</div>

<h3>¿Qué es un SGSI?</h3>
<p>Un <strong>sistema de gestión de seguridad de la información (SGSI)</strong> consiste en el conjunto de políticas, procedimientos y directrices junto a los recursos y actividades asociadas que son administradas colectivamente por una organización, en la búsqueda de proteger sus activos de información esenciales.</p>
<h4>Normas de SGSI</h4>
<ul>
<li><strong>ISO/IEC 27001:</strong> se enfoca al proceso y modelo PDCA de mejora continua.</li>
<li><strong>ITIL:</strong> se enfoca en alinear la seguridad de IT con la organización a fin de efectuar una gestión eficaz en todas las actividades.</li>
<li><strong>COBIT:</strong> se enfoca en la tecnología de la información, gestión de activos y controles.</li>
</ul>

<h3>ISO/IEC 27001</h3>
<p>La norma <strong>ISO 27001</strong> es una solución de mejora continua sobre la cual puede desarrollarse un SGSI que permita evaluar todo tipo de riesgos o amenazas susceptibles de poner en peligro la información de una organización, tanto propia como datos de terceros. También permite establecer los controles y estrategias más adecuadas para eliminar o minimizar dichos peligros.</p>
<h4>Enfoque: ciclo PDCA</h4>
<p>La norma 27001 es un sistema basado en el <strong>ciclo de mejora continua o de Deming</strong>. Dicho ciclo consiste en <strong>Planificar-Hacer-Verificar-Actuar</strong>, por lo que se le conoce también como ciclo <strong>PDCA</strong> (Plan-Do-Check-Act).</p>

<h3>Fases de un SGSI basado en la norma ISO 27001</h3>
<p>Las fases del SGSI son:</p>
<ol>
<li>Análisis y evaluación de riesgos.</li>
<li>Implementación de controles.</li>
<li>Definición de un plan de tratamiento de riesgos o esquema de mejora.</li>
<li>Alcance de la gestión.</li>
<li>Contexto de organización.</li>
<li>Partes interesadas.</li>
<li>Fijación y medición de objetivos.</li>
<li>Proceso documental.</li>
<li>Auditorías internas y externas.</li>
</ol>

<h4>1. Análisis y evaluación de riesgos</h4>
<p>Identificar todos los activos de información que tienen algún valor para la organización; asociar las amenazas relevantes con los activos identificados; determinar las vulnerabilidades que puedan ser aprovechadas; e identificar el impacto que podría suponer una pérdida de confidencialidad, integridad y disponibilidad para cada activo.</p>

<h4>2. Implementación de controles</h4>
<p>La norma ISO 27001 establece <strong>113 puntos de control</strong>, divididos por grandes objetivos (políticas de seguridad de la información y controles operacionales). Cada organización puede añadir más puntos de control o personalizarlos para adaptarlos a su propio plan de control operacional, pero siempre alineados a lo que pide la norma.</p>
<div class="note"><div class="nt">Aclaración (dato a revisar)</div>El apunte indica <strong>113</strong> controles. En rigor, la versión <strong>ISO/IEC 27001:2013</strong> contempla <strong>114 controles</strong> agrupados en 14 dominios (la edición anterior, basada en ISO 27002:2005, tenía 133; y la versión <strong>2022</strong> los reorganizó en <strong>93</strong> controles bajo 4 categorías). Se reproduce la cifra "113" del apunte; se recomienda tener presente la cifra oficial 114 de la 27001:2013.</div>

<h4>3. Plan de tratamiento de los riesgos o esquema de mejora</h4>
<p>Tras el análisis se define un plan de tratamiento que tenga en cuenta las consecuencias potenciales de esos riesgos, estableciendo una <strong>criticidad</strong> para cada uno y permitiendo evaluar con objetividad las amenazas. Formas de afrontar el riesgo:</p>
<ul>
<li><strong>Eliminar el riesgo:</strong> hacer tender la posibilidad de ocurrencia a cero mediante la utilización de todos los recursos posibles.</li>
<li><strong>Mitigar el riesgo:</strong> implantar medidas preventivas o correctivas para reducir la posibilidad de ocurrencia.</li>
<li><strong>Trasladar el riesgo:</strong> contratar algún tipo de seguro que compense las consecuencias económicas de una pérdida o deterioro de la información.</li>
</ul>

<h4>4. Alcance de la gestión</h4>
<p>Es muy importante definir el alcance del SGSI. Dependerá del tamaño de la organización, usando variables como: número de empleados y clientes; volumen de información, activos físicos y lógicos; y número de sedes u oficinas.</p>

<h4>5. Contexto de organización</h4>
<p>El análisis de contexto permite determinar los problemas internos y externos de la organización, así como sus debilidades, amenazas, fortalezas y oportunidades (<strong>matriz FODA</strong>) que puedan afectar.</p>

<h4>6. Partes interesadas</h4>
<p>Se deben comprender las necesidades y expectativas de las partes interesadas, que podrían ser: proveedores de servicios de información y de equipamientos de TIC; clientes (con especial cuidado en la gestión de datos de protección personal); fuerzas de seguridad del Estado y autoridades jurídicas para los aspectos legales; y la sociedad en general.</p>

<h4>7. Fijación y medición de objetivos</h4>
<p>Es necesario fijar objetivos para la gestión de riesgos, que deben poder ser <strong>medibles</strong>, aunque no necesariamente cuantificables. Estos objetivos deben comunicarse eficientemente a todos los empleados, ya que todos participan en un objetivo común y un descuido o mala actitud puede acarrear consecuencias muy negativas.</p>

<h4>8. Proceso documental</h4>
<p>Es fundamental para obtener la certificación. La documentación puede presentarse en diversos formatos (papel, archivos de texto, hojas de cálculo, vídeo o audio, etc.). La organización debe gestionar tanto los documentos internos (políticas, procedimientos, documentación del proyecto) como los externos (correspondencia, remitos, documentación recibida con equipamiento).</p>

<h4>9. Auditorías internas y externas</h4>
<p>Para garantizar el correcto funcionamiento y mantenimiento del SGSI se deben llevar a cabo planes de auditoría internas y externas de forma periódica. La norma define dos grandes tipos de auditorías:</p>
<ul>
<li><strong>Gestión:</strong> supervisa el liderazgo, el contexto, etc.</li>
<li><strong>Controles:</strong> se auditan los controles de forma periódica.</li>
</ul>

<h4>Revisión por parte de la Dirección</h4>
<p>Es fundamental realizar revisiones periódicas del SGSI por parte de la alta dirección, para comprobar el buen funcionamiento del sistema, el cumplimiento de los objetivos y si se está produciendo un retorno de la inversión (<strong>ROI</strong>). La alta dirección es la máxima responsable de que el área auditada lleve a cabo las acciones necesarias para eliminar las no conformidades detectadas durante la auditoría interna y externa.</p>

<h3>Beneficios de implementar ISO 27001</h3>
<ul>
<li><strong>Incremento de la confianza:</strong> la confiabilidad aumenta en clientes, proveedores y socios, ya que certificar la norma demuestra el compromiso en materia de seguridad de la información.</li>
<li><strong>Chequeos periódicos:</strong> se realizan revisiones periódicas para verificar el cumplimiento de la norma y de sus controles internos.</li>
<li><strong>Reducción de riesgos:</strong> las posibilidades de perder información bajan notablemente, dado que la norma contempla una gestión de riesgo.</li>
<li><strong>Gestión de la información:</strong> permite clasificar los activos de información, conocer su importancia y protegerlos según su criticidad.</li>
<li><strong>Capacitación constante:</strong> exige una capacitación continua, generando un fuerte compromiso interno.</li>
<li><strong>Identificación de los riesgos:</strong> permite identificar los riesgos y establecer controles de gestión, control de riesgos y planes de mitigación.</li>
<li><strong>Clasificación de los riesgos:</strong> según su gravedad y la posibilidad de que se materialicen.</li>
<li><strong>Unificación de controles:</strong> unifica criterios y controles en toda la organización.</li>
<li><strong>Cumplimiento de las leyes:</strong> permite cumplir reglamentos y leyes vigentes en información personal y propiedad intelectual, evitando sanciones y multas.</li>
<li><strong>Reducción de costos:</strong> genera un ROI al minimizar el impacto de la materialización de amenazas.</li>
<li><strong>Correcto acceso a la información:</strong> asegura el correcto funcionamiento de las plataformas de acceso a la información.</li>
<li><strong>Mejora de la competitividad:</strong> mejora la competitividad y la imagen institucional a nivel nacional e internacional.</li>
</ul>
`
});

/* -------- MÓDULO 5 -------- */
MODULES.push({
title: "Gestión del riesgo",
lead: "El corazón cuantitativo de la seguridad: activo, amenaza, vulnerabilidad, impacto y riesgo; la fórmula Riesgo = impacto × probabilidad, el tratamiento del riesgo y las normas ISO 27005, MAGERIT y NIST SP 800-30.",
body: `
<div class="thread"><div class="nt">Hilo conductor</div>
La primera fase de todo SGSI (M4) es el análisis de riesgos. Este módulo lo desarrolla en detalle: cómo medir el riesgo, cómo decidir qué hacer con él y qué metodologías estandarizadas existen. Es la herramienta que justifica en qué gastar el presupuesto de seguridad, algo que veremos aplicado en el caso práctico (M12).</div>

<h3>Conceptos base</h3>
<ul>
<li><strong>Activo:</strong> todo bien tangible o intangible que la organización posee y que puede producir un beneficio.</li>
<li><strong>Activo de información:</strong> aquellos activos que procesan, contienen, almacenan o transmiten información.</li>
<li><strong>Amenaza:</strong> evento cuya ocurrencia podría impactar de forma negativa en la organización. Las amenazas se aprovechan de las vulnerabilidades. Pueden ser de índole natural, por acciones terroristas y/o sabotaje, actos de guerra, de forma accidental, por errores y/o desperfectos de dispositivos, etc.</li>
<li><strong>Vulnerabilidad:</strong> debilidad que presentan los activos y que facilita la materialización de las amenazas.</li>
<li><strong>Exposición:</strong> instancia en la cual la información o un activo de información es susceptible a dañarse o perderse por el accionar del ciberdelincuente.</li>
<li><strong>Probabilidad de ocurrencia:</strong> frecuencia con la cual una amenaza puede ocurrir. Para estimarla se usan datos empíricos (objetivos) del histórico de la organización, o bien opiniones de expertos o de la Dirección (subjetivos).</li>
<li><strong>Impacto:</strong> conjunto de consecuencias que produce un riesgo si llegara a presentarse. Se suele estimar en porcentaje de degradación del valor del activo; el 100% sería la pérdida total.</li>
<li><strong>Riesgo:</strong> probabilidad de que una amenaza se materialice y/o se convierta en un desastre.</li>
</ul>

<h3>Gestión del riesgo</h3>
<p>Es la acción integral para el abordaje de una situación de desastre. Permite determinar los riesgos, intervenir para modificarlos, disminuirlos, eliminarlos o lograr la preparación pertinente para responder ante los daños que causará un determinado desastre.</p>
<blockquote>Gestión del Riesgo = Análisis del Riesgo + Tratamiento del Riesgo</blockquote>

<h3>Metodología</h3>
<ul>
<li><strong>Identificación de los activos:</strong> identificar los activos de información y sus responsables.</li>
<li><strong>Identificación de vulnerabilidades:</strong> debilidades propias del activo que lo hacen susceptible a sufrir ataques o daños.</li>
<li><strong>Identificación de amenazas:</strong> cosas que puedan suceder y dañar el activo (desastres naturales, incendios, virus informáticos, espionaje, etc.).</li>
<li><strong>Identificación de requisitos legales:</strong> contratos que la organización está obligada a cumplir con clientes, socios o proveedores.</li>
<li><strong>Identificación del riesgo:</strong> definir, para cada activo, la probabilidad de que las amenazas o vulnerabilidades causen un daño total o parcial en relación a su disponibilidad, confidencialidad e integridad.</li>
<li><strong>Ponderación del impacto:</strong> cuantificación del daño que originaría al activo si la amenaza se materializa.</li>
</ul>
<h4>Cálculo del riesgo por cada activo</h4>
<blockquote>Riesgo = Impacto × Probabilidad de ocurrencia</blockquote>
<p>El resultado se representa en una <strong>matriz de riesgo</strong>, que cruza el impacto contra la probabilidad para ubicar cada riesgo en una zona de criticidad.</p>

<h3>Tratamiento del riesgo</h3>
<p>Los <strong>controles o salvaguardas</strong> son cualquier tipo de medida que se ejecute con la finalidad de detectar, prevenir y/o minimizar el riesgo asociado con la ocurrencia de una amenaza específica. El <strong>tratamiento del riesgo</strong> define las acciones a seguir en caso de que el riesgo se materialice. Las opciones son:</p>
<ul>
<li><strong>Asumir el riesgo:</strong> se opta por asumirlo porque está debajo del umbral aceptable, porque los costos de tratamiento son elevados, o porque la organización no quiere dejar de aprovechar la oportunidad de negocio.</li>
<li><strong>Reducir o mitigar el riesgo:</strong> tomar medidas para situar el nivel de riesgo por debajo del umbral definido, ya sea reduciendo la probabilidad o frecuencia de ocurrencia (medidas preventivas) o reduciendo/acotando el impacto (controles).</li>
<li><strong>Eliminar el riesgo:</strong> sustituyendo el activo por otro no afectado por la amenaza, o eliminando la actividad que lo produce.</li>
<li><strong>Transferir el riesgo:</strong> cuando la organización no tiene capacidad de tratamiento y contrata un tercero con capacidad para reducir y/o gestionar el riesgo dejándolo por debajo del umbral.</li>
</ul>
<div class="note"><div class="nt">Umbral de aceptación</div>El umbral de aceptación es la línea que separa los riesgos que la organización tolera de los que debe tratar. Todo riesgo por debajo se puede asumir; todo riesgo por encima exige mitigar, eliminar o transferir.</div>

<h3>Normas de riesgo</h3>
<p>Las principales normas/metodologías de gestión del riesgo son: <strong>ISO/IEC 27005:2008</strong>, <strong>MAGERIT v3</strong> y <strong>NIST SP 800-30</strong>.</p>

<h4>ISO/IEC 27005</h4>
<p>Es parte de la familia de estándares sobre SGSI de ISO/IEC. Suministra las directrices para gestionar los riesgos que puede sufrir la información de una organización. Se apoya principalmente en ISO/IEC 27001, centrándose en los requisitos de seguridad de la información.</p>

<h4>MAGERIT v3</h4>
<p>Metodología elaborada por el <strong>Consejo Superior de Administración Electrónica del Gobierno de España</strong>, enfocada a las administraciones públicas. Es de carácter público, puede utilizarse libremente y no requiere autorización previa. Se basa en analizar el impacto que puede tener para la organización la violación de la seguridad, identificando las amenazas que pueden afectarla y las vulnerabilidades que estas pueden utilizar, para obtener una identificación clara de las medidas preventivas y correctivas más apropiadas. Presenta una guía completa, paso a paso, de cómo llevar a cabo el análisis de riesgos. Está dividida en <strong>tres libros</strong>:</p>
<ul>
<li><strong>Método:</strong> describe la estructura que debe tener el modelo de gestión de riesgo.</li>
<li><strong>Catálogo de Elementos:</strong> una especie de inventario que puede utilizar la empresa para enfocar el análisis de riesgo.</li>
<li><strong>Guía de Técnicas:</strong> incluye ejemplos de análisis con tablas, algoritmos, árboles de ataque, análisis de costo/beneficio, técnicas gráficas y buenas prácticas.</li>
</ul>

<h4>NIST SP 800-30</h4>
<p>Metodología elaborada por el <strong>National Institute of Standards and Technology</strong>, que depende de la Administración de Tecnología del Departamento de Comercio de los Estados Unidos. Su objetivo es el aseguramiento de los sistemas de información, la gestión de riesgos y la optimización en su administración. Se compone de <strong>nueve pasos</strong> para el análisis de riesgo:</p>
<ol>
<li>Caracterización del sistema.</li>
<li>Identificación de amenaza.</li>
<li>Identificación de vulnerabilidades.</li>
<li>Control de análisis.</li>
<li>Determinación de la probabilidad.</li>
<li>Análisis de impacto.</li>
<li>Determinación del riesgo.</li>
<li>Recomendaciones de control.</li>
<li>Resultado de la implementación o documentación.</li>
</ol>
`
});

/* -------- MÓDULO 6 -------- */
MODULES.push({
title: "Estándares de Ciberseguridad",
lead: "Los dos grandes marcos de referencia: la norma ISO/IEC 27032 para la ciberseguridad y el NIST Cybersecurity Framework (Identificar-Proteger-Detectar-Responder-Recuperar), más ciberresiliencia y C-SCRM.",
body: `
<div class="thread"><div class="nt">Hilo conductor</div>
La gestión del riesgo (M5) necesita marcos que la ordenen. Acá aparecen los dos estándares que el caso práctico del M12 adopta: <strong>ISO/IEC 27032</strong> y el <strong>NIST CSF</strong>. Sus cinco funciones (Identificar, Proteger, Detectar, Responder, Recuperar) son el esqueleto de toda estrategia moderna de ciberseguridad.</div>

<h3>Estándar — Definición</h3>
<p>Un <strong>estándar</strong> es una especificación publicada que establece un lenguaje común y contiene especificaciones técnicas y otros criterios específicos. Es diseñado para ser usado consistentemente, como una regla, una guía o una definición.</p>
<h4>Estándares de Ciberseguridad</h4>
<ul>
<li><strong>ISO/IEC 27032:2012</strong> "Tecnologías de la información - Técnicas de seguridad - Directrices para la Ciberseguridad".</li>
<li><strong>NIST</strong> - Marco de Ciberseguridad (CSF).</li>
</ul>

<h3>ISO/IEC 27032:2012</h3>
<p>El estándar ISO/IEC 27032:2012 abarca el ámbito de la Ciberseguridad y fue publicado en 2012 por la Organización Internacional de Normalización (ISO).</p>
<h4>Objetivo</h4>
<p>Pretende garantizar la seguridad en los intercambios de información en la red, a fin de hacer frente de forma más efectiva al cibercrimen.</p>
<h4>Partes interesadas y activos en el Ciberespacio</h4>
<p>Dentro del ciberespacio identifica <strong>consumidores</strong> (personas y/o organizaciones) y <strong>proveedores</strong> (de servicios), junto con los activos presentes en él. Se basa en la gestión de riesgos, amenazas y vulnerabilidades, y propone una metodología de <strong>cinco fases</strong> para proteger los activos en el Ciberespacio.</p>
<h4>Metodología (cinco fases)</h4>
<ul>
<li><strong>Identificar:</strong> entender el funcionamiento de la organización para minimizar el riesgo de los sistemas, activos, datos y capacidades.</li>
<li><strong>Proteger:</strong> diseñar salvaguardas para limitar el impacto de los eventos potenciales sobre los servicios y las infraestructuras críticas.</li>
<li><strong>Detectar:</strong> ejecutar actividades para identificar la ocurrencia de un evento de ciberseguridad.</li>
<li><strong>Responder:</strong> tomar las medidas apropiadas después de enterarse de un evento de seguridad.</li>
<li><strong>Recuperar:</strong> planificar la capacidad de recuperación y la reparación oportuna de capacidades y servicios comprometidos.</li>
</ul>

<h4>Controles de Ciberseguridad (ISO 27032)</h4>
<p><strong>Controles a nivel de aplicación:</strong> asegurar el manejo de sesiones en aplicaciones web (cookies); validar las entradas para prevenir SQL-Injection; asegurar los scripts de las páginas para prevenir XSS; y efectuar revisiones del código fuente para detectar vulnerabilidades.</p>
<p><strong>Controles a nivel de servidor:</strong> aplicar de forma periódica la gestión de parches para cada plataforma; efectuar evaluaciones de seguridad (pentest); aplicar las buenas prácticas de configuración del fabricante; implementar un sistema de despliegue controlado de actualizaciones sobre equipos productivos; y usar herramientas de antivirus y/o anti-malware.</p>
<p><strong>Controles sobre el usuario final:</strong> antivirus y/o anti-malware; bloqueadores de scripts y configuraciones que solo permitan scripts de fuentes confiables; filtros de phishing y firewalls personales; mantener los sistemas actualizados; y restringir el permiso de administrador al usuario final.</p>
<p><strong>Controles sobre ataques de Ingeniería Social:</strong> planes de concientización y capacitación del usuario final.</p>

<h3>NIST - Cybersecurity Framework (CSF)</h3>
<p>El framework es una metodología con un enfoque para reducir el riesgo vinculado a las amenazas cibernéticas que puedan comprometer la seguridad de la información. Por su simplicidad y flexibilidad se adapta a organizaciones de cualquier sector o tamaño.</p>
<h4>Objetivo</h4>
<p>Entender, gestionar y disminuir la probabilidad de ocurrencia de un riesgo cibernético gracias a la adecuada protección de sus redes y datos.</p>
<h4>Estructura del framework</h4>
<p><strong>Perfil del marco:</strong> es la alineación de las funciones con los requisitos y objetivos de la organización. El <strong>perfil actual</strong> describe los resultados que se están logrando, mientras que el <strong>perfil objetivo</strong> muestra los resultados requeridos para lograr los objetivos de la gestión de riesgos cibernéticos.</p>
<p><strong>Marco básico o núcleo:</strong> conjunto de actividades para lograr resultados de seguridad cibernética, basado en estándares, directrices y buenas prácticas de la industria. Está conformado por <strong>cinco funciones</strong>, simultáneas y continuas: Identificar, Proteger, Detectar, Responder y Recuperar.</p>
<p><strong>Niveles de implementación:</strong> ofrecen un contexto sobre cómo una organización considera el riesgo de seguridad cibernética y los procesos para gestionarlo. Respaldan la toma de decisiones sobre cómo gestionar el riesgo y qué dimensiones priorizar. Son <strong>cuatro niveles</strong>, definidos por el proceso de gestión de riesgos, el programa integrado de gestión de riesgos y la participación externa.</p>

<h3>Ciberresiliencia</h3>
<p>Es la capacidad inherente de una organización que le permite <strong>enfrentar un ciberataque sin que su negocio, función e integridad se vean mayormente afectados</strong>. Su característica principal es poder resurgir con facilidad y en tiempos de respuesta mínimos, así como mejorar para tener la capacidad de afrontar nuevas formas de amenazas.</p>

<h3>C-SCRM (Cadena de suministro cibernética)</h3>
<p>Algunos factores que podrían facilitar el compromiso de la cadena de suministros son la <strong>interoperabilidad</strong>, la <strong>innovación rápida</strong> y la <strong>baja inversión</strong> en materia de seguridad cibernética. Los riesgos pueden incluir: inserción de falsificaciones, producción no autorizada, manipulación/robo/inserción de software y/o hardware maliciosos, y prácticas deficientes de fabricación y desarrollo.</p>
<p><strong>Cyber Supply Chain Risk Management (C-SCRM)</strong> es el proceso de identificar, evaluar y mitigar los riesgos asociados con la naturaleza distribuida e interconectada de las cadenas de suministro de productos y servicios de TI/OT. Cubre todo el ciclo de vida de un sistema (diseño, desarrollo, distribución, implementación, adquisición, mantenimiento y destrucción), ya que las amenazas y vulnerabilidades de la cadena de suministro pueden comprometer intencional o involuntariamente un producto o servicio en cualquier etapa. Su gestión requiere garantizar la integridad, la seguridad, la resistencia y la calidad de la cadena de suministro y de sus productos y/o servicios.</p>
`
});

/* -------- MÓDULO 7 -------- */
MODULES.push({
title: "Herramientas defensivas",
lead: "El arsenal técnico: conceptos de red (OSI, DMZ, VLAN, ACL, factores de autenticación) y las soluciones que defienden la organización (antivirus, IAM, OTP, NAC, VPN, WAF, IDS/IPS, SIEM, Proxy, filtrado, DLP, DAM).",
body: `
<div class="thread"><div class="nt">Hilo conductor</div>
La fase "Proteger" de los estándares (M6) se materializa con herramientas concretas. Este módulo es el catálogo defensivo: primero los conceptos de red que hay que dominar, y luego las soluciones que se compran e implementan. En el caso práctico (M12) elegiremos varias de estas herramientas según un presupuesto.</div>

<h3>Conceptos</h3>
<h4>Modelo OSI</h4>
<p>El modelo OSI fue desarrollado como un estándar por la ISO, con la finalidad de interconectar sistemas de procedencia distinta para que pudieran intercambiar información sin impedimentos debidos a los protocolos propios de cada fabricante. Está constituido por <strong>7 capas o niveles de abstracción</strong>. Esta separación en niveles hace posible la intercomunicación de protocolos distintos al concentrar funciones específicas en cada nivel.</p>
<h4>DMZ</h4>
<p>Una <strong>DMZ</strong> (DeMilitarized Zone) o "zona desmilitarizada" es una red local de la organización donde se alojan servidores y/o servicios que tienen que estar publicados en Internet. Esta zona se encuentra aislada del resto de la red interna. Se caracteriza por: utilizar un direccionamiento privado distinto al de la red interna; permitir el tráfico bidireccional hacia Internet; y permitir el tráfico unidireccional desde la red interna.</p>
<h4>VLAN</h4>
<p>Las <strong>VLANs</strong> (Virtual LANs) son un método para crear redes lógicas independientes dentro de una misma red física. Los métodos más utilizados son: Tagging-Based o Port-Based.</p>
<h4>ACLs</h4>
<p>Las <strong>ACLs</strong> (Access Control List) son una lista de reglas que especifican qué usuarios o procesos del sistema tienen acceso a otros objetos, así como qué operaciones están permitidas. Se aplican a nivel de sistemas operativos, en dispositivos de seguridad de red, entre otros.</p>
<h4>Factor de autenticación</h4>
<p>El factor de autenticación es un método que sirve para identificarnos ante un sistema informático. Los tipos más utilizados responden a las siguientes preguntas:</p>
<ul>
<li><strong>Tipo 1: "Algo que conozco"</strong>, por ejemplo una password.</li>
<li><strong>Tipo 2: "Algo que tengo"</strong>, por ejemplo un token.</li>
<li><strong>Tipo 3: "Algo que soy"</strong>, por ejemplo una huella digital.</li>
</ul>
<p>Tipos de autenticación: <strong>1FA</strong> (un solo factor), <strong>2FA</strong> (combinación de dos factores) y <strong>MFA</strong> (combinación de más de dos factores).</p>

<h3>Herramientas defensivas</h3>
<p>Las herramientas defensivas brindan el apoyo necesario para prevenir o contener una amenaza. Aportan la capacidad de efectuar controles, monitoreo y notificación de alertas en tiempo real. También se incluye la concientización del usuario final, para que tenga el conocimiento necesario para distinguir una amenaza.</p>

<h4>Antivirus</h4>
<p>Soluciones que brindan protección en tiempo real a nivel de <strong>endpoint</strong>. Se caracterizan por la detección mediante patrones, heurística y módulos de machine learning. Categorizaciones: por su funcionamiento (online/offline) y por el ambiente a controlar (virtualizado: Agent based / Agentless).</p>
<h4>Identity Manager (IAM)</h4>
<p>Soluciones de software que permiten una gestión centralizada del control de acceso a aplicaciones y/o recursos de infraestructura. Utilizan el método de autenticación <strong>Single-Sign-On (SSO)</strong> sincronizándose con un directorio activo. Facilitan la administración de usuarios, derechos, accesos, metadatos y contraseñas, y el cumplimiento y control de normas de seguridad.</p>
<h4>One Time Password (OTP)</h4>
<p>Códigos numéricos de un solo uso utilizados para una sola transacción, generalmente como segundo factor de autenticación. Métodos de sincronismo:</p>
<ul>
<li><strong>Basada en evento:</strong> usa un algoritmo matemático para generar un nuevo código basado en el evento anterior.</li>
<li><strong>Basada en tiempo:</strong> se basa en una sincronización de tiempo entre el servidor de autenticación y el cliente.</li>
<li><strong>Basada en challenge-response:</strong> el nuevo código se basa en un pedido y un contador, en vez de un código previo.</li>
</ul>
<p>Tipos: tokens basados en software (App móvil, SMS, E-mail) y tokens basados en hardware.</p>
<h4>Network Access Control (NAC)</h4>
<p>Concepto de refuerzo de seguridad de los equipos informáticos antes de autorizar su acceso a una red determinada. Se caracteriza por el refuerzo de políticas de seguridad (AV, parches, etc.) y la administración de acceso e identidad (IP, MAC, perfilado, etc.). Implementación mediante dispositivos de red (FW, routers, switches), uso de agentes, y VLAN de cuarentena / portal cautivo.</p>
<h4>Virtual Private Network (VPN)</h4>
<p>Tecnología de red que se utiliza para conectar uno o varios dispositivos a una red privada mediante Internet. Tipos: VPN Remote Access, VPN Site-to-Site y VPN over WAN. Protocolos: IPSEC, VPN-SSL y PPTP.</p>
<h4>Web Application Firewall (WAF)</h4>
<p>Dispositivos de red que brindan protección contra ataques de <strong>capa 7</strong> del modelo OSI. Protegen las aplicaciones web tanto contra la explotación de vulnerabilidades conocidas como contra ataques de código.</p>
<h4>IPS e IDS</h4>
<p>Dispositivos que monitorean el tráfico de red y, de acuerdo a sus firmas, toman una acción. Los <strong>IDS</strong> solo monitorean y emiten alertas ante posibles amenazas, mientras que los <strong>IPS</strong> tienen la posibilidad de bloquear o droppear la conexión.</p>
<div class="example"><div class="nt">Diferencia clave</div>IDS = <strong>detecta</strong> y alerta (pasivo); IPS = detecta y además <strong>bloquea</strong> (activo). La "P" de IPS corresponde a "Prevention".</div>
<h4>SIEM (Security Information Event Monitoring)</h4>
<p>Dispositivos de red que permiten recolectar y correlacionar los logs de la infraestructura informática. Permiten definir reglas de correlación entre varios dispositivos, generar alertas en tiempo real y realizar búsquedas específicas, como el seguimiento de un usuario o un equipo en toda la red.</p>
<h4>Proxy</h4>
<p>Dispositivos de red que hacen de intermediario en las peticiones de recursos que realiza un cliente a un servidor. Funcionalidad: Directo / Inverso (el origen de las conexiones está en Internet). Brindan seguridad en la conexión, esconden el direccionamiento real del cliente, mejoran el rendimiento de la navegación (cache/aceleramiento) y brindan control de acceso y filtrado de contenido.</p>
<h4>Web filtering</h4>
<p>Soluciones que brindan protección ante ataques producto de la navegación por Internet (por ejemplo, sitios maliciosos). Bloquean sitios web mediante firmas de antivirus, por tipo de contenido o categorías, listas de reputación, blacklists e inspección SSL.</p>
<h4>Email filtering</h4>
<p>Soluciones que protegen ante ataques que utilizan los servicios de correo (por ejemplo, phishing y spam). Detectan y ponen en cuarentena correos sospechosos mediante firmas de antivirus, clasificadores bayesianos, listas de reputación de servidores de correo y blacklists.</p>
<h4>Data Loss Prevention (DLP)</h4>
<p>Soluciones que previenen la fuga de información sensible de la organización. Brindan confidencialidad de los documentos mediante el cifrado, impidiendo su apertura en dispositivos no autorizados. Adicionalmente bloquean comandos como la captura de pantalla, la copia y el envío de documentos marcados como sensibles.</p>
<h4>Database Audit Monitoring (DAM)</h4>
<p>Soluciones que auditan y monitorean el comportamiento de una Base de Datos, por ejemplo las SQL querys. Auditan todas las querys que impactan a la base de datos y, en caso de ser maliciosas, generan una alerta en tiempo real.</p>
<h4>Concientización</h4>
<p>Rol fundamental que permite capacitar al usuario final a fin de poder discernir entre un comportamiento habitual y una posible amenaza.</p>
`
});

/* -------- MÓDULO 8 -------- */
MODULES.push({
title: "Gestión de incidentes",
lead: "Qué es un incidente, los roles y niveles de la mesa de ayuda, el marco ITIL de gestión de servicios, y el circuito completo de resolución de incidentes de seguridad con la guía NIST 800-61.",
body: `
<div class="thread"><div class="nt">Hilo conductor</div>
Por más herramientas (M7) y estándares (M6) que tengamos, los incidentes ocurren. Este módulo enseña a gestionarlos de forma ordenada: desde la mesa de ayuda y el marco ITIL hasta el circuito específico de un incidente de seguridad. Es la antesala del plan formal de respuesta (M9).</div>

<h3>Conceptos</h3>
<ul>
<li><strong>Incidente:</strong> evento que puede ser potencialmente dañino, pero que no acarrea consecuencias humanas ni materiales de gravedad.</li>
<li><strong>Incidente IT:</strong> cualquier interrupción en los servicios de IT que afecta desde un solo usuario hasta toda la empresa. Comienza con el usuario final que informa un problema y termina con un miembro del equipo de soporte que lo resuelve.</li>
<li><strong>Gestión de incidentes:</strong> proceso que tiene como entrada el registro del evento ocurrido (reportado), su atención para la resolución y el posterior registro y notificación de su solución, dentro de un tiempo acordado (<strong>SLA</strong>).</li>
</ul>

<h3>Roles</h3>
<table class="tbl">
<tr><th>Rol</th><th>Descripción</th></tr>
<tr><td><strong>Usuario final / solicitante</strong></td><td>Parte interesada que experimenta la interrupción del servicio y emite un ticket de incidente para iniciar el proceso.</td></tr>
<tr><td><strong>Mesa de ayuda nivel 1</strong></td><td>Primer punto de contacto. Técnicos con conocimiento práctico de los problemas más comunes de un entorno de TI.</td></tr>
<tr><td><strong>Mesa de ayuda nivel 2</strong></td><td>Técnicos con conocimientos avanzados. Reciben solicitudes más complejas y escaladas desde el nivel 1.</td></tr>
<tr><td><strong>Mesa de ayuda nivel 3</strong></td><td>Técnicos especialistas con conocimiento avanzado de dominios particulares de la infraestructura de TI.</td></tr>
</table>

<h3>ITIL</h3>
<p>Es una guía de buenas prácticas para la gestión de servicios de tecnologías de la información (IT). Ha sido elaborada para abarcar toda la infraestructura, desarrollo y operaciones de IT y gestionarla hacia la mejora de la calidad del servicio.</p>
<h4>Marco de trabajo</h4>
<ul>
<li><strong>Estrategia de servicio:</strong> se centra en el ciclo de vida completo de los procesos de ITSM: diseñar, desarrollar, implementar y gestionar una cartera de servicios de TI, además de determinar costo, presupuesto y un pronóstico de la demanda futura.</li>
<li><strong>Diseño del servicio:</strong> creación de servicios y procesos según los requisitos comerciales de disponibilidad, seguridad, SLA, continuidad (incluidos backup y recuperación de desastres).</li>
<li><strong>Transición del servicio:</strong> mejores prácticas para migrar a un servicio nuevo o modificado con un impacto mínimo en su calidad y rendimiento.</li>
<li><strong>Operación del servicio:</strong> gestión diaria de los servicios implementados, incluyendo la tramitación de solicitudes, la respuesta a problemas e incidentes y el control del acceso.</li>
<li><strong>Mejora continua del servicio:</strong> pasos para revisar o ampliar los servicios a medida que cambian las necesidades del negocio.</li>
</ul>
<h4>Aportes claves de ITIL</h4>
<table class="tbl">
<tr><th>Aporte</th><th>Descripción</th></tr>
<tr><td><strong>Gestión del cambio</strong></td><td>(o habilitación de cambios) Procesos y prácticas que reducen al mínimo las interrupciones del servicio, los problemas de conformidad y otros riesgos resultado de los cambios en sistemas críticos.</td></tr>
<tr><td><strong>Gestión de incidencias</strong></td><td>Define el proceso de respuesta ante un incidente, con el objetivo de restaurar el servicio con un impacto mínimo en usuarios y negocio.</td></tr>
<tr><td><strong>Gestión de activos y configuración</strong></td><td>Autoriza, supervisa y documenta la configuración de los activos de software y hardware. Ofrece una base de datos de gestión de configuración (CMDB) como repositorio central de todos los activos de TI.</td></tr>
<tr><td><strong>Gestión del nivel de servicio</strong></td><td>Acordar los niveles de servicio necesarios para distintos grupos de usuarios y cumplirlos, o "compensar" cuando no se cumplen. Se documentan en un contrato de nivel de servicio (SLA).</td></tr>
</table>

<h3>Gestión de incidentes de seguridad</h3>
<p>Los objetivos generales son: detectar, informar y evaluar incidentes de la seguridad de la información; responder a un incidente de seguridad; reportar vulnerabilidades; y aprender de los incidentes.</p>
<h4>Amenazas informáticas más usuales</h4>
<ul>
<li>Ataques informáticos (dirigidos a la infraestructura / defacements).</li>
<li>Malwares (ransomwares, virus, trojans, worms, etc.).</li>
<li>Denegación de servicio (DoS o DDoS).</li>
<li>Acceso no autorizado, robo o pérdida de datos.</li>
<li>Daños físicos.</li>
<li>Abuso de privilegios y usos inadecuados.</li>
</ul>
<h4>Circuito de resolución de incidentes de seguridad</h4>
<ul>
<li><strong>Notificación del incidente:</strong> debe existir un canal formal para que cualquier actor pueda notificarlo.</li>
<li><strong>Clasificación del incidente:</strong> proceso formal que evalúa la incidencia según ciertos parámetros y le da prioridad en su resolución.</li>
<li><strong>Tratamiento del incidente:</strong> una vez clasificado y priorizado, se toman las acciones necesarias para su resolución.</li>
<li><strong>Cierre del incidente:</strong> una vez finalizado, se notifica su resolución al actor que lo reportó por el canal formal.</li>
<li><strong>Base de conocimiento:</strong> se documentan las acciones realizadas para el mismo tratamiento en futuros incidentes de similares características.</li>
</ul>

<h3>Tratamiento de un incidente de seguridad</h3>
<h4>Timeline del incidente</h4>
<p>Permite dar un orden cronológico a los eventos informados, detectados y/o analizados; realizar un análisis global del incidente y determinar su origen. Se debe ir actualizando a medida que se descubren nuevos eventos relacionados.</p>
<h4>Análisis de logs</h4>
<p>Se deben analizar todos los logs de los dispositivos y/o servicios relacionados (servidores, estaciones de trabajo, dispositivos de red como FWs y Proxys, antivirus, webserver, etc.). Se realizan búsquedas y correlaciones según los patrones identificados, para conseguir una trazabilidad completa. <strong>Es importante que todos los componentes manejen el mismo timestamp</strong> para el registro de eventos.</p>
<h4>Recolección de evidencias</h4>
<p>Dependiendo del incidente, pueden requerirse acciones posteriores como sanciones o acciones legales, por lo que es muy importante recolectar todas las evidencias posibles para el posterior armado del informe. Ejemplos: inicios y cierres de sesión; identificaciones de actores; estado de los dispositivos y conexiones de red; detalle de reuniones informativas, responsabilidades y funciones de los actores involucrados.</p>

<h3>NIST 800-61</h3>
<p>Es una guía que pretende ayudar a las organizaciones a establecer la seguridad informática necesaria para tener capacidad de respuesta ante incidentes y su tratamiento de manera eficiente. Ofrece pautas para la gestión de incidentes, sobre todo para el análisis de datos y determinar la respuesta apropiada para cada tipo. Las directrices se pueden seguir de forma independiente según la plataforma de hardware, sistema operativo, protocolos o aplicaciones utilizadas. Aporta, entre otros, el <strong>ciclo de vida del manejo de un incidente</strong> y un <strong>checklist de acciones</strong>.</p>
`
});

/* -------- MÓDULO 9 -------- */
MODULES.push({
title: "Plan de IR (Respuesta a Incidentes)",
lead: "El plan formal de respuesta a incidentes en cinco fases (Preparación, Detección, Respuesta, Recuperación, Seguimiento) y el análisis forense de un equipo Windows: cuentas, logs, procesos, servicios, conexiones y registro.",
body: `
<div class="thread"><div class="nt">Hilo conductor</div>
La gestión de incidentes (M8) se formaliza en un <strong>Plan de IR</strong> documentado y ensayado. Este módulo detalla sus fases y baja a tierra el trabajo técnico del analista: qué mirar en un equipo Windows comprometido. Conecta con la informática forense del M2.</div>

<h3>¿Qué es un plan de respuesta a incidentes?</h3>
<p>Un <strong>plan de respuesta a incidentes (plan IR)</strong> es un conjunto de instrucciones diseñadas para ayudar a las organizaciones a prepararse, detectar, responder y recuperarse de los incidentes de seguridad. La mayoría de los planes IR se centran en la tecnología y abordan problemas como la detección de malware, el robo de datos y las interrupciones del servicio.</p>
<h4>El porqué de su importancia</h4>
<p>Entre 2020 y 2021 se observó un incremento de un <strong>4%</strong> de ataques informáticos a organizaciones latinoamericanas mediante diversas amenazas y finalidades. Si estos incidentes no se gestionan a tiempo, pueden provocar pérdidas significativas, tanto económicas como en el funcionamiento de la organización.</p>

<h3>Proceso de planificación de un plan IR</h3>
<p>Consta de <strong>cinco fases</strong>: Preparación, Detección, Respuesta, Recuperación y Seguimiento.</p>

<h4>Preparación</h4>
<p>Consiste en definir, documentar y explicar las funciones y responsabilidades del equipo de IR, incluyendo la política de seguridad subyacente que guiará el desarrollo del plan. Puntos importantes:</p>
<ul>
<li>Tener documentados y actualizados los datos de contacto de los miembros del equipo de IR y de los proveedores que deban participar.</li>
<li>Definir procedimientos precisos para que los equipos de IT reciban alertas claras y puedan descartar falsos positivos.</li>
<li>Definir un plan de capacitación y concientización para que el personal informe, por un canal definido, actividades sospechosas (phishing, comportamientos anómalos, etc.).</li>
</ul>
<h4>Detección</h4>
<p>Implica la supervisión, detección, alerta y elaboración de informes sobre eventos de seguridad, incluyendo la identificación de amenazas conocidas, desconocidas y sospechosas. Puntos importantes:</p>
<ul>
<li>Desarrollar una estrategia de detección proactiva basada en herramientas que analizan automáticamente los sistemas en busca de aplicaciones, identidades o cuentas vulnerables.</li>
<li>Definir procedimientos para un análisis en profundidad y un análisis forense.</li>
<li>Definir análisis de vulnerabilidades periódicos para verificar el nivel de seguridad y corregir deficiencias.</li>
</ul>
<h4>Respuesta</h4>
<p>Se definen las acciones de respuesta que debe ejecutar el equipo de IR ante la materialización de una amenaza: desde el rastreo de alertas hasta la contención y neutralización, incluyendo la eliminación de las amenazas en los dispositivos afectados. Puntos importantes:</p>
<ul>
<li>Efectuar un registro completo del incidente, enumerando todas las fuentes y personas que intervinieron con fecha y hora.</li>
<li>Definir procedimientos para preservar artefactos y detalles de la violación para un posterior análisis forense.</li>
<li>Definir el circuito de comunicación del incidente a los clientes, en caso de afectación.</li>
<li>Definir el circuito de participación del equipo legal y la dependencia policial en caso de ameritarse.</li>
</ul>
<h4>Recuperación</h4>
<p>Focalizada en las actividades posteriores al incidente: erradicación del riesgo de seguridad, documentación de los hechos y actualización de la base de conocimiento. Puntos importantes:</p>
<ul>
<li>Erradicar el riesgo para asegurar que el atacante no recupere el acceso (parches, cierre de acceso a la red, restablecimiento de contraseñas comprometidas).</li>
<li>Restaurar los sistemas al estado anterior al incidente.</li>
<li>Comprobar la existencia de pérdidas y/o alteraciones de los datos.</li>
</ul>
<h4>Seguimiento</h4>
<p>Tiene como finalidad un ciclo de mejora continua del plan de IR, mediante su actualización y/o ajuste si se notan desvíos, y se prueba mediante simulacros en momentos de normalidad. Puntos importantes:</p>
<ul>
<li>Elaborar un informe de respuesta que incluya todas las áreas afectadas.</li>
<li>Revisar, probar y actualizar el plan de forma regular.</li>
<li>Analizar mejoras (contratar personal adicional, capacitar al equipo, adquirir nuevos servicios y/o tecnologías).</li>
</ul>

<h3>Análisis en un equipo Windows</h3>
<h4>Análisis de cuentas de usuario</h4>
<ul>
<li>Identificar la creación de cuentas de usuario y/o grupos de seguridad.</li>
<li>Determinar la fecha de creación o último cambio de contraseña de las cuentas nuevas.</li>
<li>Revisar los miembros de los grupos con alto privilegio (administradores).</li>
</ul>
<h4>Análisis de Logs – Registro de eventos de Windows</h4>
<ul>
<li><strong>Log de Seguridad:</strong> eventos según los criterios de auditoría de las políticas de grupo (inicio/cierre de sesión, creación de objetos, etc.).</li>
<li><strong>Log de Sistema:</strong> eventos del propio sistema operativo o sus componentes (fallas de servicios, apagado/inicio, modificación de fecha y hora, etc.).</li>
<li><strong>Log de Aplicación:</strong> eventos creados por las aplicaciones instaladas (errores de ejecución, incompatibilidades, etc.).</li>
<li><strong>Log de Windows PowerShell:</strong> todos los comandos de PowerShell ejecutados en el sistema.</li>
</ul>
<p><strong>Eventos de seguridad a tener en cuenta:</strong></p>
<table class="tbl">
<tr><th>ID</th><th>Descripción</th></tr>
<tr><td>4616</td><td>The system time was changed</td></tr>
<tr><td>4624</td><td>Successful Logon</td></tr>
<tr><td>4625</td><td>Failed Login</td></tr>
<tr><td>4634</td><td>Account Logoff</td></tr>
<tr><td>4648</td><td>Remote Access Attempt in the System</td></tr>
<tr><td>4688</td><td>A new process has been created</td></tr>
<tr><td>4698</td><td>A Scheduled Task was Created</td></tr>
<tr><td>4699</td><td>A Scheduled Task was Deleted</td></tr>
<tr><td>4720</td><td>A User Account was Created</td></tr>
<tr><td>4722</td><td>A User Account is Enabled</td></tr>
<tr><td>4724</td><td>An Attempt is made to Reset an account's password</td></tr>
<tr><td>4732</td><td>A member was added to a security-enabled local group</td></tr>
</table>
<p><strong>Eventos del sistema a tener en cuenta:</strong></p>
<table class="tbl">
<tr><th>ID</th><th>Descripción</th></tr>
<tr><td>6005</td><td>Event Log services started</td></tr>
<tr><td>6006</td><td>Event Log services stopped</td></tr>
<tr><td>6008</td><td>Unexpected System Shutdown</td></tr>
<tr><td>6013</td><td>Shows System Uptime</td></tr>
<tr><td>1100</td><td>Event logging service shutdown</td></tr>
<tr><td>1102</td><td>Logs Cleared</td></tr>
<tr><td>7045</td><td>Service Installed</td></tr>
</table>
<h4>Análisis de procesos, servicios y conexiones</h4>
<ul>
<li><strong>Procesos:</strong> verificar procesos sospechosos corriendo en el sistema y la existencia de procesos anidados con actividad sospechosa.</li>
<li><strong>Servicios:</strong> verificar servicios sospechosos y el estado de servicios de seguridad esenciales (FW de Windows, Windows Defender, UAC, Antivirus, etc.).</li>
<li><strong>Conexiones de red:</strong> verificar conexiones establecidas hacia destinos sospechosos, puertos de escucha asociados a servicios sospechosos y recursos compartidos. Comandos: <code>netstat –ano | more</code>, <code>net share</code>, <code>net view \\\\equipo</code>.</li>
</ul>
<h4>Análisis del registro y tareas programadas</h4>
<p>Verificar la existencia de entradas sospechosas en el registro. Entradas importantes a verificar:</p>
<ul>
<li><code>HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run</code></li>
<li><code>HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\RunOnce</code></li>
<li><code>HKCU\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run</code></li>
<li><code>HKCU\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\RunOnce</code></li>
</ul>
<p>Verificar también la existencia de Jobs sospechosos en el programador de tareas o mediante el comando <code>schtasks</code>, verificando el usuario que la creó, la fecha de última ejecución y la periodicidad.</p>

<h3>Funcionamiento de un IR Team (caso real)</h3>
<div class="example"><div class="nt">Caso Nobelium / SolarWinds</div>
El Centro de Inteligencia de Amenazas de Microsoft (MSTIC) detectó actividades ilícitas del <strong>Grupo Nobelium</strong> contra organizaciones estadounidenses y europeas. Este grupo fue protagonista a finales de 2020 tras infiltrarse en sistemas del gobierno y empresas estadounidenses a través del software <strong>SolarWinds</strong>. Nobelium apuntaba a cuentas privilegiadas de proveedores de servicios (CSP, MSP) para moverse lateralmente en entornos en la nube, aprovechando las relaciones de confianza. Los ataques no se debían a una vulnerabilidad del producto, sino al uso de herramientas diversas y dinámicas: malware sofisticado, ataque a la cadena de suministros, robo de tokens, abuso de APIs y spear phishing. El Equipo de Detección y Respuesta de Microsoft (DART) se comprometió directamente con los clientes afectados para la respuesta a incidentes.</div>
`
});

/* -------- MÓDULO 10 -------- */
MODULES.push({
title: "Continuidad de negocio",
lead: "Cómo seguir operando cuando todo falla: BCM, BCP, BIA (con RTO y RPO), DRP, los componentes del plan y la amenaza del ransomware como caso testigo.",
body: `
<div class="thread"><div class="nt">Hilo conductor</div>
La respuesta a incidentes (M9) apaga el fuego; la <strong>continuidad de negocio</strong> garantiza que la organización siga funcionando mientras tanto y se recupere después. Retoma la "Recuperación" de los estándares (M6) y la gestión de continuidad ya esbozada en el M3, y la convierte en planes concretos: BCP y DRP.</div>

<h3>Conceptos base</h3>
<ul>
<li><strong>Continuidad de negocio:</strong> según la norma internacional <strong>ISO 22301</strong>, la "capacidad de una organización de continuar la prestación de productos o servicios en los niveles predefinidos aceptables tras incidentes de interrupción de la actividad". No es solo para TI: abarca al personal y a todas las operaciones y procesos organizativos.</li>
<li><strong>BCM (Business Continuity Management):</strong> proceso de lograr y mantener esa capacidad. Conforma una parte vital de la gestión de seguridad de sistemas de información.</li>
<li><strong>BCP (Business Continuity Plan):</strong> guía para asegurar las operaciones ante una situación, interna o externa, que impida el funcionamiento normal de la organización. Proporciona un camino alternativo a la normalidad.</li>
</ul>

<h3>Factores que pueden impactar las operaciones</h3>
<ul>
<li>Catástrofes naturales (lluvias, tormentas, ciclones, huracanes, etc.).</li>
<li>Inundaciones.</li>
<li>Fallos en el suministro eléctrico.</li>
<li>Incendios.</li>
<li>Ataques terroristas e interrupciones organizadas o deliberadas.</li>
<li>Fallas del equipo o sistemas y errores humanos.</li>
<li>Virus, amenazas y ataques informáticos.</li>
<li>Cuestiones legales.</li>
<li>Huelgas de empleados, conmoción social o disturbios.</li>
</ul>

<h3>Ventajas de un BCP</h3>
<ul>
<li><strong>Ventaja competitiva:</strong> mostrar que se toman medidas para garantizar la continuidad mejora la imagen pública y la confianza de accionistas, inversores, clientes y proveedores.</li>
<li><strong>Previene o minimiza pérdidas:</strong> identifica de forma proactiva los posibles impactos de una interrupción.</li>
<li><strong>Asegura recuperación:</strong> aumenta la disponibilidad de los servicios para el cliente.</li>
<li><strong>Menor riesgo de sanciones económicas:</strong> al adaptarse a requerimientos regulatorios.</li>
<li><strong>Asignación más eficiente de inversiones:</strong> gracias al análisis de riesgos (BIA), que prioriza las actividades críticas.</li>
</ul>

<h3>Componentes de un BCP</h3>
<table class="tbl">
<tr><th>Componente</th><th>Descripción</th></tr>
<tr><td><strong>BRP</strong> (Plan de reanudación del negocio)</td><td>Guía paso a paso de los procesos o acciones a realizar ante un desastre, para restablecer las operaciones en el menor tiempo posible.</td></tr>
<tr><td><strong>OEP</strong> (Plan de emergencia de ocupantes)</td><td>Procedimientos para minimizar la pérdida de vidas humanas o lesiones y proteger la propiedad ante amenazas físicas. Aplica al personal e instalaciones.</td></tr>
<tr><td><strong>COP</strong> (Plan de continuidad de operaciones)</td><td>Conjunto de prácticas profesionales para la gestión de la continuidad, que permite a la organización seguir operando bajo condiciones adversas.</td></tr>
<tr><td><strong>DRP</strong> (Plan de recuperación de desastres)</td><td>Procedimientos detallados que facilitan la recuperación de las operaciones en un sitio alternativo. Está enfocado en los procesos soportados por TI.</td></tr>
<tr><td><strong>IMP</strong> (Plan de gestión de incidentes)</td><td>Manejo efectivo y coordinado de todas las actividades de respuesta y recuperación ante un incidente o interrupción de procesos críticos, estableciendo una estructura para la toma de decisiones.</td></tr>
</table>

<h3>Análisis de impacto en el negocio (BIA)</h3>
<p>Un <strong>BIA (Business Impact Analysis)</strong> es básicamente un informe que muestra el costo ocasionado por la interrupción de los procesos críticos del negocio. Resultados esperados:</p>
<ul>
<li><strong>Identificar las funciones y procesos críticos:</strong> determinar cuáles deben entrar en operación rápidamente, asignándoles la mayor prioridad.</li>
<li><strong>Revisar las consecuencias operacionales y financieras</strong> que una interrupción tendrá en los procesos críticos.</li>
<li><strong>Estimar los tiempos de recuperación</strong> para conocer con anterioridad el tiempo que demandaría restablecer los procesos críticos.</li>
</ul>
<h4>Puntos importantes a definir</h4>
<ul>
<li><strong>RTO (Tiempo Objetivo de Recuperación):</strong> período permitido para la recuperación de una función o recurso de negocio a un nivel aceptable luego de un desastre.</li>
<li><strong>RPO (Punto Objetivo de Recuperación):</strong> antigüedad máxima de los datos para su restauración, con base en los requisitos del negocio.</li>
</ul>
<div class="example"><div class="nt">RTO vs. RPO</div>El RTO mira hacia <strong>adelante</strong>: cuánto tiempo puede estar caído el servicio. El RPO mira hacia <strong>atrás</strong>: cuántos datos recientes se pueden perder. Por ejemplo, con backups cada 6 horas, el RPO es de 6 horas.</div>

<h3>Plan de recuperación de desastres (DRP)</h3>
<p>El DRP se limita a los procesos e infraestructura de TI de la organización y se considera <strong>dentro del BCP</strong>.</p>
<h4>Consideraciones previas al DRP</h4>
<p>Identificación y evaluación de riesgos; análisis de impacto en el negocio (BIA); identificación del personal estratégico; presupuesto disponible; recursos disponibles (personal e instalaciones); tecnología; y datos.</p>
<h4>Componentes de un DRP</h4>
<ul>
<li><strong>Creación de los planes de recuperación:</strong> pueden adaptarse a un ambiente determinado (virtual, de red, de nube, de centro de datos).</li>
<li><strong>Asignación de roles y responsabilidades:</strong> definir los roles del equipo de recuperación, el criterio para poner en marcha el plan, y a quién y cómo contactar y en qué orden recuperar los sistemas.</li>
<li><strong>Inventario de software y hardware:</strong> inventario completo, con aplicaciones y servicios en orden de prioridad, incluyendo información del contrato de soporte y números de contacto.</li>
<li><strong>Plan de comunicación:</strong> uno de los componentes más revisados; un proceso escrito asegura acciones eficientes y alineación entre organización, empleados y socios.</li>
<li><strong>Mantenimiento y prueba periódica:</strong> las pruebas identifican deficiencias y dan oportunidad de corregir problemas antes del desastre, validan los RPO y RTO y mantienen el plan actualizado.</li>
</ul>

<h3>Importancia de un DRP: el ransomware</h3>
<p>El <strong>ransomware</strong> es un tipo de malware que, luego de comprometer un equipo, secuestra la información y exige el pago de un rescate para recuperar los datos; además trata de propagarse por la infraestructura para comprometer más equipos. Ante la materialización de una amenaza como esta, el objetivo principal del DRP es <strong>restablecer los sistemas comprometidos y sus datos en el menor tiempo posible</strong>, para continuar con la operatoria normal y evitar o minimizar las pérdidas económicas y reputacionales.</p>

<h3>Conclusiones</h3>
<p>Es necesario que las organizaciones realicen periódicamente <strong>simulacros</strong> de interrupciones de sus procesos críticos, para entrenar al personal estratégico y evaluar su desempeño. Tras cada simulacro conviene documentar las lecciones aprendidas, corregir y/o adecuar los procedimientos y mejorar los circuitos comunicacionales y de toma de decisión. Finalmente, es importante probar el correcto funcionamiento de los sitios alternativos de procesamiento y de las contingencias documentadas.</p>
`
});

/* -------- MÓDULO 11 -------- */
MODULES.push({
title: "Auditoría",
lead: "Cómo se verifica que todo lo anterior funciona: concepto y tipos de auditoría, la auditoría de sistemas, el modelo COBIT 5, la auditoría continua y el modelo de las tres líneas de defensa.",
body: `
<div class="thread"><div class="nt">Hilo conductor</div>
Cierra el ciclo de gestión. Tras implementar SGSI (M4), controles (M6-M7) y planes (M9-M10), la <strong>auditoría</strong> verifica de forma independiente que todo cumpla y mejore. Es la última de las nueve fases del SGSI (M4) vista en profundidad.</div>

<h3>Concepto de auditoría</h3>
<p>Es un proceso sistemático por medio del cual una <strong>persona competente e independiente</strong> obtiene y evalúa objetivamente evidencia respecto de afirmaciones acerca de una entidad o acontecimiento económico, con el propósito de formar una opinión e informar el grado en que la aseveración se ajusta a un sistema determinado de estándares.</p>
<h4>Objetivos</h4>
<ul>
<li>Evaluar las fortalezas y debilidades de un sistema de gestión.</li>
<li>Detectar oportunidades para la mejora continua.</li>
<li>Verificar la capacidad de los procesos para alcanzar los resultados planificados.</li>
<li>Ejecutar seguimiento de la eficacia de las acciones correctivas y preventivas.</li>
<li>Identificar problemas y corregirlos o prevenirlos.</li>
</ul>

<h3>Clasificación de las auditorías</h3>
<ul>
<li><strong>Financieras (EECC):</strong> determinan la exactitud de los estados financieros.</li>
<li><strong>Operativas:</strong> evalúan la estructura de control interno de un área determinada.</li>
<li><strong>Integradas:</strong> combinan pasos de auditoría financiera y operativa.</li>
<li><strong>De sistemas de información:</strong> determinan si los sistemas y recursos relacionados protegen adecuadamente los activos, mantienen la integridad y disponibilidad de datos y sistema, y proveen información relevante y confiable.</li>
<li><strong>Forenses:</strong> descubren, revelan y efectúan seguimiento a fraudes y crímenes.</li>
</ul>

<h3>Auditoría de sistemas</h3>
<p>Cualquier auditoría que cubra la revisión y evaluación de todos los aspectos (o alguna parte) de los sistemas automatizados de procesamiento de información, incluyendo los procesos manuales relacionados o no automatizados, y las interfaces existentes entre ellos.</p>
<h4>Objetivos</h4>
<p>Evaluar: la confidencialidad, integridad y disponibilidad de la información; la seguridad y protección de los activos de sistemas de información; el cumplimiento de políticas, planes, procedimientos, leyes, normas y contratos; y la eficacia de los sistemas y la utilización económica y eficiente de los recursos de TI asociados.</p>
<h4>Rol del auditor de Sistemas</h4>
<p>Suministrar a la Dirección y a los responsables de los procesos de negocio: garantías de que se logran los objetivos de control; identificación de las deficiencias significativas; exposición del riesgo asociado a las deficiencias; y asesoramiento sobre las acciones correctivas a adoptar.</p>
<h4>Planeación de una auditoría de Sistemas</h4>
<ol>
<li>Obtener un entendimiento de la misión, objetivos, propósito y procesos del negocio.</li>
<li>Identificar el estado de contenidos (políticas, estándares, directrices, procedimientos y estructura organizacional).</li>
<li>Realizar un análisis de riesgos.</li>
<li>Llevar a cabo una revisión preliminar de control interno.</li>
<li>Establecer el alcance y los objetivos de la auditoría.</li>
<li>Desarrollar el enfoque o la estrategia de auditoría.</li>
<li>Asignar los recursos de personal y dirigir la logística del trabajo de auditoría.</li>
</ol>
<h4>Técnicas para recolección de evidencias</h4>
<p>Revisión de las estructuras organizacionales de SI; revisión de políticas y procedimientos; revisión de estándares; revisión de documentación; entrevistas al personal apropiado; y observación de procesos y desempeño de los empleados.</p>
<h4>Comunicación de resultados</h4>
<p>En la <strong>entrevista de salida</strong> se presentan hechos correctos, recomendaciones realistas y fechas de implementación para las recomendaciones acordadas, apoyándose en técnicas de presentación (resumen ejecutivo, presentación visual). La <strong>estructura del informe</strong> incluye: introducción del informe; hallazgos de auditoría; conclusión y opiniones generales del auditor; y hallazgos detallados y recomendaciones.</p>

<h3>COBIT 5</h3>
<p>Es un modelo para auditar la gestión y el control de los sistemas de información y tecnología, orientado a todos los sectores de una organización: administradores de TI, usuarios y auditores involucrados en el proceso. Su estructura propone un marco de acción donde se evalúan los criterios de información (por ejemplo, seguridad y calidad), se auditan los recursos que comprenden la tecnología de información (recurso humano, instalaciones, sistemas, etc.) y se realiza una evaluación sobre los procesos involucrados en la organización.</p>

<h3>Auditoría continua</h3>
<blockquote>"Es un método que aplican los auditores para llevar a cabo actividades relacionadas con la auditoría de manera continua. Las actividades van desde la evaluación permanente de los controles hasta la evaluación permanente de los riesgos." — <strong>The Institute of Internal Auditors</strong></blockquote>
<p>En resumen, es un método <strong>automatizado</strong> para realizar evaluaciones de controles y riesgos con mayor frecuencia.</p>
<h4>Modelo de las tres líneas de defensa</h4>
<ul>
<li><strong>Primera línea:</strong> recorre los procesos que la organización considera clave y establece criterios de seguimiento sobre los riesgos definidos. Los departamentos responsables participan en el seguimiento de excepciones y en la identificación de sus causas.</li>
<li><strong>Segunda línea:</strong> el modelo de auditoría continua proporciona indicadores de contraste frente a los implementados por esta línea; conviene incluirla en el alcance del modelo. Da soporte en el análisis de las causas de las excepciones.</li>
<li><strong>Tercera línea:</strong> permite al área de auditoría interna una reevaluación continua de los principales riesgos, gestionar de forma dinámica el plan anual de auditoría interna, y planificar y ejecutar determinados trabajos.</li>
</ul>
<h4>Enfoque tradicional vs. auditoría continua</h4>
<table class="tbl">
<tr><th>Etapa</th><th>Enfoque tradicional</th><th>Auditoría continua</th></tr>
<tr><td>Planificación</td><td>Establecer el objetivo y alcance de la auditoría.</td><td>Establecer objetivo y alcance, identificar fuentes de datos, describir atributos de la información y establecer formatos del análisis e informes.</td></tr>
<tr><td>Trabajo de campo</td><td>Realizar pruebas y documentar resultados.</td><td>Obtener y probar los datos según la frecuencia deseada; investigar y dar seguimiento a cualquier excepción y documentar resultados.</td></tr>
<tr><td>Reporte</td><td>Discutir resultados y presentar informe al finalizar la auditoría.</td><td>Identificar las razones de las diferencias, priorizar los hallazgos y presentar informe y recomendaciones de manera continua.</td></tr>
</table>
<p>Respecto de la <strong>efectividad de los controles</strong>: en el enfoque tradicional se asume que aumenta tras los resultados y recomendaciones, pero se reduce con el tiempo hasta la próxima auditoría; en la auditoría continua se mantiene a niveles aceptables porque se monitorea de manera constante, sin necesidad de esperar a la próxima auditoría.</p>
<div class="note"><div class="nt">¿Qué NO es una auditoría?</div>Un monitoreo continuo ni un aseguramiento continuo son, por sí mismos, una auditoría. La auditoría implica una evaluación independiente y la emisión de una opinión.</div>
`
});

/* -------- MÓDULO 12 -------- */
MODULES.push({
title: "Caso práctico: Plan de seguridad para ABC S.A. (TP Grupo 2)",
lead: "El cierre que une toda la teoría: trabajo grupal donde se diseña un plan de ciberseguridad real para la empresa ABC S.A. — estándares adoptados, clasificación CID de activos, riesgos, brechas, inversión con presupuesto y arquitectura de red segmentada.",
body: `
<div class="thread"><div class="nt">Hilo conductor</div>
Este módulo es el cierre: toma <strong>todo</strong> lo visto —estándares (M6), gestión del riesgo (M5), herramientas (M7), continuidad (M10) y auditoría (M11)— y lo aplica a un caso concreto. Es un trabajo práctico grupal sobre la empresa ficticia <strong>ABC S.A.</strong> que muestra cómo se elabora, en la práctica, un plan de seguridad para una empresa.</div>

<h3>1. Estándar de ciberseguridad adoptado: ISO/IEC 27032:2012</h3>
<p>Se propone adoptar la norma <strong>ISO/IEC 27032:2012</strong> como marco de referencia. Está orientada a fortalecer las defensas frente al cibercrimen, estableciendo lineamientos claros para proteger la información y los activos digitales. Su objetivo central es asegurar la integridad y confidencialidad de los intercambios de datos en la red corporativa, promoviendo una comunicación más segura entre los stakeholders. Permite un enfoque integral de gestión de riesgos basado en las fases <strong>Identificar, Proteger, Detectar, Responder y Recuperar</strong>, reforzando la resiliencia de la organización. Además posibilita formar y certificar a un <strong>Líder en Ciberseguridad ISO/IEC 27032</strong>, lo que aporta capacidades especializadas y valor reputacional, alineando el sistema de gestión con los objetivos de negocio de ABC S.A.</p>

<h3>2. Guía de implementación: NIST Cybersecurity Framework</h3>
<p>Se utiliza el <strong>NIST CSF</strong> porque organiza las acciones en cinco funciones, separando por un lado los activos e infraestructura a proteger y por otro las configuraciones y buenas prácticas a aplicar:</p>
<ul>
<li><strong>Identificar:</strong> todos los activos a proteger y su criticidad para evaluar prioridad; identificar todas las herramientas usadas (Firewall, Antivirus, AD, etc.) y evaluar las políticas de seguridad contra las acciones recomendadas.</li>
<li><strong>Proteger:</strong> instalación de herramientas de seguridad, segmentación de red y definición de roles; aplicar las mejores prácticas a las herramientas para mejor visibilidad y poder de acción.</li>
<li><strong>Detectar:</strong> desarrollar e implementar planes de acción ante posibles incidentes; revisión periódica de las herramientas y configuración de alertas de comportamientos sospechosos.</li>
<li><strong>Responder:</strong> ante un ataque confirmado, seguir los procesos de respuesta a incidentes: investigar la amenaza, contenerla y realizar un análisis forense para prevenir su repetición.</li>
<li><strong>Recuperar:</strong> una vez contenida la amenaza, recuperar los activos (uso de backups periódicos, modificación de cuentas comprometidas, etc.) para que el negocio no se vea afectado.</li>
</ul>

<h3>3. Clasificación de activos según la tríada CID</h3>
<p>Se aplicó la tríada CID (Confidencialidad, Integridad y Disponibilidad) a cada activo para establecer su criticidad y priorizar medidas:</p>
<table class="tbl">
<tr><th>Activo</th><th>Conf.</th><th>Integr.</th><th>Disp.</th><th>Justificación</th></tr>
<tr><td>Base de Datos</td><td>Crítica</td><td>Crítica</td><td>Alta</td><td>Contiene la información más sensible; protección indispensable y respaldos continuos.</td></tr>
<tr><td>Active Directory</td><td>Crítica</td><td>Crítica</td><td>Alta</td><td>Gestiona identidades y accesos; un compromiso afectaría a toda la red.</td></tr>
<tr><td>AppServer A y B</td><td>Alta</td><td>Crítica</td><td>Alta</td><td>Procesan la lógica del negocio; errores comprometen continuidad y exactitud.</td></tr>
<tr><td>Webserver</td><td>Media</td><td>Alta</td><td>Alta</td><td>Expuesto a Internet; su integridad es clave para la confianza externa.</td></tr>
<tr><td>FTP Server</td><td>Alta</td><td>Alta</td><td>Alta</td><td>Maneja transferencias sensibles con proveedores/clientes; controles estrictos.</td></tr>
<tr><td>SMTP Server</td><td>Alta</td><td>Alta</td><td>Crítica</td><td>Soporta las comunicaciones; su caída afecta la operación diaria.</td></tr>
<tr><td>Access Point</td><td>Media</td><td>Alta</td><td>Media</td><td>Punto de acceso a la red; configuración segura con menor impacto que servidores centrales.</td></tr>
<tr><td>Workstations</td><td>Media</td><td>Media</td><td>Media</td><td>Terminales de usuarios; impacto limitado, pero posibles vectores de ataque.</td></tr>
</table>
<p>Además, cada activo cuenta con un <strong>propietario asignado</strong>, responsable de la aplicación y mantenimiento de los controles apropiados (DBA para la Base de Datos, Administrador de Sistemas para AD, Administrador de Aplicaciones para los AppServers, etc.), aunque algunas tareas puedan delegarse.</p>

<h3>4. Riesgos asociados</h3>
<p>Para cada activo se identificaron riesgos sobre cada pilar de la tríada. Ejemplos:</p>
<ul>
<li><strong>Base de Datos:</strong> acceso no autorizado y fuga (C), manipulación de registros / SQL injection (I), DDoS o ransomware que bloqueen el acceso (D).</li>
<li><strong>Active Directory:</strong> robo de credenciales y escalada de privilegios (C), modificación de políticas o grupos (I), caída del servicio de autenticación (D).</li>
<li><strong>Webserver:</strong> robo de credenciales de clientes (C), defacement e inyección de código (I), inaccesibilidad del sitio por DDoS (D).</li>
<li><strong>SMTP Server:</strong> phishing y robo de correos (C), modificación de mensajes o adjuntos (I), saturación por spam o DoS (D).</li>
<li><strong>Workstations:</strong> pérdida de privacidad por malware/spyware (C), corrupción de archivos (I), infección por ransomware (D).</li>
</ul>

<h3>5. Brechas de seguridad identificadas</h3>
<ul>
<li><strong>Red poco segmentada:</strong> aunque haya firewall, si la red no se divide bien, un virus que entra por una PC común podría moverse hacia los servidores importantes.</li>
<li><strong>Correos maliciosos:</strong> los empleados pueden caer en phishing o ingeniería social aun tras capacitaciones.</li>
<li><strong>Servidores expuestos a Internet:</strong> web, FTP y correo abiertos hacia afuera siguen siendo blancos si no se colocan en una DMZ.</li>
<li><strong>Actualizaciones:</strong> parches no aplicados a tiempo permiten aprovechar vulnerabilidades conocidas.</li>
<li><strong>Contraseñas débiles o sin doble factor:</strong> sin políticas fuertes o MFA, una clave robada da acceso fácil.</li>
<li><strong>Base de datos sin monitoreo:</strong> sin registro de inicios de sesión y modificaciones, un atacante podría exfiltrar o modificar sin ser detectado.</li>
<li><strong>Actividad de usuarios:</strong> navegación libre y descarga de software puede introducir malware.</li>
</ul>

<h3>6. Propuesta de inversión (presupuesto USD 650.000)</h3>
<p>Sobre la clasificación de activos y los estándares adoptados, se priorizó la protección de servidores centrales, la red corporativa y el factor humano:</p>
<table class="tbl">
<tr><th>Herramienta</th><th>Costo (USD)</th><th>Justificación</th><th>Activos protegidos</th></tr>
<tr><td>Next Generation Firewall (NGFW)</td><td>130.000</td><td>Defensa perimetral, segmentación de red, inspección avanzada de tráfico.</td><td>Webserver, FTP, SMTP, AppServers</td></tr>
<tr><td>Identity Manager (IAM)</td><td>225.000</td><td>Control centralizado de identidades y accesos, integración con AD.</td><td>Active Directory, Workstations</td></tr>
<tr><td>Intrusion Prevention System (IPS)</td><td>90.000</td><td>Prevención activa de intrusiones, protege contra explotación de vulnerabilidades.</td><td>Bases de Datos, AppServers</td></tr>
<tr><td>Web Application Firewall (WAF)</td><td>105.000</td><td>Protección de aplicaciones web frente a ataques de capa 7 (XSS, SQL Injection).</td><td>Webserver</td></tr>
<tr><td>Concientización / Formaciones</td><td>50.000</td><td>Formación para prevenir phishing, ingeniería social y errores operativos.</td><td>Workstations, Access Points</td></tr>
</table>
<p>La inversión cubre cinco frentes y deja un margen de <strong>50.000 USD</strong> destinable a: licencias de backup en la nube, simulacros de recuperación (BCP/DRP) y refuerzo de políticas internas. Como <strong>medidas complementarias</strong> se proponen: DMZ para servidores expuestos (Web, FTP, SMTP), segmentación en VLANs, políticas de contraseñas y MFA en accesos críticos, y un BCP con pruebas periódicas de restauración.</p>

<h3>7. Nueva arquitectura de red segmentada</h3>
<p>El diseño busca limitar el movimiento lateral de amenazas, mejorar la visibilidad del tráfico y dar a cada zona controles según su exposición, alineándose con la <strong>defensa en profundidad</strong>:</p>
<ul>
<li>El <strong>NGFW</strong> actúa como punto de acceso principal entre Internet y la red interna, filtrando y controlando todas las conexiones externas (incluidas las de proveedores).</li>
<li>En la <strong>DMZ</strong> se ubican los servicios expuestos: servidor SMTP, servidor Web (protegido por un WAF) y App Server A (que gestiona procesos intermedios bajo supervisión del IPS).</li>
<li>En la <strong>red interna</strong>: App Server B y el Active Directory (autenticación y lógica de negocio), y la VLAN de Endpoints (estaciones de trabajo protegidas por antivirus corporativo).</li>
<li>El tráfico interno se supervisa con el <strong>IPS</strong>, asegurando detección temprana y cumplimiento de políticas.</li>
</ul>

<h3>8. Herramientas defensivas seleccionadas</h3>
<p>Cada adquisición responde a un riesgo específico detectado:</p>
<ul>
<li><strong>NGFW:</strong> mitiga redes poco segmentadas y servidores expuestos; segmenta en zonas seguras, aplica políticas por VLAN y filtra tráfico malicioso (control de aplicaciones y detección de intrusiones capa 7). Protege: Webserver, FTP, SMTP, AppServers.</li>
<li><strong>WAF:</strong> mitiga vulnerabilidades web (XSS, SQL Injection, defacement) analizando el tráfico HTTP/HTTPS. Protege: Webserver, AppServer A.</li>
<li><strong>IPS:</strong> mitiga la falta de monitoreo y la explotación de vulnerabilidades; detecta y bloquea intrusiones en tiempo real. Protege: Base de Datos, AppServers.</li>
<li><strong>IAM:</strong> mitiga contraseñas débiles y accesos sin control; centraliza autenticación/autorización, integra con AD e implementa mínimos privilegios y MFA. Protege: Active Directory, Workstations.</li>
<li><strong>Capacitaciones:</strong> mitigan riesgos humanos (phishing, ingeniería social) mediante campañas, simulaciones y entrenamientos. Protege: Workstations, Access Points.</li>
</ul>

<h3>9. Controles preventivos de gestión</h3>
<ul>
<li><strong>Adopción de un SGSI (ISO 27001):</strong> control preventivo de más alto nivel; asegura el enfoque de mejora continua (PDCA) y la asignación formal de roles, manteniendo a ABC S.A. adaptándose a nuevas amenazas.</li>
<li><strong>Auditorías continuas y periódicas:</strong> proceso preventivo de evaluación de fortalezas y debilidades que permite saber si las políticas, procedimientos y directrices funcionan.</li>
<li><strong>Análisis formal de riesgo (NIST SP 800-30):</strong> identifica amenazas y vulnerabilidades más probables, permitiendo diseñar controles y el plan de IR.</li>
<li><strong>Implementación de BCM:</strong> control preventivo enfocado en la Disponibilidad; planificarlo reduce los riesgos de interrupciones graves y permite volver a brindar servicios de forma rápida ante un incidente.</li>
</ul>

<h3>10. Conclusión del trabajo</h3>
<p>El desarrollo del trabajo permitió comprender cómo la ciberseguridad se integra en el funcionamiento de una organización moderna, convirtiéndose en un <strong>pilar estratégico de gestión</strong>. Detrás de cada medida técnica hay una decisión humana, planificación organizacional y responsabilidad compartida. El uso de marcos como ISO y NIST ayudó a ordenar las ideas en un enfoque sólido y medible, reforzando los procesos de identificación, protección, detección, respuesta y recuperación, junto con la importancia de los controles preventivos, las auditorías continuas y los planes de continuidad. En conclusión, la ciberseguridad no es solo un área técnica, sino una <strong>forma de pensar y actuar frente al riesgo</strong>.</p>
<div class="note"><div class="nt">Integrantes (Grupo 2)</div>Abelle, Santiago · Brizuela, Franco Julián · Carlen Gastón, Catalina · Castro Vargas, Imanol · Cirigliano, Ezequiel · Frías, Agustín · González, Francisco · Leone, Florencia · Molina, Catriel Lautaro. — Septiembre 2025.</div>
`
});

/* ============================================================
   FLASHCARDS · { mod, q, a }
   ============================================================ */
FLASHCARDS.push(
/* M1 */
{mod:0,q:"¿Qué es el ciberespacio?",a:"Un ambiente complejo donde interactúan los seres humanos, el software y los servicios disponibles en Internet, soportados por el hardware y las redes de comunicaciones de todo el mundo."},
{mod:0,q:"Diferencia entre ciberataque y ciberamenaza",a:"<strong>Ciberataque:</strong> maniobra ofensiva deliberada para tomar el control, desestabilizar o dañar un sistema. <strong>Ciberamenaza:</strong> evento con potencial de daño que puede afectar negativamente a la organización o sus activos."},
{mod:0,q:"¿Qué es el ransomware?",a:"Programa malicioso que persigue el cifrado de archivos y/o datos a fin de cobrar un rescate para su restitución."},
{mod:0,q:"¿Cómo define ISACA a la Ciberseguridad?",a:"El conjunto de medidas de protección de la información, a través del tratamiento de las amenazas que ponen en riesgo a la misma y que es tratada por los sistemas de información interconectados."},
{mod:0,q:"¿Qué es el criptojacking?",a:"El uso no autorizado de una computadora o red informática ajena a fin de minar criptomonedas."},
/* M2 */
{mod:1,q:"¿Qué es la informática forense?",a:"Disciplina que combina derecho e informática para recopilar y analizar datos de sistemas, redes y dispositivos de almacenamiento de manera admisible como prueba en un tribunal de justicia."},
{mod:1,q:"¿Qué es el pentesting?",a:"Test de penetración: actividad realizada por consultores de seguridad para evaluar el nivel de seguridad de una organización."},
{mod:1,q:"Tipos de pentesting según el conocimiento del auditor",a:"<strong>Black Box</strong> (sin información, solo nombre y alcance), <strong>White Box</strong> (conoce la infraestructura y suele tener usuario limitado) y <strong>Grey Box</strong> (conocimiento parcial)."},
{mod:1,q:"Seguridad ofensiva vs. defensiva",a:"La ofensiva (activa) identifica proactivamente amenazas y brechas para anticiparse al impacto; la defensiva (pasiva) protege. Son complementarias."},
{mod:1,q:"¿Qué es el ciberpatrullaje?",a:"Actividad de monitoreo y vigilancia del ciberespacio a fin de prevenir la comisión de ciberdelitos. Usa OSINT, SOCMINT, IMINT, Dark Web, etc."},
/* M3 */
{mod:2,q:"¿Cuáles son los pilares de la tríada CID?",a:"<strong>Confidencialidad</strong> (solo usuarios autorizados acceden), <strong>Integridad</strong> (sin modificaciones no autorizadas) y <strong>Disponibilidad</strong> (disponible para usuarios autorizados)."},
{mod:2,q:"¿Qué es el riesgo (gestión de la seguridad)?",a:"La probabilidad de que una amenaza se materialice sobre una vulnerabilidad de un sistema informático, causando un impacto negativo en la organización."},
{mod:2,q:"¿Cuál es la función del CISO?",a:"Es el director de seguridad de la información; su función principal es alinear la seguridad de la información con los objetivos de negocio."},
{mod:2,q:"Niveles de detalle de la documentación de seguridad",a:"Políticas (global), Normas (detallan los puntos de control), Procedimientos (paso a paso por plataforma) y Estándares/instrucciones técnicas."},
{mod:2,q:"¿Qué exige la norma sobre los activos?",a:"Todos los activos deben ser inventariados y contar con un propietario nombrado, responsable de la protección apropiada aunque delegue controles."},
/* M4 */
{mod:3,q:"¿Qué es un SGSI?",a:"Conjunto de políticas, procedimientos y directrices junto a los recursos y actividades asociadas, administradas colectivamente para proteger los activos de información esenciales."},
{mod:3,q:"¿En qué consiste el ciclo PDCA?",a:"Planificar-Hacer-Verificar-Actuar (Plan-Do-Check-Act): el ciclo de mejora continua o de Deming sobre el que se basa ISO 27001."},
{mod:3,q:"¿Cuántos controles establece ISO 27001?",a:"El apunte indica 113. Nota: la versión 27001:2013 contempla oficialmente 114 controles (la de 2005 tenía 133; la de 2022, 93)."},
{mod:3,q:"Formas de afrontar el riesgo en un SGSI",a:"Eliminar el riesgo, mitigar el riesgo (medidas preventivas/correctivas) y trasladar el riesgo (contratar un seguro)."},
{mod:3,q:"¿Qué es la matriz FODA en el contexto del SGSI?",a:"Herramienta del análisis de contexto que determina debilidades, amenazas, fortalezas y oportunidades que pueden afectar a la organización."},
/* M5 */
{mod:4,q:"¿Cómo se calcula el riesgo por cada activo?",a:"Riesgo = Impacto × Probabilidad de ocurrencia."},
{mod:4,q:"Diferencia entre amenaza y vulnerabilidad",a:"La amenaza es un evento que podría impactar negativamente; la vulnerabilidad es una debilidad del activo que facilita la materialización de la amenaza."},
{mod:4,q:"¿Cuáles son las cuatro formas de tratamiento del riesgo?",a:"Asumir, reducir/mitigar, eliminar y transferir el riesgo."},
{mod:4,q:"¿Cuántos pasos tiene NIST SP 800-30?",a:"Nueve pasos, desde la caracterización del sistema hasta el resultado de la implementación/documentación."},
{mod:4,q:"¿Qué es MAGERIT v3?",a:"Metodología de análisis de riesgos del Gobierno de España, de carácter público, dividida en tres libros: Método, Catálogo de Elementos y Guía de Técnicas."},
/* M6 */
{mod:5,q:"¿Cuáles son las 5 funciones del núcleo del NIST CSF?",a:"Identificar, Proteger, Detectar, Responder y Recuperar (simultáneas y continuas)."},
{mod:5,q:"¿Qué cubre la norma ISO/IEC 27032:2012?",a:"El ámbito de la Ciberseguridad: directrices para garantizar la seguridad en los intercambios de información en la red y hacer frente al cibercrimen."},
{mod:5,q:"¿Qué es la ciberresiliencia?",a:"La capacidad de una organización de enfrentar un ciberataque sin que su negocio, función e integridad se vean mayormente afectados, resurgiendo con tiempos de respuesta mínimos."},
{mod:5,q:"¿Qué es C-SCRM?",a:"Cyber Supply Chain Risk Management: proceso de identificar, evaluar y mitigar los riesgos de la cadena de suministro de productos y servicios de TI/OT en todo su ciclo de vida."},
{mod:5,q:"¿Cuántos niveles de implementación tiene el NIST CSF?",a:"Cuatro niveles, definidos por el proceso de gestión de riesgos, el programa integrado de gestión de riesgos y la participación externa."},
/* M7 */
{mod:6,q:"Diferencia entre IDS e IPS",a:"El IDS solo monitorea y emite alertas (pasivo); el IPS además puede bloquear o droppear la conexión (activo)."},
{mod:6,q:"¿Qué es una DMZ?",a:"Zona desmilitarizada: red local aislada donde se alojan servidores/servicios publicados en Internet, con direccionamiento privado distinto al de la red interna."},
{mod:6,q:"Los tres tipos de factor de autenticación",a:"Tipo 1: algo que conozco (password); Tipo 2: algo que tengo (token); Tipo 3: algo que soy (huella digital)."},
{mod:6,q:"¿Qué hace un SIEM?",a:"Recolecta y correlaciona los logs de la infraestructura, define reglas de correlación, genera alertas en tiempo real y permite búsquedas específicas."},
{mod:6,q:"¿Para qué sirve un WAF?",a:"Brindar protección contra ataques de capa 7 del modelo OSI, protegiendo las aplicaciones web contra vulnerabilidades conocidas y ataques de código."},
/* M8 */
{mod:7,q:"¿Qué es la gestión de incidentes?",a:"Proceso cuya entrada es el registro del evento reportado, su atención para la resolución y el posterior registro y notificación de la solución, dentro de un tiempo acordado (SLA)."},
{mod:7,q:"¿Qué es ITIL?",a:"Guía de buenas prácticas para la gestión de servicios de TI, orientada a mejorar la calidad del servicio en toda la infraestructura, desarrollo y operaciones."},
{mod:7,q:"Pasos del circuito de resolución de un incidente de seguridad",a:"Notificación, clasificación, tratamiento, cierre y base de conocimiento."},
{mod:7,q:"¿Qué es la guía NIST 800-61?",a:"Guía para que las organizaciones tengan capacidad de respuesta ante incidentes y los traten eficientemente, con pautas para el análisis de datos y la respuesta."},
{mod:7,q:"¿Por qué es clave el mismo timestamp en el análisis de logs?",a:"Para conseguir una trazabilidad completa del incidente al correlacionar logs de distintos componentes de la infraestructura."},
/* M9 */
{mod:8,q:"¿Cuáles son las cinco fases de un plan de IR?",a:"Preparación, Detección, Respuesta, Recuperación y Seguimiento."},
{mod:8,q:"¿Qué se hace en la fase de Recuperación de un plan IR?",a:"Erradicar el riesgo (parches, cierre de accesos, reset de contraseñas comprometidas), restaurar los sistemas al estado previo y comprobar pérdidas/alteraciones de datos."},
{mod:8,q:"¿Qué evento de Windows indica un inicio de sesión exitoso?",a:"El Event ID 4624 (Successful Logon). El 4625 es un inicio fallido."},
{mod:8,q:"¿Qué se revisa en el análisis de cuentas de un equipo Windows?",a:"Creación de cuentas/grupos, fecha de creación o último cambio de contraseña de las cuentas nuevas, y miembros de grupos con alto privilegio."},
{mod:8,q:"¿Qué fue el caso Nobelium/SolarWinds?",a:"Un grupo cibercriminal que se infiltró en sistemas a través del software SolarWinds, apuntando a cuentas privilegiadas de proveedores para moverse lateralmente en la nube."},
/* M10 */
{mod:9,q:"Diferencia entre RTO y RPO",a:"RTO: tiempo permitido para recuperar una función tras un desastre (hacia adelante). RPO: antigüedad máxima de los datos a restaurar, o sea cuántos datos se pueden perder (hacia atrás)."},
{mod:9,q:"¿Qué es un BIA?",a:"Business Impact Analysis: informe que muestra el costo ocasionado por la interrupción de los procesos críticos del negocio."},
{mod:9,q:"Diferencia entre BCP y DRP",a:"El BCP abarca toda la organización; el DRP se limita a los procesos e infraestructura de TI y se considera dentro del BCP."},
{mod:9,q:"¿Cómo define ISO 22301 la continuidad de negocio?",a:"La capacidad de una organización de continuar la prestación de productos o servicios en niveles predefinidos aceptables tras incidentes de interrupción."},
{mod:9,q:"¿Por qué es importante un DRP frente al ransomware?",a:"Porque permite restablecer los sistemas comprometidos y sus datos en el menor tiempo posible, minimizando pérdidas económicas y reputacionales."},
/* M11 */
{mod:10,q:"¿Qué es una auditoría?",a:"Proceso sistemático por el cual una persona competente e independiente evalúa objetivamente evidencia para formar una opinión sobre el grado en que algo se ajusta a un sistema de estándares."},
{mod:10,q:"¿Qué es COBIT 5?",a:"Modelo para auditar la gestión y el control de los sistemas de información y tecnología, orientado a administradores de TI, usuarios y auditores."},
{mod:10,q:"¿Qué es la auditoría continua?",a:"Método automatizado para realizar evaluaciones de controles y riesgos con mayor frecuencia, de manera continua."},
{mod:10,q:"¿Cuáles son las tres líneas de defensa?",a:"Primera (dueños de procesos), segunda (indicadores de contraste y soporte) y tercera (auditoría interna que reevalúa los riesgos de forma continua)."},
{mod:10,q:"¿Qué NO es una auditoría?",a:"Un monitoreo continuo ni un aseguramiento continuo son, por sí mismos, una auditoría."},
/* M12 */
{mod:11,q:"¿Qué estándares adoptó el TP del Grupo 2 para ABC S.A.?",a:"ISO/IEC 27032:2012 como marco de referencia y el NIST Cybersecurity Framework como guía de implementación."},
{mod:11,q:"¿Cuál fue el presupuesto y cómo se distribuyó?",a:"USD 650.000: NGFW (130k), IAM (225k), IPS (90k), WAF (105k) y Concientización (50k), dejando 50k de margen para backup, simulacros y políticas."},
{mod:11,q:"¿Qué activos se clasificaron como críticos en Confidencialidad e Integridad?",a:"La Base de Datos y el Active Directory (ambos Críticos en C e I)."},
{mod:11,q:"¿Qué controles preventivos de gestión propuso el TP?",a:"Adopción de un SGSI (ISO 27001), auditorías continuas, análisis formal de riesgo (NIST SP 800-30) e implementación de BCM."},
{mod:11,q:"¿Cuál es la conclusión central del trabajo?",a:"La ciberseguridad no es solo un área técnica, sino una forma de pensar y actuar frente al riesgo, integrada como pilar estratégico de gestión."}
);

/* ============================================================
   QUIZ · QUIZ[i] = { title, questions:[{q, options, correct, exp}] }
   ============================================================ */
QUIZ.push(
/* M1 */
{title:"Quiz · Ciberseguridad",questions:[
{q:"¿Qué es un ciberataque?",options:["Un evento con potencial de daño","Una maniobra ofensiva deliberada para tomar el control, desestabilizar o dañar un sistema","Una debilidad del sistema","Un correo no solicitado"],correct:1,exp:"El ciberataque es una maniobra ofensiva deliberada; la amenaza es el evento con potencial de daño y la vulnerabilidad es la debilidad."},
{q:"¿Qué amenaza cifra los archivos y exige un rescate?",options:["Phishing","Botnet","Ransomware","Spam"],correct:2,exp:"El ransomware cifra archivos/datos para cobrar un rescate por su restitución."},
{q:"Según el apunte, ¿en qué se centra la Ciberseguridad?",options:["En todos los activos de la organización","Únicamente en los activos digitales conectados a Internet","Solo en el hardware","En la seguridad física"],correct:1,exp:"La ciberseguridad se centra en los activos digitales conectados a Internet y en los riesgos del ciberespacio, extendiéndose a la infraestructura crítica."},
{q:"El criptojacking consiste en…",options:["Robar identidad","Usar sin autorización una computadora ajena para minar criptomonedas","Enviar correo basura","Espiar a un gobierno"],correct:1,exp:"El criptojacking es el uso no autorizado de una computadora o red ajena para minar criptomonedas."}
]},
/* M2 */
{title:"Quiz · Ramas de la Ciberseguridad",questions:[
{q:"¿Qué rama combina derecho e informática para producir prueba judicial?",options:["Hacking ético","Informática forense","Seguridad ofensiva","Ciberpatrullaje"],correct:1,exp:"La informática forense recopila y analiza datos de manera admisible como prueba en un tribunal."},
{q:"En un pentesting Black Box, el auditor…",options:["Conoce toda la infraestructura","No conoce información, solo el nombre y el alcance","Tiene usuario administrador","Conoce información parcial"],correct:1,exp:"En Black Box el auditor no conoce información alguna; solo cuenta con el nombre de la organización y el alcance."},
{q:"¿Cuál es el objetivo del hacking ético?",options:["Dañar sistemas","Reportar fallas y vulnerabilidades para que se corrijan","Robar información","Minar criptomonedas"],correct:1,exp:"El hacking ético busca reportar fallas/vulnerabilidades para que la organización las corrija y eleve su seguridad."},
{q:"OSINT, SOCMINT e IMINT son fuentes y técnicas usadas en…",options:["Informática forense","Ciberpatrullaje","Seguridad de redes","Pentesting"],correct:1,exp:"El ciberpatrullaje usa OSINT (fuentes abiertas), SOCMINT (redes sociales) e IMINT (imágenes), entre otras."}
]},
/* M3 */
{title:"Quiz · Gestión de la seguridad de la información",questions:[
{q:"La tríada CID está compuesta por…",options:["Control, Integridad, Datos","Confidencialidad, Integridad, Disponibilidad","Confianza, Identidad, Defensa","Cifrado, Internet, Datos"],correct:1,exp:"CID = Confidencialidad, Integridad y Disponibilidad."},
{q:"¿Quién aprueba la política de seguridad y asigna los roles?",options:["El usuario final","La Dirección","El proveedor","El cliente"],correct:1,exp:"La Dirección debe aprobar la política de seguridad y asignar roles y funciones."},
{q:"Según el control de activos, todo activo debe…",options:["Estar cifrado","Ser inventariado y tener un propietario nombrado","Estar en la nube","Tener antivirus"],correct:1,exp:"Todos los activos deben ser inventariados y contar con un propietario responsable de su protección."},
{q:"¿Qué nivel documental tiene MENOR detalle y abarca temas globales?",options:["Procedimientos","Estándares","Políticas","Normas"],correct:2,exp:"Las políticas tienen el menor nivel de detalle y abarcan temas a nivel global."}
]},
/* M4 */
{title:"Quiz · SGSI",questions:[
{q:"El ciclo PDCA significa…",options:["Plan-Do-Check-Act","Proteger-Detectar-Controlar-Auditar","Planear-Diseñar-Codificar-Aplicar","Prevenir-Detectar-Contener-Actuar"],correct:0,exp:"PDCA = Plan-Do-Check-Act (Planificar-Hacer-Verificar-Actuar), el ciclo de Deming."},
{q:"Según el apunte, ¿cuántos puntos de control establece ISO 27001?",options:["93","113","114","133"],correct:1,exp:"El apunte indica 113. Ojo: la 27001:2013 oficialmente tiene 114; la de 2022, 93; la de 2005, 133."},
{q:"¿Cuál es la PRIMERA fase de un SGSI basado en ISO 27001?",options:["Proceso documental","Análisis y evaluación de riesgos","Auditorías","Partes interesadas"],correct:1,exp:"La primera fase es el análisis y evaluación de riesgos."},
{q:"'Contratar un seguro que compense la pérdida' corresponde a…",options:["Eliminar el riesgo","Mitigar el riesgo","Trasladar el riesgo","Asumir el riesgo"],correct:2,exp:"Trasladar el riesgo implica contratar un seguro que compense las consecuencias económicas."}
]},
/* M5 */
{title:"Quiz · Gestión del riesgo",questions:[
{q:"La fórmula del riesgo por activo es…",options:["Riesgo = Amenaza + Vulnerabilidad","Riesgo = Impacto × Probabilidad de ocurrencia","Riesgo = Activo − Control","Riesgo = Impacto + Exposición"],correct:1,exp:"Riesgo = Impacto × Probabilidad de ocurrencia."},
{q:"¿Cuándo conviene ASUMIR un riesgo?",options:["Cuando está por encima del umbral","Cuando está por debajo del umbral aceptable o su tratamiento es muy costoso","Siempre","Cuando hay seguro disponible"],correct:1,exp:"Se asume cuando está debajo del umbral aceptable, su tratamiento es costoso, o no se quiere perder la oportunidad de negocio."},
{q:"MAGERIT v3 fue elaborada por…",options:["NIST (EEUU)","El Gobierno de España","ISO","ISACA"],correct:1,exp:"MAGERIT v3 fue elaborada por el Consejo Superior de Administración Electrónica del Gobierno de España."},
{q:"¿Cuántos pasos tiene la metodología NIST SP 800-30?",options:["5","7","9","3"],correct:2,exp:"NIST SP 800-30 tiene nueve pasos para el análisis de riesgo."}
]},
/* M6 */
{title:"Quiz · Estándares de Ciberseguridad",questions:[
{q:"Las cinco funciones del núcleo del NIST CSF son…",options:["Planificar, Hacer, Verificar, Actuar, Mejorar","Identificar, Proteger, Detectar, Responder, Recuperar","Prevenir, Detectar, Contener, Erradicar, Recuperar","Confidencialidad, Integridad, Disponibilidad, Autenticidad, Trazabilidad"],correct:1,exp:"El núcleo del NIST CSF: Identificar, Proteger, Detectar, Responder y Recuperar."},
{q:"¿Qué estándar aborda específicamente la Ciberseguridad?",options:["ISO 27001","ISO 22301","ISO/IEC 27032:2012","ISO 9001"],correct:2,exp:"ISO/IEC 27032:2012 da directrices para la Ciberseguridad."},
{q:"La ciberresiliencia es la capacidad de…",options:["Eliminar todas las amenazas","Enfrentar un ciberataque sin que el negocio se vea mayormente afectado","Cifrar la información","Auditar los controles"],correct:1,exp:"La ciberresiliencia permite enfrentar un ataque y resurgir con tiempos de respuesta mínimos."},
{q:"Validar las entradas para prevenir SQL-Injection es un control…",options:["A nivel de servidor","A nivel de aplicación","Sobre el usuario final","Contra ingeniería social"],correct:1,exp:"Es un control a nivel de aplicación, junto con asegurar cookies y prevenir XSS."}
]},
/* M7 */
{title:"Quiz · Herramientas defensivas",questions:[
{q:"¿Cuál es la diferencia entre IDS e IPS?",options:["No hay diferencia","El IDS bloquea; el IPS solo alerta","El IDS solo alerta; el IPS puede bloquear","Ambos solo cifran tráfico"],correct:2,exp:"El IDS detecta y alerta (pasivo); el IPS además bloquea/droppea (activo)."},
{q:"Un token físico corresponde al factor de autenticación…",options:["Tipo 1 (algo que conozco)","Tipo 2 (algo que tengo)","Tipo 3 (algo que soy)","Ninguno"],correct:1,exp:"El token es 'algo que tengo' (Tipo 2). La password es Tipo 1 y la huella, Tipo 3."},
{q:"¿Qué herramienta protege contra ataques de capa 7 a aplicaciones web?",options:["Proxy","WAF","NAC","DLP"],correct:1,exp:"El WAF (Web Application Firewall) protege aplicaciones web contra ataques de capa 7."},
{q:"Una solución que previene la fuga de información sensible es…",options:["SIEM","DLP","VPN","OTP"],correct:1,exp:"El DLP (Data Loss Prevention) previene la fuga de información sensible."}
]},
/* M8 */
{title:"Quiz · Gestión de incidentes",questions:[
{q:"En la gestión de incidentes, el tiempo acordado de resolución se conoce como…",options:["RTO","SLA","BIA","KPI"],correct:1,exp:"El SLA (Service Level Agreement) es el tiempo acordado dentro del cual se debe resolver."},
{q:"¿Qué es ITIL?",options:["Una norma de cifrado","Una guía de buenas prácticas para la gestión de servicios de TI","Un tipo de firewall","Una metodología de pentesting"],correct:1,exp:"ITIL es una guía de buenas prácticas para la gestión de servicios de TI."},
{q:"¿Cuál es el último paso del circuito de resolución de un incidente?",options:["Notificación","Clasificación","Base de conocimiento","Tratamiento"],correct:2,exp:"Tras notificar, clasificar, tratar y cerrar, se documenta en la base de conocimiento."},
{q:"La guía específica para la respuesta y manejo de incidentes es…",options:["NIST 800-30","NIST 800-61","ISO 22301","MAGERIT"],correct:1,exp:"NIST 800-61 ofrece pautas para la gestión y el manejo de incidentes."}
]},
/* M9 */
{title:"Quiz · Plan de IR",questions:[
{q:"¿Cuáles son las cinco fases de un plan de IR?",options:["Identificar, Proteger, Detectar, Responder, Recuperar","Preparación, Detección, Respuesta, Recuperación, Seguimiento","Plan, Do, Check, Act, Improve","Notificar, Clasificar, Tratar, Cerrar, Documentar"],correct:1,exp:"Las fases del plan de IR son: Preparación, Detección, Respuesta, Recuperación y Seguimiento."},
{q:"El Event ID 4625 en Windows indica…",options:["Inicio de sesión exitoso","Inicio de sesión fallido","Creación de cuenta","Logs borrados"],correct:1,exp:"4625 = Failed Login. El 4624 es inicio exitoso y el 1102, logs borrados."},
{q:"¿Qué se hace en la fase de Seguimiento?",options:["Contener la amenaza","Mejora continua del plan y simulacros","Restaurar sistemas","Detectar el incidente"],correct:1,exp:"El Seguimiento aplica mejora continua, actualiza el plan y realiza simulacros en momentos de normalidad."},
{q:"El comando para revisar conexiones de red establecidas es…",options:["schtasks","netstat –ano","net user","ipconfig"],correct:1,exp:"netstat –ano | more permite verificar conexiones y puertos de escucha."}
]},
/* M10 */
{title:"Quiz · Continuidad de negocio",questions:[
{q:"El RTO se refiere a…",options:["La antigüedad máxima de los datos a restaurar","El tiempo permitido para recuperar una función tras un desastre","El costo del incidente","La cantidad de backups"],correct:1,exp:"RTO = Tiempo Objetivo de Recuperación: cuánto tiempo permitido para volver a un nivel aceptable. RPO mira los datos."},
{q:"¿Qué relación hay entre el DRP y el BCP?",options:["Son lo mismo","El DRP abarca todo y el BCP es solo TI","El DRP es solo de TI y está dentro del BCP","No están relacionados"],correct:2,exp:"El DRP se limita a los procesos e infraestructura de TI y se considera dentro del BCP."},
{q:"Un BIA sirve para…",options:["Cifrar datos","Mostrar el costo de interrumpir los procesos críticos y priorizarlos","Auditar controles","Detectar intrusiones"],correct:1,exp:"El BIA muestra el costo de la interrupción de procesos críticos y permite priorizarlos."},
{q:"¿Qué norma internacional define la continuidad de negocio?",options:["ISO 27001","ISO 22301","ISO 27032","ISO 9001"],correct:1,exp:"ISO 22301 es el estándar internacional para la continuidad del negocio."}
]},
/* M11 */
{title:"Quiz · Auditoría",questions:[
{q:"Una característica esencial del auditor es que sea…",options:["Empleado del área","Competente e independiente","Externo solamente","El CISO"],correct:1,exp:"La auditoría la realiza una persona competente e independiente que evalúa objetivamente."},
{q:"¿Qué modelo se usa para auditar la gestión y el control de los SI y la tecnología?",options:["ITIL","COBIT 5","MAGERIT","ISO 22301"],correct:1,exp:"COBIT 5 es el modelo para auditar la gestión y el control de los sistemas de información y tecnología."},
{q:"La auditoría continua se caracteriza por ser…",options:["Manual y esporádica","Un método automatizado de evaluación frecuente","Solo financiera","Realizada una vez al año"],correct:1,exp:"La auditoría continua es un método automatizado para evaluar controles y riesgos con mayor frecuencia."},
{q:"En el modelo de tres líneas de defensa, la auditoría interna es…",options:["La primera línea","La segunda línea","La tercera línea","Externa al modelo"],correct:2,exp:"La auditoría interna constituye la tercera línea de defensa, que reevalúa los riesgos de forma continua."}
]},
/* M12 */
{title:"Quiz · Caso práctico ABC S.A.",questions:[
{q:"¿Qué estándar se adoptó como marco de referencia para ABC S.A.?",options:["ISO 9001","ISO/IEC 27032:2012","ISO 22301","COBIT 5"],correct:1,exp:"Se adoptó ISO/IEC 27032:2012 como marco, con el NIST CSF como guía de implementación."},
{q:"¿Cuál fue la herramienta de mayor inversión del presupuesto?",options:["NGFW (130k)","IAM (225k)","WAF (105k)","IPS (90k)"],correct:1,exp:"El Identity Manager (IAM) fue la mayor inversión con USD 225.000."},
{q:"¿Qué activos se clasificaron como Críticos en Confidencialidad e Integridad?",options:["Webserver y FTP","Base de Datos y Active Directory","Workstations y Access Point","SMTP y AppServers"],correct:1,exp:"La Base de Datos y el Active Directory fueron clasificados como Críticos en C e I."},
{q:"¿Dónde se ubican los servidores expuestos a Internet en la nueva arquitectura?",options:["En la red interna","En la DMZ","En las Workstations","En el Active Directory"],correct:1,exp:"Los servicios expuestos (SMTP, Web con WAF, App Server A) se ubican en la DMZ, separados de la red interna."}
]}
);
