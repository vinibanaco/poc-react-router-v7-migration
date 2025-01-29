import { Form, useSearchParams } from "react-router";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";

  return (
    <div>
      <Form>
        <input name="q" defaultValue={query} placeholder="Search recipes..." />
        <button type="submit">Search</button>
      </Form>

      {query && <p>Searching for: {query}</p>}
    </div>
  );
}
