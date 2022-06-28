import CurrencyConverterPage from "../pages/CurrencyConverterPage";
import ExchangeRatesPage from "../pages/ExchangeRatesPage";

export const mainRoutes = [
    {
        name: "Exchange Rates",
        path: "/",
        componet: ExchangeRatesPage
    },
    {
        name: "Currency Converter",
        path: "/currency-converter",
        componet: CurrencyConverterPage
    }
];