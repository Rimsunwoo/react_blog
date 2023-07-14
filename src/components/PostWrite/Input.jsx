import React from "react";
import LabeldInput from "../Common/LabeldInput";
import { addPost } from "../../api/posts";
import { useMutation, useQueryClient } from "react-query";
import { styled } from "styled-components";
import getDate from "../Common/getDate";
import useInput from "../../hooks/useInput";
import Button from "../Common/Button";

function Input() {
  const [title, setTitle, onChangeTitleHandler] = useInput();
  const [content, setContent, onChangeContentHandler] = useInput();
  const queryClient = useQueryClient();
  const mutation = useMutation(addPost, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmitHandler = (e) => {
    if (title.length < 5 || content.length < 5) {
      alert("5글자 이상 작성해주세요");
      e.preventDefault();
      return;
    }
    e.preventDefault();
    const newPost = {
      title,
      content,
      date: getDate(),
    };
    mutation.mutate(newPost);
    setTitle("");
    setContent("");
  };

  return (
    <>
      <FormBox onSubmit={onSubmitHandler}>
        <LabeldInput size="big" id={title} label="제목" value={title} onChange={onChangeTitleHandler} />
        <LabeldInput size="big" id={content} label="내용" value={content} onChange={onChangeContentHandler} />
        <Button size="small">저장</Button>
      </FormBox>
    </>
  );
}

const FormBox = styled.form`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

export default Input;
