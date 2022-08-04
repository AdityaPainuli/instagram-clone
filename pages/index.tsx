import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Feed from "../components/Feed";
import Modal from "../components/Modal";
const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram Clone</title>
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
        />
      </Head>
      {/* Header */}
      <Header searchShow={true} />
      <Feed />
      <Modal />
    </div>
  );
};

export default Home;
