import React, { useContext, useState } from "react";
import { Authcontext } from "../Context/AuthContext";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
function Signup() {
  const { Signin } = useContext(Authcontext);
  const [userdata, setuserdata] = useState({
    name: "",
    age: 0,
    email: "",
    password: "",
  });

  return (
    <div>
      <form>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Enter Name...." type="text"/>
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Age</FormLabel>
          <Input placeholder="Enter Age.." type="number"/>
        </FormControl>

        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input placeholder="Enter Email..." type="email" name="email" value={userdata.email} onChange={(e)=>{setuserdata({...userdata,email:e.target.value})}}/>
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input placeholder="Enter Password..." type="password" name="password" value={userdata.password} onChange={(e)=>{setuserdata({...userdata,password:e.target.value})}}/>
        </FormControl>

        <Button colorScheme="blue" mr={3} type="submit">
          Save
        </Button>
      </form>
    </div>
  );
}

export default Signup;
