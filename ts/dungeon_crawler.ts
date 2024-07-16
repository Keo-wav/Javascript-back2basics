module DungeonCrawler {
    export class Character {
        
    }

    export class Hero {
        protected _name:string
        protected _type:string
        protected _weapon:Weapon
        protected _hp:number

        constructor(name:string, type:string, weapon:Weapon, hp:number) {
            this._name = name
            this._type = type
            this._weapon = weapon
            this._hp = hp
        }

        get name() {
            return this._name
        }
        get weapon() {
            return this._weapon
        }
        set weapon(newWeapon:Weapon) { 
            if (newWeapon !== this._weapon) this._weapon = newWeapon 
        }

        attack(enemy:Hero) {
            console.log(this._name + ' attacks ' + enemy.name + ' with his ' + this._weapon.name + ' for ' + this._weapon.dmg + ' damage.')
        }
    }

    export class Weapon {
        protected _name:string
        protected _dmg:number

        constructor(name:string, dmg:number) {
            this ._name = name
            this ._dmg = dmg
        }

        get name() {
            return this._name
        }
        get dmg() {
            return this._dmg
        }
        set name(newName:string) {
            if (newName !== '') { this._name = newName }
        }
        set dmg(newDmg:number) { 
            this._dmg = newDmg 
        }
    }
}

let katana = new DungeonCrawler.Weapon('katana', 12)
let hiro = new DungeonCrawler.Hero('Hiro', 'samurai', katana, 25)

let greatSword = new DungeonCrawler.Weapon('Greatsword', 15)
let guyLeGueux = new DungeonCrawler.Hero('Guy Le Gueux', 'pécore', greatSword, 24)

console.log(hiro)

guyLeGueux.attack(hiro)