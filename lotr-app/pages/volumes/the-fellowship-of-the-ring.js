import { volumes } from "@/resources/lib/data";
import Image from "next/image";

export default function Fellowship() {
  const currentVolume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  console.log(currentVolume);

  return (
    <>
      <h1>{currentVolume.title}</h1>
      <p>{currentVolume.description}</p>
      <Image
        src={currentVolume.cover}
        alt="book cover"
        width={140}
        height={230}
      />
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
