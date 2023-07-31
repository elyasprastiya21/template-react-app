import { useQuery } from "@tanstack/react-query";
import { getCharacterApi } from "../../../api/poke";

export const useGetCharacter = () => {
  return useQuery({
    queryKey: ["character"],
    queryFn: () => getCharacterApi(),
  });
};
