import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";

import GlobalContext from "../../context/GlobalContext";
import { Section, Title, ButtonIcon } from "../../components/Core";
import Availability from "../../components/Availability";

const Hero = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      <Section>
        <Container>
          <Row className="text-center justify-content-center">
            <Col lg="10" xl="7">
              <Availability />
              <div className="text-center my-5">
                <Title>Looking for a professional design? Let's talk.</Title>
              </div>
              <div className="text-center">
                <ButtonIcon onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdwNvlvDYWCtDNaX5Ses5oQcYScaXvSp0MHmrBIcFzAjTnFBQ/viewform?usp=sf_link")}>
                  Let's Talk Now
                </ButtonIcon>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Hero;
