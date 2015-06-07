
import angular from 'angular';
import template from './search.jade';
import { name as MarvelServiceModule } from 'services/marvel';
import './search.scss';

/* @ngInject */
function SearchController (MarvelService) {
  const dm = this;
  dm.state = {};
  dm.searchInput = "";
  dm.results = [];


  dm.getCharacterByName = function (name) {
    MarvelService.getCharacterByName(name).success(function(data){
      console.log(data);
    });
  }
  
  dm.getCharactersByNameStartsWith = function(name) {
    MarvelService.getCharactersByNameStartsWith(name).success(function(data){
      console.log(data);
    });
  }

  dm.getComicsByTitleStartsWith = function(title){
    MarvelService.getComicsByTitleStartsWith(title).success(function (data){
      console.log(data);
      dm.results = data.data.results;
    });
  }
  // dm.getCharacterByName('Rocket Raccoon');
  // dm.getCharactersByNameStartsWith('sp');
  // dm.getComicsByTitleStartsWith('uncanny');


}

function gsSearch () {
  return {
    scope : {
      title : '@'
    },
    template : template,
    controller : SearchController,
    controllerAs : 'dm',
    bindToController : true
  };
}

export default angular.module('gstv.directives.test', [
])
  .directive('gsSearch', gsSearch);