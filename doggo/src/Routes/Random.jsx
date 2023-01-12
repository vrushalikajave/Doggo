import React from "react";
import { Box } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Image, Text } from "@chakra-ui/react";
import Navbar from "./Navbar";

const Random = () => {
  const [image, setImage] = useState("");

  useEffect(() => {
    const getImage = async () => {
      let r = await axios.get("https://dog.ceo/api/breeds/image/random");
      setImage(r.data.message);
    };
    getImage();
  }, []);
  console.log(image);
  return (
    <Box>
      <Box>
        <Navbar />
      </Box>

      <Box
        w={[300, 500, 800]}
        margin="auto"
        marginTop="100px"
        h={["300px", "400px", "600px"]}
      >
        <Text fontSize={{ base: "20px", md: "30px", lg: "40px" }}>
          RANDOM IMAGE
        </Text>
        <Box w={[300, 400, 600]} h={["200px", "300px", "500px"]} margin="auto">
          <Image
            borderRadius="full"
            boxSize="250px"
            src={image}
            alt="LOADING..."
            h={["300px", "400px", "600px"]}
            w={[300, 400, 600]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Random;
