"use client";

import {
  buildSearchEngine,
  getSampleSearchEngineConfiguration,
} from "@coveo/headless";
import { AppContext } from "../client/context/engine";
import { useMemo } from "react";

export default function SearchPage({
  state,
  children,
}: {
  state: any;
  children: React.ReactNode;
}) {
  const engine = useMemo(
    () =>
      buildSearchEngine({
        configuration: getSampleSearchEngineConfiguration(),
        preloadedState: state,
      }),
    undefined
  );
  return (
    <AppContext.Provider value={{ engine }}>{children}</AppContext.Provider>
  );
}
