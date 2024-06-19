import { useSelector, useDispatch } from "react-redux";
import { signoutSuccess } from "../../redux/userSlice";
import { Link } from "react-router-dom";

function Header() {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(signoutSuccess());
  };

  return (
    <>
      {currentUser !== null && currentUser.data !== null ? (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <p>{currentUser.data.username || "Issilogino"}</p>
          <button onClick={logOut}>Atsijungti</button>
          {currentUser.data.role === "admin" && (
            <Link to="/adminPage">Admino puslapis</Link>
          )}
        </nav>
        </>
      ) : (
        <p>Neprisijunges</p>
      )}
    </>
  );
}

export default Header;