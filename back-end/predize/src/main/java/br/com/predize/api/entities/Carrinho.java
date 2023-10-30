package br.com.predize.api.entities;

import java.io.Serializable;
import java.util.HashSet;
import java.util.List;

import br.com.predize.api.entities.dtos.Item;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter @Setter
@NoArgsConstructor
@Table(name = "carrinho")
public class Carrinho implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@OneToMany(cascade = CascadeType.ALL)
	private List<Item> itens;

	private Double total;

	public Carrinho(List<Item> itens) {
		this.itens = itens;
		this.total = itens.stream().mapToDouble(i -> i.getSubTotal()).sum();
	}
	
	



}
