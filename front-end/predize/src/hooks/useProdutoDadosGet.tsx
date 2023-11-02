import axios, { AxiosPromise } from "axios"
import { useQuery } from "react-query"
import { ProdutoDados } from "../components/interface/ProdutoDados"

const API_URL = 'http://localhost:8080'

const fetchData = async (): AxiosPromise<ProdutoDados[]> => {
    const response = axios.get(API_URL + "/produto")
    return response
}

const fetchProdutoPorFoto = async (foto: string): AxiosPromise<ProdutoDados> => {
    const response = axios.get(`${API_URL}/produto/buscarFoto/${foto}`)
    return response
}

export function useProdutoDadosGet() {
    const query = useQuery(['produto-dados'], fetchData, {
        retry: 2
    })

    return {
        ...query, 
        data: query.data?.data
    }
}

export function useProdutoPorFoto(foto: string) {
    const query = useQuery(['produto-dados', foto], () => fetchProdutoPorFoto(foto), {
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}
