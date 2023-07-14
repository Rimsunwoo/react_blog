import React from "react";
import Layout from "../components/Layout/Layout";

import Modal from "../components/Modal/Modal";
import Sections from "../components/Main/Sections";
import Input from "../components/PostWrite/Input";
import { useSelector } from "react-redux/es/hooks/useSelector";
function Home() {
  return (
    <>
      <Input />
      <Sections />
    </>
  );
}

export default Home;
