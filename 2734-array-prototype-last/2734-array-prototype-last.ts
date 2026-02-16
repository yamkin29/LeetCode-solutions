interface Array<T> {
    last(): T | -1;
}

Array.prototype.last = function() {
    if (this[this.length - 1] === null) {
        return null;
    } else if (this.length === 0) {
        return -1;
    }

    return this[this.length - 1];
}

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
