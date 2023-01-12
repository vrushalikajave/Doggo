import { useContext, useEffect, useState } from "react";

import { AppContext } from "../Context/AppContext";
import axios from "axios";

import { Box, Button, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import SelectCountry from "../Components/SelectCountry";
import Navbar from "./Navbar";

function Dashboard() {
  const { token, logoutUser } = useContext(AppContext);
  const [country, setCountry] = useState(
    "https://dog.ceo/api/breed/bluetick/images/random"
  );
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("bluetick");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    const getData = async (name) => {
      let r = await axios.get(
        `https://dog.ceo/api/breed/${name}/images/random`
      );
      console.log(r.data.message);
      setCountry("");
      setCountry(r.data.message);
    };
    getData(name);
  }, [name]);

  return (
    <Box>
      <Box>
        <Navbar />
      </Box>
      <Box
        w={[300, 500, 800]}
        margin="auto"
        marginTop="30px"
        h={["300px", "400px", "600px"]}
      >
        <SelectCountry name={name} setName={setName} />

        <Box
          w={[300, 400, 600]}
          h={["200px", "300px", "500px"]}
          margin="auto"
          marginTop="30px"
        >
          <Image
            borderRadius="full"
            boxSize="250px"
            src={country}
            alt="LOADING..."
            h={["300px", "400px", "600px"]}
            w={[300, 400, 600]}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
