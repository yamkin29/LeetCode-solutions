function createHelloWorld() {
    const str: string = 'Hello World'
    return function(...args): string {
        return str;
    };
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */