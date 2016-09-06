import inject from 'ng-inject';

@inject('$state', 'ionicMaterialInk', 'ionicMaterialMotion')
class IntraHome {
  message = 'Hello World ! This is home component !';

  constructor() {
    console.log('Hello, this is constructor of home component !');
  }
}

export default IntraHome;
