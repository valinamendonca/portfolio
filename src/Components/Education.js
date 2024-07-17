import React from "react";
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

const Education = () => {
    return (
        <div className="mb-5" style={{ fontFamily: "cursive", minHeight: "60vh" }}>
            <span style={{ fontSize: '50px' }}>Qualifications</span>
            <div className="mx-2 mx-sm-0 mx-lg-5" style={{ marginBottom: "80px", marginTop: "30px", overflow: "hidden", backgroundColor: "lightgrey", padding: "40px", minHeight: "calc(60vh - 110px)" }}>
                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#mca">
                    <Row>
                        <Col sm={12} md={4} className="mb-3 mb-md-0">
                            <ListGroup style={{ minHeight: "100%" }}>
                                <ListGroup.Item action href="#mca">
                                    MCA
                                </ListGroup.Item>
                                <ListGroup.Item action href="#bca">
                                    BCA
                                </ListGroup.Item>
                                <ListGroup.Item action href="#12">
                                    12<sup>th</sup>
                                </ListGroup.Item>
                                <ListGroup.Item action href="#10">
                                    10<sup>th</sup>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={12} md={8} style={{ fontSize: "25px", lineHeight: "1.9", minHeight: "100%" }}>
                            <Tab.Content>
                                <Tab.Pane eventKey="#mca">
                                    <b>Master of Computer Applications<br />Manipal Institute of Technology (2023-2025)<br />CGPA: 9.53</b>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#bca">
                                    <b>Bachelor of Computer Applications<br />St. Aloysius College (2020-2023)<br />CGPA: 8.94</b>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#12">
                                    <b>12<sup>th</sup> Grade<br />St. Aloysius PU College (2020)<br />Percentage: 89.5%</b>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#10">
                                    <b>10<sup>th</sup> Grade<br />St. Xavier's High School (2018)<br />Percentage: 82.33%</b>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </div>
    );
};

export default Education;
