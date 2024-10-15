import React, { useState, useEffect } from 'react';
import { RefreshCw, Sun, Moon } from 'lucide-react';
import CurrencyInput from './CurrencyInput';

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [exchangeRate, setExchangeRate] = useState(1);
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`)
      .then((response) => response.json())
      .then((data) => {
        setCurrencies(Object.keys(data.rates));
        setExchangeRate(data.rates[toCurrency]);
      });
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = (amount * exchangeRate).toFixed(2);
  } else {
    toAmount = amount;
    fromAmount = (amount / exchangeRate).toFixed(2);
  }

  const handleFromAmountChange = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  };

  const handleToAmountChange = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  };

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4 transition-colors duration-300">
      <div className="bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-4xl transition-colors duration-300">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Currency Converter</h1>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <CurrencyInput
            currencies={currencies}
            selectedCurrency={fromCurrency}
            onChangeCurrency={setFromCurrency}
            onChangeAmount={handleFromAmountChange}
            amount={fromAmount}
          />
          <div className="flex justify-center self-center">
            <button
              onClick={handleSwapCurrencies}
              className="bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 text-white rounded-full p-3 transition-all duration-300 transform hover:scale-110"
            >
              <RefreshCw size={24} />
            </button>
          </div>
          <CurrencyInput
            currencies={currencies}
            selectedCurrency={toCurrency}
            onChangeCurrency={setToCurrency}
            onChangeAmount={handleToAmountChange}
            amount={toAmount}
          />
        </div>
        <div className="mt-8 text-center text-gray-600 dark:text-gray-400">
          <p>1 {fromCurrency} = {exchangeRate.toFixed(4)} {toCurrency}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
