import React from "react";
import { Button } from "@heroui/react";
import cn from '../utility/cn'

const CustomBtn = ({text,onClick,btnClass}) => {
  return (
    <>
      <Button
      name={text}
        onPress={onClick}
        className={cn(
          "w-fit bg-[#D29A5A] hover:bg-transparent border-[#D29A5A] hover:border hover:border-slate-50 hover:text-white tracking-wider",
          btnClass
        )}
      >{text}</Button>
    </>
  );
};

export default CustomBtn;
