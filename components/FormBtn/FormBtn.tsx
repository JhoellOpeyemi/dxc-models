import "./formBtn.css";

const FormBtn = ({ label }: { label: string }) => {
  return (
    <div className="form-btn-container">
      <button type="submit" className="form-btn">
        (<span>{label}</span>)
      </button>
    </div>
  );
};

export default FormBtn;
