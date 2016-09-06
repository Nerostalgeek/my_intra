import inject from 'ng-inject';

@inject('$state')
class IntraMarks {
  message = 'Hello World ! This is marks component !';

  constructor() {
    console.log('Hello, this is constructor of marks component !');
  }
}

export default IntraMarks;
