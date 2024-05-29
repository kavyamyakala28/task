"use client";
import { useRouter } from "next/navigation";
// import React, { useState, useEffect } from "react";
const UserCard = ({ user }) => {
  return (
    <div className="justify-center bg-pink-300 rounded-md">
      <div className="p-4">
        <h2 className="text-l font-semibold">Name: {user.name}</h2>
        <p className="text-gray-900">username: @{user.username}</p>
        <p className="text-gray-900">Email Id: {user.email}</p>
      </div>
      <div className="border-t border-gray-200 p-4">
        <h3 className="text-lg font-semibold">Address</h3>
        <p>
          {user.address.street}, {user.address.suite}
        </p>
        <p>
          {user.address.city}, {user.address.zipcode}
        </p>
      </div>
      <div className="border-t border-gray-200 p-4">
        <h3 className="text-lg font-semibold">Contact</h3>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
      </div>
      <div className="border-t border-gray-200 p-4">
        <h3 className="text-lg font-semibold">Company</h3>
        <p>Name: {user.company.name}</p>
        <p>catchPhrase: {user.company.catchPhrase}</p>
        <p>Bs: {user.company.bs}</p>
      </div>
      <div className="p-4 flex justify-center"></div>
    </div>
  );
};

export default UserCard;
