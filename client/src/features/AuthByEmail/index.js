const arr = [1, 2, 2, 10, 5, 3, 3, 4, 7]

Array.prototype.findUnique = function () {
    const map = {}

    this.forEach((el) => {
        if (map[el] !== undefined) {
            map[el] = ++map[el]
        } else {
            map[el] = 1
        }
    })

    const arr = []

    for (const key of map) {
        if (map[key] === 1) arr.push(+key)
    }

    return arr
}

console.log(arr.findUnique())
