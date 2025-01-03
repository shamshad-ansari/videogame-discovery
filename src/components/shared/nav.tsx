import { HStack, Image, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import logo from "../assets/logo.webp";

const Nav = () => {
  return (
    <HStack>
      {/* <ImageComponent
        src="/assets/logo.webp"
        alt="Logo"
        maxWidth={60}
        minHeight={60}
      /> */}
      <Image asChild boxSize="60px">
        <NextImage src={logo} alt="logo"></NextImage>
      </Image>
      <Text>NavBar</Text>
    </HStack>
  );
};

export default Nav;
