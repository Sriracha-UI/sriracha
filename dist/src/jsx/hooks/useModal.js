import { useState } from "react";
export var useModal = function () {
    var _a = useState(false), isModal = _a[0], setIsModal = _a[1];
    function toggleModal() {
        setIsModal(!isModal);
    }
    return { isModal: isModal, toggleModal: toggleModal };
};
