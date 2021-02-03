import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import VideoList from "./components/video_list/video_list";
import "@fortawesome/fontawesome-free/js/all.js";
import SearchHeader from "./components/search_header/search_header";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  //마운트가 되었거나 업데이트가 되었을 때 콜백을 등록할 수 있는게 useEffect()
  //콜백 뒤에 인자를 보내면, 해당 인자가 업데이트 되었을 경우에만 콜백함수가 실행된다.
  //텅텅 빈 인자를 넣어두면, 마운트가 되었을 때만 호출됨.
  //아무것도 전달하지 않으면 어떤 컴포넌트나 props가 업데이트 되든 호출되므로 비효율적이다.
  //<VideoList videos={videos} />
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
