function reverse(x: number): number {
    const sign = Math.sign(x);
    let n = Math.abs(x);
    let rev = 0;

    while (n > 0) {
        const digit = n % 10;
        rev = rev * 10 + digit;
        n = Math.floor(n / 10);
    }

    if (rev > Math.pow(2, 31)) {
        return 0;
    }

    return rev * sign;
};