import React from "react";
import "./HeaderPage.css";
import { Container, NavbarComponent, SearchPage } from "../../exports/export";
function HeaderPage() {
  return (
    <Container className="headerPage">
      <NavbarComponent />
      <SearchPage />
    </Container>
  );
}

export default HeaderPage;
