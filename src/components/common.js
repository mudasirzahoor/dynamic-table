/**
 * Created by owaismushtaq on 09/07/19.
 */
import React, {Component} from 'react';
import {Nav, Navbar, Button, FormControl, Form, Row, Col, ListGroup, Tabs, Tab} from 'react-bootstrap';
import Logo from './../static/ordb.svg'
export class Header extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    render() {
        return (
            <Row className={"header_component"}>
                <Navbar bg="light" variant="light" className={'col-md-12'}>
                    <div className="col-md-9">
                        <h2 className="col-wht"><img src={Logo} className="App-logo"/></h2>
                    </div>
                    <Navbar.Brand href="#home" className={"col-wht"}>Dashboard</Navbar.Brand>
                    <Nav className="mr-auto justify-content-end col-wht">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Navbar>
            </Row>
        );
    }
}

export class Browse extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    render() {
        function alertClicked() {
            // alert('You clicked the second ListGroupItem');
        }

        return (
            <Col className={"height-100 pl-0 pr-0 browser_backcolor"}>
                <ListGroup>
                    <ListGroup.Item action active href="/">Investigators</ListGroup.Item>
                    <ListGroup.Item action onClick={alertClicked}>Trials</ListGroup.Item>
                </ListGroup>
            </Col>
        );
    }
}
export class Information extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    render() {
        return (
            <Col sm={12} md={12} className={"height-100 pl-0 pr-0 information_backcolor"}>
                {/*<ListGroup>*/}
                {/*<ListGroup.Item className={"col-blk"}>Cras justo odio</ListGroup.Item>*/}
                {/*<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>*/}
                {/*</ListGroup>*/}
                <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
                    <Tab eventKey="home" title="About">
                        <p>Clinical Trial Data</p>
                    </Tab>
                    <Tab eventKey="overview" title="Overview">
                        <p>Data pertaining to health. Data is released from a variety of sources such as the U.S. National Institutes of Health, the European Union Drug Regulatory Authorities, the U.S. Centers for Disease Control and Prevention and more.</p>
                    </Tab>
                </Tabs>
            </Col>
        );
    }
}