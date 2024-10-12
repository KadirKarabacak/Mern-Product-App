// Create a login page and form
import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useUserStore } from "../store/user";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    const { registerUser } = useUserStore();
    // Create a state to handle form data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
    });

    return (
        // Make login form centered
        <Container display={"flex"} justifyContent={"center"}> 
            <Box width={"100%"}  borderRadius={"md"} padding={"2rem"} marginTop={"1rem"}>
                <Stack
                    p={8}
                    boxShadow={"md"}
                    borderRadius={"md"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    backgroundColor={"gray.800"}
                >
                    <Heading textAlign={"center"} fontSize={"40px"} mb={6}>
                        Login
                    </Heading>
                    {/* Add a name field  */}
                    <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input type="text" onChange={(e) => setFormData({ ...formData, name: e.target.value })} value={formData.name} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} value={formData.email} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input type="password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} value={formData.password} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Repeat Password</FormLabel>
                        <Input type="password" onChange={(e) => setFormData({ ...formData, repeatPassword: e.target.value })} value={formData.repeatPassword} />
                    </FormControl>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        <Button colorScheme="blue" onClick={registerUser}>
                            Register
                        </Button>
                        <Link to="/">
                            <Button>Back to home</Button>
                        </Link>
                    </Stack>
                </Stack>
            </Box>
        </Container>
    );
};

export default RegisterPage;
