import React, { useCallback, useEffect, useState } from "react";
import styles from "./app.module.css";
import VideoList from "./components/video_list/video_list";
import "@fortawesome/fontawesome-free/js/all.js";
import SearchHeader from "./components/search_header/search_header";
import VideoDetail from "./components/video_detail/video_detail";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (videos) => {
    setSelectedVideo(videos);
  };

  const search = useCallback(
    (query) => {
      setSelectedVideo(null);
      youtube
        .search(query) //
        .then((videos) => setVideos(videos));
    },
    [youtube]
  );

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);
  //마운트가 되었거나 업데이트가 되었을 때 콜백을 등록할 수 있는게 useEffect()
  //콜백 뒤에 인자를 보내면, 해당 인자가 업데이트 되었을 경우에만 콜백함수가 실행된다.
  //텅텅 빈 인자를 넣어두면, 마운트가 되었을 때만 호출됨.
  //아무것도 전달하지 않으면 어떤 컴포넌트나 props가 업데이트 되든 호출되므로 비효율적이다.

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} video={setSelectedVideo} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
