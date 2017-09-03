modulo.controller('LandingController',function($scope,characterService,$location){
    

    
    obterPersonagens = function(){
        
            characterService.getCharacters().then(
            
                function(response){
                    $scope.characters = response.data.results;
                }
                
            );
        
    }
        obterPersonagens();
    
});