# AgentHub

## Contexto
AgentHub es una startup llamada AgentHub está construyendo una plataforma SaaS donde las empresas pueden alquilar agentes de IA — asistentes inteligentes preconfigurados que pueden equiparse con distintas skills (habilidades como navegar por la web, leer documentos o gestionar calendarios) y desplegarse para tareas de negocio específicas

Eres un programador especializado Frontend, con dominio en HTML semántico, CSS tailwind, JS vanilla

## Tarea

###Construye:

    1.Dasboard:
        -al menos 4 tarjetas métricas(Ingresos totales, perdidas por descuentos y cupones, agentes activos, agentes fallando)
        - un gráfico con un area de ancho completo debajo de las tarjetas que representen la actividad semanal
        - Un botoón que permita descargar un PDF del reporte semanal

     2.Gestión de usuario:
        -Una tabla con al menos 5 filas de usuarios con los datos de "users.json"
        - Cada fila tiene un botón de un dropdown con 'ver detalle' 'eliminar'
        -'ver detalle' abre un modal con el registro completo del usuario. el modal puede cerrarse con el boton de cerrar o pulsando fuera del modal

    3. Gestión de agente
        -Un listado con al menos 4 agentes con los datos de "agents.json" con la lista de skills colapsada
        -la lista de skills colapsada debe ser de tansición suave
        -cada agente tiene un dropdown con 'Configurar' y 'Eliminar'. "Configurar" abre un modal con el prompt del agente en un <textarea> editable

    4.Skills
        - Un catálogo de al menos 4 skills, obtenidas de "skills.json" con todos sus datos
        -Una breve explicacón dentro del panel sobre que es una "skill" en el contexto de AgentHub
        -Cada skill tienen un dropdown con "Ver detalles" "Eliminar"

    5.Contrataciones de Agentes
        -Una tabla con 4 contratos con todos los datos obtenidos de "contract.json"
        -Cada contrato tiene un dropdown con "Ver detalle". "Ver detalle" arroja un modal con el desglose completo del contrato, incluyendo skills desglosadas y precios individuales
        -Cada contrato tiene un botón para descargar el contrado en PDF

    6. Log de errores
        -Al menos 6 entradas de error hardcoreadas mostrando timeslap, nombre del agente, badge de tipo de error con código de color, y descripción breve
        -Cada error tiene un dropdown con "Ver detalle" y "Marcar como resuelto"
        -Cada error tiene un código especifico
    
    7. Página principal 
    -El archivo es "index.html"
    -Un Hero Al incio donde muestre de que trata la empresa
    - 3 secciones debajo de Hero con información dobre la empresa
    - Una zona de contacto en la parte de abajo de la página

    En todas las secciones se deben aplicar las siguientes condiciones:
        1. Un toggle de de modo oscuro/claro en la barra superior que cambie todo el panel entre esquemas de colores usando la proiedad :dark de tailwind
        2. todos los dropdowns de acciones se deben cerrar al hacer clic fuera de ellos
        3. los modales se cierran al hacer clic en el backdrop
        4. todas las secciones deben incluir una navbar lateral fija, para moverse entre las distintas secciones
        5. El logo de la empresa en la esquina superior derecha, y al darle clic, te lleva a la página principal
        
## Requisitos
- Todo los archivos deben ser Tailwind, que se cargue vía CDN
- Se debe usar solamente HTML semántico, CSS tailwind y JS vanilla
-diseño mobile first
-Etiquetas ARIA y schema.org

