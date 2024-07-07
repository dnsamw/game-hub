import { useData } from "./useData";
import { Genre } from "./useGenres";


export interface Platform {
    id:number;
    name:string;
    slug:string;
}
export interface Game {
    id:number;
    name:string
    background_image:string;
    parent_platforms:{platform:Platform}[] //due to the design smell in rawg api
    metacritic:number;
}

export const useGames = (selectedGenre: Genre | null)=> useData<Game>("/games",{params:{genres:selectedGenre?.id}},[selectedGenre?.id]);