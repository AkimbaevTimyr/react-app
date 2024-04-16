import { useEffect, useState } from "react"



//Button for testing Error Boundary
export const BugButton = () => {
    const [error, setError] = useState<Boolean>(false);

    const handleClick = () => {
        setError(true)
    }

    useEffect(() => {
        if(error) {
            throw new Error('Test Error')
        }
    }, [error])

    return (
        <div>
            <button onClick={handleClick}>throw error</button>
        </div>
    )
}