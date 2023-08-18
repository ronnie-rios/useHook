
import useToggle from "../hooks/useToggle";
import useFetch from "../hooks/useFetch";

const URL = "https://jsonplaceholder.typicode.com/posts";

const Display = () => {
  const [isToggled, toggle] = useToggle(false);
  const { data, isLoading, error } = useFetch(URL);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!isToggled) {
    return (
      <div>
        <h1>Posts</h1>
        <button onClick={() => toggle(true)}>Hide all posts</button>
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={() => toggle(true)}>View</button>
      </div>
    );
  }
};

export default Display;
