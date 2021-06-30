import "../styles/modal.scss";
import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";
import { database } from "../services/firebase";
import { useHistory, useParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

type ModalProps = {
  isLoggout?: boolean;
  isDelete?: boolean;
  isClose?: boolean;
  questionId: string;
  title: string;
  subtitle: string;
  button_name?: string;
  showModal?: boolean;
};

type RoomParams = {
  id: string;
};

export function Modal({
  isDelete,
  questionId,
  title,
  subtitle,
  isClose,
  isLoggout,
}: ModalProps) {
  const {
    handleToggleModalDeleteQuestion,
    handleToggleModalCloseRoom,
    handleToggleModalLogOut,
    showModalClose,
    showModalDelete,
    showModalLogOut,
  } = useContext(ModalContext);

  const params = useParams<RoomParams>();
  const roomId = params.id;
  const history = useHistory();
  const { signOutWithGoogle } = useAuth();

  async function handleDeleteQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
  }

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    history.push("/");
  }

  function closeModalAndDelete() {
    handleToggleModalDeleteQuestion();
    handleDeleteQuestion(questionId);
  }

  function closeModalAndCloseRoom() {
    handleToggleModalCloseRoom();
    handleEndRoom();
  }

  function closeModalAndLogOut() {
    handleToggleModalLogOut();
    signOutWithGoogle();
    window.location.reload();
  }

  return (
    <>
      {isDelete && (
        <>
          {showModalDelete ? (
            <div className="overlay">
              <div className="container">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                >
                  <path
                    d="M3 5.99988H5H21"
                    stroke="#E73F5D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 5.99988V3.99988C8 3.46944 8.21071 2.96074 8.58579 2.58566C8.96086 2.21059 9.46957 1.99988 10 1.99988H14C14.5304 1.99988 15.0391 2.21059 15.4142 2.58566C15.7893 2.96074 16 3.46944 16 3.99988V5.99988M19 5.99988V19.9999C19 20.5303 18.7893 21.039 18.4142 21.4141C18.0391 21.7892 17.5304 21.9999 17 21.9999H7C6.46957 21.9999 5.96086 21.7892 5.58579 21.4141C5.21071 21.039 5 20.5303 5 19.9999V5.99988H19Z"
                    stroke="#E73F5D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <h1>{title}</h1>

                <p>{subtitle}</p>

                <footer>
                  <button
                    type="button"
                    className="cancel"
                    onClick={handleToggleModalDeleteQuestion}
                  >
                    Cancelar
                  </button>

                  <button
                    type="button"
                    className="confirm"
                    onClick={closeModalAndDelete}
                  >
                    Sim, excluir
                  </button>
                </footer>
              </div>
            </div>
          ) : null}
        </>
      )}

      {isClose && (
        <>
          {showModalClose ? (
            <div className="overlay">
              <div className="container">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                >
                  <path
                    d="M29.66 18.3398L18.34 29.6598"
                    stroke="#E73F5D"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M29.66 29.6598L18.34 18.3398"
                    stroke="#E73F5D"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24 42V42C14.058 42 6 33.942 6 24V24C6 14.058 14.058 6 24 6V6C33.942 6 42 14.058 42 24V24C42 33.942 33.942 42 24 42Z"
                    stroke="#E73F5D"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <h1>{title}</h1>

                <p>{subtitle}</p>

                <footer>
                  <button
                    type="button"
                    className="cancel"
                    onClick={handleToggleModalCloseRoom}
                  >
                    Cancelar
                  </button>

                  <button
                    type="button"
                    className="confirm"
                    onClick={closeModalAndCloseRoom}
                  >
                    Sim, encerrar
                  </button>
                </footer>
              </div>
            </div>
          ) : null}
        </>
      )}

      {isLoggout && (
        <>
          {showModalLogOut ? (
            <div className="overlay">
              <div className="container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#E73F5D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>

                <h1>{title}</h1>

                <p>{subtitle}</p>

                <footer>
                  <button
                    type="button"
                    className="cancel"
                    onClick={handleToggleModalLogOut}
                  >
                    Cancelar
                  </button>

                  <button
                    type="button"
                    className="confirm"
                    onClick={closeModalAndLogOut}
                  >
                    Sim, sair
                  </button>
                </footer>
              </div>
            </div>
          ) : null}
        </>
      )}
    </>
  );
}
