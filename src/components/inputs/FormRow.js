import { Wrapper } from "../../assets/wrappers/FormRow";

const FormRow = ({ type, name, value, handleChange, labelText, length }) => {
  return (
    <Wrapper
      className="form-row"
      width={length === "half" ? "calc(50% - .7rem)" : "100%"}
    >
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className="form-input"
        placeholder={labelText || name}
        required
      />
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
    </Wrapper>
  );
};
export default FormRow;
