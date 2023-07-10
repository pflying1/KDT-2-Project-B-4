import { createContext } from 'react';

interface MapContextProps {
  LatLng: number[];
  setLatLng: (position: number[]) => void;
}

export const SearchContext = createContext<MapContextProps>({ LatLng: [], setLatLng: () => {} });;
