import { useState } from "react";

function useToggle(initialStatus) {
    const [status, setStatus] = useState(initialStatus);
    const toggleStatus = (newStatus) => setStatus(newStatus !== undefined ? newStatus : (prevStatus) => !prevStatus);

    return [status, toggleStatus]
}

export default useToggle 