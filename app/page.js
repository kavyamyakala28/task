// 'use client'
// import { useState } from "react";
// import { useRouter } from "next/router";


// export default function Page() {



//   const [userName, setUserName] = useState("");
//   const [userData, setUserData] = useState([]);

//   function handleUserName() {
//     setUserData(getUser()
//     )
//     console.log(userData)
//   }
//   function handleOnchange(e) {
//     setUserName(e.target.value);

//   }
//   async function getUser() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     let data = await response.json();
//     return data;
//   }
//   return (
//     <div className="flex w-full border-black justify-center border outline-none">
//       <div className="h-2">
//         <input
//           type="search"
//           placeholder="Search"
//           onChange={handleOnchange}
//           className="px-2  rounded outline-none"
//         ></input>

//       </div>
//       <div className="h-5"><button
//         type="submit"

//         onClick={handleUserName}
//         className="inline-block rounded px-2 bg-teal-600 text text-slate-50"
//       >
//         Search
//       </button></div>
//       <div>
//         <ul>
//           {userData.map((user) => (
//             <li key={user.id}>{user.name}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
'use client'
import { useState } from "react";

export default function Page() {
  const [userName, setUserName] = useState(null);
  const [userData, setUserData] = useState([]);

  async function handleUserName() {
    const users = await getUser();
    console.log("user name", userName)

    setUserData(users);
    console.log(users);

  }

  function handleOnChange(e) {
    setUserName(e.target.value);
  }

  async function getUser() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userName}`);
    const data = await response.json();
    console.log(data)
    return data;
  }

  return (
    <div className="flex w-full border-black justify-center border outline-none">
      <div className="h-2">
        <input
          type="search"
          placeholder="Search"
          onChange={handleOnChange}
          className="px-2 rounded outline-none"
        ></input>
      </div>
      <div className="h-5">
        <button
          type="submit"
          onClick={handleUserName}
          className="inline-block rounded px-2 bg-teal-600 text-slate-50"
        >
          Search
        </button>
      </div>
      <div>
        <ul>
          {userData != [] && userData.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

