import React from "react";
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Container from "react-bootstrap/esm/Container";

const Education=()=>{
    return(
        <div style={{height: "60vh", fontFamily: "cursive"}}>
            <span style={{ fontSize: '50px'}}>Qualifications</span>
            <div style={{marginTop: "100px", marginLeft: "100px", overflow: "hidden", backgroundColor: "lightgrey", padding: "40px", width: "1300px"}}>
                <Tab.Container id="list-group-tabs-example" style={{marginTop: "500px"}} defaultActiveKey="#mca">
                <Row>
                    <Col sm={4}>
                    <ListGroup>
                        <ListGroup.Item action href="#mca" style={{width: "200px"}}>
                        MCA
                        </ListGroup.Item>
                        <ListGroup.Item action href="#bca" style={{width: "200px"}}>
                        BCA
                        </ListGroup.Item>
                        <ListGroup.Item action href="#12" style={{width: "200px"}}>
                        12<sup>th</sup>
                        </ListGroup.Item>
                        <ListGroup.Item action href="#10" style={{width: "200px"}}>
                        10<sup>th</sup>
                        </ListGroup.Item>
                    </ListGroup>
                    </Col>
                    <Col sm={8} style={{left: "400px", position: "absolute", fontSize: "25px", lineHeight: "1.9"}}>
                    <Tab.Content>
                        <Tab.Pane eventKey="#mca"><b>Master of Computer Applications<br/>Manipal Institute of Technology (2023-2025)<br/>CGPA : 9.53</b></Tab.Pane>
                        <Tab.Pane eventKey="#bca"><b>Bachelor of Computer Applications<br/>St. Aloysius College (2020-2023)<br/>CGPA : 8.94</b></Tab.Pane>
                        <Tab.Pane eventKey="#12"><b>10<sup>th</sup> Grade<br/>St. Aloysius PU College (2020)<br/>Percentage : 89.5%</b></Tab.Pane>
                        <Tab.Pane eventKey="#10"><b>12<sup>th</sup> Grade<br/>St. Xavier's High School (2018)<br/>Percentage : 82.33%</b></Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
                </Tab.Container>
            </div>
        </div>
    )
};

export default Education