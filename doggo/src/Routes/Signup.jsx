import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import { Checkbox } from "@chakra-ui/react";
import Navbar from "./Navbar";

const Signup = () => {
  const [user, setuser] = useState([]);
  const [form, setForm] = useState({
    email: "",
    fname: "",
    lname: "",
    password: "",
    repeatPassword: "",
  });

  const handleOnChange = (e) => {
    let { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);

    setuser([...user, form]);
    localStorage.setItem("signUpData", JSON.stringify(user));
    setForm({
      email: "",
      fname: "",
      lname: "",
      password: "",
      repeatPassword: "",
    });
  };
  localStorage.setItem("signUpData", JSON.stringify(user));

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Box>
      <Navbar />
      <Box
        w={[300, 500, 750]}
        h="550px"
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
          w={[250, 400, 500]}
          p={4}
          color="white"
          boxShadow="10px 10px 5px #888888"
          margin="auto"
          padding="30px"
          paddingTop="20px"
          marginTop="20px"
        >
          <Box bg="white" w={[200, 350, 450]} p={4} color="black">
            <Heading as="h2" size={["sm", "md", "lg"]}>
              Create account
            </Heading>

            <Box w="100%" p={4} color="black" display="flex">
              <Text
                fontSize={{ base: "6px", md: "8px", lg: "10px" }}
                marginLeft="10px"
              >
                Already have an account?
              </Text>

              <Link to="/login">
                <Text
                  fontSize={{ base: "6px", md: "8px", lg: "10px" }}
                  color="blue"
                  textDecoration="underline"
                >
                  Sign in{" "}
                </Text>
              </Link>
            </Box>

            <Input
              placeholder="Email"
              size={["sm", "md", "md"]}
              background="#f0f0f5"
              name="email"
              onChange={handleOnChange}
              value={form.email}
            />

            <Box display="flex" marginTop="8px" gap="5px">
              <Input
                placeholder="First Name"
                size={["sm", "md", "md"]}
                background="#f0f0f5"
                value={form.fname}
                name="fname"
                onChange={handleOnChange}
              />
              <Input
                placeholder="Last Name"
                size={["sm", "md", "md"]}
                background="#f0f0f5"
                value={form.lname}
                name="lname"
                onChange={handleOnChange}
              />
            </Box>

            <Input
              placeholder="Password"
              size={["sm", "md", "md"]}
              marginTop="8px"
              type="password"
              background="#f0f0f5"
              name="password"
              onChange={handleOnChange}
              value={form.password}
            />

            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme="blue"
              w="100%"
              marginTop="8px"
              onClick={handleOnSubmit}
            >
              {" "}
              Sign up
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

export default Signup;
