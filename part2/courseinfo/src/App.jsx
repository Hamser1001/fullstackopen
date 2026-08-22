import { useState } from "react";

const Header = ({ course }) => <h1>{course.name}</h1>;

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part) => (
        <Part key={part.id} name={part.name} exercise={part.exercises} />
      ))}
    </div>
  );
};

const Part = ({ name, exercise }) => {
  return (
    <>
      <p>
        {name} {exercise}
      </p>
    </>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

const Total = ({ course }) => {
  const total =
    course.parts[0].exercises +
    course.parts[1].exercises +
    course.parts[2].exercises;
  console.log("total", total);

  return <p style={{ fontWeight: "bold" }}>total of {total} exercises</p>;
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  console.log("App Working...");

  return <Course course={course} />;
};

export default App;
