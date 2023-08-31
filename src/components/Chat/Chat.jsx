import "./styles.css";
import phone from "/phone.png";
import shield from "/shield.png";
import client from "/client.png";
import driverProfile from "/driverProfile.png";
import trashCan from "/trashcan.png";

export default function Chat() {
  return (
    <>
      <div class="privateMessageInput">
        <input type="text" placeholder="Enviar mensagem para Fábio..." />
        <button>Publicar</button>
        <a href="#">
          <img src={phone} alt="Call driver phone" />
        </a>
        <a href="#">
          <img src={shield} alt="????" />
        </a>
      </div>

      <div class="privateMessage">
        <img class="profilePicture" alt="Profile" src={client} />
        <p>
          Boris estou no local já lhe esperando. estou com camisa azul e calça
          jeans
        </p>
        <a href="#">
          <img src={trashCan} alt="????" />
        </a>
      </div>

      <div class="privateMessage">
        <img class="profilePicture" alt="Profile" src={driverProfile} />
        <p>Acabei de lhe ver. Vou estacionar o carro próximo.</p>
        <a href="#">
          <img src={trashCan} alt="????" />
        </a>
      </div>
    </>
  );
}
