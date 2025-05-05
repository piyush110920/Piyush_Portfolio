import React from "react";
import { Col, Row, Card } from "react-bootstrap";

function Internships() {
  const internshipData = [
    {
      company: "Pragma Software",
      role: "Web Development Intern",
      duration: "May 2023 - Oct 2023 (6 months)",
    },
    {
      company: "Skillcraft",
      role: "Software Development Intern",
      duration: "1st Feb 2025 - 28th Feb 2025 (4 weeks)",
    },
    {
      company: "Prodigy",
      role: "Software Development Intern",
      duration: "1st Feb 2025 - 28th Feb 2025 (4 weeks)",
    },
    {
      company: "CodSoft",
      role: "Java Programming Intern",
      duration: "10th Feb 2025 - 10th Mar 2025 (4 weeks)",
    },
    {
      company: "Cognifyz",
      role: "Web Development Intern",
      duration: "28th Feb 2025 - 28th Mar 2025 (4 weeks)",
    },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {internshipData.map((item, index) => (
        <Col key={index} xs={12} md={4} className="mb-4">
          <Card className="h-100 shadow text-center p-3">
            <Card.Body>
              <Card.Title className="fw-bold">{item.company}</Card.Title>
              <Card.Text>
                <strong>Role:</strong> {item.role} <br />
                <strong>Duration:</strong> {item.duration}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Internships;
