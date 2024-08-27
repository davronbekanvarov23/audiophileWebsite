import React from "react";

function FormInput({ label, name, type }) {
  return (
    <label className="form-control w-full ">
      <div className="label">
        <span className="label-text"> {name}</span>
      </div>
      <input
        type={type}
        name={name}
        placeholder="Type here"
        className="input input-bordered w-full "
      />
    </label>
  );
}

export default FormInput;
