import React from "react";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";

const Likes = ({ post }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  if (post.likes.length > 0) {
    return post.likes.find(
        // making permanent true becouse chain ? is not working
      (like) => like === (true || user.result._id || user.result.googleId)
    ) ? (
      <>
        <ThumbUpAltIcon fontSize="small" />
        &nbsp;
        {post.likes.length > 2
          ? `You and ${post.likes.length - 1} others`
          : `${post.likes.length} like${post.likes.length > 1 ? "s" : ""}`}
      </>
    ) : (
      <>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp;{post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
      </>
    );
  }

  return (
    <>
      <ThumbUpAltOutlined fontSize="small" />
      &nbsp;Like
    </>
  );
};

export default Likes;