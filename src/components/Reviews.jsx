import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

export default function Reviews() {
  const [userReviews, setUserReviews] = useState([]);

  const rating = (stars) => `⭐⭐⭐⭐⭐`.slice(5 - stars, 10 - stars);  

  const fetchUser = () => {
    fetch("https://randomuser.me/api/?results=3")
      .then((response) => response.json())
      .then((data) => {
        setUserReviews(
          data.results.map((result) => {
            return {
              username: result.login.username,
              avatar: result.picture.large,
              reviewDate: new Date(result.registered.date).toLocaleDateString(),
              rating: rating(Math.floor(Math.random() * (5 - 3 + 1)) + 3),
              review: "Random user review here.",
            };
          })
        );
      });
  };

  useEffect(() => {
    fetchUser();    
  }, []);

  return (
    <div className="grid grid-flow-row gap-4 content-start pt-10 ">
      {userReviews.map((user) => {
        return <ReviewCard key={user.username} user={user} />;
      })}
    </div>
  );
}
