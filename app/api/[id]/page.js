'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import UserDetails from "../../components/Userdetails";

export default function page({ params }) {
  const [userData, setUserData] = useState([]);

  async function getUser() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    // console.log(params.id)
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
    </div>
  )
}
