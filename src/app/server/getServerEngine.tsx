import { SearchEngine, buildSearchEngine, getSampleSearchEngineConfiguration } from "@coveo/headless";
import { cache } from "react";
import "server-only";

const getEngineUncached = async (): Promise<SearchEngine> => {
  const engine = buildSearchEngine({
    configuration: getSampleSearchEngineConfiguration(),
  });
  engine.executeFirstSearch();
  return new Promise<SearchEngine>((resolve) => {
    engine.subscribe(() => {
      if (engine.state.search.searchResponseId) {
        resolve(engine);
      }
    });
  });
};

export const preload = () => {
  void getEngine();
};

export const getEngine = cache(getEngineUncached);
