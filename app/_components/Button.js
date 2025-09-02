import Link from "next/link";

function Button({ children, direction, size, type = "normal" }) {
  let style = " rounded-md shadow duration-500  ";
  if (size === "big") {
    style = style + " px-6 py-3 text-default uppercase";
  }
  if (size === "small") {
    style = style + " py-2 px-4 text-small";
  }
  if (type === "normal") {
    style = style + " bg-brand text-white hover:bg-brand-dark";
  }
  if (type === "secondary") {
    style =
      style + " bg-bg text-fg border border-2 border-fg hover:bg-gray-300";
  }
  return (
    <Link href={direction} className={style}>
      {children}
    </Link>
  );
}

export default Button;
