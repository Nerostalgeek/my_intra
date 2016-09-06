import angular from 'angular';

import ConfigService from './service/config.service';
import LoginService from './service/login.service';


const moduleName = 'app.services';

angular
    .module(moduleName, [])
    .factory('configService', ConfigService.factory)
    .factory('loginService', LoginService.factory);

export default moduleName;
