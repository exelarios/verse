import { HTMLAttributes } from "react";

type DotMenuProps = {
  fill?: string,
  round?: boolean
}

export default function DotMenu(props: DotMenuProps & HTMLAttributes<HTMLDivElement>) {

  const { fill, round, className } = props;

  if (round) {
    return (
      <svg className={className} width="9" height="28">
        <circle cx="4.5" cy="5" r="2" fill={fill}/>
        <circle cx="4.5" cy="15" r="2" fill={fill}/>
        <circle cx="4.5" cy="25" r="2" fill={fill}/>
      </svg>
    );
  } else {
    return (
      <svg className={className} width="9" height="20">
        <rect x="3" y="0" width="3" height="3" fill={fill}/>
        <rect x="3" y="8.5" width="3" height="3" fill={fill}/>
        <rect x="3" y="17" width="3" height="3" fill={fill}/>
      </svg>
    );
  }

}

DotMenu.defaultProps = {
  round: false,
  fill: "black"
}