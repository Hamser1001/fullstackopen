import { useState } from "react";

const Header = ({ course }) => <h1>{course.name}</h1>;

// const Content = ({ course }) => {
//   return (
//     <div>
//       <Part name={course.parts[0].name} exercise={course.parts[0].exercises} />
//       <Part name={course.parts[1].name} exercise={course.parts[1].exercises} />
//       <Part name={course.parts[2].name} exercise={course.parts[2].exercises} />
//     </div>
//   );
// };

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part) => (
        <Part key={part.id} name={part.name} exercise={part.exercises} />
      ))}
    </div>
  );
};

const Part = ({ name, exercise, id }) => {
  return (
    <>
      <p id={id}>
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
    </div>
  );
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
  console.log(course.parts);

  return <Course course={course} />;
};

export default App;
