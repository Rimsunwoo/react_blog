# OneStep

TodoList

2023/07/10 ~ 2023/07/14

---

## API 명세

| 이름                  | URL       | Method | request                                   | prams |
| :-------------------- | :-------- | :----- | :---------------------------------------- | :---- |
| 게시글 목록 전체 조회 | /post     | GET    |                                           |       |
| 게시글 작성           | /post     | POST   | {'title’:title,’content’:content}         |       |
| 게시글 수정           | /post/:id | PATCH  | {'title’:editTitle,’content’:editContent} |       |
| 게시글 삭제           | /post/:id | DELETE | {’contentId’:contentId}                   |       |
