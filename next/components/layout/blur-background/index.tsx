import { IDiv } from "../../../types/jsx";

import styles from "./styles.module.css";

import { PinkBlurSVG } from "@/assets/svg/blur/pink-blur";
import { BlueBlurSVG } from "@/assets/svg/blur/blue-blur";
import { cn } from "@/styles/cn";

const Item = ({ ...rest }: IDiv) => {
  return (
    <div {...rest} className={cn("absolute scale-150", rest.className)}>
      {rest.children}
    </div>
  );
};

export default function BlurBackground() {
  return (
    <div>
      <Item className={cn("-top-40 -right-40", styles["animate-right"])}>
        <BlueBlurSVG />
      </Item>

      <Item className={cn("-bottom-40 -left-40", styles["animate-left"])}>
        <PinkBlurSVG />
      </Item>
    </div>
  );
}
