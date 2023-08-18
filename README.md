# Intro

# Step 1: Understanding Custom Hooks
Custom hooks are a way to encapsulate and share reusable logic between different components in React. They're particularly useful for managing complex behaviors, stateful logic, or interactions that are needed by multiple parts of your application. By creating custom hooks, you can keep your codebase clean, organized, and encourage code reusability.

## What is a custom hook?
A custom hook in React consists of several essential parts that work together to encapsulate and provide reusable logic. Let's break down the different parts that a custom hook needs:

* Hook Function: This is the core of the custom hook, and it's where the logic resides. The hook function should be defined as a regular JavaScript function and typically starts with the word "use" (e.g., `useCustomHook`). This function can use any of the built-in React hooks (like `useState`, `useEffect`, etc.) to manage state and handle the desired behavior.

* State Variables: Custom hooks can use state variables to manage data or control the behavior of the hook. You can use the `useState` hook to initialize and update these state variables. 

* Effect Logic: If your custom hook involves side effects (like data fetching, DOM manipulation, etc.), you'll likely use the `useEffect` hook to handle them. This is where you define the logic that should run after the component mounts or when certain dependencies change.

* Return Value: The hook function should **return** values that provide the necessary information or behavior to the component using the hook. These return values are typically returned as an object, array, or any other data structure that fits the specific use case.

* Dependencies: If your hook relies on external values (props, other hooks, etc.), you might need to specify dependencies inside your hook function. These dependencies ensure that the hook re-renders or updates whenever the values it depends on change.

* Export Statement: To make your custom hook accessible to other parts of your application, you need to export it at the end of your hook file using the export statement.

# Step 2: Choose a Use Case
In this tutorial, we'll focus on creating a custom hook named `useFetch`. This hook will help manage data fetching from an API, along with handling loading states and errors. This is a common scenario in many applications where data needs to be fetched and displayed.

# Step 3: Build the Custom Hook

## a. Create the Hook File
Create a new file named `useFetch.js` in the directory where you keep your custom hooks or utility functions. In this instance it will be in a directory called `hooks`.

## b. Implementing the Custom Hook
Inside the `useFetch.js` file, you'll define your custom hook using the `useState` and `useEffect` hooks. 
***Note: all custom hooks generally prepend the word `use` before the function name.*** 

* Hook Recognition: Naming your custom hook with the use prefix signals to other developers (and to tools like ESLint) that the function is a custom hook and should follow the rules and conventions of React hooks.

* Consistency: Following the naming convention helps maintain consistency in your codebase and makes it easier for developers to understand which functions are hooks. It also helps distinguish between regular functions and hooks.

Here's the breakdown of the implementation:

```js
import { useState, useEffect } from 'react';

function useFetch(url) {
  // State variables to manage data, loading, and errors
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch data from the provided URL
        const response = await fetch(url);
        // Parse response data as JSON
        const responseData = await response.json();

        // Update state with fetched data
        setData(responseData);
      } catch (error) {
        // Handle any errors that occur during fetching
        setError(error);
      } finally {
        // Set loading state to false, regardless of success or error
        setIsLoading(false);
      }
    }

    // Call the fetchData function when the component mounts
    fetchData();
  }, [url]); // Re-run the effect whenever the URL changes

  // Return data, loading state, and error to the component
  return { data, isLoading, error };
}

export default useFetch;
```

# Explanation of Custom Hook Implementation:

* `useState` is used to manage the state of data, loading status `(isLoading)`, and error.
* `useEffect` is used to initiate the data fetching process when the component mounts.
* Inside the `useEffect`, the fetchData function is an asynchronous function that handles the data fetching, error handling, and loading state updates.
* The `throw new Error` statement is used to propagate network errors and provide a more descriptive error message.
* The `finally` block ensures that the loading state is set to false after the fetch operation, regardless of success or error.
* The hook returns an object with data, isLoading, and error state values, which can be accessed by the component using the hook.

# Step 4: Using the Custom Hook
To use the `useFetch` custom hook in your components, follow these steps:

## Import the Hook
In the component file where you want to use data fetched from an API, import the `useFetch` hook:

```js
import React from 'react';
import useFetch from './useFetch'; // Update the path to match your file structure
```

## Use the Hook
Now, you can use the `useFetch` hook in your component to fetch and manage data:

```js
const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Replace with your API URL
  const { data, isLoading, error } = useFetch(apiUrl);

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
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
```

# Step 5: Other Use Cases for Custom Hooks
Custom hooks can be used for various purposes beyond data fetching. Some examples include `useLocalStorage`, `useFormValidation`, `useTheme`, and `useMediaQuery`. Custom hooks help encapsulate logic and promote reusability across different components in your application.

# Conclusion
Creating a custom hook like `useFetch` simplifies and centralizes the process of fetching data from an API while handling loading states and errors. By following this tutorial, you've gained a deeper understanding of custom hooks, their implementation, and their benefits. Custom hooks are a powerful tool for building efficient, organized, and reusable React applications.

## More Resources:
- [React Docs](https://react.dev/learn/reusing-logic-with-custom-hooks#custom-hooks-sharing-logic-between-components)
- [W3 Schools](https://www.w3schools.com/react/react_customhooks.asp)