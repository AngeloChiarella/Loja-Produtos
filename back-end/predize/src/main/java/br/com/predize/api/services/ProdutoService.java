package br.com.predize.api.services;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.predize.api.entities.Produto;
import br.com.predize.api.entities.dtos.ProdutoDTO;
import br.com.predize.api.repositories.ProdutoRepository;

@Service
public class ProdutoService {

	@Autowired
	ConverterMapper mapper;

	@Autowired
	ProdutoRepository repository;

	public List<ProdutoDTO> listar() {
		return repository.findAll().stream()
						 .sorted(Comparator.comparing(Produto::getPreco).reversed())
						 .map(mapper::produtoToDto).collect(Collectors.toList());
	}

	public ProdutoDTO listarPorFoto(String foto) {
		return mapper.produtoToDto(repository.findByFoto(foto));
	}

	public void cadastrarOuAlterar(ProdutoDTO dto) {
		Produto produto = mapper.dtoToProduto(dto);
		if (dto.getId() != null) {
			Optional<Produto> obj = repository.findById(dto.getId());
			produto.setId(obj.get().getId());
		}
		repository.save(produto);
	}

	public void excluir(Long id) throws Exception {
		if(repository.findById(id).isPresent()) {
			repository.deleteById(id);
		}else {
			throw new Exception("Produto não encontrado!");
		}
	}

}
