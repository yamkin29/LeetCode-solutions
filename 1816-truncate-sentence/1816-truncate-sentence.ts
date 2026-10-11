function truncateSentence(s: string, k: number): string {
    const arrayWords = s.split(' ');
    return arrayWords.slice(0, k).join(' ');
};