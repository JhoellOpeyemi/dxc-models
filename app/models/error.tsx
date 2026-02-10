"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Models page error:", error);
  }, [error]);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Something went wrong on the Models page</h1>
      <p>
        <strong>Error:</strong> {error.message}
      </p>
      <p>
        <strong>Digest:</strong> {error.digest}
      </p>
      <pre
        style={{
          textAlign: "left",
          overflow: "auto",
          padding: "1rem",
          backgroundColor: "#f0f0f0",
        }}
      >
        {error.stack}
      </pre>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
