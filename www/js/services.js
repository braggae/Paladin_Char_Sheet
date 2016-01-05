angular.module('starter.services', [])

    .factory('Classes', ['CHAR_PARAMS', function (CHAR_PARAMS) {
        var classes = {
            paladin: {
                title: 'Paladin',
                spellCastingParam: CHAR_PARAMS.CHA,
                hitDie: '1d10',
                damageAbility: CHAR_PARAMS.STR
            }
        };


        return {
            all: function () {
                return classes;
            },
            get: function (classId) {
                return classes[classId];
            }
        };
    }])

    .factory('Races', function () {
        var classes = {
            human: {
                title: 'Human',
                speed: 30
            }
        };

        return {
            all: function () {
                return classes;
            },
            get: function (classId) {
                return classes[classId];
            }
        };
    })

    .factory('Characters', ['Classes', 'Races', function (Classes, Races) {
        return {
            all: function () {
                var charString = window.localStorage['characters'];
                if (charString) {
                    return angular.fromJson(charString);
                }
                return [];
            },
            save: function (char) {
                console.log(char);

                window.localStorage['characters'] = angular.toJson(char);
            },
            newCharacter: function (char) {
                var Class = Classes.get(char.class);
                var Race = Races.get(char.race);
                char.level = 1;
                char.proficiencyBonus = 2;
                char.experiencePoints = 0;
                char.hitDie = Class.hitDie;
                char.spellCastingParam = Class.spellCastingParam;
                char.damageAbility = Class.damageAbility;
                char.speed = Race.speed;
                char.hp = char.max_hp;
                console.log(char);
                return char;
            },

            getLastActiveIndex: function () {
                return parseInt(window.localStorage['lastActiveProject']) || 0;
            },
            setLastActiveIndex: function (index) {
                window.localStorage['lastActiveProject'] = index;
            }
        }
    }])

    .factory('Dice', function () {
        var parseDiceType = function (type) {
            var parts = type.split('d');
            return {
                diceType: parts[1],
                throwTimes: parts[0]
            }
        };

        var throwOneDice = function (max) {
            return Math.floor(Math.random() * max) + 1;
        };

        return {
            throwDice: function (type, modifier) {
                var parsedDice = parseDiceType(type);
                var throwResult = [];
                var sum = 0;
                var total = modifier;
                var res = 0;
                for (var i = 0; i < parsedDice.throwTimes; i++){
                    res = throwOneDice(parsedDice.diceType);
                    throwResult.push(res);
                    sum += res;
                    total += res;
                }
                return {
                    throwResult : throwResult,
                    throwSum : sum,
                    throwTotal : total,
                    throwTitle : throwResult.join(' + ') + ' = ' + sum + ' + ' + modifier + ' = ' + total
                }
            }
        }
    });
