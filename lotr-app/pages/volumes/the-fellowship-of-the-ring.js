import { volumes } from "@/resources/lib/data";

export default function Fellowship() {
  const currentVolume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  console.log(currentVolume);

  // const previousPage = volumes.find((volume) =>)

  return (
    <>
      <h1>{currentVolume.title}</h1>
      <p>{currentVolume.description}</p>
      {currentVolume.books.map((book) => {
        return (
          <li key={book.ordinal}>
            {book.ordinal} - {book.title}
          </li>
        );
      })}
      {/* <Link href="">Previous page</Link> */}
    </>
  );
}
