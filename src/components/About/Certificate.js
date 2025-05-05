import React from "react";
import { Col, Row, Card } from "react-bootstrap";

function Certifications() {
  const certificationData = [
    {
      title: "RDBMS PostgreSQL Training",
      issuer: "Indian Institute of Technology, Bombay",
      issuedOn: "Jan 2025",
    },
    {
      title: "Certificate of Appreciation (NGO - 3 months)",
      issuer: "Green Leader's Foundation presents Leader's Club, Nagpur",
      issuedOn: "Jan 31, 2025",
    },
    {
      title: "Certificate of Appreciation (NGO - 15 days)",
      issuer: "9TEEN INITIATIVE Foundation",
      issuedOn: "Nov 15, 2025",
    },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {certificationData.map((cert, index) => (
        <Col key={index} xs={12} md={4} className="mb-4">
          <Card className="h-100 shadow text-center p-3">
            <Card.Body>
              <Card.Title className="fw-bold">{cert.title}</Card.Title>
              <Card.Text>
                <strong>Issuer:</strong> {cert.issuer} <br />
                <strong>Issued On:</strong> {cert.issuedOn}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Certifications;
