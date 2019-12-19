import { Provider, themes } from "@fluentui/react";
import { Fabric } from "office-ui-fabric-react";
import * as React from "react";

import { FabricDialog } from "./fabric-dialog";
import { FluentDialog } from "./fluent-dialog";

export const App: React.FunctionComponent<{}> = props => {
  return (
    <Fabric>
      <Provider theme={themes.teams}>
        <FabricDialog />
        <FluentDialog />
      </Provider>
    </Fabric>
  );
};
