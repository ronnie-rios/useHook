/* eslint-disable react/prop-types */
import useToggle from "../hooks/useToggle";

const Card = ({ data }) => {
  const [isToggled, toggle] = useToggle(false);
  const { title, body, id } = data;

  return (
    <div className="py-10 border border-gray-100 rounded-sm my-2">
      <h1 className="text-2xl">
        {id}: {title}
      </h1>
      {isToggled ? <p className="my-2">{body}</p> : ""}
      <button onClick={(isToggled) => toggle(!isToggled)} className="p-2 bg-white text-black hover:scale-105 rounded-sm mt-4">
        {isToggled ? "Hide Details" : "View Det`ails"}
      </button>
    </div>
  );
};

export default Card;
