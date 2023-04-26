class SimpleMembership {
    constructor(name) {
        this.name = name
        this.cost = 50
    }
}

class StandardMembership {
    constructor(name) {
        this.name = name
        this.cost = 150
    }
}

class PremiumMembership {
    constructor(name) {
        this.name = name
        this.cost = 500
    }
}

class MemberFactory {
    static list = {
        simple: SimpleMembership,
        standard: StandardMembership,
        premium: PremiumMembership
    }
    create(name, type = 'simple') {
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple // здесь уже нужный класс по цене
        const member = new Membership(name) // Membership с именнем это один из 3 классов
        member.type = type // поскольку у нас в изначальных объектах нет type мы его вставляем
        member.define = function() {
            console.log(`${this.name} (${this.type}): ${this.cost}`)
        }
        return member
    }
}

const factory = new MemberFactory()

const members = [
    factory.create('Raven', 'simple'),
    factory.create('Daly', 'premium'),
    factory.create('Sebastian', 'standard'),
    factory.create('It'),
]

members.forEach(m => {
    m.define()
})
console.log(members);