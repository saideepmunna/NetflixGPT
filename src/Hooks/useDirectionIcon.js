import { useState } from "react";

const useDirectionIcon = ()=>{
    const [directionIcon, setDirectionIcon] = useState(false);

    const iconHandlerOver = () => {
      setDirectionIcon(true);
    };
    const iconHandlerOut = () => {
      setDirectionIcon(false);
    };

    return {directionIcon, iconHandlerOver, iconHandlerOut}
}

export default useDirectionIcon;