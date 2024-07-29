declare module "react-input-mask" {
  import { ComponentType, HTMLProps } from "react";

  interface InputMaskProps extends HTMLProps<HTMLInputElement> {
    mask: string;
    maskChar?: string;
    formatChars?: { [key: string]: string };
    alwaysShowMask?: boolean;
  }

  const InputMask: ComponentType<InputMaskProps>;

  export default InputMask;
}
