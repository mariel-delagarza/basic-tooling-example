const Dog = (props) => {
  return (
    <div>
      <p>My name is {props.name}.</p>
      <p>
        I am a {props.breed} and a very good {props.gender}.
      </p>
    </div>
  );
};

export default Dog;
