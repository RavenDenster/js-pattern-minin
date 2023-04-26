class Database {
    constructor(data) {
        if(Database.exists) { // это тип поля класс и узнать их через создание объекта нельзя . при первом проходе ещё не известно тру или фалс
            return Database.instance
        }

        Database.instance = this
        Database.exists = true
        this.data = data
    }
    getData() {
        return this.data
    }
}

const mongo = new Database('MongoDB')
console.log(mongo.getData())

const SQL = new Database('SQL')
console.log(SQL.getData())
