import React from "react";

function FormHeader({ title, styledTitle }) {
  return (
    <div>
      <h3 className="font-semibold text-xl text-center mb-4">
        {title}  <span className="text-[#263C41]">{styledTitle}</span>
      </h3>
    </div>
  );
}

export default FormHeader;
