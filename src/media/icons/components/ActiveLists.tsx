import * as React from "react";

function SvgActiveLists(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="0.8em" height="0.8em" {...props}>
      <path d="M19.75 2H4.25A2.257 2.257 0 002 4.25v15.5A2.257 2.257 0 004.25 22h15.5A2.257 2.257 0 0022 19.75V4.25A2.257 2.257 0 0019.75 2zM11 16.75H7a.75.75 0 010-1.5h4a.75.75 0 010 1.5zm6-4H7a.75.75 0 010-1.5h10a.75.75 0 010 1.5zm0-4H7a.75.75 0 010-1.5h10a.75.75 0 010 1.5z" />
    </svg>
  );
}

export default SvgActiveLists;
