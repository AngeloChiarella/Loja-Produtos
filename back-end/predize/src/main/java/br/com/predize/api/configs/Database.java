package br.com.predize.api.configs;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.context.annotation.Configuration;

import br.com.predize.api.entities.Produto;
import br.com.predize.api.entities.dtos.ProdutoDTO;
import br.com.predize.api.repositories.ProdutoRepository;
import br.com.predize.api.services.CarrinhoService;
import br.com.predize.api.services.ConverterMapper;

@Configuration
@SpringBootConfiguration
public class Database implements CommandLineRunner {

	@Autowired
	ConverterMapper mapper;

	@Autowired
	private ProdutoRepository produtoRepository;

	@Override
	public void run(String... args) throws Exception {
		
		Produto p1 = new Produto(1L, "iPhone 11 Pro Max Verde", 10999.00, 2,"iphone11promax.jpg");
		Produto p2 = new Produto(2L, "iPhone 12 Mini Branco", 7499.00, 5,"iphone12mini.jpg");
		Produto p3 = new Produto(3L, "iPhone 13 Pro Azul-Pacífico", 12999.00, 3,"iphone13pro.jpg");
		Produto p4 = new Produto(4L, "iPad Air 4ª Geração Prateado", 6999.00, 1,"ipadair4.jpg");
		Produto p5 = new Produto(5L, "AirPods Pro", 1799.00, 8,"airpodspro.jpg");
		Produto p6 = new Produto(6L, "MacBook Pro 16'' M1 Pro", 16999.00, 2,"macbookpro16.jpg");

		Produto p7 = new Produto(7L, "Galaxy S21 Preto", 8999.00, 4,"galaxys21.jpg");
		Produto p8 = new Produto(8L, "Galaxy Tab S7+ Bronze", 8499.00, 2,"galaxytabs7.jpg");

		Produto p9 = new Produto(9L, "Xiaomi Mi 11 Ultra Preto", 8499.00, 1,"mi11ultra.jpg");
		Produto p10 = new Produto(10L, "Xiaomi Redmi Note 10 Pro Azul", 2999.00, 4,"redminote10pro.jpg");

		Produto p11 = new Produto(11L, "JBL Flip 5 Speaker: Preto", 499.90, 6,"jblflip5.jpg");
		Produto p12 = new Produto(12L, "JBL Quantum 800: Gaming", 799.50, 3,"jblquantum800.jpg");
		Produto p13 = new Produto(13L, "JBL Free X", 349.00, 2,"jblfreex.jpg");
		Produto p14 = new Produto(14L, "JBL Charge 4 Speaker", 599.00, 4,"jblcharge4.jpg");
		Produto p15 = new Produto(15L, "JBL T110: Intra-Auricular", 59.90, 5,"jblt110.jpg");

		Produto p16 = new Produto(16L, "Capa: iPhone 11 Pro Max", 49.50, 10,"capaiphone11pro.jpg");
		Produto p17 = new Produto(17L, "Carregador USB-C para Android", 29.90, 10,"carregadorusb.jpg");
		Produto p18 = new Produto(18L, "Película de Vidro: Iphone 11 Pro", 9.90, 10,"peliculavidroiphone.jpg");
		Produto p19 = new Produto(19L, "Carregador sem Fio Qi", 39.50, 10,"carregadorsemfio.jpg");
		Produto p20 = new Produto(20L, "Capa: Xiaomi Mi 11 Transparente", 19.50, 10,"capami11ultra.jpg");
		Produto p21 = new Produto(21L, "Carregador Rápido para Xiaomi", 19.00, 10,"carregadorxiaomi.jpg");

		List<Produto> produtos = produtoRepository.saveAll(Arrays.asList(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11,
				p12, p13, p14, p15, p16, p17, p18, p19, p20, p21));

		List<ProdutoDTO> pedido = new ArrayList<>();
		for (Produto p : produtos) {
			if (p.getId() % 2 == 0)
				pedido.add(mapper.produtoToDto(p));
		}

	}
}