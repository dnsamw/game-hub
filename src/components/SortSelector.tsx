import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

type Props = {}

function SortSelector({}: Props) {
    return (
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
         Order by : Relevance
        </MenuButton>
        <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Date added</MenuItem>
        <MenuItem>Release date</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Average rating</MenuItem>
        </MenuList>
      </Menu>
    );
}

export default SortSelector