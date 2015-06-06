
import angular from 'angular';
import template from './test.jade';
import { name as StatusBarModule } from 'directives/status-bar';
import './test.scss';

/* @ngInject */
function TestController (MarvelService) {
  const dm = this;
  dm.state = {};
  dm.excellent = ["do not touch the custom directive", "try to push characters in here"];

  dm.init = function () {
    setTimeout(dm.makeSampleRequest, 1000); // for dramatic effect
  };

  dm.makeSampleRequest = function () {
    dm.state.connection = {};

    // ping a known-good endpoint
    MarvelService.getCharacters()
      .then(() => dm.state.connection.success = true)
      .catch(() => dm.state.connection.error = true)
      .finally(() => dm.state.connection.complete = true);
  };

  dm.init();
}

function gsTest () {
  return {
    scope : {
      title : '@'
    },
    template : template,
    controller : TestController,
    controllerAs : 'dm',
    bindToController : true
  };
}

export default angular.module('gstv.directives.test', [
  StatusBarModule
])
  .directive('gsTest', gsTest);