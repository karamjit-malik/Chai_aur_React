import { useState,useCallback,useEffect, useRef} from "react";

// function App() {
//   const [password, setPassword] = useState("");
//   const [letters, setLetters] = useState(false);
//   const [numbers, setNumbers] = useState(false);
//   const [length, setLength] = useState(8);

//   const passwordGenerate = useCallback(() => {
//     let res = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//     if (numbers) str += "0123456789";
//     if (letters) str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

//     for (let i = 0; i < length; i++) {
//       res += str.charAt(Math.floor(Math.random() * str.length));
//     }

//     setPassword(res);
//   }, [length, letters, numbers]);

//   useEffect(() => {
//     passwordGenerate();
//   },[length,letters,setPassword,numbers,passwordGenerate]);
//   return (
//     <>
//       <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[70vw] h-[30vh] bg-gradient-to-r from-gray-400 to-transparent rounded-2xl shadow-2xl p-6">
        
//         <h1 className="text-center text-2xl font-bold">Password Generator</h1>

//         <div className="mt-6 flex justify-center items-center gap-4">
//           <input
//             type="text"
//             value={password}
//             placeholder="Password"
//             readOnly
//             className="w-64 px-3 py-2 rounded-lg bg-white text-black shadow-md outline-none"
//           />

//           {/* <button
//             className="px-4 py-2 bg-black text-white rounded-lg shadow-md"
//             onClick={passwordGenerate}
//           >
//             Generate
//           </button> */}

//           <button
//             className="px-3 py-2 bg-blue-500 text-white rounded-lg"
//           >
//             Copy
//           </button>
//         </div>

//         <div className="flex justify-evenly w-3/4 mx-auto mt-6">
//           <label>Length: {length}</label>

//           <input
//             type="range"
//             min={6}
//             max={100}
//             value={length}
//             onChange={(e) => setLength(Number(e.target.value))}
//           />

//           <label>Numbers</label>
//           <input
//             type="checkbox"
//             checked={numbers}
//             onChange={() => setNumbers((prev) => !prev)}
//           />

//           <label>Symbols</label>
//           <input
//             type="checkbox"
//             checked={letters}
//             onChange={() => setLetters((prev) => !prev)}
//           />
//         </div>
//       </div>
//     </>
//   );
// }


function App()
{
  const [password,setpassword] = useState("")
  const [numbers,setnumbers] = useState(false)
  const [char,setchar] = useState(false)
  const [length,setlength] = useState(6)
  const passwordref = useRef(null)
  const copypass = useCallback(()=>{
    passwordref.current?.select()
    navigator.clipboard.writeText(password)
  },[passwordref,password])
  const passwordgenerator = useCallback(()=>
  {
    let res = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numbers)
      str+='0123456789'
    if(char)
      str+='!@#$%^&*()_+~`|}{[]:;?><,./-='
    for(let i = 0 ; i<length ; i++)
    {
      res+=str.charAt(Math.floor(Math.random()*str.length))
    }
    setpassword(res)
  },[length,numbers,char])
  useEffect(()=>
  {
    passwordgenerator()
  },[length,numbers,char,passwordgenerator])
  return(
    <>
    <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#8D9D90] to-[#878E46] rounded-2xl w-[70vw] h-[40vh] p-6 shadow-2xl">
      <h1 className="text-center font-semibold">Password Generator</h1>
      <div className="text-center flex justify-evenly">
        <input type="text" value={password} placeholder="Password" readOnly className="w-64 px-3 py-2 rounded-lg bg-white text-black shadow-md outline-none mt-16" ref={passwordref}/>
        <button onClick={copypass} className="px-3 py-2 bg-blue-500 text-white rounded-lg mt-16">Copy</button>
      </div>
      <div className="flex justify-evenly w-3/4 mx-auto mt-6">
      <label>Length : {length}</label>
      <input type="range" min={6} max={100} value={length} onChange={(e) => setlength(Number(e.target.value))}/>
      <label>Numbers</label>
      <input type="checkbox" checked={numbers} onChange={() => setnumbers((prev) => !prev)}/>
      <label>Symbols</label>
      <input type="checkbox" checked={char} onChange={() => setchar((prev) => !prev)}/>
      </div>
    </div>
    </>
  )
}

export default App;
