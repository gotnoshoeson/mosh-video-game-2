import { Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import useScreenshots from '../hooks/useScreenshots'

interface Props {
  gameId: number
}

const Screenshots = ({ gameId }: Props) => {
  const {data, isLoading, error} = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const screenshots = data?.results;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {screenshots?.map(file =>  <Image key={file.id} src={file.image}/>)}
    </SimpleGrid>
  )
}

export default Screenshots