import CONF from '../constant/config';

const CONFIG = new Map();
const SERVICES = new Map();

class ConfigService {
  constructor($httpParamSerializer) {
    Object
      .keys(CONF)
      .map(key => CONFIG.set(key, CONF[key]));

    SERVICES.set('$httpParamSerializer', $httpParamSerializer);
  }

  /**
   * Get config value by key
   * @param {String} key
   * @returns {String}
   */
  get(key) {
    return CONFIG.get(key);
  }

  /**
   * Internal logger (never use in production)
   * @param message
   * @returns {ConfigService}
   */
  logger(...message) {
    if (this.get('DEBUG')) {
      console.log(...message);
    }

    return this;
  }

  /**
   * Exception catcher
   * Use it in Promise (with $http) to catch error globally and dispatch them
   */
  catcher(...errors) {
    console.error('Some exception happen : ', ...errors);
  }

  /**
   * Transform API call (with route and params as object) into callable Epitech route
   * Example : route = '/', params = {a: b}
   * => http://intra.epitech.eu/?format=json&a=b
   * If you use POST DATA (like form), don't use getParams
   * @param route
   * @param getParams
   * @returns {string}
   */
  apiBuilder(route, getParams = {}) {
    return `${this.get('API_URL')}${route}?format=json&${SERVICES.get('$httpParamSerializer')(getParams)}`;
  }

  /**
   * Factory of this class
   * @returns {ConfigService}
   */
  static factory($httpParamSerializer) {
    return new ConfigService($httpParamSerializer);
  }
}

ConfigService.factory.$inject = ['$httpParamSerializer'];

export default ConfigService;
