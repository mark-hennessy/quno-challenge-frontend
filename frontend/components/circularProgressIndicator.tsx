import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type Props = {
  value: number;
  maxValue: number;
  text: string | number;
  hasDarkBackground?: boolean;
  className?: string;
};

const size = 50;

export default function CircularProgressIndicator({
  value,
  maxValue,
  text,
  hasDarkBackground,
  className,
}: Props) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <CircularProgressbar
        styles={buildStyles({
          textSize: "30px",
          textColor: hasDarkBackground ? "#fcd34d" : "#000",
          trailColor: "#ffca5833",
          pathColor: "#ffca58",
        })}
        value={value}
        maxValue={maxValue}
        text={`${text}`}
      />
    </div>
  );
}
