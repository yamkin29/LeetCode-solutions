function* fibGenerator(): Generator<number, any, number> {
    let a = 0;
    let b = 1;

    yield a;
    yield b;

    while(true) {
        let next = a + b;
        yield next;

        a = b;
        b = next;
    }
}

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */