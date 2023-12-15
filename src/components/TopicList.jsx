import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { fetchTopics } from "../utils";
import Errors from "./Errors";


const TopicList = ({ setSort, filterTopic }) => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();


  const sortChanger = () => {
    setSort(sortDropdown.value);
    const sort_by = sortDropdown.value.split("=")[1].split("&")[0];
    const order = sortDropdown.value.split("=")[2];
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort_by", sort_by);
    newParams.set("order", order);
    setSearchParams(newParams);
  };

  useEffect(() => {
    fetchTopics().then((topicsData) => {
        setTopics(topicsData);
        setLoading(false);
    });
},[])

if (loading) return <h3 className="loading">LOADING...</h3>;

if(filterTopic && topics.some((topic)=>topic.slug===filterTopic)===false){
    return <Errors msg={`${filterTopic} is not a topic`}/>
}
return(
    <div className="filter-sort">

      <ol className="topic-filter">
        <p className="filter-title">FILTER BY TOPIC:</p>
        <Link to={`/articles`}>
          <li key="all">
            <button className="topic-pill">All</button>
          </li>
        </Link>
        {topics.map((topic) => {
          return (
            <Link to={`/articles?topic=${topic.slug}`} key={topic.slug} onClick={()=>sortChanger()}>
              <li>
                <button className="topic-pill">{topic.slug}</button>
              </li>
            </Link>
          );
        })}
      </ol>

      <p className="filter-title">SORT:</p>

      <select
        id="sortDropdown"
        onChange={() => {sortChanger()}}
      >
        <option value={"&sort_by=created_at&order=desc"}>
          Most recent first
        </option>
        <option value={"&sort_by=created_at&order=asc"}>Oldest first</option>
        <option value={"&sort_by=comment_count&order=desc"}>
          Most discussed first
        </option>
        <option value={"&sort_by=comment_count&order=asc"}>
          Least discussed first
        </option>
        <option value={"&sort_by=votes&order=desc"}>Highest voted first</option>
        <option value={"&sort_by=votes&order=asc"}>Lowest upvoted first</option>
      </select>
    </div>

  );
};

export default TopicList;
