import React,{useEffect} from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import post from "./post";
const RelatedPosts = ({ state, tags ,actions }) => {
    const posts = state.source.post;
    
     useEffect(async() => {
        actions.source.fetch("/"); // <- The data will exist.
     },[])
     console.log('inside the source?: ' , posts);
     let id;

     
  return <>
        {tags.length > 0 ? (
      <>
        <b>Related posts: </b>
        
        {tags.map((tagId) => {
            const tag = state.source.tag[tagId];
            console.log('posts.tags' , posts.tags);

                console.log('posts from the tags map: ', post);
            if(tag.id == tagId) {
                
            }
            
             
            // console.log(tagId);
     
        })}
      </>
    ) : null}
  </>;
};
export default connect(RelatedPosts);
const Wrapper = styled.span`
  display: inline;
  margin-right: .5rem;
  & a {
    color: #dc3545;
    font-weight: 500;
    font-size: 1rem;
    padding: 10px 0px 17px;
  }
  a:hover {
      transition: all .5s;
      color:black;
  }
`;
