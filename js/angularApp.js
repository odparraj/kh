var app = angular.module("app", []);

app.controller("appCtrl", function($scope) {

	$scope.lang= 'en';

    $scope.translate = {
    	es: {
    		txt_home: 'Inicio',
    		txt_about: 'Quienes somos',
    		txt_services: 'Servicios',
    		txt_clients: 'Clientes',
    		txt_contact: 'Contacto',

    		txt_about_content: 'Know How Asesores nace de la necesidad de fortalecer el desarrollo de organizaciones privadas y públicas  a través de asesorías ligadas a un adecuado acompañamiento durante la implementación de las estrategias diseñadas. Esta iniciativa se sustenta además al observar la evidente insostenibilidad y difícil crecimiento de las mipymes en Colombia, las cuales en su mayoría, llegan a ser liquidadas y/o abandonadas al cumplir en promedio los dos años de existencia. Esto a pesar que nuestro país, ha logrado ubicarse en las primeras posiciones en materia de creación de empresas a nivel de América Latina durante los últimos años.',

    		txt_mission: 'Misión',
    		txt_mission_content: 'Nos mueve ser parte del fortalecimiento y crecimiento de las entidades públicas y privadas, y más aún del desarrollo de la fuerza emprendedora, lo cual se traduce en un fundamento clave para el progreso sostenible de la sociedad actual.',
    		txt_vision: 'Visión',
    		txt_vision_content: 'A 2020 seremos empresa líder a nivel nacional, reconocida por su excelente contribución al desarrollo, fortalecimiento y crecimiento de las organizaciones, fundamentada en un capital humano competente y brindando servicios con los más altos estándares de calidad. Así mismo, y además del mercado norteamericano, cubriremos importantes consultorías en el resto de América Latina.'
    	},

    	en: {
    		txt_home: 'Home',
    		txt_about: 'About us',
    		txt_services: 'Services',
    		txt_clients: 'Customers',
    		txt_contact: 'Contact',

    		txt_about_content: 'Know How Advisors arises from the need to strengthen the development of private and public organizations through advisory services linked to an adequate accompaniment during the implementation of the strategies designed. This initiative is also sustained by observing the evident unsustainability and difficult growth of microenterprises in Colombia, which are mostly liquidated and / or abandoned on average in the two years of existence. This in spite of our country, has managed to position itself in the top positions in business creation in Latin America in recent years.',

    		txt_mission: 'Mission',
    		txt_mission_content: 'It moves us to be part of the strengthening and growth of public and private entities, and even more of the development of the entrepreneurial force, which translates into a key foundation for the sustainable progress of today\'s society.',
    		txt_vision: 'Vision',
    		txt_vision_content: 'By 2020 we will be a leading company at the national level, recognized for its excellent contribution to the development, strengthening and growth of organizations, based on competent human capital and providing services with the highest quality standards. Likewise, besides the North American market, we will cover important consultancies in the rest of Latin America.'
    	}
    };

    



});