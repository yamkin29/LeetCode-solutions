type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

function isEmpty(obj: Obj): boolean {
    if (Array.isArray(obj) && obj.length === 0) {
        return true;
    } else if (Object.keys(obj).length === 0) {
        return true;
    } else {
        return false;
    }
};