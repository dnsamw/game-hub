import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

type Props = {
    onSearch:(searchText:string)=>void
}

function SearchInput({onSearch}: Props) {

    const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={(event)=>{
        event.preventDefault()
        if(inputRef.current)
        onSearch(inputRef.current.value)
    }}>
    <InputGroup>
    <InputLeftElement children={<BsSearch />} />
    <Input ref={inputRef} borderRadius={20} placeholder="Search Games..." variant={"filled"} />
    </InputGroup>
    </form>
  )
}

export default SearchInput