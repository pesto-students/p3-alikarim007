// Create a memoize function that remembers previous inputs and stores them in cache so that itwon’t have to compute the same inputs more than once. The function will take an unspecifiednumber of integer inputs and a reducer method.

const memoize = (fn) => {
    let cache = {}
    return (...args) => {
        let cacheKey = args.map(n => n.toString() + '+').join('')
        if (cacheKey in cache) {
            return cache[cacheKey]
        } else {
            let result = args.reduce((acc, curr) => fn(acc, curr), 0);
            cache[cacheKey] = result;
            return result;
        }
    }
}

const add = (a, b) => a + b

const memoizeAdd = memoize(add)