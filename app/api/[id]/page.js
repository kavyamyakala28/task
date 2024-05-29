'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import UserDetails from "../../components/Userdetails";

export default function page({ params }) {
  const [userData, setUserData] = useState([]);
  async function handle() {
    const data = await getUser()
    console.log('refresh ', data)
  }

  async function getUser() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    console.log("params=", params.id)
    const data = await response.json();
    setUserData([data]);

    // console.log("data==", data)
    return data;
  }
  useEffect(() => {
    getUser();
  }, [params.id]);

  return (
    <div className=' m-auto t-0 justify-center'>
      {userData.length > 0 && userData.map((user) => (
        <UserDetails key={user.id} user={user} />
      ))}
      <button
        //jhgc
        onClick={handle}
        className=" rounded px-4 py-2 bg-teal-700 text-slate-50"
      >
        Refresh
      </button>
    </div>
  )
}
