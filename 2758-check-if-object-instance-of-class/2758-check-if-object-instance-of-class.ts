function checkIfInstanceOf(obj: any, classFunction: any): boolean {
    const isValidConstructor =
    typeof classFunction === "function" ||
    (
      typeof classFunction === "object" &&
      classFunction !== null &&
      typeof classFunction[Symbol.hasInstance] === "function"
    );

    if (!isValidConstructor) return false;

    if (typeof obj === "number" && classFunction === Number) return true;
    if (typeof obj === "string" && classFunction === String) return true;
    if (typeof obj === "boolean" && classFunction === Boolean) return true;
    if (typeof obj === "bigint" && classFunction === BigInt) return true;
    if (typeof obj === "symbol" && classFunction === Symbol) return true;

    if (classFunction === Object) {
        if (obj !== null && typeof obj !== "undefined") return true;
        return false;
    }

    if (obj === null || (typeof obj !== "object" && typeof obj !== "function")){
        return false;
    }

    return obj instanceof classFunction;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */