import React from "react";

const IssueItem = ({ issue }) => {

  const {
    title,
    number,
    user: { login },
    created_at,
    comments,
  } = issue;

  const newDate = new Date(created_at);
  return (
    <li className="issue_item">
      <div className="issue_content">
        <h2>
          <span className="issue_number">#{number}</span>
          {title}
        </h2>
        <span className="user">{login}</span>
        <span className="date">작성일: {`${newDate.getFullYear()}년 ${newDate.getMonth()}월 ${newDate.getDay()}일`}</span>
      </div>
      <p className="comments">코멘트: {comments}</p>
    </li>
  );
};

export default IssueItem;
