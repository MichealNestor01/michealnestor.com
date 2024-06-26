import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { flyInOutY } from "../../framer-presets/animation-presets";

type ToggleButtonProps = {
  className: string;
  optionAactive: boolean;
  onClick: () => void;
  optionA: any;
  optionB: any;
};

const ToggleButton: React.FC<ToggleButtonProps> = ({
  className,
  optionAactive,
  onClick,
  optionA,
  optionB,
}) => {
  const [enableButton, setEnableButton] = useState<boolean>(true);
  const classes = `${className} overflow-y-hidden`;

  const clickHandler = () => {
    // This is needed because animate presents does not behave well with fast clicks
    // so delay presses to be 1.1 times the duration of the animation
    if (enableButton) {
      setEnableButton(false);
      onClick();
      setTimeout(() => {
        setEnableButton(true);
      }, flyInOutY.transition.duration * 1100);
    }
  };

  return (
    <button onClick={clickHandler} className={classes}>
      <AnimatePresence initial={false} mode="wait">
        {optionAactive ? (
          <motion.div key="optionA" {...flyInOutY}>
            {optionA}
          </motion.div>
        ) : (
          <motion.div key="optionB" {...flyInOutY}>
            {optionB}
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default ToggleButton;
