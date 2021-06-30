import { useHistory } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import { FormEvent, useState } from "react";

import IlustrationImg from "../assets/images/illustration.svg";
import LogoI from "../assets/images/logo.svg";
import GoogleIconImg from "../assets/images/google-icon.svg";

import { Button } from "../components/Button";

import "../styles/auth.scss";
import { useAuth } from "../hooks/useAuth";
import { database } from "../services/firebase";

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  const [roomCode, setRoomCode] = useState("");

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push("/rooms/new");
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === "") {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      toast.error("Esta sala não existe.");
      return;
    }

    if (roomRef.val().endedAt) {
      toast.error("Esta sala terminou.");
      return;
    }

    history.push(`/rooms/${roomCode}`);
  }

  return (
    <div id="page-auth">
      <Toaster />
      <aside>
        <img
          src={IlustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={LogoI} alt="Letmeask" />
          {user ? (
            <>
              <button className="create-room" onClick={handleCreateRoom}>
                <img src={GoogleIconImg} alt="" />
                Crie sua sala como {user?.name}
              </button>
              <span>
                Quer iniciar a sala com conta?{" "}
                <span onClick={signInWithGoogle}>Clique aqui</span>
              </span>
            </>
          ) : (
            <button className="create-room" onClick={handleCreateRoom}>
              <img src={GoogleIconImg} alt="" />
              Crie sua sala com o Google
            </button>
          )}
          <div className="separator">ou entre em uma sala</div>
          <form action="" onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
