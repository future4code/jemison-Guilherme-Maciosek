import {useEffect, useState} from 'react'
import axios from 'axios'


export function useRequestData  (url) {
    const [data, setData] = useState(undefined)
    const [isloading, setIsLoading] = useState (false)
    const [error, setError] = useState ("")
   

    useEffect(() => {
        setIsLoading(true)
        axios
            .get(url)
            .then((response) => {
                setIsLoading(false)
                setData(response.data.trips)
            })
            .catch((error) => {
                setIsLoading(false)
                setError(error)
            })
        }, [url])

    return {data, isloading, error}
}