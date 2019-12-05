import React, { Suspense, SuspenseList } from "react";

const A = createAsyncText("A");
const B = createAsyncText("B");
const C = createAsyncText("C");

function CompoWithSuspense({ version }) {
  return (
    <div>
      <div>Rendering version number: {version}</div>
      <ul>
        {version === 1 ? (
          <SuspenseList key="1" revealOrder="forwards">
            <SuspenseList key="1.1" revealOrder="forwards">
              <Suspense key="1.1.c" fallback={<Text text="Loading C" />}>
                <C />
              </Suspense>
            </SuspenseList>
          </SuspenseList>
        ) : (
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
        )}
      </ul>
    </div>
  );
}

function ScenarioC() {
  const [version, setVersion] = React.useState(1);

  const [, setC] = React.useState(0);
  const withRerender = f => () => {
    f();
    setC(c => c + 1);
  };

  // Counterexample: [
  //  {"key":"fd","item":[
  //    {"key":"08","item":[
  //      {"key":"81","item":{"value":"3","renderPhase":"b only"}},  // we called it A
  //      {"key":"dd","item":{"value":"c","renderPhase":"b only"}},  // we called it B
  //      {"key":"53","item":{"value":"0","renderPhase":"both"}}     // we called it C
  //    ]}
  //  ]},Scheduler`
  // -> [task#1] promise resolved with value "0"
  // -> [task#4] sequence:: resolved
  // -> [task#2] promise resolved with value "3"
  // -> [task#3] promise pending`]

  return (
    <div>
      <div>
        Scenario is:
        <ul>
          <li>
            Click on <em>Resolve C</em>
          </li>
          <li>
            Click on <em>See second page</em>
          </li>
          <li>
            Click on <em>Resolve A</em>
          </li>
        </ul>
        <p>Got: Loading A / Loading B / C</p>
        <p>Expected: A / Loading B / C</p>
      </div>
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
      <br />
      <div>
        <CompoWithSuspense version={version} />
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ flexGrow: 1 }}>
          <ScenarioC />
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
        , previous version of the page available
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

function Text(props) {
  return <li>{props.text}</li>;
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
