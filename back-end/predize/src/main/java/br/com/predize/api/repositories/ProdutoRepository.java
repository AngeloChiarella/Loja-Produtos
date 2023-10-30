package br.com.predize.api.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.predize.api.entities.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {

	Produto findByFoto(String foto);

	@Query("SELECT p FROM Produto p WHERE p.nome LIKE %:nome%")
	List<Produto> findByNome(@Param("nome") String nome);

}
