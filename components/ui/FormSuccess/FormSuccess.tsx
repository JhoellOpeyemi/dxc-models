import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons'

import "./formSuccess.css";

const FormSuccess = ({ message }: { message: string }) => {
  return (
    <div className="form-success-container">
      <div className="form-success-icon">
        <FontAwesomeIcon icon={faCalendarCheck} />
      </div>
      <p className="form-success-message">{message}</p>
    </div>
  );
};

export default FormSuccess;
