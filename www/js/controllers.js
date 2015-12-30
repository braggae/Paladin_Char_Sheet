angular.module('starter.controllers', ['ionic'])

    .controller('MainCtrl', function ($scope, $timeout, $ionicModal, Characters, $ionicSideMenuDelegate, CHAR_PARAMS, ABILITY_SCORE_MODIFIER_DICTIONARY) {
        //console.log(Characters);

        var createCharacter = function (char) {
            var newCharacter = Characters.newCharacter(char);
            $scope.characters.push(newCharacter);
            Characters.save($scope.characters);
            $scope.selectCharacter(newCharacter, $scope.characters.length - 1);
        };

        $scope.initData = function () {
            // Load or initialize projects
            $scope.characters = Characters.all();

            // Grab the last active, or the first project
            $scope.activeCharacter = $scope.characters[Characters.getLastActiveIndex()];
            console.info($scope.activeCharacter);
        };
        $scope.initData();

        // Called to select the given project
        $scope.selectCharacter = function (character, index) {
            $scope.activeCharacter = character;
            Characters.setLastActiveIndex(index);
            $ionicSideMenuDelegate.toggleLeft(false);
        };

        // Try to create the first project, make sure to defer
        // this by using $timeout so everything is initialized
        // properly
        $timeout(function () {
            if ($scope.characters.length == 0) {
                $scope.newCharacter();
            }
        });

        $scope.newCharacter = function () {
            $scope.newCharModal.show();
        };

        $scope.closeNewCharacter = function () {
            $scope.newCharModal.hide();
        };

        $scope.createCharacter = function (char) {
            createCharacter(char);
            $scope.closeNewCharacter();
        };

        // Create and load the new char Modal
        $ionicModal.fromTemplateUrl('templates/modals/new-char.html', function (modal) {
            $scope.newCharModal = modal;
        }, {
            scope: $scope,
            animation: 'slide-in-up'
        });
        $scope.getAbilityModifier = function(abilityScore){
            return ABILITY_SCORE_MODIFIER_DICTIONARY[abilityScore];
        }
    })
    .controller('ActionsCtrl', function($scope,$ionicModal, CHAR_PARAMS, ABILITY_SCORE_MODIFIER_DICTIONARY){

        $scope.receiveDMG = function(){
            $scope.activeCharacter.hp -= 2;
        }
    })
    .directive('baseInfo', function () {
        return {
            restrict: 'E',
            templateUrl: './templates/base.html'
        }
    })
    .directive('abilitiesInfo', function () {
        return {
            restrict: 'E',
            templateUrl: './templates/abilities.html'
        }
    })
    .directive('hpInfo', function () {
        return {
            restrict: 'E',
            templateUrl: './templates/hp.html',
            controller: 'ActionsCtrl'
        }
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
