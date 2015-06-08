
import angular from 'angular';
import template from './search.jade';
import { name as MarvelServiceModule } from 'services/marvel';
import {name as ParseServiceModule} from 'services/parse'
import './search.scss';

/* @ngInject */
function SearchController (MarvelService, ParseService, $state) {
  const dm = this;
  dm.searchInput = "";
  dm.results = [];
  dm.dataLoad = false;
  
  // dm.getCharactersByNameStartsWith = function(name) {
  //   MarvelService.getCharactersByNameStartsWith(name).success(function(data){
  //     console.log(data);
  //   });
  // }
  dm.getComicsByTitleStartsWith = function(title){
    MarvelService.getComicsByTitleStartsWith(title).success(function(data){
      dm.dataLoad = true;
      console.log(data);
      console.log(dm.dataLoad);
      dm.results = data.data.results;
    })
  }

  dm.addComic = function (comicInfo) {
    ParseService.addComic(comicInfo).success(function(data){
      $state.go('my-collection');
    });
  }
  // dm.getCharacterByName('Rocket Raccoon');
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
  MarvelServiceModule,
  'ui.router'
])
  .directive('gsSearch', gsSearch);