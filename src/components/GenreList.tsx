import { Genre, useGenres } from "../hooks/useGenres";
import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import { getCroppedImageUrl } from "../services/image-url";

type Props = {
  onSelectGenre: (genre: Genre) => void;
};

function GenreList({onSelectGenre}: Props) {
  const { data, isLoading, error } = useGenres();

  if(isLoading) return <Spinner />;
  if(error) return null;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button onClick={() => onSelectGenre(genre)} variant={"link"} fontSize={"lg"}>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
