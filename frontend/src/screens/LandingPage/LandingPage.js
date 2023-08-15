import React, { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./LandingStyles.css";
import "./Tmp.css";

function LandingPage({ history }) {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/mynotes");
    }
  }, [history, userInfo]);

  return (
    // <div className="main">
    //   <Container>
    //     <Row>
    //       <div className="intro-text">
    //         <div>
    //           <h1 className="title">Welcome to Note Zipper</h1>
    //           <p className="subtitle">One Safe place for all your notes.</p>
    //         </div>
    //         <div className="buttonContainer">
    //           <Link to="/login">
    //             <Button size="lg" className="landingbutton">
    //               Login
    //             </Button>
    //           </Link>
    //           <Link to="/register">
    //             <Button
    //               variant="outline-primary"
    //               size="lg"
    //               className="landingbutton"
    //             >
    //               Register
    //             </Button>
    //           </Link>
    //         </div>
    //       </div>
    //     </Row>
    //   </Container>
    // </div>

    <div className="center">
      {/* <br> */}
      <h1>
        Welcome To Credential Meter <br />{" "}
      </h1>
      <h3 className="h2">A Place to track all your MAR/MOOCs Credits</h3>
      {/* <button className="RR-1"><Link to="/register">Register</link></button> */}
      <div className="signup_link">
        {/* Not a member? <a href="#">Signup</a> */}
        New Student ? <Link to="/register">Register Here</Link>
      </div>
      <p className="or">OR</p>
      {/* <button className="RR-2"><Link to="/register">Signin</link></button> */}

      <div className="signup_link" >
        {/* Already a member? <a href="#">Signin</a> */}
        Already Have an Account ? <Link to="/login">Login Here</Link>

      </div>
    </div>

  );
}

export default LandingPage;
