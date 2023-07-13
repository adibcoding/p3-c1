import { useNavigate } from "react-router-dom";
import TablePost from "../components/TablePost";
import LoadingView from "../components/LoadingView";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory, fetchCategories } from "../store/action/actionCreator";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

function CategoryView() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categories, loading } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const handleClick = async (id) => {
    try {
      await dispatch(deleteCategory(id));
      await dispatch(fetchCategories());
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
          onClick={() => navigate("/categories/add")}
          type="button"
          className="btn btn-primary"
        >
          Add Categories
        </button>
      </div>
      <div className="d-flex flex-column align-items-center">
        <div className="text-center mt-2">
          <h1>Categories Table</h1>
        </div>
        <table
          className="table"
          style={{ tableLayout: "fixed", maxWidth: "75vw", height: "auto" }}
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => {
              return (
                <tr key={category.id}>
                  <td>{index + 1}</td>
                  <td>{category.name}</td>
                  <td>
                    <AiFillDelete
                      onClick={() => {
                        handleClick(category.id);
                      }}
                    />
                    <AiFillEdit
                      onClick={() => {
                        navigate(`/categories/edit/${category.id}`);
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CategoryView;
