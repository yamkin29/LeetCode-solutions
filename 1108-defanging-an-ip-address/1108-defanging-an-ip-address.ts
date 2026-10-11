function defangIPaddr(address: string): string {
    return [...address].map(index => {
        if (index === '.') {
            return '[.]'
        }

        return index;
    }).join('');
};