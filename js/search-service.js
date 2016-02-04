(function() {
    'use strict';

    function SearchService($http) {
        var service = {};

        //Returns the YouTube search results for the given query
        service.search = function(query) {
            return $http.get({
                url :'https://www.googleapis.com/youtube/v3/search',
                method: 'GET',
                params :{
                    'part': 'snippet',
                    'order': 'viewCount',
                    'q' : query,
                    'type':'video',
                    //Sharing this key in the hopes that it wont be abused 
                    'key':'AIzaSyCEIm9MHMWrTj_wv90QfYf5AIf3iVxuvEg'
                }});
        }        
        return service;
    }

    angular.module('SmartMirror')
        .factory('SearchService', SearchService);

}());