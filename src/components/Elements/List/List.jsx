import { Link } from "react-router-dom";

const List = ({children, classname}) => {
  return (
    <li className={classname}>
      <Link to="">{children}</Link>
    </li>
  );
};

export default List;
