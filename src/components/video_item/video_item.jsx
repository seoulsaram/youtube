import React from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video, video: { snippet }, onVideoClick, display }) => {
  const displayType = display === "list" ? styles.list : styles.grid;
  //display가 list면 styles의 list를 쓰고, 아니면 styles에 있는 grid를 써
  return (
    //const VideoItem = (props) => props.video~ 이렇게 쓰는게 싫으면
    //const VideoItem = ({video}) => 처음부터 video를 이렇게 받아와도 되고
    //const VideoItem = ({video : videoItem}) => 받아온 video의 이름을 지정하고 싶을 땐 이렇게 해도 됨
    //const VideoItem = ({video: {snippet}}) 이건 video 안에 있는 snippet을 가져오겠다는 것
    <li
      className={`${styles.container} ${displayType}`}
      onClick={() => onVideoClick(video)}
    >
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={snippet.thumbnails.medium.url}
          alt="video thumbnail"
        />
        <div className={styles.metadata}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
