type Props = {
  title: string;
  children: JSX.Element[] | JSX.Element;
};

const Login: React.FC = () => {
  return (
    <>
      <title>{"title"}</title>
      <div>{"children"}</div>
    </>
  );
};

export default Login;
