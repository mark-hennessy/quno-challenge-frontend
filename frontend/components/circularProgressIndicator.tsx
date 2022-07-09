import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type Props = {
  value: number;
  maxValue: number;
  text: string | number;
  className?: string;
};

const size = 50;

export default function CircularProgressIndicator({
  value,
  maxValue,
  text,
  className,
}: Props) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <CircularProgressbar
        styles={buildStyles({
          textSize: "30px",
          textColor: "#000",
          trailColor: "#FFCA5833",
          pathColor: "#FFCA58",
        })}
        value={value}
        maxValue={maxValue}
        text={`${text}`}
      />
    </div>
  );
}
