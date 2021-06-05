import React, { useEffect, useRef, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";

const Detail = (props) => {
  const location = useLocation();
  const history = useHistory();

  const [detailInfo, setDetailInfo] = useState({ ...location.state });
  console.log(detailInfo);
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
        console.log("jjjj")
      contentRef.current.innerHTML = body;
    }
  }, [contentRef]);


  return (
    <div className="detail">
      <p className="user_profile">
        <img src={avatar_url} alt="" />
      </p>
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
      <div className="detail_text" ref={contentRef}></div>
    </div>
  );
};

export default Detail;
