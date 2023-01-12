import React from "react";
import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { Navigate } from "react-router-dom";
import { Checkbox } from "@chakra-ui/react";
import Navbar from "./Navbar";

const Login = () => {
  const { setToken, token } = useContext(AppContext);
  const [loginUser, setLoginUser] = useState({
    email: "",

    password: "",
  });

  const handleOnChange = (e) => {
    let { type, name, value, checked, loginUserfiles } = e.target;

    setLoginUser({
      ...loginUser,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    let signUpData = JSON.parse(localStorage.getItem("signUpData"));

    console.log(loginUser);
    console.log(signUpData);
    console.log(token);

    for (var i = 0; i < signUpData.length; i++) {
      if (
        signUpData[i].email == loginUser.email &&
        signUpData[i].password == loginUser.password
      ) {
        setToken(true);
        console.log(token);
      }
    }
    loginUser({
      email: "",

      password: "",
    });
  };
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  if (token == true) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <Box>
      <Navbar />
      <Box
        w={[300, 500, 700]}
        h="500px"
        bgGradient={[
          "linear(to-l, #ffe6b3, #ff66a3, )",
          "linear(to-tr, #fff7e6)",
        ]}
        margin="auto"
        padding="30px"
        marginTop="20px"
      >
        <Box
          bg="white"
          w={[200, 300, 400]}
          p={4}
          color="white"
          boxShadow="10px 10px 5px #888888"
          margin="auto"
          padding="30px"
          paddingTop="20px"
          marginTop="20px"
        >
          <Box bg="white" w="95%" p={4} color="black">
            <Heading as="h2" size={["sm", "md", "lg"]}>
              Login
            </Heading>

            <Box w="100%" p={4} color="black" display="flex">
              <Text
                fontSize={{ base: "6px", md: "8px", lg: "10px" }}
                marginLeft="10px"
              >
                Don't have an account?
              </Text>

              <Link to="/signup">
                <Text
                  fontSize={{ base: "6px", md: "8px", lg: "10px" }}
                  color="blue"
                  textDecoration="underline"
                >
                  Sign up{" "}
                </Text>
              </Link>
            </Box>

            <Input
              placeholder="Email"
              size={["sm", "md", "md"]}
              background="#f0f0f5"
              name="email"
              onChange={handleOnChange}
              value={loginUser.email}
            />

            <Input
              placeholder="Password"
              size={["sm", "md", "md"]}
              marginTop="8px"
              type="password"
              background="#f0f0f5"
              name="password"
              onChange={handleOnChange}
              value={loginUser.password}
            />

            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme="blue"
              w="100%"
              marginTop="8px"
              onClick={handleOnSubmit}
            >
              {" "}
              Sign in
            </Button>
          </Box>
          <Box w="100%" p={4} color="black" display="flex" gap="5px">
            <Checkbox isDisabled></Checkbox>
            <Text fontSize={{ base: "6px", md: "8px", lg: "10px" }}>
              I have read and agreed to the{" "}
            </Text>

            <Text
              fontSize={{ base: "6px", md: "8px", lg: "10px" }}
              color="blue"
            >
              Terms of Service
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
