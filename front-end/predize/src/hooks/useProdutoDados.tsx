import axios, { AxiosPromise } from "axios"
import { ProdutoDados } from "../components/interface/ProdutoDados"
import { useQuery } from "react-query"

const API_URL = 'http://localhost:8080'

const fetchData = async (): AxiosPromise<ProdutoDados[]> => {
    const response = axios.get(API_URL + "/produto")
    return response
}

export function useProdutoDados() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['produto-dados'],
        retry: 2
    })
    return{
        ...query, 
        data: query.data?.data
    }
}
