class Youtube {
  constructor(key) {
    this.key = key;
    this.getrequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  async mostPopular() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      this.getrequestOptions
    );
    const result = await response.json();
    return result.items;
  }

  search(query) {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&type=video&key=${this.key}`,
      this.getrequestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      ); //아이템의 id값이 중복되지 않도록 결과들을 빙글빙글 돌면서 복사해서 id라는 key에 고유 번호를 넣어줄 것
  }
}

export default Youtube;
