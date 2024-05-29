import React from "react";

export default function SearchList({ results }) {
  if (!results || results.length === 0) {
    return <div></div>;
  }

  return (
    <div>
      <div className="absolute bg-white border border-gray-300 w-48 mt-1 rounded shadow-lg z-10">
        {results.map((user) => (
          <div key={user.id} className="p-2 hover:bg-gray-100 cursor-pointer">
            {user.name}
          </div>
        ))}
      </div>
    </div>
  );
}
