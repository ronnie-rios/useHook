import useFetch from "../hooks/useFetch";
import Card from "./Card";
import Error from "./Error";

const URL = "https://jsonplaceholder.typicode.com/psosts";

const Display = () => {
  const { data, isLoading, error } = useFetch(URL);

  //make loading component
  if (isLoading) {
    return <div>Loading...</div>;
  }
  //make error component
  if (error) {
    return <Error error={error}/>;
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
