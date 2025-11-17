import { useState,useCallback,useEffect } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [letters, setLetters] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [length, setLength] = useState(8);

  const passwordGenerate = useCallback(() => {
    let res = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbers) str += "0123456789";
    if (letters) str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    for (let i = 0; i < length; i++) {
      res += str.charAt(Math.floor(Math.random() * str.length));
    }

    setPassword(res);
  }, [length, letters, numbers]);

  useEffect(() => {
    passwordGenerate();
  },[length,letters,setPassword,numbers,passwordGenerate]);
  return (
    <>
      <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[70vw] h-[30vh] bg-gradient-to-r from-gray-400 to-transparent rounded-2xl shadow-2xl p-6">
        
        <h1 className="text-center text-2xl font-bold">Password Generator</h1>

        <div className="mt-6 flex justify-center items-center gap-4">
          <input
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            className="w-64 px-3 py-2 rounded-lg bg-white text-black shadow-md outline-none"
          />

          {/* <button
            className="px-4 py-2 bg-black text-white rounded-lg shadow-md"
            onClick={passwordGenerate}
          >
            Generate
          </button> */}

          <button
            className="px-3 py-2 bg-blue-500 text-white rounded-lg"
          >
            Copy
          </button>
        </div>

        <div className="flex justify-evenly w-3/4 mx-auto mt-6">
          <label>Length: {length}</label>

          <input
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />

          <label>Numbers</label>
          <input
            type="checkbox"
            checked={numbers}
            onChange={() => setNumbers((prev) => !prev)}
          />

          <label>Symbols</label>
          <input
            type="checkbox"
            checked={letters}
            onChange={() => setLetters((prev) => !prev)}
          />
        </div>
      </div>
    </>
  );
}

export default App;
