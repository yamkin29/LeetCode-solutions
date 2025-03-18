type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    return {
        toBe: (otherVal) => {
            if (otherVal === val) {
                return true;
            } else {
                throw Error('Not Equal')
            }
        },

        notToBe: (otherVal) => {
            if (otherVal !== val) {
                return true; 
            } else {
                throw Error('Equal')
            }
        }
    }
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */