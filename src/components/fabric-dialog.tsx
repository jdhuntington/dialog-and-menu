import { Dialog, PrimaryButton } from "office-ui-fabric-react";
import * as React from "react";

import { ChildContents } from "./child";

export const FabricDialog: React.FunctionComponent<{}> = props => {
  const [isDialogOpen, setDialogOpen] = React.useState(false);
  const dismissDialog = React.useCallback(() => {
    setDialogOpen(false);
  }, [setDialogOpen]);
  const openDialog = React.useCallback(() => {
    setDialogOpen(true);
  }, [setDialogOpen]);
  const dialog = isDialogOpen ? (
    <Dialog isOpen={true} onDismiss={dismissDialog}>
      <ChildContents layer={true} />
    </Dialog>
  ) : null;

  return (
    <div>
      <PrimaryButton onClick={openDialog} text="Open Fabric Dialog" />
      {isDialogOpen ? "(currently opened)" : "(currently closed)"}
      {dialog}
    </div>
  );
};
