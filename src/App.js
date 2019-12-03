import React from "react";

const A1 = createAsyncText("A");
const B1 = createAsyncText("B");
const C1 = createAsyncText("C");

const A2 = createAsyncText("A");
const B2 = createAsyncText("B");
const C2 = createAsyncText("C");

function CompoWithSuspense({ req }) {
  return (
    <div>
      <div>Request: {req.map(e => e[0])}</div>
      <ul>
        <React.SuspenseList revealOrder="forwards">
          {req.map(e => {
            const [name, Compo] = e;
            return (
              <React.Suspense fallback={<Text text={`Loading ${name}`} />}>
                <Compo />
              </React.Suspense>
            );
          })}
        </React.SuspenseList>
      </ul>
    </div>
  );
}

function ScenarioA() {
  const [version, setVersion] = React.useState(1);

  const [, setC] = React.useState(0);
  const withRerender = f => () => {
    f();
    setC(c => c + 1);
  };

  return (
    <div>
      <div>
        Scenario is:
        <ul>
          <li>
            Click on <em>Resolve A</em>
          </li>
          <li>
            Click on <em>Resolve C</em>
          </li>
          <li>
            Click on <em>See second page</em>
          </li>
        </ul>
        <p>Got: A / Loading B / Loading C</p>
        <p>
          C has been marked as loading while it has already been rendered as a
          loaded once.
        </p>
      </div>
      <div>
        <button disabled={A1.isResolved()} onClick={withRerender(A1.resolve)}>
          Resolve A
        </button>
        <button disabled={B1.isResolved()} onClick={withRerender(B1.resolve)}>
          Resolve B
        </button>
        <button disabled={C1.isResolved()} onClick={withRerender(C1.resolve)}>
          Resolve C
        </button>
        <button disabled={version === 2} onClick={() => setVersion(2)}>
          See second page
        </button>
      </div>
      <br />
      <div>
        <CompoWithSuspense
          req={
            version === 1
              ? [["C", C1]]
              : [
                  ["A", A1],
                  ["B", B1],
                  ["C", C1]
                ]
          }
        />
      </div>
    </div>
  );
}

function ScenarioB() {
  const [version, setVersion] = React.useState(1);

  const [, setC] = React.useState(0);
  const withRerender = f => () => {
    f();
    setC(c => c + 1);
  };

  return (
    <div>
      <div>
        Scenario is:
        <ul>
          <li>
            Click on <em>Resolve B</em>
          </li>
          <li>
            Click on <em>Resolve C</em>
          </li>
          <li>
            Click on <em>See second page</em>
          </li>
        </ul>
        <p>Got: Loading A / C</p>
        <p>Not consistent with the other scenario.</p>
      </div>
      <div>
        <button disabled={A2.isResolved()} onClick={withRerender(A2.resolve)}>
          Resolve A
        </button>
        <button disabled={B2.isResolved()} onClick={withRerender(B2.resolve)}>
          Resolve B
        </button>
        <button disabled={C2.isResolved()} onClick={withRerender(C2.resolve)}>
          Resolve C
        </button>
        <button disabled={version === 2} onClick={() => setVersion(2)}>
          See second page
        </button>
      </div>
      <br />
      <div>
        <CompoWithSuspense
          req={
            version === 1
              ? [
                  ["B", B2],
                  ["C", C2]
                ]
              : [
                  ["A", A2],
                  ["C", C2]
                ]
          }
        />
      </div>
    </div>
  );
}

function App() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flexGrow: 1 }}>
        <ScenarioA />
      </div>
      <div style={{ flexGrow: 1 }}>
        <ScenarioB />
      </div>
    </div>
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
