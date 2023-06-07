import { ResultList } from "@/app/components/result-list.fn";
import SearchPage from "./components/search-page";
import { SearchBox } from "./components/search-box.fn";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello world!</h1>
      <SearchPage>
        <SearchBox></SearchBox>
        <ResultList></ResultList>
      </SearchPage>
    </main>
  );
}
