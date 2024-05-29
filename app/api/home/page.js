'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react'
import UserDetails from "../../components/Userdetails";
import SearchList from '@/app/components/SearchList';



export default function page() {
    const [userData, setUserData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    // const [userId, setUserId] = useState("");
    // const items = ["apple", "banana", "grape", "orange", "pineapple"];
    // const filteredItems = items.filter(item => item.includes(searchTerm));

    async function fetchUserData() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data = await response.json();
        setUserData(data);
        setFilteredData(data);
        console.log("data==", data);
        return data;
    }

    // const filteredItems = data.filter(data => data.includes(searchTerm));

    // function handleOnChange(e) {
    //     const id = e.target.value;
    //     setUserId(id);
    //     fetchUserData(id);
    //     const term = e.target.value;
    //     setSearchTerm(term);

    //     if (!term) {
    //         setFilteredData(userData);
    //         return;
    // }

    // useEffect(() => {
    //     fetchUserData();
    // }, []);
    function handleOnChange(e) {
        const term = e.target.value;
        setSearchTerm(term);

        if (!term) {
            setFilteredData(userData);
            return;
        }

        const filtered = userData.filter(user =>
            user.id.toString().includes(term.toLowerCase()) ||
            user.email.toLowerCase().includes(term.toLowerCase()) ||
            user.name.toLowerCase().includes(term.toLowerCase())
        );

        setFilteredData(filtered);
    }

    useEffect(() => {
        fetchUserData();
    }, []);


    return (
        <div className='w-screen justify-center m-auto t-0 '>
            <div className="flex  justify-center  outline-none">
                <div>
                    <input
                        type="search"
                        placeholder="Search"

                        onChange={handleOnChange}
                        // setResults={setResult}
                        className="px-3 py-1 rounded outline-none text-zinc-600 bg-gray-300"
                    ></input>
                    {searchTerm && (
                        <SearchList results={filteredData} />
                    )}
                    <SearchList />
                </div>
                <div className="h-5">
                    <button
                        type="submit"
                        // onClick={handleUserName}
                        className="inline-block rounded px-2 py-1 bg-teal-600 text-slate-50"
                    >
                        Search
                    </button>

                </div>
                <div>
                </div>
            </div>
            <div className="w-full text-base grid grid-cols-3 gap-4 bg-yellow">
                {filteredData.map((user) => (
                    <UserDetails key={user.id} user={user} />
                ))}
            </div>
            <button
                //jhgc
                // onClick={handle}
                className=" rounded px-4 py-2 bg-teal-700 text-slate-50"
            >
                Refresh
            </button>
        </div>
    )
}













