import React from "react";

export default function ReviewCard({ user }) {
  const { review, avatar, username, reviewDate, rating } = user;
  return (
    <div className="testimonials_items flex xs:flex-row place-content-center ring-1 ring-gray-200 h-fit gap-6 rounded-xl shadow-lg sm:p-6 p-4">
      <img
        className="avatar sm:w-36 w-24 rounded-full border ring-4 ring-white m-auto"
        alt="user3"
        src={avatar}
      />
      <div className="users_testimonials flex-grow flex flex-col place-content-center gap-2 align-middle min-w-fit">
        <strong className="visitor">@{username}</strong>
        <em className="date">{reviewDate}</em>
        <p>{rating}</p>
        <p>{review}</p>
      </div>
    </div>
  );
}
