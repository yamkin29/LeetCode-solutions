function createHelloWorld() {
    const str = 'Hello World'
    return function(...args): string {
        return str;
    };
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */