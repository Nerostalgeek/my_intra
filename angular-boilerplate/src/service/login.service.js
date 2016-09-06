/**
 * Sur les services, il faut utiliser $inject sur la fonction factory de la classe
 * Plutôt que le @inject() comme on utilise sur les controllers
 * Car ce n'est pas compatible avec les services !
 */

const SERVICES = new Map();

class LoginService {
  constructor($http, configService) {
    SERVICES // Le constructeur enregistre les services dans la map, on pourra utiliser get() sur la map plus tard pour récupérer le service
      .set('$http', $http)
      .set('configService', configService);
  }

  login(credentials) { // login & password
    const url = SERVICES.get('configService').apiBuilder('/');

    return SERVICES.get('$http').post(url, { ...credentials, remember_me: 'on' });
  }

  static factory($http, configService) {
    return new LoginService($http, configService);
  }
}

LoginService.factory.$inject = ['$http', 'configService'];

export default LoginService;
