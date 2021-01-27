const ESC_KEY_CODE = 27;

window.addEventListener("DOMContentLoaded", () => {
  const openDialogBtn = document.querySelector(".open-dialog-btn");
  const dialogWrapper = document.querySelector(".dialog-wrapper");
  const closeDialogBtn = document.querySelector(".close-dialog-btn");
  const keyDownListenerOnDialog = (e) => {
    if (e.keyCode === ESC_KEY_CODE) {
      closeDialog();
    }
  };

  const addKeyDownListenerOnDialog = () => {
    dialogWrapper.addEventListener("keydown", keyDownListenerOnDialog);
  };

  const removeKeyDownListenerOnDialog = () => {
    dialogWrapper.removeEventListener("keydown", keyDownListenerOnDialog);
  };

  const openDialog = () => {
    previousActiveElement = document.activeElement;
    dialogWrapper.classList.remove("hidden");
    closeDialogBtn.focus();

    Array.from(document.body.children).forEach((child) => {
      if (child !== dialogWrapper) {
        child.inert = true;
      }
    });

    addKeyDownListenerOnDialog();
  };

  const closeDialog = () => {
    previousActiveElement.focus();
    dialogWrapper.classList.add("hidden");

    Array.from(document.body.children).forEach((child) => {
      if (child !== dialogWrapper) {
        child.inert = false;
      }
    });

    removeKeyDownListenerOnDialog();
  };

  let previousActiveElement;

  openDialogBtn.addEventListener("click", openDialog);

  closeDialogBtn.addEventListener("click", closeDialog);
});
