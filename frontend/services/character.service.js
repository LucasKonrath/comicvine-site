modulo.factory("characterService", function ($http, $sce) {
    return ({
        getCharacters:getCharacters
    });

       
  

    function getCharacters(){
          var url = "http://comicvine.com/api/characters/?api_key=b7173935a57c2526a44b2affdc5d37ff7a5bc1a3&format=jsonp&sort=name&field_list=deck,name,site_detail_url,aliases,origin,image&json_callback=angular.callbacks._0"
    var trustedUrl = $sce.trustAsResourceUrl(url);
        console.log('URL ENVIADA:' + trustedUrl);
        return $http.jsonp(trustedUrl, {jsonpCallbackParam: 'callback'});
    }

});