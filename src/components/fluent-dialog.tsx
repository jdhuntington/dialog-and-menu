import * as React from "react";
import { PrimaryButton, Dialog } from "office-ui-fabric-react";
import { ChildContents } from "./child";

export const FluentDialog: React.FunctionComponent<{}> = props => {
  const [isDialogOpen, setDialogOpen] = React.useState(false);
  const dismissDialog = React.useCallback(() => {
    setDialogOpen(false);
  }, [setDialogOpen]);
  const openDialog = React.useCallback(() => {
    setDialogOpen(true);
  }, [setDialogOpen]);
  const dialog = isDialogOpen ? (
    <Dialog onDismiss={dismissDialog}>
      <ChildContents />
    </Dialog>
  ) : null;

  return (
    <div>
      <PrimaryButton onClick={openDialog} text="Open Fabric Dialog" />
      {dialog}
    </div>
  );
};
