import React, { useEffect, useState } from "react";
import "./app.css";
import VideoList from "./components/video_list/video_list";

function App() {
  const [videos, setVideos] = useState([]);
  //비디오의 목록을 가질 수 있는 state
  //function 컴포넌트에서 state를 사용할 수 있는 방법은(hook) useState api를 이용하면 된다.
  // videos에 데이터를 저장, videos를 업데이트할 수 있는 변수 setVideos를 선언
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDSdXd1eao07f8qk2KLHBuEn0mmef31SsE",
      requestOptions
    )
      .then((response) => response.json()) //정상적으로 받아지면 받은걸 json으로 변환하고
      .then((result) => setVideos(result.items)) //텍스트를 출력하고
      .catch((error) => console.log("error", error));
  }, []);
  //마운트가 되었거나 업데이트가 되었을 때 콜백을 등록할 수 있는게 useEffect()
  //콜백 뒤에 인자를 보내면, 해당 인자가 업데이트 되었을 경우에만 콜백함수가 실행된다.
  //텅텅 빈 인자를 넣어두면, 마운트가 되었을 때만 호출됨.
  //아무것도 전달하지 않으면 어떤 컴포넌트나 props가 업데이트 되든 호출되므로 비효율적이다.
  return <VideoList videos={videos} />;
}

export default App;
