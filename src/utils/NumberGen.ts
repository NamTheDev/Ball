const NumberGen = {
    getRandomNumberInRange(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    generateNumberArray(min: number, max: number): number[] {
        return Array.from({ length: max - min + 1 }, (_, i) => min + i);
    }
}

export default NumberGen