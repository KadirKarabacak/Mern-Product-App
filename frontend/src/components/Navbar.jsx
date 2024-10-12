import { PlusSquareIcon } from "@chakra-ui/icons";
import {
    Button,
    Container,
    Flex,
    HStack,
    Text,
    useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useUserStore } from "../store/user";

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { user } = useUserStore();
    return (
        <Container maxW="1140px" px={4}>
            <Flex
                h={16}
                justifyContent="space-between"
                alignItems="center"
                flexDir={{
                    base: "column",
                    sm: "row",
                }}
            >
                <Text
                    fontSize={{ base: "22", sm: "28" }}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    textAlign={"center"}
                    bgGradient={"linear(to-r, cyan.400, blue.500)"}
                    bgClip={"text"}
                >
                    <Link to="/">Product Store 🛒</Link>
                </Text>

                <HStack spacing={2} alignItems={"center"}>
                    <Link to="/create">
                        <Button>
                            <PlusSquareIcon fontSize={20} />
                        </Button>
                    </Link>
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? (
                            <IoMoon />
                        ) : (
                            <LuSun size="20" />
                        )}
                    </Button>
                    {/* If user is not logged in, show login and register buttons */}
                    {!user && (
                        <>
                            <Link to="/login">
                                <Button>Login</Button>
                            </Link>
                            <Link to="/register">
                                <Button>Register</Button>
                            </Link>
                        </>
                    )}
                </HStack>
            </Flex>
        </Container>
    );
};

export default Navbar;
