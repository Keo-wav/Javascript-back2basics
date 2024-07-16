module DungeonCrawler {
    export class Character {
        protected _id:number
        protected _hp:number

        constructor(id:number, hp:number) {
            this._id = id
            this._hp = hp
        }

        get id() {
            return this._id
        }
        get hp() {
            return this._hp
        }
    }

    export class Hero extends Character {
        protected _name:string
        protected _type:string
        protected _weapon:Weapon

        constructor(id:number, hp:number, name:string, type:string, weapon:Weapon) {
            super(id, hp)
            this._name = name
            this._type = type
            this._weapon = weapon
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

    export class Demon extends Character {
        protected _type:string
        protected _dmg:number

        constructor(id:number, hp:number, type:string, dmg:number) {
            super(id, hp)
            this._type = type
            this._dmg = dmg
        }
    }

    export class Weapon {
        protected _name:string
        protected _dmg:number

        constructor(name:string, dmg:number) {
            this._name = name
            this._dmg = dmg
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

    export class Fight {
        protected _p1:Hero
        protected _p2:Hero

        constructor(p1:Hero, p2:Hero) {
            this._p1 = p1
            this._p2 = p2
        }

        FightPresentation() {
            console.log('- Today, the Empire is pleased to present you a clash of titans :')
            console.log('- The mighty ' + this._p1.name + ' VS the legendary ' + this._p2.name)
            console.log('- Without further a due, let the fight begin')
        }

        Fight(player1:Hero, player2:Hero) {
            let turn:number = 0
            let p1:Hero = player1
            let p2:Hero = player2

            
        }
    }
}

let katana = new DungeonCrawler.Weapon('katana', 12)
let hiro = new DungeonCrawler.Hero(1, 25, 'Hiro', 'samurai', katana)

let greatSword = new DungeonCrawler.Weapon('Greatsword', 15)
let guyLeGueux = new DungeonCrawler.Hero(2, 24, 'Guy Le Gueux', 'pécore', greatSword)

let rottingSkeleton = new DungeonCrawler.Demon(3, 8, 'rotting skeleton', 5)
let plagueRat = new DungeonCrawler.Demon(4, 4, 'plague rat', 2)
let corpseLord = new DungeonCrawler.Demon(5, 20, 'corpse lord', 30)

let newFight = new DungeonCrawler.Fight(hiro, guyLeGueux)
newFight.FightPresentation()