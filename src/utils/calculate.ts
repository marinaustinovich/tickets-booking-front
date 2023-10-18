import { TicketsCount } from '@store/ticket';
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
    return indexes.reduce((totalPrice, index) => {
        const price =
            coach.class_type === CarriageTypesEnum.FIRST
                ? coach.price
                : coach.class_type === CarriageTypesEnum.FOURTH
                ? coach.side_price
                : index % 2 === 0
                ? coach.top_price
                : coach.bottom_price;

        return totalPrice + price;
    }, 0);
};

export const compareSelectedSeatsAndTicketCount = (selectedSeats: number[], ticketsCount: TicketsCount) => {
    const adultCount = Number(ticketsCount.adult || 0);
    const childCount = Number(ticketsCount.child || 0);
   
    return selectedSeats.length === adultCount + childCount;
};
