import React from "react";

function Card() {
  const { title } = this.props;
  return (
    <div>
      <div>{title}</div>
    </div>
  );
}

export default Card;
