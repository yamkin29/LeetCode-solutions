type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    return arr.reduce((acc, item, index) => {
        if (fn(item, index)) {
            acc.push(item);
        }

        return acc;
    }, [])
}