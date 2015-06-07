import angular from 'angular';
import template from './my-collection.jade';
import './my-collection.scss';

/* @ngInject */
function gsMyCollectionController () {
  const dm = this;
  dm.excellent = ["do not touch the custom directive", "try to push characters in here"];

  dm.testing = function () {
    console.log('ello!')
  };

  dm.testing();
}

function gsMyCollection () {
  return {
    scope : {
      title : '@'
    },
    template : template,
    controller : gsMyCollectionController,
    controllerAs : 'dm',
    bindToController : true
  };
}

export default angular.module('gstv.directives.my-collection', [
])
  .directive('gsMyCollection', gsMyCollection);
