type F = (x: number) => number;

function compose(functions: F[]): F {
    if (functions.length === 0) {
        return function(x: number): number {
            return x;
        }
    }

    return function (x: number): number {
        return functions.reduceRight((acc, fn) => {
            return (x: number) => fn(acc(x));
        }, (x:number) => x)(x)
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */