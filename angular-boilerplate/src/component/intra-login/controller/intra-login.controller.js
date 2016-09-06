import inject from 'ng-inject';

@inject('$state', 'loginService')
class IntraLogin {
  constructor() {
    console.log('Hello, this is constructor of Login component !');

    this.user = {
      login: '',
      password: '',
    };
  }

  login(credentials) { // Fonction asynchrone, on peux utiliser "await" pour attendre le résultat d'une promesse
    this.loginService
        .login(credentials)
        .then(user => console.log(user))
        .catch(error => console.log(error));
  }
}

export default IntraLogin;
