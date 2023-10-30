package br.com.predize.api.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.predize.api.entities.Carrinho;
import br.com.predize.api.entities.Produto;
import br.com.predize.api.entities.dtos.Item;
import br.com.predize.api.entities.dtos.ProdutoDTO;
import br.com.predize.api.repositories.CarrinhoRepository;
import br.com.predize.api.repositories.ItemRepository;
import br.com.predize.api.repositories.ProdutoRepository;

@Service
public class CarrinhoService {

	@Autowired
	ConverterMapper mapper;

	@Autowired
	ProdutoRepository produtoRepository;

	@Autowired
	ItemRepository itemRepository;

	@Autowired
	CarrinhoRepository carrinhoRepository;

	public void cadastrar(List<ProdutoDTO> produtos) throws Exception {
		List<Item> itens = new ArrayList<>();

		for (ProdutoDTO p : produtos) {
			Item item = new Item(p);
			itemRepository.save(item);
			itens.add(item);
		}
		
		Carrinho c = new Carrinho(itens);
		carrinhoRepository.save(c);
	}

	public boolean verificarEstoque(List<ProdutoDTO> produtos) throws Exception {
		List<Produto> atualizaEstoque = new ArrayList<>();
		for (ProdutoDTO p : produtos) {
			Produto novo = produtoRepository.findByFoto(p.getFoto());
			if (novo.getQuantidade() < p.getQuantidade()) {
				throw new Exception(
						"Produto: " + novo.getNome() + " tem apenas " + novo.getQuantidade() + " de itens.");
			}
			novo.setQuantidade(novo.getQuantidade() - p.getQuantidade());
			atualizaEstoque.add(novo);
		}
		produtoRepository.saveAll(atualizaEstoque);
		return true;
	}

	public List<Carrinho> listar() {
		return carrinhoRepository.findAll();
	}

}
