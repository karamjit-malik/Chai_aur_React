import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import bg from "./assets/pexels-weekendplayer-187041.jpg";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const swap = () => {
    const tempAmount = amount;
    const tempCurrency = from;

    setAmount(convertedAmount);
    setConvertedAmount(tempAmount);
    setFrom(to);
    setTo(tempCurrency);
  };

  const convert = () => {
    const rate = currencyInfo[to];
    if (!rate) return;
    setConvertedAmount(amount * rate);
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={Object.keys(currencyInfo)}
            selectedCurrency={from}
            onAmountChange={(val) => setAmount(val)}
            onCurrencyChange={(cur) => setFrom(cur)}
          />

          <div className="relative w-full h-0.5 my-4">
            <button
              type="button"
              onClick={swap}
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 
                border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
            >
              Swap
            </button>
          </div>

          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={Object.keys(currencyInfo)}
            selectedCurrency={to}
            onCurrencyChange={(cur) => setTo(cur)}
            amountDisabled={true}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg mt-4"
          >
            Convert
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
