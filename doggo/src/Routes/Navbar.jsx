import React from "react";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { Button, ButtonGroup } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box h="100%" display="flex" gap="20px" padding="10px" background="pink">
      <Button colorScheme="blue">
        <Link to="/login">
          <h3 data-testid="login-link">Login </h3>
        </Link>
      </Button>

      <Button colorScheme="blue">
        <Link to="/signup">
          <h3 data-testid="login-link">Sign up</h3>
        </Link>
      </Button>

      <Button colorScheme="blue">
        <Link to="/dashboard">
          <h3 data-testid="home-link">Dashboard</h3>
        </Link>
      </Button>

      <Button colorScheme="blue">
        <Link to="/random">
          <h3 data-testid="home-link">Random</h3>
        </Link>
      </Button>
    </Box>
  );
};

export default Navbar;
