import "./styledSelect.css";

const StyledSelect = ({
  label,
  id,
  options,
}: {
  label: string;
  id: string;
  options: string[];
}) => {
  return (
    <div className="styled-select-container">
      <label htmlFor={id} className="styled-input-label">
        {label}
      </label>
      <select id={id} name={id} className="styled-select">
        {options.map((option: string) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StyledSelect;
