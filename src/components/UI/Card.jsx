const Card = ({ children, className }) => {
  return <div className={`${className} bg-white rounded-md`}>{children}</div>;
};

export default Card;
