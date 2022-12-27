import Link from "next/link";
import { useState } from "react";

function Tabpanel() {
  const [query, setQuery] = useState("");
  return (
    <div className="mt-8">
      <input
        type="search"
        className="outline-none p-2 opacity-50 rounded-md mr-5"
        placeholder="Type something here..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Link href={`/search?query=${query}`}>
        <button className="bg-white p-2 rounded-md">Search Keyword</button>
      </Link>
    </div>
  );
}

export default Tabpanel;
