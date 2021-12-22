import logo from "../assets/images/TheLogo.png";
import { useHistory } from "react-router-dom";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import Switch from "@mui/material/Switch";
import HomeIcon from "@mui/icons-material/Home";

const Header = ({ userIsAdmin, setUserIsAdmin }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const history = useHistory();

  return (
    <header className="flex justify-between items-center">
      <img
        src={logo}
        alt="Wikipedia Logo"
        style={{ width: "40%" }}
        className="w-20 dark:invert hover:cursor-pointer"
      />
      <nav className="flex gap-3">
        <div className="search-wrapper flex flex-row gap-2 items-start">
          <input
            type="text"
            className="
                  search-input
                  hidden
                  rounded
                  h-full
                  bg-gray-100
                  dark:bg-gray-800 dark:text-gray-300
                  p-1.5
                  shadow-md
                  font-text font-semibold
                  focus:ring-2 focus:ring-blue-500
                "
            placeholder="Type to search"
          />

          <HomeIcon
            sx={{
              fontSize: "43px",
              "&:hover": { color: "green", fontSize: "46px" },
            }}
            onClick={() => {
              history.push(`/`);
            }}
          />
        </div>

        <AccountBoxRoundedIcon
          sx={{
            fontSize: "43px",
            "&:hover": { color: "green", fontSize: "46px" },
          }}
          onClick={() => {
            history.push(`/auth`);
          }}
        />

        {user && user.result && user.result.role === "Admin" && (
          <Switch
            checked={userIsAdmin}
            onClick={() => {
              setUserIsAdmin((current) => !current);
            }}
          />
        )}
      </nav>
    </header>
  );
};

export default Header;
