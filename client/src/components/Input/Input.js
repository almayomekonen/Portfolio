import React from "react";

export default function Input({ label, id, error, textArea, ...props }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      {textArea ? (
        <textarea id={id} {...props} />
      ) : (
        <input id={id} {...props} />
      )}
      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}
    </>
  );
}
