import {FaWindows,FaPlaystation,FaXbox,FaApple,FaLinux,FaAndroid} from 'react-icons/fa'
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'
import { HStack, Icon } from '@chakra-ui/react'
import { Platform } from '../hooks/useGames'
import { IconType } from 'react-icons'

type Props = {
    platforms:Platform[]
}

function PlatformIconList({platforms}: Props) {

    /**
     * this is called index signature.
     * [key:string]:IconType : here it means any number of keys of type string 
     * mapped to the type of IconType
     */
    const iconMap:{[key:string]:IconType} = {
        pc:FaWindows,
        playstation:FaPlaystation,
        xbox:FaXbox,
        nintendo:SiNintendo,
        mac:FaApple,
        linux:FaLinux,
        ios:MdPhoneIphone,
        android:FaAndroid,
        web:BsGlobe
    }

  return (
    <HStack marginY={'10px'}>
        {platforms.map((platform)=>
        <Icon as={iconMap[platform.slug]} key={platform.id} color="gray.500">{platform.name}</Icon>
        )}
    </HStack>
  )
}

export default PlatformIconList