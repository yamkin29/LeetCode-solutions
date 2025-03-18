type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    let cash = new Map();
    let callCount = 0;

    return function(...args) {
        let key = args.join(',');

        if (cash.has(key)) {
            return cash.get(key)
        }

        const result = fn(...args);
        cash.set(key, result);
        callCount++;
        return result;
    }
}

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */