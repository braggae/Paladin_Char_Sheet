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
                title:'Human'
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
    });
