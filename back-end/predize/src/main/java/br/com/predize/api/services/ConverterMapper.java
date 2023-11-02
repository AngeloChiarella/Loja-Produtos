package br.com.predize.api.services;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.predize.api.entities.Produto;
import br.com.predize.api.entities.dtos.ProdutoDTO;

@Component
public class ConverterMapper {

	@Autowired
	ModelMapper mapper;

	public Produto dtoToProduto(ProdutoDTO dto) {
		return mapper.map(dto, Produto.class);
	}

	public ProdutoDTO produtoToDto(Produto p) {
		return mapper.map(p, ProdutoDTO.class);
	}

	public List<ProdutoDTO> produtoToDtoList(List<Produto> produtos) {
		List<ProdutoDTO> dtos = new ArrayList<>();
		for (Produto p : produtos) {
			dtos.add(produtoToDto(p));
		}
		return dtos;
	}

}
