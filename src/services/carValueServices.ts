export const calculateCarValue = (model: string, year: number): number => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let carValue = 0;

    for (let i = 0; i < model.length; i++) {
        const char = model[i].toLowerCase();
        if (alphabet.includes(char)) {
            carValue += alphabet.indexOf(char) + 1;
        }
    }

    carValue = carValue * 100 + year;
    return carValue;
};