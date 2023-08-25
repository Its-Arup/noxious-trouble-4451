import { Spinner } from "@chakra-ui/react";
import React from "react";

function Loding() {
  return (
    <div>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </div>
  );
}

export default Loding;