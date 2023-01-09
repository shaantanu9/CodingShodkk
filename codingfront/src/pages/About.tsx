type Props = {
  title: string;
  children: JSX.Element[] | JSX.Element;
};

const About: React.FC<Props> = () => {
  return (
    <>
      <title>{"title"}</title>
      <div>{"children"}</div>
    </>
  );
};

export default About;
