function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    let result = [];
    arr.forEach((item, index) => {
        result.push(fn(item, index));
    })

    return result;
};