'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";
import SearchList from './components/SearchList';


export default function Page() {

  const [userId, setUserId] = useState("");
  const router = useRouter();


  async function handleUserName() {

    router.push(`/api/${userId}`);

    console.log("user name", userId)
  }
  async function handletwo() {
    //home page is imported
    router.push(`/api/home`);
    // console.log("user name", userId)
  }
  useEffect(() => {
    handletwo();
  },);

  function handleOnChange(e) {
    setUserId(e.target.value);
    router.push(`/api/${e.target.value}`);

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
        <SearchList />
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
