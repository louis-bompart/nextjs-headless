import { cookies } from "next/headers";

export default async function Home() {
  const cookieValue = JSON.stringify(globalThis.toString() === '[object Window]' ? document.cookie: cookies().getAll())
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello world!</h1>
      <p>The cookie value is {cookieValue}</p>
    </main>
  );
}
