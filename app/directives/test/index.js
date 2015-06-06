
import angular from 'angular';
import template from './test.jade';
import { name as MarvelServiceModule } from 'services/marvel';
import { name as StatusBarModule } from 'directives/status-bar';
import './test.scss';

/* @ngInject */
function TestController (MarvelService) {
  const dm = this;
  dm.state = {};
  dm.excellent = ["do not touch the custom directive", "try to push characters in here"];


  dm.getCharacters = function (name) {
    MarvelService.getCharacterByName(name).success(function(data){
      console.log(data);
    });
  }
  

  dm.getCharacters('Rocket Raccoon');
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