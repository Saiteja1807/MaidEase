import React from "react";
import { Container, Row, Col } from "reactstrap";
import classes from '../styles/Footer.module.css';
import Link from "next/link";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <div className={`${classes.set__footer__width}`}>
        <Row >

          <Col lg="6" className={`${classes.footer__top}`}>
            <div className={`${classes.footer__creator}`}>
              <h6>Created by MaidEase</h6>
            </div>
          </Col>

          {/* ========= footer bottom ========= */}
          <Col lg="12">
            <div className={`${classes.footer__copyright}`}>
              <p>
                &copy; Copyright {year} - Developed by MaidEase. All right
                reserved.{" "}
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;