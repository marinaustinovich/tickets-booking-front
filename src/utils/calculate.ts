import { CarriageTypesEnum } from 'enums';
import { CoachInfo } from 'types/tickets';

export const findMinValue = (obj: Record<string, any>): number => {
    if (!obj || typeof obj !== 'object' || Array.isArray(obj)) {
        return 0;
    }

    const values = Object.values(obj);
    const numbers = values
        .map(value => (typeof value === 'object' ? findMinValue(value) : value))
        .filter((value): value is number => typeof value === 'number');

    return numbers.length > 0 ? Math.min(...numbers) : 0;
};

export const calculateTotalPrice = (indexes: number[], coach: CoachInfo) => {
    let totalPrice = 0;

    for (const index of indexes) {
        if (coach.class_type === CarriageTypesEnum.FIRST) {
            totalPrice += coach.price;
        } else if (coach.class_type === CarriageTypesEnum.FOURTH) {
            totalPrice += coach.side_price;
        } else {
            if (index % 2 === 0) {
                totalPrice += coach.top_price;
            } else {
                totalPrice += coach.bottom_price;
            }
        }
    }

    return totalPrice;
};
