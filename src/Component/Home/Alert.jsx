import React from "react";

export default function Alert(props) {
  const capitalize = (word) => {
    const newWord = word.toLowerCase();
    return newWord.charAt(0).toUpperCase() + newWord.slice(1);
  };
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong>{" "}
        {capitalize(props.alert.msg)}
      </div>
    )
  );
}
