import "./styledInput.css";

const StyledInput = ({
  label,
  id,
  type,
}: {
  label: string;
  id: string;
  type: string;
}) => {
  return (
    <div className="styled-input-container">
      <label htmlFor={id} className="styled-input-label">
        {label}
      </label>
      {type === "text" && id !== "previous-agency" && (
        <input
          id={id}
          name={id}
          type={type}
          className="styled-input"
          required
        />
      )}
      {type === "email" && (
        <input
          id={id}
          name={id}
          type={type}
          className="styled-input"
          required
        />
      )}
      {type === "file" && (
        <input
          id={id}
          name={id}
          type={type}
          accept=".jpeg, .jpg, .png"
          className="styled-input"
          required
        />
      )}
      {type === "tel" && (
        <input
          id={id}
          name={id}
          type={type}
          className="styled-input"
          required
        />
      )}
      {type === "number" && id === "age" && (
        <input
          id={id}
          name={id}
          type={type}
          min="2"
          max="80"
          step="1"
          className="styled-input"
          required
        />
      )}

      {type === "text" && id === "previous-agency" && (
        <input id={id} name={id} type={type} className="styled-input" />
      )}
    </div>
  );
};

export default StyledInput;
