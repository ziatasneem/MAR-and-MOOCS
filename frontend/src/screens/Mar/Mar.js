import axios from "axios";
import { React, useEffect, useState } from "react";
import {
  Accordion,
  AccordionCollapse,
  Badge,
  Button,
  Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import notes from "../../data/notes";
// import notes from "../../../../backend/data/notes";
const Mar = () => {

  return (
    <MainScreen title="Welcome Back Ankur Sarkar">
        <h2> Mar Points </h2>
      <Link to="newentry">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          New Entry
        </Button>
      </Link>
      {notes.map((note) => (
        <Accordion key={note._id}>
          <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                <Accordion.Toggle as={Card.Text} variant="link" eventKey="0">
                  {note.title} 
                </Accordion.Toggle>
              </span>
              <div>
                <Button href={`/note/${note._id}`}>Edit</Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  // onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <h4>
                  <Badge variant="success">Category - {note.category}</Badge> 
                </h4>
                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <h6>Semester - {note.sem}</h6>
                  <h6>Credits - {note.credits}</h6> 
                  <a href={note.link} target="_blank">
                    Click here for the Certificate
                  </a>
                  <footer className="blockquote-footer">
                    Created on - Date
                  </footer>
                </blockquote>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default Mar;
