// File: /packages/my-first-theme/src/components/list.js
import Link from "@frontity/components/link"
import React from "react"
import { connect , styled } from "frontity"

const List = ({ state, actions }) => {
  const data = state.source.get(state.router.link)

  return (
    <Items>
    {data.items.map((item) => {
      const post = state.source.post[item.id]
      return (
        // {post ? <Link link={post.link} key={post.id}>
        // {post.title.rendered}
        post && <Link link={post.link} key={post.id}>
            {post.title.rendered}
        </Link>
      )
    })}
    <PrevNextNav>
        {data.previous && (
          <button
            onClick={() => {
              actions.router.set(data.previous)
            }}
          >
            &#171; Prev
          </button>
        )}
        {data.next && (
          <button
            onClick={() => {
              actions.router.set(data.next)
            }}
          >
            Next &#187;
          </button>
        )}
      </PrevNextNav>
  </Items>
  )
}

export default connect(List)

const Items = styled.div`
  & > a {
    display: block;
    margin: 6px 0;
    font-size: 1.2em;
    color: steelblue;
    text-decoration: none;
  }
`
const PrevNextNav = styled.div`
  padding-top: 1.5em;

  & > button {
    background: #eee;
    text-decoration: none;
    padding: 0.5em 1em;
    color: #888;
    border: 1px solid #aaa;
    font-size: 0.8em;
    margin-right: 2em;
  }
  & > button:hover {
    cursor: pointer;
  }
  `