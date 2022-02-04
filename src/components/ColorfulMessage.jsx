const colorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    ConvolverNode,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

export default colorfulMessage;
