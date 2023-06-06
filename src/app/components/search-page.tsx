"use client";

import {
  buildSearchEngine,
  getSampleSearchEngineConfiguration,
} from "@coveo/headless";
import { AppContext } from "../client/context/engine";

export default function SearchPage({
  state,
  children,
}: {
  state: any;
  children: React.ReactNode;
}) {
  const engine = buildSearchEngine({
    configuration: getSampleSearchEngineConfiguration(),
    preloadedState: state,
  });
  return (
    <AppContext.Provider value={{ engine }}>{children}</AppContext.Provider>
  );
}
