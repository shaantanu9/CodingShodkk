type Props = {
  title: string;
  children: JSX.Element[] | JSX.Element;
};

const Contact: React.FC<Props> = () => {
  return (
    <>
      <title>{"title"}</title>
      <div>{"children"}</div>
    </>
  );
};

export default Contact;
