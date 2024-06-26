import { Link } from "react-router-dom";

const Breadcrumbs = () => {
  return (
    <div className="flex gap-2">
          <Link
            className="text-body-medium text-dark-secondary font-body"
            to="/beranda"
          >
            Beranda
          </Link>
          /
          <Link
            className="text-body-medium text-dark-secondary font-body"
            to="/bisnis"
          >
            Bisnis
          </Link>
          /
          <Link
            className="text-body-medium text-dark-primary font-body"
            to="/detail"
          >
            Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product
            Manager.
          </Link>
        </div>
  )
}

export default Breadcrumbs