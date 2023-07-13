import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchOnePost } from "../store/action/actionCreator";
import LoadingView from "../components/LoadingView";
import { dateConverter } from "../helpers/dateConverter";
const DetailPage = () => {
  const { slug } = useParams();
  let Tags = [];
  const dispatch = useDispatch();
  const { post, loading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchOnePost(slug));
  }, [dispatch]);
  Tags = post?.Tags || [];

  if (loading) {
    return (
      <>
        <LoadingView />
      </>
    );
  }

  return (
    <>
      <Container style={{ minHeight: "100vh" }} className="mb-5">
        <Row>
          <Col>
            <h1 className="mt-4">{post?.title}</h1>
            <p className="text-muted">{dateConverter(post?.createdAt)}</p>
            <img src={post?.imgUrl} alt="News" className="img-fluid mb-4" />
            <p style={{ whiteSpace: "pre-wrap" }}>{post?.content}</p>
            <div className="d-flex gap-2">
              <h5>Tags:</h5>
              {Tags.map((tag) => {
                return (
                  <span className="rounded bg-secondary-subtle p-1">
                    {tag.name}
                  </span>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DetailPage;
