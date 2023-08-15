import { Request, Response } from 'express';

export const getCarValue = (req: Request, res: Response) => {
    try {
        const { model, year } = req.body;

        if (!model || !year) {
            return res.status(400).json({ error: 'Model and year are required' });
        }

        if (typeof model !== 'string') {
            return res.status(400).json({ error: 'Model should be a string' });
        }

        if (typeof year !== 'number' || isNaN(year) || year < 2000 || year > new Date().getFullYear() || year < 0) {
            return res.status(400).json({ error: 'Invalid year' });
        }

        const carValue = calculateCarValue(model, year);

        res.json({ car_value: carValue });
    } catch (error) {
        console.error('Error in getCarValue:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


const calculateCarValue = (model: string, year: number): number => {
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
}