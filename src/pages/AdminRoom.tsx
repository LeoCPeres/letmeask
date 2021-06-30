import { useParams, Link } from "react-router-dom";

import LogoImg from "../assets/images/logo.svg";
import deleteImg from "../assets/images/delete.svg";
import commentImg from "../assets/images/answer.svg";
import checkImg from "../assets/images/check.svg";
import emptyImg from "../assets/images/empty-questions.svg";

import { Button } from "../components/Button";
import { Modal } from "../components/Modal";
import { Question } from "../components/Question";
import { RoomCode } from "../components/RoomCode";
import { useAuth } from "../hooks/useAuth";
import { database } from "../services/firebase";

import "../styles/room.scss";
import { useRoom } from "../hooks/useRoom";
import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  const params = useParams<RoomParams>();

  const { handleToggleModalDeleteQuestion, handleToggleModalCloseRoom } =
    useContext(ModalContext);

  const roomId = params.id;
  const { title, questions } = useRoom(roomId);

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  }

  async function handleHighLightQuestion(
    questionId: string,
    isHighLighted: boolean
  ) {
    if (isHighLighted) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
        isHighLighted: false,
      });
    } else {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
        isHighLighted: true,
      });
    }
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <Link to="/">
            <img src={LogoImg} alt="" className="logo-img" />
          </Link>
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleToggleModalCloseRoom}>
              Encerrar Sala
            </Button>
          </div>
        </div>
      </header>

      <Modal
        isClose
        questionId=""
        title="Encerrar sala"
        subtitle="Tem certeza que você deseja encerrar esta sala?"
      />

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && (
            <span>
              {questions.length}{" "}
              {questions.length >= 2 ? "perguntas" : "pergunta"}
            </span>
          )}
        </div>

        <div className="question-list">
          {questions.length == 0 && (
            <div className="empty">
              <img src={emptyImg} alt="" />
              <h1>Nenhuma pergunta por aqui...</h1>
              <p>
                Envie o código desta sala para seus amigos e comece a responder
                perguntas!
              </p>
            </div>
          )}
          {questions.length > 0 &&
            questions.map((question) => {
              return (
                <Question
                  key={question.id}
                  content={question.content}
                  author={question.author}
                  isHighLighted={question.isHighLighted}
                  isAnswered={question.isAnswered}
                >
                  {!question.isAnswered && (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          handleCheckQuestionAsAnswered(question.id)
                        }
                      >
                        <img
                          src={checkImg}
                          alt="Marcar pergunta como respondida"
                        />
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          handleHighLightQuestion(
                            question.id,
                            question.isHighLighted
                          )
                        }
                      >
                        <img src={commentImg} alt="Destacar pergunta" />
                      </button>
                    </>
                  )}
                  <button
                    type="button"
                    onClick={handleToggleModalDeleteQuestion}
                  >
                    <img src={deleteImg} alt="Remover pergunta" />
                  </button>
                  {question.likeCount > 0 && (
                    <span style={{ alignSelf: "center" }}>
                      {question.likeCount} Likes
                    </span>
                  )}
                  <Modal
                    isDelete
                    questionId={question.id}
                    title="Excluir pergunta"
                    subtitle="Tem certeza que você deseja excluir esta pergunta?"
                  />
                </Question>
              );
            })}
        </div>
      </main>
    </div>
  );
}
