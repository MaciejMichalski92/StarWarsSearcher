const Input = ({ type, placeholder, id, value, onChange }) => (
  <>
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      value={value}
      onChange={onChange}
    />
    <style jsx>{`
      input:focus,
      button:focus {
        outline: none;
      }

      input {
        display: block;
        padding: 3px;
        margin: 10px 0;
      }
    `}</style>
  </>
);

export default Input;
