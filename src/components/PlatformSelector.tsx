import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { Platform, usePlatforms } from "../hooks/usePlatforms";

type Props = {
    selectedPlatform?: Platform | null;
    onSelectPlatform: (platform:Platform) => void
};

function PlatformSelector({selectedPlatform,onSelectPlatform}: Props) {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
