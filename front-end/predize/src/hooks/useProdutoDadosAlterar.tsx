import axios, { AxiosPromise } from "axios"
import { useMutation, useQueryClient } from "react-query"
import { ProdutoDados } from "../components/interface/ProdutoDados"

const API_URL = 'http://localhost:8080'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const postData = async (data: ProdutoDados): AxiosPromise<any> => {
    const response = axios.post(API_URL + "/produto", data)
    return response
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const deleteData = async (data: ProdutoDados): AxiosPromise<any> => {
    const response = axios.delete(API_URL + "/produto/excluir/" + data.id)
    return response
}

export function useProdutoDadosAlterar() {
    const queryClient = useQueryClient();

    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['produto-dados']) // invalidar as querys pela chave 
        }
    })

    const deleteProduct = useMutation({
        mutationFn: deleteData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['produto-dados']) // invalidar as querys pela chave 
        }
    })

    return {
        mutate,
        deleteProduct
    }
}