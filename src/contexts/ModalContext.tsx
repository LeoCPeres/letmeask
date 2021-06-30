import { createContext, ReactNode, useState } from "react";

type ModalContextType = {
  showModalDelete: boolean;
  showModalClose: boolean;
  showModalLogOut: boolean;
  handleToggleModalDeleteQuestion: () => void;
  handleToggleModalCloseRoom: () => void;
  handleToggleModalLogOut: () => void;
};

type ModalContextProviderProps = {
  children: ReactNode;
};

export const ModalContext = createContext({} as ModalContextType);

export function ModalContextProvider(props: ModalContextProviderProps) {
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalClose, setShowModalClose] = useState(false);
  const [showModalLogOut, setshowModalLogOut] = useState(false);

  function handleToggleModalDeleteQuestion() {
    setShowModalDelete(!showModalDelete);
  }

  function handleToggleModalCloseRoom() {
    setShowModalClose(!showModalClose);
  }

  function handleToggleModalLogOut() {
    setshowModalLogOut(!showModalLogOut);
  }

  return (
    <ModalContext.Provider
      value={{
        handleToggleModalDeleteQuestion,
        handleToggleModalCloseRoom,
        handleToggleModalLogOut,
        showModalDelete,
        showModalClose,
        showModalLogOut,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
}
