export const calculateCarValue = (model: string, year: number): number => {
    try {
        if (!model || !year || model.trim() === "" || year < 2000 || year > new Date().getFullYear() || typeof year !== 'number' || year < 0 || !Number.isInteger(year)) {
            throw new Error("Invalid input");
        }

        const alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
        let carValue: number = 0;

        for (let i = 0; i < model.length; i++) {
            const char = model[i].toLowerCase();
            if (alphabet.includes(char)) {
                carValue += alphabet.indexOf(char) + 1;
            }
        }

        carValue = carValue * 100 + year;
        return carValue;
    } catch (error) {
        console.error('Error in calculateCarValue:', error);
        throw error;
    }
};



