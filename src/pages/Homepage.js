import { Container } from "@mui/material";
import React from "react";
import Binarytodecimal from "../sections/Binarytodecimal";
import Pallindrome from "../sections/Pallindrome";
import Stringreversal from "../sections/Stringreversal";

const Homepage = () => {
  return (
    <Container maxWidth='md' sx={{ pt: 4, pb: 4 }}>
      <Stringreversal />
      <Pallindrome />
      <Binarytodecimal />
    </Container>
  );
};

export default Homepage;
