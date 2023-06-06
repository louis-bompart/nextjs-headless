"use client";

import {
  buildSearchBox,
} from "@coveo/headless";
import { useEffect, useState, FunctionComponent, useContext } from "react";
import { AppContext } from "../client/context/engine";

export const SearchBox: FunctionComponent = () => {
  const { engine } = useContext(AppContext);
  const controller = buildSearchBox(engine!);
  const [state, setState] = useState(controller.state);
  const isEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) =>
    e.key === "Enter";

  useEffect(() => controller.subscribe(() => setState(controller.state)), []);

  return (
    <div>
      <input
        value={state.value}
        onChange={(e) => controller.updateText(e.target.value)}
        onKeyDown={(e) => isEnterKey(e) && controller.submit()}
      />
      <ul>
        {state.suggestions.map((suggestion) => {
          const value = suggestion.rawValue;
          return (
            <li key={value} onClick={() => controller.selectSuggestion(value)}>
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// usage

/**
 * ```tsx
 * const options: SearchBoxOptions = {numberOfSuggestions: 8};
 * const controller = buildSearchBox(engine, {options});
 *
 * <SearchBox controller={controller} />;
 * ```
 */
