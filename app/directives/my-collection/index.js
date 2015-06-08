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

  dm.deleteComic = function (comicInfo) {
    ParseService.deleteComic(comicInfo).success(function(data){
      window.location.reload(true);
    });
  }
  
  dm.deleteComic({objectId: 'ruCq4ym3cc'});
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