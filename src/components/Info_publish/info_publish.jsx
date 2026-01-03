
const InfoPublish = ({ htmlFor, type, placeholder, id, value, setState }) => {
  return (
    <div>
      <label htmlFor={htmlFor} />
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={(event) => {
          {
            setState;
          }
          event.target.value;
        }}
      />
    </div>
  );
};

export default InfoPublish;
