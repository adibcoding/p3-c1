import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategories,
  editCategory,
  fetchDetailCategory,
} from "../store/action/actionCreator";
import { useNavigate, useParams } from "react-router-dom";
import LoadingView from "../components/LoadingView";
import { errConverter } from "../helpers/convertErrMsg";
import Swal from "sweetalert2";
const AddCategory = () => {
  const { category, loading } = useSelector((state) => state.categories);
  const [categoryInput, setCategoryInput] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmitCategory = async (event) => {
    event.preventDefault();
    try {
      if (!id) await dispatch(addCategories({ name: categoryInput }));
      else await dispatch(editCategory({ name: categoryInput }, id));
      navigate("/categories");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errConverter(err),
      });

      console.log(err);
    }
  };

  useEffect(() => {
    if (id) dispatch(fetchDetailCategory(id));
  }, []);

  useEffect(() => {
    if (id) {
      let newInput;
      newInput = category?.name || "";
      setCategoryInput(newInput);
    }
  }, [category]);

  if (loading) {
    return (
      <>
        <LoadingView />
      </>
    );
  }
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center mt-3">
        <div className="text-center">
          <h1>Add/Edit Category</h1>
        </div>
        <form
          onSubmit={handleSubmitCategory}
          className="w-50"
          style={{ paddingBottom: "60px" }}
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="name"
              value={categoryInput}
              onChange={(event) => setCategoryInput(event.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddCategory;
