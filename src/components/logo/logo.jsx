import './logo.scss';

const Logo = (props) => {
  const { className } = props;

  return (
    <a href="/"
      className={`logo ${className}`}>
      Where in the world?
    </a>
  );
};

export default Logo;