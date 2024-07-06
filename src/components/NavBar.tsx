import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/log.png";
import ColorModeSwitch from "./ColorModeSwitch";

type Props = {};

function NavBar({}: Props) {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
