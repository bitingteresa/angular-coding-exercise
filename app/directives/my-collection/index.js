import angular from 'angular';
import template from './my-collection.jade';
import { name as ParseServiceModule } from 'services/parse';
import './my-collection.scss';

/* @ngInject */
function gsMyCollectionController (ParseService) {
  const dm = this;
  dm.myComicCollection = [];

  dm.getCollection = function () {
    ParseService.getCollection().success(function(data){
      dm.myComicCollection = data.results;
    });
  }; 

  dm.addComic = function (comicInfo) {
    ParseService.addComic(comicInfo).success(function(data){
      dm.myComicCollection.push(comicInfo);
    });
  }
  
  // dm.addComic({"upc": "1234567890", "comment":"slightly used", "description": "test description", "image": "http://i.annihil.us/u/prod/marvel/i/mg/b/c0/554ccb0c7a2c5/portrait_fantastic.jpg", "title": "test title"});
  dm.getCollection();
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
  ParseServiceModule 
])
  .directive('gsMyCollection', gsMyCollection);