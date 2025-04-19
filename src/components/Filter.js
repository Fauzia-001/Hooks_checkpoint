import React from "react";

const Filter = ({ setFilterTitle, setFilterRating }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title..."
        onChange={(e) => setFilterTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Search by rating..."
        onChange={(e) => setFilterRating(e.target.value)}
      />
    </div>
  );
};

export default Filter;
// This component allows the user to filter movies by title and rating.
// It contains two input fields: one for the title and one for the rating.
// The `setFilterTitle` and `setFilterRating` functions are passed as props
// to update the filter criteria in the parent component.
// The `onChange` event handlers call these functions with the current value
// of the input fields, allowing the parent component to filter the movie list
// based on the user's input.
// This component is typically used in conjunction with a movie list component
// to provide a user-friendly way to search for specific movies.
// The `Filter` component is a functional React component that provides
// a user interface for filtering movies based on their title and rating.
// It uses controlled components for the input fields, meaning that the
// value of the input fields is controlled by React state.
// This allows for real-time updates to the filter criteria as the user types.
// The `setFilterTitle` and `setFilterRating` functions are passed as props