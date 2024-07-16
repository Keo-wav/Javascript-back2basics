var DungeonCrawler;
(function (DungeonCrawler) {
    var Character = /** @class */ (function () {
        function Character() {
        }
        return Character;
    }());
    DungeonCrawler.Character = Character;
    var Hero = /** @class */ (function () {
        function Hero(name, type, weapon, hp) {
            this._name = name;
            this._type = type;
            this._weapon = weapon;
            this._hp = hp;
        }
        Object.defineProperty(Hero.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Hero.prototype, "weapon", {
            get: function () {
                return this._weapon;
            },
            set: function (newWeapon) {
                if (newWeapon !== this._weapon)
                    this._weapon = newWeapon;
            },
            enumerable: false,
            configurable: true
        });
        Hero.prototype.attack = function (enemy) {
            console.log(this._name + ' attacks ' + enemy.name + ' with his ' + this._weapon.name + ' for ' + this._weapon.dmg + ' damage.');
        };
        return Hero;
    }());
    DungeonCrawler.Hero = Hero;
    var Weapon = /** @class */ (function () {
        function Weapon(name, dmg) {
            this._name = name;
            this._dmg = dmg;
        }
        Object.defineProperty(Weapon.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (newName) {
                if (newName !== '') {
                    this._name = newName;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Weapon.prototype, "dmg", {
            get: function () {
                return this._dmg;
            },
            set: function (newDmg) {
                this._dmg = newDmg;
            },
            enumerable: false,
            configurable: true
        });
        return Weapon;
    }());
    DungeonCrawler.Weapon = Weapon;
    var Fight = /** @class */ (function () {
        function Fight(p1, p2) {
            this._p1 = p1;
            this._p2 = p2;
        }
        Fight.prototype.FightPresentation = function () {
            console.log('- Today, the Empire is pleased to present you a clash of titans :');
            console.log('- The mighty ' + this._p1.name + ' VS the legendary ' + this._p2.name);
            console.log('- Without further a due, let the fight begin');
        };
        Fight.prototype.WhoStrikesFirst = function (_p1, _p2) {
            if ((Math.random() * 100) < 50) {
                this._p1 = _p2;
                console.log('- ' + _p1.name + ' starts.');
                console.log('- Player 1 : ' + this._p1.name);
                console.log('- Player 2 : ' + this._p2.name);
            }
            else {
                console.log('- ' + _p2.name + ' starts.');
                console.log('- Player 1 : ' + this._p1.name);
                console.log('- Player 2 : ' + this._p2.name);
            }
        };
        Fight.prototype.Fight = function (p1, p2) {
            var turn = 0;
        };
        return Fight;
    }());
    DungeonCrawler.Fight = Fight;
})(DungeonCrawler || (DungeonCrawler = {}));
var katana = new DungeonCrawler.Weapon('katana', 12);
var hiro = new DungeonCrawler.Hero('Hiro', 'samurai', katana, 25);
var greatSword = new DungeonCrawler.Weapon('Greatsword', 15);
var guyLeGueux = new DungeonCrawler.Hero('Guy Le Gueux', 'pécore', greatSword, 24);
var newFight = new DungeonCrawler.Fight(hiro, guyLeGueux);
newFight.FightPresentation();
newFight.WhoStrikesFirst(guyLeGueux, hiro);
