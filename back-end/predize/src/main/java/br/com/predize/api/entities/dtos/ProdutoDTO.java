package br.com.predize.api.entities.dtos;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonFormat;

import br.com.predize.api.entities.Produto;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor
public class ProdutoDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@NotNull @NotBlank
	private Long id;
	
	@NotNull @NotBlank
	private String nome;

	@NotNull @NotBlank
	private Double preco;

	@NotNull
	@Min(value = 0, message = "A quantidade não pode ser negativa")
	private Integer quantidade;

	@NotNull @NotBlank
	private String foto;

	public ProdutoDTO(Produto produto) {
		this.id			= produto.getId();
		this.nome		= produto.getNome();
		this.preco 		= produto.getPreco();
		this.quantidade = produto.getQuantidade();
		this.foto 		= produto.getFoto();
	}

}
