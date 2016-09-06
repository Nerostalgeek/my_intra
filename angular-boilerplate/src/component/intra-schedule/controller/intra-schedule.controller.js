import inject from 'ng-inject';

@inject('$state')
class IntraSchedule {
  message = 'Hello World ! This is schedule component !';

  constructor() {
    console.log('Hello, this is constructor of schedule component !');
  }
}

export default IntraSchedule;
