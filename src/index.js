import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./styles.css";
import { DatePicker } from "antd";
import { Row, Col } from "antd";
function App() {
  return (
    <div className="App">
      <Row>
        <Col span={12}>
          Start date: <DatePicker />
        </Col>
        <Col span={12}>
          End date: <DatePicker />
        </Col>
      </Row>

      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
