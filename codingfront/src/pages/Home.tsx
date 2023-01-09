type Props = {
  title: string;
  children: JSX.Element[] | JSX.Element;
};

const Home: React.FC = () => {
  return (
    <>
      <title>{"title"}</title>
      <div>{"children"}</div>
    </>
  );
};

export default Home;
