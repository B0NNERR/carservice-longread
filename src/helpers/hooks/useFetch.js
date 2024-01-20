import { useCallback, useEffect, useState } from 'react';


const useFetch = (url, options = {}, manageFunc = null) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const fetchFunction = useCallback(async () => {
        try {
            setIsLoading(true)
            const response = await fetch(url, options)

            if (response.status !== 200) throw new Error("Что-то пошло не так...")

            if (manageFunc) {
                const data = await manageFunc(response)
                setData(data)
                return
            }

            setData(data)
            
        } catch (e) {
            setError("Что-то пошло не так...")
        } finally {
            setIsLoading(false)
        } 
    }, [])

    useEffect( () => {
        fetchFunction()
    }, [fetchFunction])

    return {data, fetchFunction, error, isLoading};
}

export default useFetch
