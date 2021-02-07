import React from "react";
import Ticker from "react-ticker";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import CssBadge from "../images/iconfinder_badge-css-3_317756.svg";
import Laravel from "../images/iconfinder_laravel_1006880.svg";
import Mysql from "../images/iconfinder_MySQL_1012821.svg";
import NodeJS from "../images/iconfinder_nodejs-new-pantone-black_1012818.png";
import Php from "../images/iconfinder_php-logo_1012812.png";
import ReactJS from "../images/iconfinder_React.js_logo_1174949.svg";

export default function Home() {
  return (
    <Jumbotron className='bg-transparent'>
      <h1>Hello, Everyone!</h1>
      <hr />
      <Container>
        <Row>
          <Col>
            <p>
              Turning Ideas into Reality
              <br />
              Transforming ways
              <br />
              Technology at work
              <br />
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>CSS</li>
              <li>HTML</li>
              <li>JavaScript</li>
              <li>JQuery</li>
              <li>React-js</li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>PHP</li>
              <li>ASP.NET</li>
              <li>C#</li>
              <li>.NET core</li>
              <li>LARAVEL</li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>Node-js</li>
              <li>WordPress</li>
              <li>MySQL</li>
              <li>MSSQL Server</li>
              <li>Bootstrap</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <Ticker mode='smooth' offset='run-in'>
              {({ index }) => (
                <>
                  <img src={CssBadge} alt='CSS-Badge' />
                  <img src={Laravel} alt='CSS-Badge' />
                  <img src={Mysql} alt='CSS-Badge' />
                  <img src={NodeJS} alt='CSS-Badge' />
                  <img src={Php} alt='CSS-Badge' />
                  <img src={ReactJS} alt='CSS-Badge' />
                </>
              )}
            </Ticker>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
