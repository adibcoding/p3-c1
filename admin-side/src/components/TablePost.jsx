import Table from "react-bootstrap/Table";
import TableRow from "./TableRow";

function TablePost({ posts, handleClick }) {
  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <div className="text-center mt-2">
          <h1>News Table</h1>
        </div>
        <table
          className="table"
          style={{maxWidth: "75vw"}}
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Img Url</th>
              <th>Category</th>
              <th>Tags</th>
              <th>Author</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => {
              return (
                <TableRow
                  key={post.id}
                  post={post}
                  handleClick={handleClick}
                  index={index}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TablePost;
