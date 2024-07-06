import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/log.png'

type Props = {}

function NavBar({}: Props) {
  return (
    <HStack>
        <Image src={logo} boxSize="60px" />
        <Text>Nav Bar</Text>
    </HStack>
  )
}

export default NavBar