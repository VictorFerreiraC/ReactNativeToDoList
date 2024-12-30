import React from "react";
import Svg, { Path } from 'react-native-svg';

function CheckIcon() {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
    >
      <Path
        d="M8.98 16.426a7.41 7.41 0 100-14.82 7.41 7.41 0 000 14.82z"
        fill="#5E60CE"
      />
      <Path
        d="M8.964 1.86A7.14 7.14 0 111.824 9a7.168 7.168 0 017.14-7.14zm0-1.587a8.727 8.727 0 10.072 17.454A8.727 8.727 0 008.964.273z"
        fill="#5E60CE"
      />
      <Path
        d="M12.43 6.342L8.1 10.674 5.616 8.192l-.836.835L8.1 12.346l5.168-5.168-.836-.836z"
        fill="#F2F2F2"
      />
    </Svg>
  )
}

export default CheckIcon
