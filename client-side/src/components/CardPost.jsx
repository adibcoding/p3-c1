import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { NavLink } from "react-router-dom";
import { dateConverter } from "../helpers/dateConverter";
import "./CardPost.css";
function CardPost({ post }) {
  return (
    <Row className="mt-3">
      <Col className="col-3">
        <Image src={post.imgUrl} fluid />
      </Col>
      <Col className="col-8 d-flex flex-column justify-content-between align-items-between">
        <div>
          <NavLink
            style={{
              fontFamily: "sans-serif",
              fontSize: "30px",
            }}
            className="navLink"
            to={`/${post.slug}`}
          >
            {post?.title.length > 75
              ? post?.title.substring(0, 50) + "..."
              : post?.title}
          </NavLink>
        </div>
        <div className="d-flex justify-content-between">
          <span className="rounded bg-secondary-subtle p-1">
            {post?.Category.name}
          </span>{" "}
          <span>{dateConverter(post?.createdAt)}</span>
        </div>
      </Col>
    </Row>
  );
}

export default CardPost;
