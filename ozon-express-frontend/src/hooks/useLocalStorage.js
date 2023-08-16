import { useEffect, useState } from "react";

function getSavedPanier(key, initialValue) {
    const panierId = JSON.parse(localStorage.getItem(key))
    if (panierId) return panierId

    if (initialValue instanceof Function) return initialValue()
    return initialValue
}

function useLocalStorage(key, initialValue) {
    const [panierId, setPanierId] = useState(() => {
        return getSavedPanier(key, initialValue)
    });
    localStorage.setItem(key, JSON.stringify(panierId))
    useEffect(() => {

    }, [panierId])

    return [panierId, setPanierId]
}

export default useLocalStorage 