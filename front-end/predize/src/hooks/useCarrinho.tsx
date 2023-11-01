/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosPromise } from "axios"
import { useMutation, useQueryClient } from "react-query"
import { CarrinhoDados } from "../components/interface/CarrinhoDados"
import { ProdutoDados } from "../components/interface/ProdutoDados"

const API_URL = 'http://localhost:8080'

const postData = async (data: CarrinhoDados): AxiosPromise<any> => {
    const response = axios.post(API_URL + "/carrinho/cadastrar", data)
    return response
}


const verifyProduct = async (data: ProdutoDados): AxiosPromise<any> => {
    const response = axios.get(`${API_URL}/produto/buscarFoto/${data.foto}`)
    return response
}

export function useCarrinhoDados() {
    const queryClient = useQueryClient();

    const post = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['carrinho-dados'])
        }
    })

    const verify = useMutation({
        mutationFn: verifyProduct,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['produto-dados'])
        }
    })
   

    return {
        post,
        verify
    }
}
