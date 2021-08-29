import { Fragment } from "react";
import Head from "next/head";

import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";

// const DUMMY_POSTS = [
//   {
//     slug: "getting-started-with-nextjs",
//     title: "Getting started with Nextjs",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "NextJs is a React framework for production- it makes building fulstack React app an easy work",
//     date: "2022-02-10",
//   },
//   {
//     slug: "getting-started-with-nextjs2",
//     title: "Getting started with Nextjs",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "NextJs is a React framework for production- it makes building fulstack React app an easy work",
//     date: "2022-02-10",
//   },
//   {
//     slug: "getting-started-with-nextjs3",
//     title: "Getting started with Nextjs",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "NextJs is a React framework for production- it makes building fulstack React app an easy work",
//     date: "2022-02-10",
//   },
//   {
//     slug: "getting-started-with-nextjs4",
//     title: "Getting started with Nextjs",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "NextJs is a React framework for production- it makes building fulstack React app an easy work",
//     date: "2022-02-10",
//   },
// ];
function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Sia' Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const FeaturedPosts = getFeaturedPosts();
  return {
    props: {
      posts: FeaturedPosts,
    },
    revalidate: 10000,
  };
}

export default HomePage;
