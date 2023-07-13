import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import useMutation from "../hooks/useDispatch";
import { BASE_URL } from "../config/api";
import LoadingView from "./LoadingView";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function TableRow({ post, index, handleClick }) {
  const navigate = useNavigate();
  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>{post.title}</td>

        <td>
          <img className="img-fluid" src={post.imgUrl} alt="" />
        </td>
        <td>{post.Category.name}</td>
        <td>
          {post.Tags.map((tag, index) => {
            return (
              <span>
                {tag.name}
                {index < post.Tags.length - 1 ? ", " : ""}
              </span>
            );
          })}
        </td>

        <td>{post.User.email}</td>

        <td>
          <AiFillDelete
            onClick={() => {
              handleClick(post.id);
            }}
          />
          <AiFillEdit
            onClick={() => {
              navigate(`/edit/${post.id}`);
            }}
          />
        </td>
      </tr>
    </>
  );
}

export default TableRow;
