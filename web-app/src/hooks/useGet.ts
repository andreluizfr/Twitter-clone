//uma maneira de ter informações da request sem usar React Query

import { useState, useEffect } from 'react';
import axios from '../utils/axios';

export function useGet (method: string, url: string, data?: object, headers?: object) {
    const [response, setResponse] = useState <object | null> (null);
    const [isLoading, setIsLoading] = useState <boolean> (true);
    const [error, setError] = useState <Error | null> (null);

    useEffect(()=>{
        axios({
            method: method,
            url: url,
            data: data,
            headers: headers
        }).then(response => {
            setResponse(response.data);
        }).catch(error => {
            setError(error);
        }).finally(()=>{
            setIsLoading(false);
        });
    }, []);

    return { isLoading, error, response };
   
}