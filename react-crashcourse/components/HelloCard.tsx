interface HelloCard {
  name: string;
}

const HelloCard = ({ name }: HelloCard) => {
  return (
    <div>
      <p>Hello, {name}</p>
  );
};