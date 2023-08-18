import useFetch from "../hooks/useFetch";
import Card from "./Card";

const URL = "https://jsonplaceholder.typicode.com/posts";

const Display = () => {
  const { data, isLoading, error } = useFetch(URL);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <Card key={post.id} data={post}/>
        ))}
      </ul>
    </div>
  );
};

export default Display;
