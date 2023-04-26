class User {
    constructor(name) {
        this.name = name
        this.room = null
    }

    send(message, to) {
        this.room.send(message, this, to) // сообщение, от кого, кому
    }

    receive(message, from) {
        console.log(`${from.name} => ${this.name}: ${message}`)
    }
}

class ChatRoom {
    constructor() {
        this.users = {}
    }

    reqister(user) {
        this.users[user.name] = user
        user.room = this
    }

    send(message, from, to) {
        if(to) {
            to.receive(message, from)
        } else {
            Object.keys(this.users).forEach(key => {
                if (this.users[key] !== from) {
                    this.users[key].receive(message, from)
                }
            })
        }
    }
}

const raven = new User('Raven')
const dely = new User('Dely')
const sebas = new User('Sebastean')

const room = new ChatRoom()

room.reqister(raven)
room.reqister(dely)
room.reqister(sebas)

raven.send('Hello!', dely)
dely.send('Sub', raven)
sebas.send('Hi all')