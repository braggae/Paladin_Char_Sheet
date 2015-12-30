// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
    .constant('CHAR_PARAMS', {
        'STR': 'STRENGTH',
        'DEX': 'DEXTERITY',
        'CONST': 'CONSTITUTION',
        'INT': 'INTELLIGENCE',
        'WIS': 'WISDOM',
        'CHA': 'CHARISMA'
    })
    .constant('ABILITY_SCORE_MODIFIER_DICTIONARY', {
        '1': '-5',
        '2': '-4',
        '3': '-4',
        '4': '-3',
        '5': '-3',
        '6': '-2',
        '7': '-2',
        '8': '-1',
        '9': '-1',
        '10': '0',
        '11': '0',
        '12': '+1',
        '13': '+1',
        '14': '+2',
        '15': '+2',
        '16': '+3',
        '17': '+3',
        '18': '+4',
        '19': '+4',
        '20': '+5',
        '21': '+5',
        '22': '+6',
        '23': '+6',
        '24': '+7',
        '25': '+7',
        '26': '+8',
        '27': '+8',
        '28': '+9',
        '29': '+9',
        '30': '+10'
    })
    .config(function($ionicConfigProvider)   {
        if (ionic.Platform.isAndroid())
            $ionicConfigProvider.scrolling.jsScrolling(false);
    })
    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleLightContent();
            }
        });
    });
