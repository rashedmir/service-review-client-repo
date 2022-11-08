import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(()=>{
        document.title = `${title} - Mir Rashed Photography`
    },[title])
};

export default useTitle;