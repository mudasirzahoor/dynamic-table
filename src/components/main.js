/**
 * Created by owaismushtaq on 09/07/19.
 */
/**
 * Created by owaismushtaq on 08/07/19.
 */
import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Mult from "./../App"
// import Dashboard from 'Dashboard'
import {Header, Browse, Information} from './common'
import {Nav, Container, Row, Col} from 'react-bootstrap';
function App() {
    return (
        <Router>
            <Container fluid={true} className={"main_container"}>
                <Header/>
                <Row className={"body_component"}>
                    <Col sm={12} md={2} className="pl-0 pr-0">
                        <Browse/>
                    </Col>
                    <Col sm={12} md={8} className="pl-0 pr-0">
                        <Route exact path="/" component={Mult}/>
                        {/*<Route path="/about" component={About}/>*/}
                        {/*<Route path="/topics" component={Topics}/>*/}
                    </Col>
                    <Col sm={12} md={2} className="pl-0 pr-0">
                        <Information/>
                    </Col>
                </Row>
            </Container>
        </Router>
    );
}

export default App;

