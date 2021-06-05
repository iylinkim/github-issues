import React from "react";
import { useHistory } from "react-router";

const IssueItem = ({ issue }) => {
  const {
    id,
    title,
    body,
    number,
    user: { login, avatar_url },
    created_at,
    comments,
  } = issue;

  const newDate = new Date(created_at);
  const history = useHistory();

  const goToDetail = () => {
    history.push({
      pathname: `/${id}`,
      state: { title, body, number, login, avatar_url, created_at, comments },
    });
  };

  return (
    <li className="issue_item" onClick={goToDetail}>
      <div className="issue_content">
        <h2>
          <span className="issue_number">#{number}</span>
          {title}
        </h2>
        <span className="user">{login}</span>
        <span className="date">
          작성일:{" "}
          {`${newDate.getFullYear()}년 ${newDate.getMonth()}월 ${newDate.getDay()}일`}
        </span>
      </div>
      <p className="comments">코멘트: {comments}</p>
    </li>
  );
};

export default IssueItem;
