const Label = ({ title, htmlFor }) => (
  <label htmlFor={htmlFor}>
    {title}{' '}
    <style jsx>{`
      label {
        font-size: 1.8rem;
      }
    `}</style>
  </label>
);

export default Label;
