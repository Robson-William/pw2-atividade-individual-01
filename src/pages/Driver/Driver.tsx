import "./styles.css";
import driverProfile from "/driverProfile.png";
import star from "/star.png";
import carModel from "/carModel.png";
import Chat from "../../components/Chat/Chat";
import { messagesMock } from "../../mock/messagesMock";

export default function Driver() {
  return (
    <div className="mainBody">
      <div id="symbol"></div>

      <header className="alertMessage">
        <p className="mainMessage">
          Encontre <span id="driverName">Fábio</span> no local de partida.
        </p>

        <p className="subMessage">Chega em 3 minutos (800 metros)</p>
      </header>

      <div className="driverData">
        <div className="driver">
          <div className="driverProfile">
            <img className="driverImage" alt="Driver profile" src={driverProfile} />
            <div className="driverRate">
              <img src={star} alt="Star simbol" />
              <p>5.0</p>
            </div>
            <p>Fábio D.</p>
          </div>
          <img className="driverAuto" src={carModel} alt="Driver auto" />
        </div>

        <div className="carData">
          <p className="licensePlate">BCD0D19</p>
          <p className="carModel">Honda Civic Roxo</p>
        </div>
      </div>

      <Chat messages={messagesMock} />
    </div>
  )
}
