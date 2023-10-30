package br.com.predize.api.entities;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter @Setter
@NoArgsConstructor
@Table(name = "produto")
@EqualsAndHashCode(of = "id")
public class Produto implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false)
	private String nome;

	@Column(nullable = false)
	@Min(value = 0, message = "A quantidade não pode ser negativa")
	private Double preco;

	@Column(nullable = false)
	@Min(value = 0, message = "A quantidade não pode ser negativa")
	private Integer quantidade;

	@Column(unique = true, nullable = false)
	private String foto;

	public Produto(Produto p) {
		this.id			= p.getId() != null ? p.getId() : null;
		this.nome 		= p.getNome();
		this.preco 		= p.getPreco();
		this.quantidade = p.getQuantidade();
		this.foto 		= p.getFoto();
	}

	public Produto(Long id, String nome, Double preco, Integer quantidade, String foto) {
		this.id			= id != null ? id : null;
		this.nome 		= nome;
		this.preco 		= preco;
		this.quantidade = quantidade;
		this.foto 		= foto;
	}

}
