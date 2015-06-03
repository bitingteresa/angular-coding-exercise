// ------------------------------------
// Developer Note
// ------------------------------------
// Hey again, just a quick note about this directive...
// the whole point of this is to give you some sort of
// indication that the boilerplate application is working
// as expected. Don't hesitate to completely rip this
// apart or discard it as necessary, it exists only
// as a startup splash screen.
// ------------------------------------
import angular from 'angular';
import template from './template.jade';
import MarvelService from '../../services/marvel';
import './style.scss';

/* @ngInject */
function gsWelcomeController (MarvelService) {
  const dm = this;

  dm.init = function () {
    setTimeout(dm.makeSampleRequest, 1000); // for dramatic effect
  };

  dm.makeSampleRequest = function () {
    dm.connection = {};

    // ping a known-good endpoint
    MarvelService.getCharacters()
      .then(() => dm.connection.success = true)
      .catch(() => dm.connection.error = true)
      .finally(() => dm.connection.complete = true);
  };

  dm.init();
}

function gsWelcome () {
  return {
    scope : {
      title : '@'
    },
    template : template,
    controller : gsWelcomeController,
    controllerAs : 'dm',
    bindToController : true
  };
}

export default angular.module('gstv.directives.welcome', [
  MarvelService.name
])
  .directive('gsWelcome', gsWelcome);
