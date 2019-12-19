import * as React from "react";
import { ChildContents } from "./child";

let eventCount = 0;

const logKey = (context: string) => {
  return (ev: any) => {
    console.log({ context, key: ev.keyCode });
  };
};

export const EscapeCatcher: React.FunctionComponent<{}> = props => {
  const [keyEvents, setKeyEvents] = React.useState<any>([]);
  const captureKey = React.useCallback(
    (context: string) => {
      return (ev: any) => {
        setKeyEvents([
          { id: eventCount++, ev: ev.keyCode, context },
          ...keyEvents
        ]);
        return true;
      };
    },
    [keyEvents, setKeyEvents]
  );
  React.useEffect(() => {
    const fn = logKey("document.addEventListener");
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, [captureKey, keyEvents, setKeyEvents]);
  return (
    <div onKeyDown={logKey("div listener")}>
      <h4>A variety of things to focus on.</h4>
      <input />
      <button>This is a button</button>
      <ChildContents layer={false} />
      <h4>Key events caught:</h4>
      <ul>
        {keyEvents.map((k: any) => (
          <li key={k.id}>
            <pre>{JSON.stringify(k)}</pre>
          </li>
        ))}
      </ul>
    </div>
  );
};
