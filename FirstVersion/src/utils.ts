import { GAMES, TGame } from './data';

export function getGamesFromServer(): Promise<TGame[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(GAMES);
        }, 1000);
    });
}

export function priceWithCurrency(price: number) {
    return `${price} Руб.`;
}
