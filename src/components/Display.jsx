import React from 'react'
import useToggle from '../hooks/useToggle'
import useFetch from '../hooks/useFetch';

const Display = () => {
    const [isToggled, toggle] = useToggle(false);
    const { data, loading, error} = useFetch();
  return (
    <div>Display</div>
  )
}

export default Display