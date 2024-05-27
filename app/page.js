'use client'
import { useRouter } from 'next/navigation'
import { useState } from "react";


export default function Page() {
  const [userName, setUserName] = useState("");
  const router = useRouter();

  async function handleUserName() {

    router.push(`/api/${userName}`);
    console.log("user name", userName)
  }

  function handleOnChange(e) {
    setUserName(e.target.value);
  }

  return (
    <div className="flex w-full border-black justify-center border outline-none">
      <div>
        <input
          type="search"
          placeholder="Search"
          onChange={handleOnChange}
          className="px-3 py-1 rounded outline-none text-zinc-600 bg-gray-300"
        ></input>
      </div>
      <div className="h-5">
        <button
          type="submit"
          onClick={handleUserName}
          className="inline-block rounded px-2 py-1 bg-teal-600 text-slate-50"
        >
          Search
        </button>
      </div>
      <div>
      </div>
    </div>
  );
}
