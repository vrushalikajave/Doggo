import React from "react";

import { Select } from "@chakra-ui/react";

const SelectCountry = ({ name, setName }) => {
  const selectName = (e) => {
    setName(e.target.value);
  };

  return (
    <Select
      placeholder="african"
      size="lg"
      fontSize={["15px,", "20px", "25px"]}
      w={["100px", "200px", "500px"]}
      marginLeft="100px"
      fontFamily="-moz-initial"
      onChange={selectName}
    >
      <option value="affenpinscher">affenpinscher</option>
      <option value="african">african</option>
      <option value="airedale">airedale</option>
      <option value="akita">akita</option>
      <option value="appenzeller">appenzeller</option>
      <option value="australian">australian</option>
      <option value="basenji">basenji</option>
      <option value="beagle">beagle</option>
      <option value="bluetick">bluetick</option>
      <option value="borzoi">borzoi</option>
      <option value="bouvier">bouvier</option>
      <option value="boxer">boxer</option>
      <option value="brabancon">brabancon</option>
      <option value="briard">briard</option>
      <option value="chihuahua">chihuahua</option>

      <option value="chow">chow</option>
      <option value="clumber">clumber</option>
      <option value="cockapoo">cockapoo</option>
      <option value="dachshund">dachshund</option>
      <option value="dalmatian">dalmatian</option>
      <option value="dane">dane great</option>
      <option value="deerhound">deerhound</option>
      <option value="entlebucher">entlebucher</option>
      <option value="eskimo">eskimo</option>
      <option value="husky">husky</option>
      <option value="keeshond">keeshond</option>
      <option value="kelpie">kelpie</option>
      <option value="labradoodle">labradoodle</option>
      <option value="lhasa">lhasa</option>
      <option value="bluetick">bluetick</option>
      <option value="malamute">malamute</option>
      <option value="bouvier">bouvier</option>
      <option value="boxer">boxer</option>
      <option value="brabancon">brabancon</option>
      <option value="briard">briard</option>
      <option value="chihuahua">yorkshire</option>

      <option value="chow">chow</option>
      <option value="clumber">clumber</option>
      <option value="cockapoo">cockapoo</option>
      <option value="vizsla">vizsla</option>
      <option value="dalmatian">irish</option>
      <option value="wolfhound">wolfhound irish</option>
    </Select>
  );
};

export default SelectCountry;
