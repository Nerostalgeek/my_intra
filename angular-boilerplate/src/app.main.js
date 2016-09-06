import angular from 'angular';
import router from 'angular-ui-router';
import material from 'angular-material';
import aria from 'angular-aria';
import animate from 'angular-animate';
import messages from 'angular-messages';
import services from './app.services';
import components from './app.components';


import { default as ROUTES } from './constant/routes';

const moduleName = 'app';

angular
    .module(moduleName, [router, services, components, material, aria, animate, messages])
    .config(($stateProvider, $locationProvider, $urlRouterProvider) => {
      $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise(ROUTES.default);

      Object
          .keys(ROUTES)
          .filter(route => route !== 'default')
          .forEach(route => $stateProvider.state(ROUTES[route].name, ROUTES[route]));
    });

export default moduleName;
