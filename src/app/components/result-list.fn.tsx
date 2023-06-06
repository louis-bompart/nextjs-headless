import { SearchEngine, buildResultList } from "@coveo/headless";
import { FunctionComponent, Suspense } from "react";
import { ResultLink } from "./result-link";

interface ResultListProps {
  engine: SearchEngine;
}

export const ResultList: FunctionComponent<ResultListProps> = ({ engine }) => {
  const controller = buildResultList(engine);
  const results = controller.state.results;

  return (
    <div>
      <ul style={{ textAlign: "left" }}>
        {results?.map((result) => (
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
