import React from "react";

export default function ReviewCard({ user }) {
  const { review, avatar, username, reviewDate, rating } = user;
  return (
    <div className="testimonials_items flex sm:flex-row flex-col place-content-center 
    ring-1 ring-gray-200 h-fit gap-6 rounded-xl shadow-lg sm:p-6 p-4">
      <img
        className="avatar  w-24 md:w-24 sm:w-40 rounded-full ring-4 shadow-md ring-white m-auto"
        alt="user3"
        src={avatar}
      />
      <div className="users_testimonials flex-grow flex flex-col place-content-center gap-1 sm:gap-2 align-middle min-w-fit">
        <strong className="visitor">@{username}</strong>
        <em className="date">{reviewDate}</em>
        <p>{rating}</p>
        <p className="text-ellipsis">{review}</p>
      </div>
    </div>
  );
}
