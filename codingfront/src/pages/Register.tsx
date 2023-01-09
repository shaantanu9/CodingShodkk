type Props = {
  title: string;
  children: JSX.Element[] | JSX.Element;
};

const Register: React.FC = () => {
  return (
    <>
      <title>{"title"}</title>
      <div>{"children"}</div>
    </>
  );
};

export default Register;
