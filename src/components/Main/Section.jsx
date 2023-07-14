import React from "react";
import { styled } from "styled-components";
import Card from "./Card";
import { getPosts } from "../../api/posts";
import { useQuery } from "react-query";
import getDate from "../Common/getDate";

function Section({ part }) {
  const { isLoading, isError, data } = useQuery("posts", getPosts);
  if (isLoading) {
    return <p>로딩</p>;
  }
  if (isError) {
    return <p>에러</p>;
  }

  return (
    <SectionBox>
      <CardTitle>{part}</CardTitle>
      <CardContainer>
        {data
          .filter((post) => {
            return part === "Today Steps" ? post.date === getDate() : post.date !== getDate();
          })
          .map((post) => (
            <Card post={post} key={post.key} />
          ))}
      </CardContainer>
    </SectionBox>
  );
}

const SectionBox = styled.div`
  height: 200px;
  margin-top: 30px;
  margin-bottom: 80px;
`;

const CardTitle = styled.h1`
  font-size: 22px;
  font-weight: 800;
  color: #abc1bc;
`;

const CardContainer = styled.div`
  background-color: #dae9e6;
  height: 250px;
  display: flex;
  align-items: center;
`;

export default Section;
