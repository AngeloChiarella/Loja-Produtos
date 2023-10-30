package br.com.predize.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.predize.api.entities.dtos.Item;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {



}
