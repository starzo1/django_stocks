const InputField = ({ name, label, register, required, errors }) => (
    <div className="form-group mt-3">
      <label>{label}</label>
      <input className="form-control mt-1" {...register(name, { required })} />
      {errors[name]?.type === "required" && (
        <p style={{ color: "red" }}>{label} is required</p>
      )}
    </div>
  );
  
  export default InputField;