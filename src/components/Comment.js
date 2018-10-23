import React from "react";

const Comment = ({ username, content }) => {
  return (
    <li className="pt-1">
      <a href="#/" className="text-dark text-title">
        {username}
      </a>
      <span className="pl-2">{content}</span>
    </li>
  );
};

export default Comment;
