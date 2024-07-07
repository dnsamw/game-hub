import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/log.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

type Props = {
  onSearch:(searchText:string)=>void
}

function NavBar({onSearch}: Props) {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
