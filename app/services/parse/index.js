import angular from 'angular';
import PARSE_REST_KEY from 'config/parse.auth';

const PARSE_API =  'https://api.parse.com/1/classes';

class ParseService {
  constructor ($http) {
    this._$http = $http;
  }

  get (resource, config) {
    return this.dispatch('GET', resource, config);
  }

  post (resource, config) {
    return this.dispatch('POST', resource, config);
  }

  delete (resource, config) {
    return this.dispatch('DELETE', resource, config);
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

  deleteComic(config) {
    return this.delete('collection', config);
  }

  ////////////////////////////////////////////////////
  dispatch (requestType, resource, config) {
    const endpoint = [PARSE_API, resource].join('/');
    this._$http.defaults.headers.common['X-Parse-Application-Id'] = 'dtauSPmJtWaPoU4moKlB8cYsaJ9pCOMe9lCJ8uAI';
    this._$http.defaults.headers.common['X-Parse-REST-API-Key'] = PARSE_REST_KEY;
    this._$http.defaults.headers.common['Content-Type'] = 'application/json';
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