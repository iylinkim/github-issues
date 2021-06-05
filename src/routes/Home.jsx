import React, { useEffect, useState } from "react";
import Add from "../components/Add";
import IssueItem from "../components/IssueItem";
import { throttle } from "../service/utils";
import "styles/home.scss";

const Home = ({ api }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    // 첫번째 페이지 데이터 불러오기
    api.getIssues(currentPage).then((data) => setIssues(data));
  }, [api]);

  const getNextData = async () => {
    setCurrentPage((prev) => prev + 1);
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    //scroll이 바닥에 닿았을 때
    if (scrollTop + clientHeight > scrollHeight - 5) {
      if (issues) {
        await api.getIssues(currentPage).then((result) => {
          console.log(currentPage, result);
          setIssues((prev) => [...prev, ...result]);
        });
      }
    }
  };

  window.addEventListener("scroll", throttle(getNextData, 700));

  return (
    <div>
      <ul className="issuse_list">
        {issues &&
          issues.map((issue, index) => {
            if ((index + 1) % 5 === 0) {
              return <Add key={issue.id + 10} />;
            }
            return <IssueItem key={issue.id} issue={issue} />;
          })}
      </ul>
      <p className="loading"></p>
    </div>
  );
};

export default Home;
