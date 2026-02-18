function isPalindrome(x: number): boolean {
    const str = String(x);
    const arr = str.split('');
    const reverseStr = arr.reverse().join('');

    return str === reverseStr ? true : false;
};