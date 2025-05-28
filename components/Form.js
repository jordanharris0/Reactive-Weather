import React, { useState } from "react";

function Form({ location, setLocation }) {
  const [typedLoaction, setTypedLocation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setLocation(typedLoaction);
    setTypedLocation("");
  }

  return (
    <>
      <div className="form" onSubmit={handleSubmit}>
        <form>
          <label className="city">
            City:
            <input
              type="text"
              value={typedLoaction}
              onChange={(e) => setTypedLocation(e.target.value)}
            />
          </label>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
export default Form;
