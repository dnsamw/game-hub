import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import { BsSearch } from 'react-icons/bs'

type Props = {}

function SearchInput({}: Props) {
  return (
    <InputGroup>
    <InputLeftElement children={<BsSearch />} />
    <Input borderRadius={20} placeholder="Search Games..." variant={"filled"} />
    </InputGroup>
  )
}

export default SearchInput