import StyledInput from "@/components/utils/StyledInput/StyledInput";
import StyledSelect from "@/components/utils/StyledSelect/StyledSelect";
import FormBtn from "@/components/ui/FormBtn/FormBtn";

import "./applyForm.css";

const ApplyForm = () => {
  return (
    <div className="apply-form-container">
      <form className="form" encType="multipart/form-data">
        <div className="apply-form-input-group">
          <StyledInput label="First Name" id="first-name" type="text" />
          <StyledInput label="Last Name" id="last-name" type="text" />
        </div>

        <div className="apply-form-input-group">
          <StyledInput label="Email" id="email" type="email" />
          <StyledInput label="Phone Number" id="phone" type="tel" />
        </div>

        <div className="apply-form-input-group">
          <StyledSelect
            label="Gender"
            id="gender"
            options={["female", "male", "others"]}
          />
          <StyledInput label="Age" id="age" type="number" />
        </div>

        <div className="apply-form-input-group">
          <StyledInput label="Residential Address" id="address" type="text" />
          <StyledInput label="Instagram Username" id="instagram" type="text" />
        </div>

        <div className="apply-form-input-group">
          <StyledInput label="Facebook Username" id="facebook" type="text" />
          <StyledSelect
            label="Worked with an agency before?"
            id="agency-option"
            options={["yes", "no"]}
          />
        </div>

        <div className="apply-form-input-group">
          <StyledInput
            label="If Yes, State Previous Agency"
            id="previous-agency"
            type="text"
          />
          <StyledInput label="Upload Headshot" id="headshot" type="file" />
        </div>

        <div className="apply-form-input-group">
          <StyledInput
            label="Upload Side Profile (Right View)"
            id="right-side-profile"
            type="file"
          />
          <StyledInput
            label="Upload Side Profile (Left View)"
            id="left-side-profile"
            type="file"
          />
        </div>

        <div className="apply-form-input-group">
          <StyledInput
            label="Upload Full Length"
            id="full-length"
            type="file"
          />
          <FormBtn label="Submit" />
        </div>
      </form>
    </div>
  );
};

export default ApplyForm;
