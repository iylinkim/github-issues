import React, { useEffect, useState } from "react";
import Add from "../components/Add";
import IssueItem from "../components/IssueItem";

const Home = ({ api }) => {
  console.log("home");
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    api.getIssues().then((data) => setIssues(data));
  }, [api]);

  return (
    <div className="wrap">
      <ul className="issuse_list">
        {issues &&
          issues.map((issue, index) => {
            if ((index + 1) % 5 === 0) {
              return <Add key={issue.id+10}/>;
            }
            return <IssueItem key={issue.id} issue={issue} />;
          })}
      </ul>
    </div>
  );
};

export default Home;
