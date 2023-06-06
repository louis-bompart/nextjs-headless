import {SearchEngine} from '@coveo/headless';
import {createContext} from 'react';

export interface AppContextType {
  engine: SearchEngine;
}

export const AppContext = createContext<Partial<AppContextType>>({});
