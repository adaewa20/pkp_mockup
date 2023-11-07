import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import { Tab, Nav } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <h2 className="App-header">Moje bilety</h2>
      <Tab.Container defaultActiveKey="home">
        <Nav variant="underline">
          <Nav.Item>
            <Nav.Link eventKey="home">BILETY</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="travelHistory">HISTORIA PODRÓŻY</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="turned">ZWRÓCONE</Nav.Link>
          </Nav.Item>
          <Nav.Item className="custom-nav-end"></Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="home">
            <div></div>
          </Tab.Pane>
          <Tab.Pane eventKey="travelHistory">
            <div>HISTORIA PODRÓŻY</div>
          </Tab.Pane>
          <Tab.Pane eventKey="turned">
            <div>ZWRÓCONE</div>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
}

export default App;
