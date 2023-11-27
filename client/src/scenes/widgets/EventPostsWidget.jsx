import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEventPosts } from "state";
import EventPostWidget from "./EventPostWidget";

const EventPostsWidget = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const eventposts = useSelector((state) => state.eventposts);
  const token = useSelector((state) => state.token);

  const getEventPosts = async () => {
    try {
      const response = await fetch("http://localhost:5001/eventposts/", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch event posts");
      }

      const data = await response.json();
      dispatch(setEventPosts({ eventposts: data }));
    } catch (error) {
      console.error("Error fetching event posts:", error.message);
    }
  };

  const getEventUserPosts = async () => {
    try {
      const response = await fetch(
        `http://localhost:5001/eventposts/${userId}/posts`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch user event posts");
      }

      const data = await response.json();
      dispatch(setEventPosts({ eventposts: data }));
    } catch (error) {
      console.error("Error fetching user event posts:", error.message);
    }
  };

  useEffect(() => {
    if (isProfile) {
      getEventUserPosts();
    } else {
      getEventPosts();
    }
  }, [isProfile, userId, token]); // Include dependencies in the dependency array


  return (
    <div>
      {eventposts && eventposts.length ? (
        eventposts.map(
          ({
            _id,
            userId,
            firstName,
            lastName,
            description,
            location,
            picturePath,
            videoPath,
            attachmentPath,
            userPicturePath,
            likes,
            comments,
          }) => (
            <EventPostWidget
              key={_id}
              eventpostId={_id}
              postUserId={userId}
              name={`${firstName} ${lastName}`}
              description={description}
              location={location}
              picturePath={picturePath}
              videoPath={videoPath}
              attachmentPath={attachmentPath}
              userPicturePath={userPicturePath}
              likes={likes}
              comments={comments}
            />
          )
        )
      ) : (
        <p>No event posts available.</p>
      )}
    </div>
  );
};

export default EventPostsWidget;