import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";

const Categories = ({ state, categories }) => (
  <>
    {categories.length > 0 ? (
      <>
        <b>Categories: </b>
        
        {categories.map((catId) => {
          const category = state.source.category[catId];
          
          return (
            <Wrapper key={catId}>
              <Link link={category?.link}>{category?.name}</Link>
            </Wrapper>
          );
        })}
      </>
    ) : null}
  </>
);

export default connect(Categories);

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