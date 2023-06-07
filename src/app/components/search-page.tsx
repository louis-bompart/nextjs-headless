"use client";

import {
  SearchEngine,
  buildSearchEngine,
  getSampleSearchEngineConfiguration,
} from "@coveo/headless";
import { AppContext } from "../client/context/engine";

const getEngine = (): SearchEngine => {
  const engine = buildSearchEngine({
    configuration: getSampleSearchEngineConfiguration(),
  });
  engine.executeFirstSearch();
  return engine;
};

export default function SearchPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const engine = getEngine();
  return (
    <AppContext.Provider value={{ engine }}>{children}</AppContext.Provider>
  );
}
