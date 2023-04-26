class MySum {
    constructor(initialValue = 42) {
        this.sum = initialValue
    }

    add(value) {
        this.sum += value
        return this
    }
}

const sum1 = new MySum()
console.log(sum1.add(3).add(4).add(32).add(45).sum) // поскольку мы вызываем сам контекс, тоесть объект, мы можем сразу у него вызвать ещё один метод или переменную

const sum2 = new MySum(0)
console.log(sum2.add(1).add(4).add(7).sum)