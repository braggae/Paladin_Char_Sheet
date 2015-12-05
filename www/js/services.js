angular.module('starter.services', [])

    .factory('Classes', ['CHAR_PARAMS',function(CHAR_PARAMS){
        var classes = {
            paladin : {
                title:'Paladin',
                spellCastingParam : CHAR_PARAMS.CHA,
                hitDie : '1d10',
                damageAbility : CHAR_PARAMS.STR
            }
        };


        return {
            all: function() {
                return classes;
            },
            get: function(classId) {
                return classes[classId];
            }
        };
    }])

    .factory('Races', function(){
        var classes = {
            human : {
                title:'Human',
                speed: 30
            }
        };

        return {
            all: function() {
                return classes;
            },
            get: function(classId) {
                return classes[classId];
            }
        };
    })

    .factory('Characters', ['Classes', 'Races',function(Classes, Races) {
      return {
          all: function(){
              var charString = window.localStorage['characters'];
              if(charString) {
                  return angular.fromJson(charString);
              }
              return [];
          },
          save: function(char) {
              console.log(char);
              window.localStorage['characters'] = angular.toJson(char);
          },
          newCharacter: function(char){
              console.log(char);
              var Class = Classes.get(char.class);
              var Race = Races.get(char.race);
              char.level = 1;
              char.proficiencyBonus = 2;
              char.experiencePoints = 0;
              char.hitDie = Class.hitDie;
              char.spellCastingParam = Class.spellCastingParam;
              char.damageAbility = Class.damageAbility;
              char.speed = Race.speed;
              return char;
          },

          getLastActiveIndex: function() {
              return parseInt(window.localStorage['lastActiveProject']) || 0;
          },
          setLastActiveIndex: function(index) {
              window.localStorage['lastActiveProject'] = index;
          }
      }
    }]);
//.factory('Chats', function() {
//  // Might use a resource here that returns a JSON array
//
//  // Some fake testing data
//  var chats = [{
//    id: 0,
//    name: 'Ben Sparrow',
//    lastText: 'You on your way?',
//    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
//  }, {
//    id: 1,
//    name: 'Max Lynx',
//    lastText: 'Hey, it\'s me',
//    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
//  }, {
//    id: 2,
//    name: 'Adam Bradleyson',
//    lastText: 'I should buy a boat',
//    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
//  }, {
//    id: 3,
//    name: 'Perry Governor',
//    lastText: 'Look at my mukluks!',
//    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
//  }, {
//    id: 4,
//    name: 'Mike Harrington',
//    lastText: 'This is wicked good ice cream.',
//    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
//  }];
//
//  return {
//    all: function() {
//      return chats;
//    },
//    remove: function(chat) {
//      chats.splice(chats.indexOf(chat), 1);
//    },
//    get: function(chatId) {
//      for (var i = 0; i < chats.length; i++) {
//        if (chats[i].id === parseInt(chatId)) {
//          return chats[i];
//        }
//      }
//      return null;
//    }
//  };
//});
