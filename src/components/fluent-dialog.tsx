import { Button, Dialog, Checkbox } from "@fluentui/react";
import * as React from "react";

import { ChildContents } from "./child";

export const FluentDialog: React.FunctionComponent<{}> = props => {
  const [isDialogOpen, setDialogOpen] = React.useState(false);
  const [useLayer, setUseLayer] = React.useState(true);
  const dismissDialog = React.useCallback(() => {
    console.log("dismissing");
    setDialogOpen(false);
  }, [setDialogOpen]);
  const openDialog = React.useCallback(() => {
    setDialogOpen(true);
  }, [setDialogOpen]);
  const dialog = isDialogOpen ? (
    <Dialog
      open={true}
      content={<ChildContents layer={useLayer} />}
      onCancel={dismissDialog}
    ></Dialog>
  ) : null;

  return (
    <div>
      <Button
        content={`Open ${useLayer ? "Layered" : "Inline"} Fluent Dialog`}
        primary
        onClick={openDialog}
      />
      <Checkbox
        toggle
        label="Use 'layered' context menu"
        checked={useLayer}
        onChange={(_: any, val: any) => setUseLayer(val.checked)}
      />
      {isDialogOpen ? "(currently opened)" : "(currently closed)"}
      {dialog}
    </div>
  );
};
