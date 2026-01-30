import "./formBtn.css";

const FormBtn = ({
  label,
  disabled,
}: {
  label: string;
  disabled?: boolean;
}) => {
  return (
    <div className="form-btn-container">
      <button
        type="submit"
        className={`${disabled ? "form-btn submitting" : "form-btn"}`}
        disabled={disabled}
      >
        (<span>{label}</span>)
      </button>
    </div>
  );
};

export default FormBtn;
