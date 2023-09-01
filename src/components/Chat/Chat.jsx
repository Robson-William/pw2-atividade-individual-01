import "./styles.css";
import phone from "/phone.png";
import shield from "/shield.png";
import client from "/client.png";
import driverProfile from "/driverProfile.png";
import trashCan from "/trashcan.png";

export default function Chat({ messages }) {
  return (
    <>
      <div className="privateMessageInput">
        <input type="text" placeholder="Enviar mensagem para Fábio..." />
        <button>Publicar</button>
        <a href="#">
          <img src={phone} alt="Call driver phone" />
        </a>
        <a href="#">
          <img src={shield} alt="????" />
        </a>
      </div>

      {messages.map((message, i) => (
        <div className="privateMessage" key={i}>
          <img
            className="profilePicture"
            alt="Profile"
            src={message.user.picture}
          />
          <p>{message.message}</p>
          <a href="#">
            <img src={trashCan} alt="????" />
          </a>
        </div>
      ))}
    </>
  );
}
