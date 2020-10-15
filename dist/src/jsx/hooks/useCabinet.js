import { useState } from "react";
export var useCabinet = function () {
    var _a = useState(false), isCabinet = _a[0], setIsCabinet = _a[1];
    function toggleCabinet() {
        setIsCabinet(!isCabinet);
    }
    return { isCabinet: isCabinet, toggleCabinet: toggleCabinet };
};
