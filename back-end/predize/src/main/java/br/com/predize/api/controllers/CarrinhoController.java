package br.com.predize.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.predize.api.entities.Produto;
import br.com.predize.api.entities.dtos.ProdutoDTO;
import br.com.predize.api.services.CarrinhoService;

@RestController
@RequestMapping("/carrinho")
public class CarrinhoController {

	@Autowired
	CarrinhoService service;

	@GetMapping
	public ResponseEntity<?> listarCarrinho() {
		return new ResponseEntity<>(service.listar(),
				service.listar().isEmpty() ? HttpStatus.NO_CONTENT : HttpStatus.OK);
	}

	@PostMapping("/cadastrar")
	public ResponseEntity<?> cadastrar(@RequestBody List<ProdutoDTO> produto) throws Exception {
		if (service.verificarEstoque(produto))
			service.cadastrar(produto);
		return new ResponseEntity<String>("Pedido feito com sucesso!", HttpStatus.OK);
	}

}
