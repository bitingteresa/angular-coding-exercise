import angular from 'angular';
import PARSE_JAVASCRIPT_KEY from 'config/parse.auth';

const PARSE_API = 'https://dtauSPmJtWaPoU4moKlB8cYsaJ9pCOMe9lCJ8uAI:javascript-key=' + PARSE_JAVASCRIPT_KEY + '@api.parse.com/1/classes';

class ParseService {
  constructor ($http) {
    this._$http = $http;
  }

  get (resource) {
    return this.dispatch('GET', resource);
  }

  post (resource, config) {
    return this.dispatch('POST', resource, config);
  }
  // [String] Resource - the API resource to be accessed.
  // [Number] Id - the id of the resource to be accessed.
  // (Optional) [Object] Config - Additional request configuration.
  // Returns -> Promise -> (Response, Error)
  getOne (resource, id, config) {
    return this.get(`${resource}/${id}`, config);
  }

 
  getCollection(config) {
    return this.get('collection', config);
  }

  addComic(config) {
    return this.post('collection', config);
  }

  ////////////////////////////////////////////////////
  dispatch (requestType, resource, config) {
    const endpoint = [PARSE_API, resource].join('/');

    return this._$http[requestType.toLowerCase()](endpoint, config);
  }
}
ParseService.$inject = ['$http'];

// ------------------------------------
/* @ngInject */
function config ($httpProvider) {
  // $httpProvider.interceptors.push(ParseApiInterceptor);
}

export default angular.module('gstv.services.parse', [])
  .service('ParseService', ParseService)
  .config(config);