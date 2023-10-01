import { GAMES, Currency, GameFromServer, GamesFromServer } from './data';

export function getGamesFromServer(): Promise<GamesFromServer> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(GAMES);
        }, 1000);
    });
}

// const CurrencyObj = {
//     RUB: 'RUBLES',
//     EUR: 'EUR',
//     USD: 'USD',
// };

const test = 123123;

export function priceWithCurrency(
    price: NonNullable<GameFromServer['price']>, 
    currency: Currency,
): string {
    if (currency === Currency.RUB) {
        return `${price} ₽`;
    }

    if (currency === Currency.USD) {
        return `${price} $`;
    }

    return `${price} €`;
}

priceWithCurrency(1000, Currency.RUB)