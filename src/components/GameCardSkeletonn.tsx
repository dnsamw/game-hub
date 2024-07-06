import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

type Props = {}

function GameCardSkeletonn({}: Props) {
  return (
    <Card>
        <Skeleton height={'200px'} />
        <CardBody>
            <SkeletonText />
        </CardBody>
    </Card>
  )
}

export default GameCardSkeletonn