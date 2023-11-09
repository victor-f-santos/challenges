import Link from "next/link";

export default function volumes() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <ul>
        <li>
          <Link href="/volumes">Volumes</Link>
        </li>
      </ul>
    </div>
  );
}
