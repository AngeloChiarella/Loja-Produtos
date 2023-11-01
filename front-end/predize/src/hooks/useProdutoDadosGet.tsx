import axios, { AxiosPromise } from "axios"
import { useQuery } from "react-query"
import { ProdutoDados } from "../components/interface/ProdutoDados"
const API_URL = 'http://localhost:8080'

const fetchData = async (): AxiosPromise<ProdutoDados[]> => {
    const response = axios.get(API_URL + "/produto")
    return response
}

export function useProdutoDadosGet() {
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