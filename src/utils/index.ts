import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const getApiResourse = async (url: string) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error('fetch: ' + res.status);
      return false;
    }

    return await res.json();
  } catch (error: any) {
    console.error('fetch: ' + error.message);
    return false;
  }
  // return await(await fetch(url)).json();
};

export const useGetAPI = (cashName: string, api: string) => {
  return useQuery([cashName], async () => await axios.get(api), {
    select: (data) => {
      return {
        links: data.data.links,
        data: [
          data?.data.data.map((obj: any) => {
            return {
              id: obj.id,
              name: obj.attributes.titles.en
                ? obj.attributes.titles.en
                : obj.attributes.titles.en_jp, //=================================
              img: obj.attributes.posterImage.small,
              info: obj.attributes.description,
              rating: obj.attributes.averageRating,
              ageRating: obj.attributes.ageRatingGuide,
            };
          }),
        ],
      };
    },
  });
};
