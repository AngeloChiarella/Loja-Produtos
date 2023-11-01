package br.com.predize.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.predize.api.entities.dtos.ProdutoDTO;
import br.com.predize.api.services.ProdutoService;

@RestController
@RequestMapping("/produto")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProdutoController {

	@Autowired
	ProdutoService service;

	@GetMapping
	public ResponseEntity<?> listar() {
		return new ResponseEntity<>(service.listar(),
				service.listar().isEmpty() ? HttpStatus.NO_CONTENT : HttpStatus.OK);
	}

	@GetMapping("/buscarNome/{nome}")
	public ResponseEntity<?> listarPorNome(@PathVariable String nome) {
		return new ResponseEntity<>(service.listarPorFoto(nome),
				service.listar().isEmpty() ? HttpStatus.NO_CONTENT : HttpStatus.OK);
	}

	@PostMapping
	public ResponseEntity<?> salvar(@RequestBody ProdutoDTO dto) {
		try {
			service.cadastrarOuAlterar(dto);
			return new ResponseEntity<String>("Cadastrado com sucesso!", HttpStatus.OK);

		} catch (Exception e) {
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}

	@PutMapping("/alterar")
	public ResponseEntity<?> alterar(@RequestBody ProdutoDTO dto) {
		try {
			service.cadastrarOuAlterar(dto);
			return new ResponseEntity<String>("Produto alterado!", HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}

	}

	@DeleteMapping("/excluir/{id}")
	public ResponseEntity<?> excluir(@PathVariable Long id) throws Exception {
			service.excluir(id);
			return new ResponseEntity<String>("Produto excluido!", HttpStatus.OK);
	}
}
