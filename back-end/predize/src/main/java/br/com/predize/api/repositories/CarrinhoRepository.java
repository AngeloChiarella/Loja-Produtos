package br.com.predize.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.predize.api.entities.Carrinho;

public interface CarrinhoRepository extends JpaRepository<Carrinho, Long> {

}
