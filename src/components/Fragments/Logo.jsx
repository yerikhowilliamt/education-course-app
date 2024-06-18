import { Link } from "react-router-dom";


const Logo = ({ children, classname }) => {
  return (
    <div className={classname}>
      <Link to="">
        <img src="/public/Logo.svg" alt="" />
      </Link>
      {children}
    </div>
  );
};

export default Logo;
