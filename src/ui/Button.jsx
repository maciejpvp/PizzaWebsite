import { Link } from "react-router-dom";

const Button = ({ children, disabled, to, type = "primary", onClick }) => {
  const base =
    "duation-300 text-sm inline-block rounded-full bg-yellow-400 font-semibold tracking-wide text-stone-800 transition-all hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 sm:px-6 sm:py-4",
    small: base + " px-2 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "px-4 py-2.5 sm:px-6 text-sm sm:py-3.5 duation-300 inline-block rounded-full border-2 border-stone-300 font-semibold tracking-wide text-stone-300 hover:text-stone-800 transition-all hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed",
  };
  if (to) {
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  }
  return (
    <button disabled={disabled} className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
