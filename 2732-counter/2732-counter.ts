function createCounter(n: number): () => number {
    let counter: number = -1;
    return function() {
        counter++;
        return n + counter;
    }
}


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 *
 */