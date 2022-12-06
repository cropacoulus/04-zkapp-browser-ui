import React from "react";

type ButtonProps = {
  title: string,
  styles?: string
  onClick?: React.MouseEventHandler
}

const Button: React.FC<ButtonProps> = (props) => {
  const { title, styles, onClick } = props;

  return (
    <button type="button" onClick={onClick} className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
      {title}
    </button>
  );
}

export default Button;
