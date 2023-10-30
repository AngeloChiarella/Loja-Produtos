package br.com.predize.api.entities.dtos;

import java.io.Serializable;

import br.com.predize.api.entities.Produto;
import jakarta.annotation.Generated;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Item implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long 	id;
	private String  produto;
	private Integer quantidade;
	private Double  subTotal;

	public Item() {
		// TODO Auto-generated constructor stub
	}

	public Item(ProdutoDTO produto) {
		this.produto 	= produto.getNome();
		this.quantidade = produto.getQuantidade();
		this.subTotal	= produto.getPreco() * produto.getQuantidade();
	}

}
