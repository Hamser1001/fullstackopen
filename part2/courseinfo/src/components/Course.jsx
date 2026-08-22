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

const Total = ({ parts }) => {
  console.log(parts);
  const total = parts.reduce((ex, part) => {
    return ex + part.exercises;
  }, 0);

  console.log("total", total);
  return <p style={{ fontWeight: "bold" }}>total of {total} exercises</p>;
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
