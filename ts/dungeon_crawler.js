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
})(DungeonCrawler || (DungeonCrawler = {}));
var katana = new DungeonCrawler.Weapon('katana', 12);
var hiro = new DungeonCrawler.Hero('Hiro', 'samurai', katana, 25);
var greatSword = new DungeonCrawler.Weapon('Greatsword', 15);
var guyLeGueux = new DungeonCrawler.Hero('Guy Le Gueux', 'pécore', greatSword, 24);
console.log(hiro);
guyLeGueux.attack(hiro);
