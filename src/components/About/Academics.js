import React from "react";
import { Col, Row, Card } from "react-bootstrap";

function Academics() {
  const academicData = [
    {
      title: "SECONDARY SCHOOL CERTIFICATE (10TH)",
      school: "Shri Gurunanak High School, Gondia, Maharashtra, India",
      board: "Maharashtra Board",
      passOut: "March 2020",
      percentage: "85.80%",
    },
    {
      title: "HIGHER SECONDARY CERTIFICATE (12TH)",
      school: "Dhote Bandhu Science College, Gondia, Maharashtra, India",
      board: "Maharashtra Board",
      passOut: "March 2022",
      percentage: "75.17%",
    },
    {
      title: "B.Tech Graduation",
      school: "GH Raisoni College of Engineering, Nagpur, Maharashtra, India",
      board: "Autonomous University",
      passOut: "Pursuing (Expected June 2026)",
      percentage: "Current CGPA: 9.1",
    },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {academicData.map((item, index) => (
        <Col key={index} xs={12} md={4} className="mb-4">
          <Card className="h-100 shadow text-center p-3">
            <Card.Body>
              <Card.Title className="fw-bold">{item.title}</Card.Title>
              <Card.Text>
                <strong>Institute:</strong> {item.school} <br />
                <strong>Board:</strong> {item.board} <br />
                <strong>Year:</strong> {item.passOut} <br />
                <strong>Result:</strong> {item.percentage}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Academics;
