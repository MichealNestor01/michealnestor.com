import { AnimatePresence, motion } from "framer-motion";
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
  const classes = `${className} overflow-y-hidden`;
  return (
    <button onClick={onClick} className={classes}>
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
