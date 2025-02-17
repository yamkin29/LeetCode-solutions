type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let acc = init;

    nums.forEach((item) => {
        acc = fn(acc, item);
    })

    return acc;
}