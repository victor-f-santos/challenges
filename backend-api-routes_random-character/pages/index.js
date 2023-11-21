import useSWR from "swr";

export default function HomePage() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR("/api/random-character", fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  const { firstName, lastName, age, cpf, twitter } = data;
  return (
    <h1>
      Hello {firstName} {lastName}! Your current age is {age}, your brazilian
      tax id reads {cpf} and your twitter account is {twitter}
    </h1>
  );
}
