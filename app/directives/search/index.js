
import angular from 'angular';
import template from './search.jade';
import { name as MarvelServiceModule } from 'services/marvel';
import './search.scss';

/* @ngInject */
function SearchController (MarvelService) {
  const dm = this;
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
    MarvelService.getComicsByTitleStartsWith(title).success(function(data){
      console.log(data);
      dm.results = data.data.results;
      dm.image = data.data.results[0].images[0].path + '/portrait_fantastic.' + data.data.results[0].images[0].extension;
      console.log(dm.image);
      console.log(dm.results[0].upc);
    })
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

export default angular.module('gstv.directives.search', [
  MarvelServiceModule
])
  .directive('gsSearch', gsSearch);