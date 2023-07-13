import { useEffect, useState } from "react";
import { BASE_URL } from "../config/api";
import useFetch from "../hooks/useFetch";
import useMutation from "../hooks/useDispatch";
import LoadingView from "./LoadingView";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addPost,
  editPost,
  fetchCategories,
  fetchOnePost,
} from "../store/action/actionCreator";
import Swal from "sweetalert2";
import { errConverter } from "../helpers/convertErrMsg";

function AddForm() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const { post: editedPost } = useSelector((state) => state.posts);
  const { categories, loading } = useSelector((state) => state.categories);
  const navigate = useNavigate();

  // const { data: categories, loading } = useFetch(BASE_URL + "/categories");

  const [formInput, setFormInput] = useState({
    title: "",
    content: "",
    imgUrl: "",
    categoryId: "",
    name: ["", "", ""],
  });

  // useEffect(() => {
  //   if (editedPost) {
  //     const newForm = { ...formInput };
  //     newForm["title"] = editedPost.title || '';
  //     newForm["slug"] = editedPost.slug || '';
  //     newForm["content"] = editedPost.content || '';
  //     newForm["imgUrl"] = editedPost.imgUrl || '';
  //     newForm["categoryId"] = editedPost.categoryId || '';

  //     setFormInput(newForm);
  //   }
  // }, [editedPost]);

  useEffect(() => {
    if (id) dispatch(fetchOnePost(id));
    dispatch(fetchCategories());
  }, []);

  useEffect(() => {
    if (id) {
      const newForm = { ...formInput };
      newForm["title"] = editedPost?.title || "";
      newForm["content"] = editedPost?.content || "";
      newForm["imgUrl"] = editedPost?.imgUrl || "";
      newForm["categoryId"] = editedPost?.categoryId || "";
      setFormInput(newForm);
    }
  }, [editedPost]);

  const handleChange = (event) => {
    const { name, value, id } = event.target;
    const newForm = { ...formInput };
    if (name == "name") {
      newForm[name][+id] = value;
    } else {
      newForm[name] = value;
    }
    setFormInput(newForm);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (id) {
        const { title, content, imgUrl, categoryId } = formInput;
        console.log("herereeee");
        await dispatch(editPost({ title, content, imgUrl, categoryId }, id));
        navigate("/");
      } else {
        await dispatch(addPost(formInput));
        navigate("/");
        // handlePostForm();
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errConverter(err),
      });
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
      <div className="d-flex flex-column justify-content-center align-items-center mt-3">
        <div className="text-center">
          <h1>Add/Edit Form</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-50"
          style={{ paddingBottom: "60px" }}
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="title"
              value={formInput.title}
              onChange={handleChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Image Url
            </label>
            <input
              type="text"
              className="form-control"
              name="imgUrl"
              value={formInput.imgUrl}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Select Categories
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={handleChange}
              name="categoryId"
            >
              <option value="">Select Category</option>
              {categories.map((category) => {
                return (
                  <option
                    selected={
                      category.id == editedPost.categoryId ? true : false
                    }
                    key={category.id}
                    value={category.id}
                  >
                    {category.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Content
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="content"
              onChange={handleChange}
              value={formInput.content}
            ></textarea>
          </div>
          {!id ? (
            <div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Tags
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formInput.name[0]}
                  id="0"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formInput.name[1]}
                  id="1"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="2"
                  value={formInput.name[2]}
                  onChange={handleChange}
                />
              </div>
            </div>
          ) : undefined}
          {/* <div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Tags
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formInput.name[0]}
                id="0"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="name"
                value={formInput.name[1]}
                id="1"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="name"
                id="2"
                value={formInput.name[2]}
                onChange={handleChange}
              />
            </div>
          </div> */}

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddForm;
