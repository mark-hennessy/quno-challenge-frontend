import classNames from "classnames";
import { Doctor } from "../@types/Doctor";
import Icon from "./icon";

type Props = {
  doctor: Doctor;
  hasDarkBackground?: boolean;
};

export default function AddressLabel({ doctor, hasDarkBackground }: Props) {
  return (
    <div className="flex items-center">
      <Icon
        name={hasDarkBackground ? "map.svg" : "map-outline.svg"}
        alt="address icon"
        size="xs"
      />

      <span
        className={classNames("text-xs", "leading-5", {
          "text-trueGray-700": !hasDarkBackground,
          "text-lightBlue-300": hasDarkBackground,
        })}
      >
        {[doctor.city, doctor.country].join(", ")}
      </span>
    </div>
  );
}
