import angular from 'angular';

import IntraHome from './component/intra-home/intra-home.component';
import IntraSchedule from './component/intra-schedule/intra-schedule.component';
import IntraMarks from './component/intra-marks/intra-marks.component';
import IntraLogin from './component/intra-login/intra-login.component';

const moduleName = 'app.components';

angular
  .module(moduleName, [])
  .component('intraLogin', IntraLogin)
  .component('intraHome', IntraHome)
  .component('intraSchedule', IntraSchedule)
  .component('intraMarks', IntraMarks);

export default moduleName;
