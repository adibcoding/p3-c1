import Container from "react-bootstrap/esm/Container";
import CardPost from "../components/CardPost";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import { BASE_URL } from "../config/api";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/action/actionCreator";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import LoadingView from "../components/LoadingView";
function Home() {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if(loading){
    return(
      <LoadingView/>
    )
  }

  return (
    <>
      <Container style={{ marginTop: "3rem" }}>
        <Row className="gap-3">
          <Col className="col-8">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://asset.kompas.com/crops/Op4RZ6ohcBWwaR1LMSbWYvIbTNg=/118x210:807x670/750x500/data/photo/2022/04/11/62543c8bbfc49.png"
                  alt="First slide"
                />
                <Carousel.Caption style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col>
            <Row>
              <Image
                src="https://s-img.mgid.com/g/15777920/492x277/-/aHR0cDovL2NsLmltZ2hvc3RzLmNvbS9pbWdoL2ltYWdlL2ZldGNoL2FyXzE2OjksY19maWxsLGVfc2hhcnBlbjoxMDAsZl9qcGcsZ19mYWNlczphdXRvLHFfYXV0bzpnb29kLHdfMTAyMC9odHRwOi8vaW1naG9zdHMuY29tL3QvMjAyMy0wMy8xMDE5MjQvMTdlOTljNGU5YWI5NzgxOTUxODBmMWRlMDY0ZjNmNzEuanBlZw.webp?v=1686918458-IIOjAYXDPMmacPZDadbRxCwVFemZPz_ncjlWwU82VRM"
                fluid
              />
              <p className="text-center">
                Artis Kondang Ini Bocorkan Bunda Corla Dulunya Bernama "Indra"!
              </p>
            </Row>
            <Row>
              <Image
                src="https://s-img.mgid.com/g/16479714/492x277/-/aHR0cDovL2NsLmltZ2hvc3RzLmNvbS9pbWdoL2ltYWdlL2ZldGNoL2FyXzE2OjksY19maWxsLGVfc2hhcnBlbjoxMDAsZl9qcGcsZ19mYWNlczphdXRvLHFfYXV0bzpnb29kLHdfMTAyMC9odHRwOi8vaW1naG9zdHMuY29tL3QvMjAyMy0wNi84MDcxMTYvMzhkZmU5N2I4YTljZTMxMWFkMjMyZjYxNzdiYzJmYjQuanBlZw.webp?v=1686918458-ld8q5petgPV_N-W_UgQ0FJMgOK4tSavql4RUUslBTt0"
                fluid
              />
              <p className="text-center">
                Saya Kasih Tau Rahasia Dibalik Sendi Sebagus Remaja 18 Tahun
              </p>
            </Row>
          </Col>
        </Row>
        <div style={{ minHeight: "100vh" }}>
          <Row className="mt-3">
            <Col className="col-2">
              <div style={{ position: "relative" }}>
                <h2
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                >
                  Berita Terkini
                </h2>
                <div
                  style={{
                    position: "absolute",
                    borderBottom: "5px solid #3ca5dd",
                    width: "100%",
                  }}
                ></div>
              </div>
            </Col>
          </Row>
          {posts.map((post) => {
            return <CardPost key={post.id} post={post} />;
          })}
        </div>
      </Container>
    </>
  );
}

export default Home;
