import React from "react";
import {
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Image,
  Text,
  Box,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import blooming_cart from "../assets/images/blooming_cart.jpg";
import signup_backcover from "../assets/images/signup_backcover.jpg";
const Login = () => {
  const navigate = useNavigate();
  const [error, changeError] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleNavigate = () => {
    navigate(`http://localhost:8080/users/signup`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8080/users/login`, {
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          navigate("/");
        } else {
          changeError(response.data.error);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <Stack bgImage={signup_backcover}>
        <Stack>
          <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
          >
            <Stack
              spacing={4}
              w={"full"}
              maxW={"md"}
              bg={useColorModeValue("white", "gray.700")}
              rounded={"xl"}
              border={"1px solid lightgrey"}
              boxShadow={"lg"}
              my={12}
            >
              <Box backgroundColor={"#F2F5FC"} borderRadius="10px" pt="50px">
                <Link to="/">
                  <Image
                    src={blooming_cart}
                    width={"40%"}
                    margin="auto"
                    marginTop={"0px"}
                    backgroundColor={"#F2F5FC"}
                  />
                </Link>
                <Heading
                  lineHeight={1.1}
                  fontSize={{ base: "2xl", md: "3xl", lg: "1.625rem" }}
                  fontWeight={"12px"}
                  color={"black"}
                  backgroundColor={"#F2F5FC"}
                  pb="17px"
                  mt="12px"
                  textAlign="center"
                >
                  Login Into Blooming Cart
                </Heading>
              </Box>
              <Stack p={6}>
                <form onSubmit={handleSubmit}>
                  <FormControl>
                    <FormLabel fontSize={"14px"} color={"#777e85"}>
                      Email{" "}
                    </FormLabel>
                    <Input
                      placeholder="Enter email"
                      height={"34px"}
                      _placeholder={{ color: "gray.500" }}
                      type="text"
                      value={user.email}
                      name="email"
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel fontSize={"14px"} color={"#777e85"}>
                      Password
                    </FormLabel>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      height={"34px"}
                      value={user.password}
                      name="password"
                      onChange={handleChange}
                    />
                  </FormControl>
                  <Text color="red">{error}</Text>
                  <Button
                    type="submit"
                    bg={"#3070f0"}
                    height={"34px"}
                    fontSize={"14px"}
                    color={"white"}
                    marginTop={"12px"}
                    w={"100%"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Sign In
                  </Button>
                </form>
                <Stack spacing={6}>
                  <Divider orientation={"horizontal"} />
                  <Stack>
                    <Button
                      colorScheme={"none"}
                      border={"1px solid lightgrey"}
                      _hover={{ bg: "#e2e6eb" }}
                      leftIcon={<FcGoogle fontSize={"20px"} />}
                      textColor={"#777E85"}
                      variant={"solid"}
                      height={"34px"}
                      fontSize={"14px"}
                    >
                      Sign in with Google
                    </Button>
                    <Button
                      colorScheme={"none"}
                      border={"1px solid lightgrey"}
                      _hover={{ bg: "#e2e6eb" }}
                      marginTop="-80px"
                      leftIcon={<FaFacebook fontSize={"20px"} />}
                      textColor={"#777E85"}
                      variant={"solid"}
                      height={"34px"}
                      fontSize={"14px"}
                    >
                      Sign in with Facebook
                    </Button>
                  </Stack>
                  <Divider orientation={"horizontal"} colorScheme={"black"} />
                  <Flex justifyContent={"space-between"}>
                    <Text color={"clack"} fontSize={"14px"}>
                      Not registered?{" "}
                      <span
                        cursor={"pointer"}
                        onClick={handleNavigate}
                        color={"#200589"}
                        fontSize={"14px"}
                      >
                        Create Account
                      </span>
                    </Text>
                  </Flex>
                </Stack>
              </Stack>
            </Stack>
          </Flex>
        </Stack>
      </Stack>
    </>
  );
};

export default Login;
