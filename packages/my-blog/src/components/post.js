import React from "react";
import { connect, styled, Head } from "frontity";
import dayjs from "dayjs";
import Link from "@frontity/components/link";
import Categories from "./categories";
import RelatedPosts from './relatedPost';


const Post = ({ state, libraries }) => {
  const Html2React = libraries.html2react.Component;
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  
  const posts = state.source.post;
  
  
  // console.log('single post: ' , post.categories);
  const author = state.source.author[post.author];
  const formattedDate = dayjs(post.date).format("DD MMMM YYYY");
    

  // console.log('try to get categories: ' , state.source.category);
  return (
    <div>
      <Head>
        <title>{post.title.rendered}</title>
        <meta name="description" content={post.excerpt.rendered} />
      </Head>
      <PostInfo>
        <p>
          <strong>Posted: </strong>
          {formattedDate}
        </p>
        <p>
          <strong>Author: </strong>
          {author.name}
        </p>
        <div>
        { post.categories && <Categories categories={post.categories} /> }
        </div>
      </PostInfo>
      {/* one way of gettinig the names of category */}
      {/*
       if(frontity.state.source.post[26].categories[0] == frontity.state.source.category[4].id) 
          {frontity.state.source.category[4].name}
      output: "Cities" */}
      {/*  */}
        <Html2React html={post.content.rendered} />
      <div>
        {post.tags && <RelatedPosts tags={post.tags} posts={posts}/>}
      </div>
    </div>
  );
};
export default connect(Post);

const PostInfo = styled.div`
  background-image: linear-gradient(to right, #f4f4f4, #fff);
  margin-bottom: 1em;
  padding: 0.5em;
  border-left: 4px solid lightseagreen;
  font-size: 0.8em;

  & > p {
    margin: 0;
  }
`;
