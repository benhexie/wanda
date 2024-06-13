import { Link } from "react-router-dom";

const Logo = ({ style = "" }: { style?: string }) => {
  return (
    <Link
      to="/"
      className={`font-playfair-display font-extrabold text-2xl ${style}`}
    >
      wanda.
    </Link>
  );
};

export default Logo;
