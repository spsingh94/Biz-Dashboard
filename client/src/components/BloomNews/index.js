import React, { useEffect, useState } from "react";
import {Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import fetch from "node-fetch";
import Weather from "../Weather";
import { Tools } from "../Tools";

function BloomNews() {
  const [news, setNews] = useState();
  const [story0, setStory0] = useState([]);
  const [story1, setStory1] = useState([]);
  const [story2, setStory2] = useState([]);
  const [story3, setStory3] = useState([]);
  const [story4, setStory4] = useState([]);
  const [story5, setStory5] = useState([]);
  const [story6, setStory6] = useState([]);
  const [story7, setStory7] = useState([]);
  const [story8, setStory8] = useState([]);
  const [story9, setStory9] = useState([]);

  console.log(news);
  console.log(story6);

  // const apiKey = process.env.REACT_APP_NEWS;

  useEffect(() => {
    if (news == null) {
      fetch(
        "https://bloomberg-market-and-financial-news.p.rapidapi.com/news/list?id=businessweek",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host":
              "bloomberg-market-and-financial-news.p.rapidapi.com",
            "x-rapidapi-key":
              "21191d6105msh33bc7e64aa0f8d2p1ce9eajsn04ebeb9562c7",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => setNews([data]));
    }
  });

  useEffect(() => {
    if (news != null) {
      setStory0(news[0].modules[1].stories[0]);
      setStory1(news[0].modules[1].stories[1]);
      setStory2(news[0].modules[1].stories[2]);
      setStory3(news[0].modules[1].stories[3]);
      setStory4(news[0].modules[1].stories[4]);
      setStory5(news[0].modules[1].stories[5]);
      setStory6(news[0].modules[1].stories[6]);
      setStory7(news[0].modules[1].stories[7]);
      setStory8(news[0].modules[1].stories[8]);
      setStory9(news[0].modules[1].stories[9]);
    }
  }, [news]);

  return (
    <>
      <Container style={{backgroundColor:"white"}}>
        <Row>
          <Col md="6" id="news-container">
            <h3 className="main-headers">Recent Top Stories</h3>
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div
                  className="carousel-item active webpage-links"
                  onClick={(event) => (window.location.href = story0.longURL)}
                >
                  <img
                    src={story0.image}
                    className="d-block w-70"
                    alt="story0"
                  />
                  <h4 className="main-headers" id="slider-story">{story0.title}</h4>
                </div>
                <div
                  className="carousel-item webpage-links"
                  onClick={(event) => (window.location.href = story1.longURL)}
                >
                  <img
                    src={story1.image}
                    className="d-block w-70"
                    alt="story1"
                  />
                  <h4 className="main-headers" id="slider-story">{story1.title}</h4>
                </div>
                <div
                  className="carousel-item webpage-links"
                  onClick={(event) => (window.location.href = story2.longURL)}
                >
                  <img
                    src={story2.image}
                    className="d-block w-70"
                    alt="story2"
                  />
                  <h4 className="main-headers" id="slider-story">{story2.title}</h4>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
            <br />
            <br />
            <h6
              className="webpage-links"
              onClick={(event) => (window.location.href = story3.longURL)}
            >
              {story3.title}
            </h6>
            <br />
            <h6
              className="webpage-links"
              onClick={(event) => (window.location.href = story4.longURL)}
            >
              {story4.title}
            </h6>
            <br />
            <h6
              className="webpage-links"
              onClick={(event) => (window.location.href = story5.longURL)}
            >
              {story5.title}
            </h6>
            <br />
            <h6
              className="webpage-links"
              onClick={(event) => (window.location.href = story6.longURL)}
            >
              {story6.title}
            </h6>
            <br />
            <h6
              className="webpage-links"
              onClick={(event) => (window.location.href = story7.longURL)}
            >
              {story7.title}
            </h6>
            <br />
            <h6
              className="webpage-links"
              onClick={(event) => (window.location.href = story8.longURL)}
            >
              {story8.title}
            </h6>
            <br />
            <h6
              className="webpage-links"
              onClick={(event) => (window.location.href = story9.longURL)}
            >
              {story9.title}
            </h6>
            <p
              className="webpage-links"
              style={{ textAlign: "right" }}
              onClick={(event) =>
                (window.location.href = "https://www.bloomberg.com/")
              }
            >
              more news &rarr;
            </p>
          </Col>
          <Col md="6">
            <Row>
              <Weather />
            </Row>
            <Row>
              <Tools />
            </Row>
            <div className="link-col">
              <Row className="quick-links main-headers">
                <h4>Quick Links</h4>
              </Row>
              <Row
                className="quick-links webpage-links"
                onClick={(event) =>
                  (window.location.href = "https://www.businessinsider.com/")
                }
              >
                <p>businessinsider.com</p>
              </Row>
              <Row
                className="quick-links webpage-links"
                onClick={(event) =>
                  (window.location.href = "https://www.bloomberg.com/")
                }
              >
                <p>bloomberg.com</p>
              </Row>
              <Row
                className="quick-links webpage-links"
                onClick={(event) =>
                  (window.location.href = "https://www.allbusiness.com/")
                }
              >
                <p>allbusiness.com</p>
              </Row>
              <Row
                className="quick-links webpage-links"
                onClick={(event) =>
                  (window.location.href = "https://www.forbes.com/")
                }
              >
                <p>forbes.com</p>
              </Row>
              <Row
                className="quick-links webpage-links"
                onClick={(event) =>
                  (window.location.href = "https://www.marketwatch.com/")
                }
              >
                <p>marketwatch.com</p>
              </Row>
              <Row
                className="quick-links webpage-links"
                onClick={(event) =>
                  (window.location.href = "https://www.expedia.com/")
                }
              >
                <p>expedia.com</p>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BloomNews;
