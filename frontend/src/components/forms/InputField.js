function InputField({
  label,
  type,
  placeholder,
  register,
  name,
  error,
}) {
  return (
    <div className="form-group">

      <label>{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />

      {error && (
        <p className="error-message">
          {error.message}
        </p>
      )}

    </div>
  );
}

export default InputField;