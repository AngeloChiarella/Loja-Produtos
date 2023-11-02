package br.com.predize.api.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.predize.api.entities.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {

	@Query("SELECT p FROM Produto p WHERE p.foto LIKE %:foto")
	List<Produto> findByFoto(String foto);

}
