import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
// import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
function App() {
    return (
        <Box minH={"100vh"} bg={useColorModeValue("gray.200", "gray.900")}>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/create" element={<CreatePage />} />
                {/* <Route path="/login" element={<LoginPage />} /> */}
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </Box>
    );
}

export default App;
