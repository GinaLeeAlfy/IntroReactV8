import { QueryFunction } from "@tanstack/react-query";
import { Animal, IBreedListAPIResponse } from "./APIResponsesTypes";

const fetchBreedList: QueryFunction<
  IBreedListAPIResponse,
  ["breeds", Animal]
> = async ({ queryKey }) => {
  const animal = queryKey[1];

  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  if (!apiRes.ok) {
    throw new Error(`details/${animal} fetch not okay`);
  }

  return apiRes.json();
};

export default fetchBreedList;
