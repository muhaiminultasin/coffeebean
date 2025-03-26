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
          "w-fit bg-primary hover:bg-transparent border-primary hover:border hover:border-slate-50 hover:text-white tracking-wider 2xl:text-[2rem] 2xl:px-8 2xl:py-8 2xl:mt-10",
          btnClass
        )}
      >{text}</Button>
    </>
  );
};

export default CustomBtn;