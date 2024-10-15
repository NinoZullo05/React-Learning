import React from 'react';

const CurrencyInput = ({ currencies, selectedCurrency, onChangeCurrency, onChangeAmount, amount }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 transition-all duration-300 hover:shadow-xl">
      <input
        type="number"
        value={amount}
        onChange={onChangeAmount}
        className="w-full mb-4 p-3 text-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-300"
      />
      <select
        value={selectedCurrency}
        onChange={(e) => onChangeCurrency(e.target.value)}
        className="w-full p-3 text-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-300 cursor-pointer"
      >
        {currencies.map(currency => (
          <option key={currency} value={currency}>{currency}</option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyInput;