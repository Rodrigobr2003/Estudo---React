import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//Rotas
import User from "./Rotas/User";
import DeletUser from "./Rotas/DeletUser";
import EditUser from "./Rotas/EditUser";

function Rotas() {
  return (
    <div>
      <Router>
        <div className="rotas">
          <ul>
            <li>
              <Link className="link" to={"/user"}>
                User
              </Link>
            </li>

            <li>
              <Link className="link" to={"/delet-user"}>
                Delet user
              </Link>
            </li>

            <li>
              <Link className="link" to={"/edit-user"}>
                Edit user
              </Link>
            </li>
          </ul>
        </div>

        <Routes>
          <Route path="/user" element={<User />}></Route>

          <Route path="/delet-user" element={<DeletUser />}></Route>

          <Route path="/edit-user" element={<EditUser />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default Rotas;
