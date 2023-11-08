import "./App.css";
import { Tab, Nav, Button } from "react-bootstrap";
import { SearchBar } from "./components/SearchBar";
import { SetFilter } from "./components/SetFilter";
import { FaPlus } from "react-icons/fa";
import { TicketTab } from "./components/TicketTab";

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
            <div className="row col-sm-12 col-12 tab-con-margin">
              <div className="col-9 mp-0">
                <SearchBar />
              </div>
              <SetFilter />
            </div>
            <div className="d-flex flex-row-reverse">
              <Button className="custom-button-1 d-flex align-items-center">
                <FaPlus id="custom-plus" />
                <span className="custom-span-2 ml-auto">
                  DODAJ BILET OKRESOWY
                </span>
              </Button>
            </div>
            <TicketTab />
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
