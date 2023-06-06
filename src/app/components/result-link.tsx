"use client";

import { buildInteractiveResult, Result } from "@coveo/headless";
import {
  FunctionComponent,
  PropsWithChildren,
  useContext,
  useEffect,
} from "react";
import { AppContext } from "../client/context/engine";

interface LinkProps extends PropsWithChildren {
  result: Result;
}

export const ResultLink: FunctionComponent<LinkProps> = ({
  result,
  children,
}) => {
  const { engine } = useContext(AppContext);
  const interactiveResult = buildInteractiveResult(engine!, {
    options: { result },
  });

  useEffect(() => () => interactiveResult.cancelPendingSelect(), []);

  return (
    <a
      href={result.clickUri}
      onClick={() => interactiveResult.select()}
      onContextMenu={() => interactiveResult.select()}
      onMouseDown={() => interactiveResult.select()}
      onMouseUp={() => interactiveResult.select()}
      onTouchStart={() => interactiveResult.beginDelayedSelect()}
      onTouchEnd={() => interactiveResult.cancelPendingSelect()}
    >
      {children}
    </a>
  );
};
