import React, { Suspense, SuspenseList, useState } from "react";

import A from "./A";
import B from "./B";

const longLoading = () => new Promise((resolve) => setTimeout(resolve, 10000));
const C = React.lazy(async () => {
  await longLoading();
  return import("./C");
});

export default function App() {
  const [secondPage, setSecondPage] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setSecondPage(true)} disabled={secondPage}>
        Update
      </button>
      <p>
        <b>Nested</b>
      </p>
      {!secondPage ? (
        <SuspenseList key="1" revealOrder="forwards">
          <SuspenseList key="1.1" revealOrder="forwards">
            <Suspense key="1.1.a" fallback={<div>Loading A</div>}>
              <A />
            </Suspense>
          </SuspenseList>
        </SuspenseList>
      ) : (
        <SuspenseList key="1" revealOrder="forwards">
          <SuspenseList key="1.1" revealOrder="forwards">
            <Suspense key="1.1.a" fallback={<div>Loading A</div>}>
              <A />
            </Suspense>
            <Suspense key="1.1.b" fallback={<div>Loading B</div>}>
              <B />
            </Suspense>
            <Suspense key="1.1.c" fallback={<div>Loading C</div>}>
              <C />
            </Suspense>
          </SuspenseList>
        </SuspenseList>
      )}
      <p>
        <b>Not Nested</b>
      </p>
      {!secondPage ? (
        <SuspenseList key="1.1" revealOrder="forwards">
          <Suspense key="1.1.a" fallback={<div>Loading A</div>}>
            <A />
          </Suspense>
        </SuspenseList>
      ) : (
        <SuspenseList key="1.1" revealOrder="forwards">
          <Suspense key="1.1.a" fallback={<div>Loading A</div>}>
            <A />
          </Suspense>
          <Suspense key="1.1.b" fallback={<div>Loading B</div>}>
            <B />
          </Suspense>
          <Suspense key="1.1.c" fallback={<div>Loading C</div>}>
            <C />
          </Suspense>
        </SuspenseList>
      )}
      <div style={{ marginTop: "2em" }}>
        Source is available at{" "}
        <a href="https://github.com/dubzzz/react-suspenselist-bug/">
          https://github.com/dubzzz/react-suspenselist-bug/
        </a>
      </div>
      <div>
        Issue discovered thanks to{" "}
        <a href="https://github.com/dubzzz/fast-check/">
          <b>fast-check</b>
        </a>
      </div>
    </div>
  );
}
