function lengthOfLastWord(s: string): number {
    const str = s.trim();
    const lastWord = [...str.split(' ')].at(-1);
    return lastWord.length;
};