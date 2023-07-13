import { useNavigate, useParams } from "react-router-dom";
import AddForm from "../components/AddForm";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import { BASE_URL } from "../config/api";

const AddNews = () => {
  return (
    <>
      <AddForm />
    </>
  );
};

export default AddNews;
