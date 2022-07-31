import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "naruto_uzumaki.23",
    userImg:
      "https://i.pinimg.com/originals/c0/ff/5b/c0ff5be1deb59a06e0d4a4c303e986cf.jpg",
    picture:
      "https://mernetwork.com/index/attachment.php?attachmentid=32096&d=1439171621",
    caption: "Last night bumped sakura bitch😈😈",
  },
  {
    id: "123",
    username: "naruto_uzumaki.23",
    userImg:
      "https://i.pinimg.com/originals/c0/ff/5b/c0ff5be1deb59a06e0d4a4c303e986cf.jpg",
    picture:
      "http://images1.fanpop.com/images/image_uploads/Naruto-uzumaki-naruto-987853_730_548.jpg",
    caption: "Last night bumped sakura bitch😈😈",
  },
  {
    id: "123",
    username: "naruto_uzumaki.23",
    userImg:
      "https://i.pinimg.com/originals/c0/ff/5b/c0ff5be1deb59a06e0d4a4c303e986cf.jpg",
    picture:
      "http://images1.fanpop.com/images/image_uploads/Naruto-uzumaki-naruto-987853_730_548.jpg",
    caption: "Last night bumped sakura bitch😈😈",
  },
  {
    id: "123",
    username: "naruto_uzumaki.23",
    userImg:
      "https://i.pinimg.com/originals/c0/ff/5b/c0ff5be1deb59a06e0d4a4c303e986cf.jpg",
    picture:
      "http://images1.fanpop.com/images/image_uploads/Naruto-uzumaki-naruto-987853_730_548.jpg",
    caption: "Last night bumped sakura bitch😈😈",
  },
];

const Posts = () => {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          picture={post.picture}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Posts;
