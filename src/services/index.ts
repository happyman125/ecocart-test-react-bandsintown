import axios, { AxiosInstance } from 'axios';

const { REACT_APP_BASE_URL = 'https://rest.bandsintown.com/', REACT_APP_APP_ID = 'test' } = process.env;

axios.defaults.baseURL = REACT_APP_BASE_URL;

export const APIService: AxiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

export type Artist = {
  name: string;
  imageUrl: string;
  thumbUrl: string;
  facebookPageUrl: string;
  upcomingEventCount: number;
  trackerCount: number;
};

function parseArtist(data: any): Artist {
  const {
    name = '',
    image_url = '',
    thumb_url = '',
    facebook_page_url = '',
    upcoming_event_count = 0,
    tracker_count = 0,
  } = data;
  return {
    name,
    imageUrl: image_url,
    thumbUrl: thumb_url,
    facebookPageUrl: facebook_page_url,
    upcomingEventCount: upcoming_event_count,
    trackerCount: tracker_count
  };
}

export const getArtist = (artistName: string): Promise<Artist> => {
  return APIService.get(`/artists/${artistName}`, {
    params: {
      app_id: REACT_APP_APP_ID,
    },
  }).then((res) => {
    if(!res.data || res.data.error) {
      throw new Error('not found')
    }
    return parseArtist(res.data);
  });
};
