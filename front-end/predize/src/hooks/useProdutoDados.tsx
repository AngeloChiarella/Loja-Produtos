/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosPromise } from "axios"
import { useMutation, useQueryClient } from "react-query"
import { ProdutoDados } from "../components/interface/ProdutoDados"

const API_URL = 'http://localhost:8080'

const postData = async (data: ProdutoDados): AxiosPromise<any> => {
    const response = axios.post(API_URL + "/produto", data)
    return response
}

const deleteData = async (data: ProdutoDados): AxiosPromise<any> => {
    const response = axios.delete(API_URL + "/produto/excluir/" + data.id)
    return response
}

const putData = async (data: ProdutoDados): AxiosPromise<any> => {
    const response = axios.put(API_URL + "/produto/alterar" , data)
    return response
}


export function useProdutoDados() {
    const queryClient = useQueryClient();

    const post = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['produto-dados']) 
        }
    })

    const deleteProduto = useMutation({
        mutationFn: deleteData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['produto-dados'])
        }
    })

    const put = useMutation({
        mutationFn: putData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['produto-dados'])
        }
    })

    return {
        post,
        deleteProduto,
        put
    }
}
