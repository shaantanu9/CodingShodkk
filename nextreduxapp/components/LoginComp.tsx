import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  IconProps,
  Input,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  loginAsync,
  LoginUser,
  loginUserData,
} from "../src/features/login/loginSlice";
import { useAppDispatch, useAppSelector } from "../src/hooks";
const avatars = [
  {
    name: "Ryan Florence",
    url: "https://bit.ly/ryan-florence",
  },
  {
    name: "Segun Adebayo",
    url: "https://bit.ly/sage-adebayo",
  },
  {
    name: "Kent Dodds",
    url: "https://bit.ly/kent-c-dodds",
  },
  {
    name: "Prosper Otemuyiwa",
    url: "https://bit.ly/prosper-baba",
  },
  {
    name: "Christian Nwamba",
    url: "https://bit.ly/code-beast",
  },
];
// import {}
export default function LoginComp(): JSX.Element {
  const userData = useAppSelector(loginUserData);
  const [loginData, setLoginData] = useState<LoginUser>({
    email: "",
    password: "",
    keepMeLogin: false,
  });
  const router = useRouter();
  useEffect(() => {
    console.log("loginData", loginData);
    // getLocalStorage("token") && router.push("/dashboard");
  }, [userData.isAuth]);

  const dispatch = useAppDispatch();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginAsync(loginData));
  };

  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    const { value, id } = e.target as HTMLInputElement;
    if (id === "keepMeLogin") {
      setLoginData({ ...loginData, [id]: !loginData.keepMeLogin });
    } else {
      setLoginData({ ...loginData, [id]: value });
    }
    console.log(loginData);
  };

  return (
    <div className="mb-1 mt-3">
      <Skeleton isLoaded={userData.status !== "loading"}>
        <Box position={"relative"}>
          <Container
            as={SimpleGrid}
            maxW={"7xl"}
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 10, lg: 32 }}
            py={{ base: 10, sm: 20, lg: 32 }}
          >
            <Stack spacing={{ base: 10, md: 20 }}>
              <Heading
                lineHeight={1.1}
                fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
              >
                Self Taught Coder{" "}
                <Text
                  as={"span"}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  bgClip="text"
                >
                  &
                </Text>{" "}
                Full-Stack Developers {""}
                <Text
                  as={"span"}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  bgClip="text"
                >
                  Or
                </Text>{" "}
                Any Curious Learner
              </Heading>
              <Stack direction={"row"} spacing={4} align={"center"}>
                <AvatarGroup>
                  {avatars.map((avatar) => (
                    <Avatar
                      key={avatar.name}
                      name={avatar.name}
                      src={avatar.url}
                      size={useBreakpointValue({ base: "md", md: "lg" })}
                      position={"relative"}
                      zIndex={2}
                      _before={{
                        content: '""',
                        width: "full",
                        height: "full",
                        rounded: "full",
                        transform: "scale(1.125)",
                        bgGradient: "linear(to-bl, red.400,pink.400)",
                        position: "absolute",
                        zIndex: -1,
                        top: 0,
                        left: 0,
                      }}
                    />
                  ))}
                </AvatarGroup>
                <Text
                  fontFamily={"heading"}
                  fontSize={{ base: "4xl", md: "6xl" }}
                >
                  +
                </Text>
                <Flex
                  align={"center"}
                  justify={"center"}
                  fontFamily={"heading"}
                  fontSize={{ base: "sm", md: "lg" }}
                  bg={"gray.800"}
                  color={"white"}
                  rounded={"full"}
                  minWidth={useBreakpointValue({ base: "44px", md: "60px" })}
                  minHeight={useBreakpointValue({ base: "44px", md: "60px" })}
                  position={"relative"}
                  _before={{
                    content: '""',
                    width: "full",
                    height: "full",
                    rounded: "full",
                    transform: "scale(1.125)",
                    bgGradient: "linear(to-bl, orange.400,yellow.400)",
                    position: "absolute",
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                >
                  YOU
                </Flex>
              </Stack>
            </Stack>
            <Stack
              bg={"gray.50"}
              rounded={"xl"}
              p={{ base: 4, sm: 6, md: 8 }}
              spacing={{ base: 8 }}
              maxW={{ lg: "lg" }}
            >
              <Stack spacing={4}>
                <Heading
                  color={"gray.800"}
                  lineHeight={1.1}
                  fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                >
                  Join our Community{" "}
                  <Text
                    as={"span"}
                    bgGradient="linear(to-r, red.400,pink.400)"
                    bgClip="text"
                  >
                    !
                  </Text>
                </Heading>
                <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                  Are you a self taught coder or a Person who is curious to surf
                  the web and learn new things?{" "}
                </Text>

                <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                  Bookmark your Learning Save, Share and Grow with the
                  community.
                </Text>
              </Stack>
              <form onSubmit={handleLogin}>
                <Stack spacing={4}>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="firstname@lastname.io"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                    onChange={handleChange}
                    value={loginData.email}
                  />
                  <Input
                    placeholder="********"
                    bg={"gray.100"}
                    border={0}
                    id="password"
                    name="password"
                    type="password"
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                    onChange={handleChange}
                    value={loginData.password}
                  />
                </Stack>
                <HStack mt={"2"}>
                  <input
                    type="checkbox"
                    id="keepMeLogin"
                    name="keepMeLogin"
                    onChange={handleChange}
                  />
                  <Text
                    color={"gray.500"}
                    fontSize={{ base: "sm", sm: "md" }}
                    m={2}
                  >
                    Keep me Login
                  </Text>
                </HStack>
                <Button
                  fontFamily={"heading"}
                  type="submit"
                  mt={8}
                  w={"full"}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  color={"white"}
                  _hover={{
                    bgGradient: "linear(to-r, red.400,pink.400)",
                    boxShadow: "xl",
                  }}
                >
                  Submit
                </Button>
                <Text
                  color={"gray.500"}
                  fontSize={{ base: "sm", sm: "md" }}
                  m={2}
                >
                  Forgot Password?{" "}
                  <Link
                    color={"blue.400"}
                    href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
                  >
                    Reset
                  </Link>
                </Text>
              </form>
              <Stack>
                <Button
                  fontFamily={"heading"}
                  bg={"gray.200"}
                  color={"gray.800"}
                >
                  Sign up (Become a Member)
                </Button>
                <Text
                  color={"red.500"}
                  fontWeight="bold"
                  fontSize={{ base: "sm", sm: "md" }}
                >
                  (For now its Invite Only)
                </Text>
              </Stack>
              {/* form */}
              <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                Join our community and get to know more about the latest
                technologies and trends.
              </Text>
              <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                We are a group of self taught coders and full stack developers
                who are passionate about learning new things and sharing our
                knowledge with others.
              </Text>
            </Stack>
          </Container>
          <Blur
            position={"absolute"}
            top={-10}
            left={-10}
            style={{ filter: "blur(70px)" }}
          />
        </Box>
      </Skeleton>
    </div>
  );
}

export const Blur = (props: IconProps) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};
