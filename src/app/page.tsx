import { ResultList } from "@/app/components/result-list.fn";
import {
  buildSearchEngine,
  getSampleSearchEngineConfiguration,
  SearchEngine,
} from "@coveo/headless";
import SearchPage from "./components/search-page";
import { SearchBox } from "./components/search-box.fn";

export const getEngine = async (): Promise<SearchEngine> => {
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

export default async function Home() {
  const engine = await getEngine();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello world!</h1>
      <SearchPage
        state={engine.state}
        children={
          <>
            <SearchBox></SearchBox>
            <ResultList></ResultList>
          </>
        }
      ></SearchPage>
    </main>
  );
}
