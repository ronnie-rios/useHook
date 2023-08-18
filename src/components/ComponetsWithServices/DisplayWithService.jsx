import useFetchWithService from "../../hooks/useFetchService";
import Card from "../Card";

const URL = "https://jsonplaceholder.typicode.com/posts";

const Display = () => {
  const { data, isLoading, error } = useFetchWithService(URL);

  //make loading component
  if (isLoading) {
    return <div>Loading...</div>;
  }
  //make error component
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
