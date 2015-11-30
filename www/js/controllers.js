angular.module('starter.controllers', ['ionic'])

.controller('MenuCtrl', function($scope, $timeout, $ionicModal, Characters, $ionicSideMenuDelegate) {
    // A utility function for creating a new project
    // with the given projectTitle
    var createCharacter = function(charName, charClass) {
        var newCharacter = Characters.newCharacter({name:charName, class:charClass});
        $scope.characters.push(newCharacter);
        Characters.save($scope.characters);
        $scope.selectCharacter(newCharacter, $scope.characters.length-1);
    };

    $scope.initData = function(){
        // Load or initialize projects
        $scope.characters = Characters.all();

        // Grab the last active, or the first project
        $scope.activeCharacter = $scope.characters[Characters.getLastActiveIndex()];
    };
    $scope.initData();

    // Called to select the given project
    $scope.selectCharacter = function(character, index) {
        $scope.activeCharacter = character;
        Characters.setLastActiveIndex(index);
        $ionicSideMenuDelegate.toggleLeft(false);
    };

    // Try to create the first project, make sure to defer
    // this by using $timeout so everything is initialized
    // properly
    $timeout(function() {
        if($scope.characters.length == 0) {
            while(true) {
                var projectTitle = prompt('Your first char name:');
                if(projectTitle) {
                    createCharacter(projectTitle, 'paladin');
                    break;
                }
            }
        }
    });


});
//
//.controller('DashCtrl', function($scope) {})
//
//.controller('ChatsCtrl', function($scope, Chats) {
//  // With the new view caching in Ionic, Controllers are only called
//  // when they are recreated or on app start, instead of every page change.
//  // To listen for when this page is active (for example, to refresh data),
//  // listen for the $ionicView.enter event:
//  //
//  //$scope.$on('$ionicView.enter', function(e) {
//  //});
//
//  $scope.chats = Chats.all();
//  $scope.remove = function(chat) {
//    Chats.remove(chat);
//  };
//})
//
//.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
//  $scope.chat = Chats.get($stateParams.chatId);
//})
//
//.controller('AccountCtrl', function($scope) {
//  $scope.settings = {
//    enableFriends: true
//  };
//});
