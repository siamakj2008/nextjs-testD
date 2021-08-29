import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { func } from "prop-types";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostsFiles() {
    return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier) {
    const postSlug = postIdentifier.replace(/\.md$/, "");

  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
}
export function getAllPosts() {
  const postFiles = getPostsFiles();

  // for (const postFile of postFiles) {
  //     const postData = getPostData(postFile);
  // }
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });
  const sortedPosts = allPosts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
  return sortedPosts;
}

export function getFeaturedPosts() {
    const allPosts = getAllPosts();

    const getFeaturedPosts = allPosts.filter(post => post.isFeatured);
    return getFeaturedPosts;
}

