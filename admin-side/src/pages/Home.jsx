import { useNavigate } from "react-router-dom";
import TablePost from "../components/TablePost";
import LoadingView from "../components/LoadingView";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeletePosts, fetchPosts } from "../store/action/actionCreator";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { posts: data, loading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const handleClick = async (id) => {
    try {
      await dispatch(fetchDeletePosts(id));
      await dispatch(fetchPosts());
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return (
      <>
        <LoadingView />
      </>
    );
  }

  return (
    <>
      <div className="d-flex flex-row-reverse m-2">
        <button
          onClick={() => navigate("/addNews")}
          type="button"
          className="btn btn-primary"
        >
          Add News
        </button>
      </div>
      <TablePost posts={data} handleClick={handleClick} />
    </>
  );
}

export default Home;
