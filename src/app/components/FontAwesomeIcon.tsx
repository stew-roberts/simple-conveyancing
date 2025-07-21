import * as FAIcons from "react-icons/fa";
import { IconType } from "react-icons";

interface Props {
  icon: keyof typeof FAIcons;
  color?: string;
  widthClass?: string;  // e.g. "w-6"
  heightClass?: string; // e.g. "h-6"
  className?: string;   // Optional override or extension
}

export const FontAwesomeIcon = ({
  icon,
  color = "text-black",
  widthClass = "w-10",
  heightClass = "h-10",
  className = "",
}: Props): JSX.Element => {
  const IconComponent: IconType = FAIcons[icon];

  if (!IconComponent) {
    console.warn(`Icon "${icon}" not found in react-icons/fa`);
    return <></>; // or return a default fallback icon
  }

  const classes = `${color} ${widthClass} ${heightClass} ${className}`.trim();

  return <IconComponent className={classes} />;
};