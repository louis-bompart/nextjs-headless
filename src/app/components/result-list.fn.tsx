"use client";

import { buildResultList } from "@coveo/headless";
import { FunctionComponent, useContext, useEffect, useState } from "react";
import { ResultLink } from "./result-link";
import { AppContext } from "../client/context/engine";


export const ResultList: FunctionComponent = () => {
  const { engine } = useContext(AppContext);
  const controller = buildResultList(engine!);
  const [state, setState] = useState(controller.state);

  useEffect(() => controller.subscribe(() => setState(controller.state)), []);

  if (!state.results.length) {
    return <div>No results</div>;
  }

  return (
    <div>
      <ul style={{ textAlign: "left" }}>
        {state.results?.map((result) => (
          <li key={result.uniqueId}>
            <article>
              <h3>
                {/* Make sure to log analytics when the result link is clicked. */}
                <ResultLink result={result}>{result.title}</ResultLink>
              </h3>
              <p>{result.excerpt}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};

// usage

/**
 * ```tsx
 * const controller = buildResultList(engine);
 *
 * <ResultList controller={controller} />;
 * ```
 */
