"use client"
import { useEffect, useState } from "react";

export default function Userdetails({ params }) {
    const [searchId, setSearchId] = useState(parseInt(params.searchId));

    const [userData, setUserData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/users/${searchId}`
                );
                const data = await response.json();

                setUserData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [searchId]);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{userData.name}</h2>
            <p>{userData.email}</p>
        </div>
    );
}