import React, { Suspense, SuspenseList } from "react";

const A = createAsyncText("A");
const B = createAsyncText("B");
const C = createAsyncText("C");

function NoNestedSuspenseList({ version }) {
  if (version === 1) {
    return (
      <>
        <SuspenseList key="1.1" revealOrder="forwards">
          <Suspense key="1.1.a" fallback={<Text text="Loading A" />}>
            <A />
          </Suspense>
        </SuspenseList>
        <CodeBlock>{`<SuspenseList key="1.1" revealOrder="forwards">
  <Suspense key="1.1.a" fallback={<Text text="Loading A" />}>
    <A />
  </Suspense>
</SuspenseList>`}</CodeBlock>
      </>
    );
  }
  return (
    <>
      <SuspenseList key="1.1" revealOrder="forwards">
        <Suspense key="1.1.a" fallback={<Text text="Loading A" />}>
          <A />
        </Suspense>
        <Suspense key="1.1.b" fallback={<Text text="Loading B" />}>
          <B />
        </Suspense>
        <Suspense key="1.1.c" fallback={<Text text="Loading C" />}>
          <C />
        </Suspense>
      </SuspenseList>
      <CodeBlock>{`<SuspenseList key="1.1" revealOrder="forwards">
  <Suspense key="1.1.a" fallback={<Text text="Loading A" />}>
    <A />
  </Suspense>
  <Suspense key="1.1.b" fallback={<Text text="Loading B" />}>
    <B />
  </Suspense>
  <Suspense key="1.1.c" fallback={<Text text="Loading C" />}>
    <C />
  </Suspense>
</SuspenseList>`}</CodeBlock>
    </>
  );
}

function NestedSuspenseList({ version }) {
  if (version === 1) {
    return (
      <>
        <SuspenseList key="1" revealOrder="forwards">
          <SuspenseList key="1.1" revealOrder="forwards">
            <Suspense key="1.1.a" fallback={<Text text="Loading A" />}>
              <A />
            </Suspense>
          </SuspenseList>
        </SuspenseList>
        <CodeBlock>{`<SuspenseList key="1" revealOrder="forwards">
  <SuspenseList key="1.1" revealOrder="forwards">
    <Suspense key="1.1.a" fallback={<Text text="Loading A" />}>
      <A />
    </Suspense>
  </SuspenseList>
</SuspenseList>`}</CodeBlock>
      </>
    );
  }
  return (
    <>
      <SuspenseList key="1" revealOrder="forwards">
        <SuspenseList key="1.1" revealOrder="forwards">
          <Suspense key="1.1.a" fallback={<Text text="Loading A" />}>
            <A />
          </Suspense>
          <Suspense key="1.1.b" fallback={<Text text="Loading B" />}>
            <B />
          </Suspense>
          <Suspense key="1.1.c" fallback={<Text text="Loading C" />}>
            <C />
          </Suspense>
        </SuspenseList>
      </SuspenseList>
      <CodeBlock>{`<SuspenseList key="1" revealOrder="forwards">
  <SuspenseList key="1.1" revealOrder="forwards">
    <Suspense key="1.1.a" fallback={<Text text="Loading A" />}>
      <A />
    </Suspense>
    <Suspense key="1.1.b" fallback={<Text text="Loading B" />}>
      <B />
    </Suspense>
    <Suspense key="1.1.c" fallback={<Text text="Loading C" />}>
      <C />
    </Suspense>
  </SuspenseList>
</SuspenseList>`}</CodeBlock>
    </>
  );
}

function PageContent() {
  const [version, setVersion] = React.useState(1);

  const [, setC] = React.useState(0);
  const withRerender = f => () => {
    f();
    setC(c => c + 1);
  };

  return (
    <>
      <h1>
        Inconsistencies between nested SuspenseList and single SuspenseList
      </h1>
      <h2>Steps to reproduce:</h2>
      <ul>
        <li>
          Click on <em>Resolve A</em>
        </li>
        <li>
          Click on <em>Resolve B</em>
        </li>
        <li>
          Click on <em>See second page</em>
        </li>
      </ul>
      <p>Nested: A / Loading B / Loading C</p>
      <p>Not Nested: A / B / Loading C</p>

      <h2>Actions:</h2>
      <div>
        <button disabled={A.isResolved()} onClick={withRerender(A.resolve)}>
          Resolve A
        </button>
        <button disabled={B.isResolved()} onClick={withRerender(B.resolve)}>
          Resolve B
        </button>
        <button disabled={C.isResolved()} onClick={withRerender(C.resolve)}>
          Resolve C
        </button>
        <button disabled={version === 2} onClick={() => setVersion(2)}>
          See second page
        </button>
      </div>

      <div style={{ display: "flex" }}>
        <div style={{ flexGrow: 1 }}>
          <h2>Nested SuspenseList</h2>
          <NestedSuspenseList version={version} />
        </div>
        <div style={{ flexGrow: 1 }}>
          <h2>Non nested SuspenseList</h2>
          <NoNestedSuspenseList version={version} />
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ flexGrow: 1 }}>
          <PageContent />
        </div>
      </div>
      <div style={{ textAlign: "center", margin: "2em" }}>
        Source is available at{" "}
        <a href="https://github.com/dubzzz/react-suspenselist-bug/">
          https://github.com/dubzzz/react-suspenselist-bug/
        </a>
        <br />
        <a href="https://github.com/facebook/react/issues/17515#issuecomment-561418297">
          Version 2
        </a>
        , previous version of the page available{" "}
        <a href="https://dubzzz.github.io/react-suspenselist-bug/build-v1/">
          here
        </a>
      </div>
      <div style={{ textAlign: "center", margin: "2em" }}>
        Inconsistency discovered thanks to{" "}
        <a href="https://github.com/dubzzz/fast-check/">
          <b>fast-check</b>
        </a>
      </div>
    </>
  );
}

export default App;

function CodeBlock(props) {
  return (
    <textarea
      rows={12}
      style={{ width: "100%" }}
      value={props.children}
      readOnly={true}
    />
  );
}

function Text(props) {
  return <p>{props.text}</p>;
}

function createAsyncText(text) {
  let resolved = false;
  let Component = function() {
    if (!resolved) {
      throw promise;
    }
    return <Text text={text} />;
  };
  let promise = new Promise(resolve => {
    Component.resolve = function() {
      resolved = true;
      return resolve();
    };
    Component.isResolved = () => resolved;
  });
  return Component;
}
