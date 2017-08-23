var app = angular.module("app", []);

app.controller("appCtrl", function($scope) {

	$scope.lang= 'en';
    $scope.date= new Date();

    $scope.translate = {
    	es: {
    		txt_home: 'Inicio',
    		txt_about: 'Quienes somos',
    		txt_services: 'Servicios',
    		txt_clients: 'Clientes',
            txt_our_clients: 'Nuestros clientes',
    		txt_contact: 'Contacto',
            txt_alliances: 'Alianzas',
            txt_strategic_alliances: 'Alianzas estratégicas',

    		txt_about_content: 'Know How Asesores nace de la necesidad de fortalecer el desarrollo de organizaciones privadas y públicas  a través de asesorías ligadas a un adecuado acompañamiento durante la implementación de las estrategias diseñadas. Esta iniciativa se sustenta además al observar la evidente insostenibilidad y difícil crecimiento de las mipymes en Colombia, las cuales en su mayoría, llegan a ser liquidadas y/o abandonadas al cumplir en promedio los dos años de existencia. Esto a pesar que nuestro país, ha logrado ubicarse en las primeras posiciones en materia de creación de empresas a nivel de América Latina durante los últimos años.',

    		txt_mission: 'Misión',
    		txt_mission_content: 'Nos mueve ser parte del fortalecimiento y crecimiento de las entidades públicas y privadas, y más aún del desarrollo de la fuerza emprendedora, lo cual se traduce en un fundamento clave para el progreso sostenible de la sociedad actual.',
    		txt_vision: 'Visión',
    		txt_vision_content: 'A 2020 seremos empresa líder a nivel nacional, reconocida por su excelente contribución al desarrollo, fortalecimiento y crecimiento de las organizaciones, fundamentada en un capital humano competente y brindando servicios con los más altos estándares de calidad. Así mismo, y además del mercado norteamericano, cubriremos importantes consultorías en el resto de América Latina.',
    		txt_management_consulting: 'Consultoría de gestión y organización',
            txt_description_service_consultancy: 'La satisfacción del cliente y del grupo de colaboradores resulta ser la columna vertebral de las organizaciones sostenibles, responsables e innovadoras, en un entorno mundial caracterizado por los cambios constantes. Es allí donde el liderazgo, el correcto diseño de estrategias, la efectiva gestión de personal y una adecuada definición e implementación de procesos, juegan un rol crucial. Lo anterior nos lleva a manifestarle nuestro fiel y sincero interés en ser parte activa del crecimiento de su organización a través de las siguientes formas: ',
    		txt_economic_and_business_consulting:'Consultoría económica y empresarial',
            txt_description_service_business: 'El impacto positivo o negativo que puedan tener las organizaciones sobre la sociedad, es la razón realmente clave de su existencia. No obstante y con frecuencia, tiende a debilitarse el enfoque, entre otras cosas, por falta de análisis y mediciones puntuales que ayuden a tomar mejores decisiones. Por ello es muy importante para nosotros brindarle nuestro apoyo con el fin definir y evaluar proyectos dignos de ser desarrollados, desde un ejercicio profesional enmarcado en las ciencias económicas y empresariales, aplicado a través de nuestro talento humano que permanece creciendo en términos académicos y laborales:',
    		txt_process_improvement: 'Mejora de procesos',
    		txt_human_management: 'Gestión humana',
    		txt_management_systems: 'Sistemas de gestión',

            array_process_improvement: [
        		'Diagnóstico o evaluación de Satisfacción del cliente.',
        		'Análisis y optimización de procesos.',
        		'Lean Production.',
        		'6 Sigma.',
        		'AMFE - Análisis Modal de Fallos y Efectos.',
        		'Gestión de datos e indicadores.'
            ],

            array_human_management: [
        		'Evaluación del clima, microclima y cultura organizacional.',
        		'Coaching empresarial.',
        		'Coaching organizacional.',
        		'Desarrollo de Equipos de Alto Rendimiento.',
        		'Diseño de modelos para medir competencias funcionales y comportamentales.',
        		'Planes de intervención de Clima y Cultura Organizacional.'
            ],


            array_management_systems: [
        		'Implementación ISO 9001 - Gestión de la Calidad.',
    			'Implementación ISO 22000 - Gestión de la Calidad en Empresas Alimentarias.',
    			'Implementación ISO 17025 - Gestión de la calidad en Laboratorios.',
    			'Implementación ISO 27001 - Gestión de la seguridad de la información',
    			'Implementación ISO 14001 - Gestión Medioambiental.',
    			'Implementación SA 8000 - Responsabilidad Social Corporativa.',
    			'Implementación OHSAS 18001 - Gestión de la Prevención.',
    			'Elaboración de Reportes de Sostenibilidad bajo Metodología GRI Standards.'
            ],

            array_economic_and_business_consulting: [
    			'Estudios de factibilidad.',
    			'Planes de negocio.',
    			'Investigación de mercados nacionales e internacionales.',
    			'Análisis de impactos.',
    			'Diagnóstico DAFO y BENCHMARKING.',
    			'Despliegue estratégico: Cuadro de Mando Integral (CMI).',
    			'Diseño de la planeación estratégica.',
    			'Elaboración de proyectos de iniciativa pública y privada.',
                'Estudios sectoriales',
    			'Estudio de oferta y demanda para el ajuste de tarifas para el sector transporte y servicios públicos.'
                
            ],

            form_txt_email: 'Email personal',
            form_txt_name: 'Nombre completo',
            form_txt_subject: 'Asunto',
            form_txt_message: 'Mensaje',
            form_text_send: 'Enviar'
    	},

    	en: {
    		txt_home: 'Home',
    		txt_about: 'About us',
    		txt_services: 'Services',
    		txt_clients: 'Customers',
            txt_our_clients: 'Our clients',
    		txt_contact: 'Contact',
            txt_alliances: 'Alliances',
            txt_strategic_alliances: 'Strategic Alliances',

    		txt_about_content: 'Know How Advisors arises from the need to strengthen the development of private and public organizations through advisory services linked to an adequate accompaniment during the implementation of the strategies designed. This initiative is also sustained by observing the evident unsustainability and difficult growth of microenterprises in Colombia, which are mostly liquidated and / or abandoned on average in the two years of existence. This in spite of our country, has managed to position itself in the top positions in business creation in Latin America in recent years.',

    		txt_mission: 'Mission',
    		txt_mission_content: 'It moves us to be part of the strengthening and growth of public and private entities, and even more of the development of the entrepreneurial force, which translates into a key foundation for the sustainable progress of today\'s society.',
    		txt_vision: 'Vision',
    		txt_vision_content: 'By 2020 we will be a leading company at the national level, recognized for its excellent contribution to the development, strengthening and growth of organizations, based on competent human capital and providing services with the highest quality standards. Likewise, besides the North American market, we will cover important consultancies in the rest of Latin America.',
    		txt_management_consulting: 'management and organization consultancy',
            txt_description_service_consultancy: 'The satisfaction of the client and the group of collaborators turns out to be the backbone of sustainable, responsible and innovative organizations in a global environment characterized by constant changes. This is where leadership, correct strategy design, effective personnel management, and proper process definition and implementation play a crucial role. This leads us to express our sincere and sincere interest in being an active part of the growth of your organization through the following ways:',
    		txt_economic_and_business_consulting:'Economic and business consulting',
            txt_description_service_business: 'The positive or negative impact that organizations may have on society is the really key reason for their existence. However, there is a tendency to weaken the focus, among other things, by lack of analysis and timely measurements to help make better decisions. That is why it is very important for us to offer our support in order to define and evaluate projects worthy of being developed, from a professional exercise framed in the economic and business sciences, applied through our human talent that continues to grow in academic and work terms:',
    		txt_process_improvement: 'Process improvement',
    		txt_human_management: 'Human management',
    		txt_management_systems: 'Management systems',

            array_process_improvement:[
        		'Diagnosis or evaluation of customer satisfaction.',
        		'Analysis and optimization of processes.',
        		'Lean Production.',
        		'6 Sigma.',
        		'AMFE - Modal Analysis of Faults and Effects.',
        		'Data management and indicators.'
            ],

            array_human_management: [            
        		'Evaluation of the climate, microclimate and organizational culture.',
        		'Business coaching.',
        		'Organizational Coaching',
        		'Development of High Performance Equipment.',
        		'Design of models to measure functional and behavioral competences',
        		'Climate and Organizational Culture intervention plans.'
            ],

            array_management_systems: [
        		'Implementation ISO 9001 - Quality Management.',
    			'Implementation ISO 22000 - Management of Quality in Food Companies.',
    			'Implementation ISO 17025 - Quality Management in Laboratories.',
    			'Implementation ISO 27001 - Management of information security.',
    			'Implementation ISO 14001 - Environmental Management.',
    			'Implementation SA 8000 - Corporate Social Responsibility.',
    			'Implementation OHSAS 18001 - Management of Prevention.',
    			'Elaboration of Sustainability Reports under GRI Standards Methodology.'            
            ],

            array_economic_and_business_consulting: [
    			'Feasibility studies.',
    			'Business plans.',
    			'Research of national and international markets.',
    			'Impact analysis.',
    			'Diagnosis DAFO and BENCHMARKING.',
    			'Strategic Deployment: Integral Command Chart (CMI).',
    			'Design of strategic planning.',
    			'Elaboration of projects of public and private initiative.',
                'Sectorial studies',
    			'Supply and demand study for the adjustment of tariffs for the transport and public services sector.'
                
            ],

            form_txt_email: 'Your Email',
            form_txt_name: 'Your Name',
            form_txt_subject: 'Subject',
            form_txt_message: 'Message',
            form_text_send: 'Send'


    	}
    };

});