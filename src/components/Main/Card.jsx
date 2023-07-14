import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { modalClose, modalOpen } from "../../redux/modules/modal";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Modal/Modal";
import { modalCreate } from "../../redux/modules/modal";
import { useMutation, useQueryClient } from "react-query";
import { removePost, modifyPost } from "../../api/posts";
import Button from "../Common/Button";
import LabeldInput from "../Common/LabeldInput";
import getDate from "../Common/getDate";

function Card({ post }) {
  const modalIsOpen = useSelector((state) => state.modal.modalIsOpen);
  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const [isOpen, setIsOpen] = useState({ modifyIsOpen: false, removeIsOpen: false });
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const removeMutation = useMutation(removePost, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const modifyMutation = useMutation(modifyPost, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
      dispatch(modalClose());
      setNewPost({ title: "", content: "" });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  useEffect(() => {
    setIsOpen({ modifyIsOpen: false, removeIsOpen: false });
  }, [modalIsOpen]);

  useEffect(() => {
    dispatch(modalCreate(post.id));
  }, []);

  const onCardClickHandler = (post) => {
    dispatch(modalOpen(post.id));
  };

  const onModifyHandler = (id) => {
    modifyMutation.mutate({ id, newPost });
  };

  const onRemoveHandler = (id) => {
    removeMutation.mutate(id);
  };
  return (
    <>
      <CardBox onClick={() => onCardClickHandler(post)}>
        <PostTitle>제목:{post.title}</PostTitle>
        <PostContent>{post.content}</PostContent>
      </CardBox>
      {modalIsOpen[post.id] ? (
        <Modal>
          {!isOpen.modifyIsOpen && !isOpen.removeIsOpen && (
            <>
              <PostTitle>제목:{post.title}</PostTitle>
              <PostContent>내용:{post.content}</PostContent>
              <Button size="medium" onClick={() => setIsOpen({ ...isOpen, modifyIsOpen: true })}>
                수정하기
              </Button>
              <Button size="medium" onClick={() => setIsOpen({ ...isOpen, removeIsOpen: true })}>
                삭제하기
              </Button>
            </>
          )}

          {isOpen.modifyIsOpen && (
            <>
              <ModifyDiv>
                <LabeldInput
                  size="small"
                  id="title"
                  placeholder={post.title}
                  label="제목"
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  required
                />
                <LabeldInput
                  size="small"
                  id="content"
                  label="내용"
                  value={newPost.content}
                  onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                  placeholder={post.content}
                  required
                />
              </ModifyDiv>
              <Button size="medium" onClick={() => onModifyHandler(post.id)}>
                수정완료
              </Button>
              <Button size="medium" onClick={() => setIsOpen({ ...isOpen, modifyIsOpen: false })}>
                수정취소
              </Button>
            </>
          )}

          {isOpen.removeIsOpen && (
            <>
              <PostTitle>제목:{post.title}</PostTitle>
              <PostContent>내용:{post.content}</PostContent>
              <Button size="medium" onClick={() => onRemoveHandler(post.id)}>
                삭제완료
              </Button>
              <Button size="medium" onClick={() => setIsOpen({ ...isOpen, removeIsOpen: false })}>
                삭제취소
              </Button>
            </>
          )}
        </Modal>
      ) : (
        ""
      )}
    </>
  );
}

const CardBox = styled.div`
  width: 120px;
  height: 140px;
  background-color: beige;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    border: 2px solid yellow;
  }
`;

const ModifyDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 110px;
`;

const PostTitle = styled.p`
  font-size: 15px;
  font-weight: 800;
  margin-bottom: 10px;
`;

const PostContent = styled.p`
  font-size: 15px;
  margin-bottom: 160px;
`;

export default Card;
