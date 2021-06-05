import React, { useEffect, useRef, useState } from "react";
import { useHistory, useLocation } from "react-router";
import "styles/detail.scss";

const Detail = (props) => {
  const location = useLocation();
  const history = useHistory();

  const [detailInfo, setDetailInfo] = useState({ ...location.state });
  const { number, title, body, login, comments, created_at, avatar_url } =
    detailInfo;
  const newDate = new Date(created_at);

  useEffect(() => {
    if (location.state === undefined) {
      history.push("/");
    }
  }, []);

  const contentRef = useRef();
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.innerHTML = body;
    }
  }, [contentRef]);

  return (
    <div className="detail">
      <div className="detail_title">
        <p className="user_profile">
          <img src={avatar_url} alt="" />
        </p>
        <div className="issue_content">
          <h2 className="issue_title">
            <span className="issue_number">#{number}</span>
            {title}
          </h2>
          <span className="user">작성자: {login}, </span>
          <span className="date">
            작성일:
            {`${newDate.getFullYear()}년 ${newDate.getMonth()}월 ${newDate.getDay()}일`}
          </span>
        </div>
        <p className="comments">코멘트: {comments}</p>
      </div>

      <div className="detail_body" ref={contentRef}></div>
    </div>
  );
};

export default Detail;
