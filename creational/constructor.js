// function Server(name, ip) {
//     this.name = name
//     this.ip = ip
// }

// Server.prototype.getUrl = function() {
//     return `https://${this.ip}:80`
// }

class Server {
    constructor(name, ip) {
        this.name = name
        this.ip = ip
    }

    getUrl() {
        return `https://${this.ip}:80`
    }
}

const aws = new Server('Aws Server', '82.33.33.33')
console.log(aws.getUrl())

// creational - для создания объетов
// structural - для добовления нового функционала к существующей системе
// behavioral - для налаживания и улучшения камуникации между уже существующими сущностями