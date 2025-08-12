const products = [
  // Salgadinhos de Milho 40g
  {
    category: "salgadinhos-milho-40g",
    title: "Milho 40g - Queijo",
    image: "../../assets/produtos/1.png",
    description: "Um clássico que nunca falha! Combina a cremosidade intensa do queijo com a crocância perfeita. Um sabor marcante e irresistível que agrada em qualquer momento.",
    nutrition: {
      porcoesPorEmbalagem: "Cerca de 2",
      porcao: "20g (2 xícaras)\n%VD: Valores Diários de referência com base em uma dieta de 2.000 kcal.\n-Valor diário não estabelecido.",
      dados: [
        { nutriente: "Valor energético (kcal)", por100g: "438,8", porcao: "87,8", vd: "4,4%" },
        { nutriente: "Carboidratos (g)", por100g: "76,9", porcao: "15,4", vd: "5,1%" },
        { nutriente: "Açúcares Totais (g)", por100g: "0,1", porcao: "0,0", vd: "--" },
        { nutriente: "Açúcares Adicionado", por100g: "0,0", porcao: "0,0", vd: "--" },
        { nutriente: "Proteínas (g)", por100g: "7,0", porcao: "1,4", vd: "1,9%" },
        { nutriente: "Gorduras Totais (g)", por100g: "10,8", porcao: "2,2", vd: "3,9%" },
        { nutriente: "Gorduras Saturadas (g)", por100g: "1,7", porcao: "0,3", vd: "1,6%" },
        { nutriente: "Gorduras Trans (g)", por100g: "0,0", porcao: "0,0", vd: "0%" },
        { nutriente: "Fibras Alimentares (g)", por100g: "4,5", porcao: "0,9", vd: "3,6%" },
        { nutriente: "Sódio (mg)", por100g: "891,4", porcao: "178,3", vd: "7,4%" }
      ]
    }
  },
  {
    category: "salgadinhos-milho-40g",
    title: "Milho 40g - Presunto",
    image: "../../assets/produtos/2.png",
    description: "O sabor que todo mundo reconhece! Um toque suave e salgado, ideal para qualquer hora do dia.",
    nutrition: {
      porcoesPorEmbalagem: "Cerca de 2",
      porcao: "20g (2 xícaras)\n%VD: Valores Diários de referência com base em uma dieta de 2.000 kcal.\n-Valor diário não estabelecido.",
      dados: [
        { nutriente: "Valor energético (kcal)", por100g: "438,8", porcao: "87,8", vd: "4,4%" },
        { nutriente: "Carboidratos (g)", por100g: "76,9", porcao: "15,4", vd: "5,1%" },
        { nutriente: "Açúcares Totais (g)", por100g: "0,1", porcao: "0,0", vd: "--" },
        { nutriente: "Açúcares Adicionado", por100g: "0,0", porcao: "0,0", vd: "--" },
        { nutriente: "Proteínas (g)", por100g: "7,0", porcao: "1,4", vd: "1,9%" },
        { nutriente: "Gorduras Totais (g)", por100g: "10,8", porcao: "2,2", vd: "3,9%" },
        { nutriente: "Gorduras Saturadas (g)", por100g: "1,7", porcao: "0,3", vd: "1,6%" },
        { nutriente: "Gorduras Trans (g)", por100g: "0,0", porcao: "0,0", vd: "0%" },
        { nutriente: "Fibras Alimentares (g)", por100g: "4,5", porcao: "0,9", vd: "3,6%" },
        { nutriente: "Sódio (mg)", por100g: "891,4", porcao: "178,3", vd: "7,4%" }
      ]
    }
  },
  {
    category: "salgadinhos-milho-40g",
    title: "Milho 40g - Churrasco",
    image: "../../assets/produtos/3.png",
    description: "Sabor intenso e defumado, com notas que lembram carne grelhada no ponto certo. Para quem quer transformar o lanche em um verdadeiro churrasco em miniatura.",
    nutrition: {
      porcoesPorEmbalagem: "Cerca de 2",
      porcao: "20g (2 xícaras)\n%VD: Valores Diários de referência com base em uma dieta de 2.000 kcal.\n-Valor diário não estabelecido.",
      dados: [
        { nutriente: "Valor energético (kcal)", por100g: "438,8", porcao: "87,8", vd: "4,4%" },
        { nutriente: "Carboidratos (g)", por100g: "76,9", porcao: "15,4", vd: "5,1%" },
        { nutriente: "Açúcares Totais (g)", por100g: "0,1", porcao: "0,0", vd: "--" },
        { nutriente: "Açúcares Adicionado", por100g: "0,0", porcao: "0,0", vd: "--" },
        { nutriente: "Proteínas (g)", por100g: "7,0", porcao: "1,4", vd: "1,9%" },
        { nutriente: "Gorduras Totais (g)", por100g: "10,8", porcao: "2,2", vd: "3,9%" },
        { nutriente: "Gorduras Saturadas (g)", por100g: "1,7", porcao: "0,3", vd: "1,6%" },
        { nutriente: "Gorduras Trans (g)", por100g: "0,0", porcao: "0,0", vd: "0%" },
        { nutriente: "Fibras Alimentares (g)", por100g: "4,5", porcao: "0,9", vd: "3,6%" },
        { nutriente: "Sódio (mg)", por100g: "891,4", porcao: "178,3", vd: "7,4%" }
      ]
    }
  },
  {
    category: "salgadinhos-milho-40g",
    title: "Milho 40g - Cebola",
    image: "../../assets/produtos/4.png",
    description: "Delicado e surpreendente. Levemente adocicado e aromático, o sabor cebola oferece uma experiência leve e cheia de personalidade, com crocância na medida certa.",
    nutrition: {
      porcoesPorEmbalagem: "Cerca de 2",
      porcao: "20g (2 xícaras)\n%VD: Valores Diários de referência com base em uma dieta de 2.000 kcal.\n-Valor diário não estabelecido.",
      dados: [
        { nutriente: "Valor energético (kcal)", por100g: "438,8", porcao: "87,8", vd: "4,4%" },
        { nutriente: "Carboidratos (g)", por100g: "76,9", porcao: "15,4", vd: "5,1%" },
        { nutriente: "Açúcares Totais (g)", por100g: "0,1", porcao: "0,0", vd: "--" },
        { nutriente: "Açúcares Adicionado", por100g: "0,0", porcao: "0,0", vd: "--" },
        { nutriente: "Proteínas (g)", por100g: "7,0", porcao: "1,4", vd: "1,9%" },
        { nutriente: "Gorduras Totais (g)", por100g: "10,8", porcao: "2,2", vd: "3,9%" },
        { nutriente: "Gorduras Saturadas (g)", por100g: "1,7", porcao: "0,3", vd: "1,6%" },
        { nutriente: "Gorduras Trans (g)", por100g: "0,0", porcao: "0,0", vd: "0%" },
        { nutriente: "Fibras Alimentares (g)", por100g: "4,5", porcao: "0,9", vd: "3,6%" },
        { nutriente: "Sódio (mg)", por100g: "891,4", porcao: "178,3", vd: "7,4%" }
      ]
    }
  },
  {
    category: "salgadinhos-milho-40g",
    title: "Milho 40g - Bacon",
    image: "../../assets/produtos/6.png",
    description: "Crocante por fora, saboroso por dentro! Traz o gostinho defumado e envolvente do bacon, perfeito para quem curte um lanche ousado e viciante.",
    nutrition: {
      porcoesPorEmbalagem: "Cerca de 2",
      porcao: "20g (2 xícaras)\n%VD: Valores Diários de referência com base em uma dieta de 2.000 kcal.\n-Valor diário não estabelecido.",
      dados: [
        { nutriente: "Valor energético (kcal)", por100g: "438,8", porcao: "87,8", vd: "4,4%" },
        { nutriente: "Carboidratos (g)", por100g: "76,9", porcao: "15,4", vd: "5,1%" },
        { nutriente: "Açúcares Totais (g)", por100g: "0,1", porcao: "0,0", vd: "--" },
        { nutriente: "Açúcares Adicionado", por100g: "0,0", porcao: "0,0", vd: "--" },
        { nutriente: "Proteínas (g)", por100g: "7,0", porcao: "1,4", vd: "1,9%" },
        { nutriente: "Gorduras Totais (g)", por100g: "10,8", porcao: "2,2", vd: "3,9%" },
        { nutriente: "Gorduras Saturadas (g)", por100g: "1,7", porcao: "0,3", vd: "1,6%" },
        { nutriente: "Gorduras Trans (g)", por100g: "0,0", porcao: "0,0", vd: "0%" },
        { nutriente: "Fibras Alimentares (g)", por100g: "4,5", porcao: "0,9", vd: "3,6%" },
        { nutriente: "Sódio (mg)", por100g: "891,4", porcao: "178,3", vd: "7,4%" }
      ]
    }
  },
  {
    category: "salgadinhos-milho-40g",
    title: "Milho 40g - Pizza",
    image: "../../assets/produtos/13.png",
    description: "Sabor completo que combina queijo, tomate e ervas, lembrando a tradicional pizza de forno.",
    nutrition: {
      porcoesPorEmbalagem: "Cerca de 2",
      porcao: "20g (2 xícaras)\n%VD: Valores Diários de referência com base em uma dieta de 2.000 kcal.\n-Valor diário não estabelecido.",
      dados: [
        { nutriente: "Valor energético (kcal)", por100g: "438,8", porcao: "87,8", vd: "4,4%" },
        { nutriente: "Carboidratos (g)", por100g: "76,9", porcao: "15,4", vd: "5,1%" },
        { nutriente: "Açúcares Totais (g)", por100g: "0,1", porcao: "0,0", vd: "--" },
        { nutriente: "Açúcares Adicionado", por100g: "0,0", porcao: "0,0", vd: "--" },
        { nutriente: "Proteínas (g)", por100g: "7,0", porcao: "1,4", vd: "1,9%" },
        { nutriente: "Gorduras Totais (g)", por100g: "10,8", porcao: "2,2", vd: "3,9%" },
        { nutriente: "Gorduras Saturadas (g)", por100g: "1,7", porcao: "0,3", vd: "1,6%" },
        { nutriente: "Gorduras Trans (g)", por100g: "0,0", porcao: "0,0", vd: "0%" },
        { nutriente: "Fibras Alimentares (g)", por100g: "4,5", porcao: "0,9", vd: "3,6%" },
        { nutriente: "Sódio (mg)", por100g: "891,4", porcao: "178,3", vd: "7,4%" }
      ]
    }
  },
  {
    category: "salgadinhos-milho-40g",
    title: "Milho 40g - Frango",
    image: "../../assets/produtos/14.png",
    description: "Salgadinho de frango com toque especial.",
    nutrition: {
      porcoesPorEmbalagem: "Cerca de 2",
      porcao: "20g (2 xícaras)\n%VD: Valores Diários de referência com base em uma dieta de 2.000 kcal.\n-Valor diário não estabelecido.",
      dados: [
        { nutriente: "Valor energético (kcal)", por100g: "438,8", porcao: "87,8", vd: "4,4%" },
        { nutriente: "Carboidratos (g)", por100g: "76,9", porcao: "15,4", vd: "5,1%" },
        { nutriente: "Açúcares Totais (g)", por100g: "0,1", porcao: "0,0", vd: "--" },
        { nutriente: "Açúcares Adicionado", por100g: "0,0", porcao: "0,0", vd: "--" },
        { nutriente: "Proteínas (g)", por100g: "7,0", porcao: "1,4", vd: "1,9%" },
        { nutriente: "Gorduras Totais (g)", por100g: "10,8", porcao: "2,2", vd: "3,9%" },
        { nutriente: "Gorduras Saturadas (g)", por100g: "1,7", porcao: "0,3", vd: "1,6%" },
        { nutriente: "Gorduras Trans (g)", por100g: "0,0", porcao: "0,0", vd: "0%" },
        { nutriente: "Fibras Alimentares (g)", por100g: "4,5", porcao: "0,9", vd: "3,6%" },
        { nutriente: "Sódio (mg)", por100g: "891,4", porcao: "178,3", vd: "7,4%" }
      ]
    }
  },

  // Salgadinhos de Milho 140g
  {
    category: "salgadinhos-milho-140g",
    title: "Milho 140g - Presunto",
    image: "../../assets/produtos/7.png",
    description: "O sabor que todo mundo reconhece! Um toque suave e salgado, ideal para qualquer hora do dia.",
    nutrition: {
      porcoesPorEmbalagem: "Cerca de 7",
      porcao: "20g (2 xícaras)\n%VD: Valores Diários de referência com base em uma dieta de 2.000 kcal.\n-Valor diário não estabelecido.",
      dados: [
        { nutriente: "Valor energético (kcal)", por100g: "438,8", porcao: "87,8", vd: "4,4%" },
        { nutriente: "Carboidratos (g)", por100g: "76,9", porcao: "15,4", vd: "5,1%" },
        { nutriente: "Açúcares Totais (g)", por100g: "0,1", porcao: "0,0", vd: "--" },
        { nutriente: "Açúcares Adicionado", por100g: "0,0", porcao: "0,0", vd: "--" },
        { nutriente: "Proteínas (g)", por100g: "7,0", porcao: "1,4", vd: "1,9%" },
        { nutriente: "Gorduras Totais (g)", por100g: "10,8", porcao: "2,2", vd: "3,9%" },
        { nutriente: "Gorduras Saturadas (g)", por100g: "1,7", porcao: "0,3", vd: "1,6%" },
        { nutriente: "Gorduras Trans (g)", por100g: "0,0", porcao: "0,0", vd: "0%" },
        { nutriente: "Fibras Alimentares (g)", por100g: "4,5", porcao: "0,9", vd: "3,6%" },
        { nutriente: "Sódio (mg)", por100g: "891,4", porcao: "178,3", vd: "7,4%" }
      ]
    }
  },
  {
    category: "salgadinhos-milho-140g",
    title: "Milho 140g - Cebola",
    image: "../../assets/produtos/8.png",
    description: "Delicado e surpreendente. Levemente adocicado e aromático, o sabor cebola oferece uma experiência leve e cheia de personalidade, com crocância na medida certa.",
    nutrition: {
      porcoesPorEmbalagem: "Cerca de 7",
      porcao: "20g (2 xícaras)\n%VD: Valores Diários de referência com base em uma dieta de 2.000 kcal.\n-Valor diário não estabelecido.",
      dados: [
        { nutriente: "Valor energético (kcal)", por100g: "438,8", porcao: "87,8", vd: "4,4%" },
        { nutriente: "Carboidratos (g)", por100g: "76,9", porcao: "15,4", vd: "5,1%" },
        { nutriente: "Açúcares Totais (g)", por100g: "0,1", porcao: "0,0", vd: "--" },
        { nutriente: "Açúcares Adicionado", por100g: "0,0", porcao: "0,0", vd: "--" },
        { nutriente: "Proteínas (g)", por100g: "7,0", porcao: "1,4", vd: "1,9%" },
        { nutriente: "Gorduras Totais (g)", por100g: "10,8", porcao: "2,2", vd: "3,9%" },
        { nutriente: "Gorduras Saturadas (g)", por100g: "1,7", porcao: "0,3", vd: "1,6%" },
        { nutriente: "Gorduras Trans (g)", por100g: "0,0", porcao: "0,0", vd: "0%" },
        { nutriente: "Fibras Alimentares (g)", por100g: "4,5", porcao: "0,9", vd: "3,6%" },
        { nutriente: "Sódio (mg)", por100g: "891,4", porcao: "178,3", vd: "7,4%" }
      ]
    }
  },
  {
    category: "salgadinhos-milho-140g",
    title: "Milho 140g - Pizza",
    image: "../../assets/produtos/9.png",
    description: "Sabor completo que combina queijo, tomate e ervas, lembrando a tradicional pizza de forno.",
    nutrition: {
      porcoesPorEmbalagem: "Cerca de 7",
      porcao: "20g (2 xícaras)\n%VD: Valores Diários de referência com base em uma dieta de 2.000 kcal.\n-Valor diário não estabelecido.",
      dados: [
        { nutriente: "Valor energético (kcal)", por100g: "438,8", porcao: "87,8", vd: "4,4%" },
        { nutriente: "Carboidratos (g)", por100g: "76,9", porcao: "15,4", vd: "5,1%" },
        { nutriente: "Açúcares Totais (g)", por100g: "0,1", porcao: "0,0", vd: "--" },
        { nutriente: "Açúcares Adicionado", por100g: "0,0", porcao: "0,0", vd: "--" },
        { nutriente: "Proteínas (g)", por100g: "7,0", porcao: "1,4", vd: "1,9%" },
        { nutriente: "Gorduras Totais (g)", por100g: "10,8", porcao: "2,2", vd: "3,9%" },
        { nutriente: "Gorduras Saturadas (g)", por100g: "1,7", porcao: "0,3", vd: "1,6%" },
        { nutriente: "Gorduras Trans (g)", por100g: "0,0", porcao: "0,0", vd: "0%" },
        { nutriente: "Fibras Alimentares (g)", por100g: "4,5", porcao: "0,9", vd: "3,6%" },
        { nutriente: "Sódio (mg)", por100g: "891,4", porcao: "178,3", vd: "7,4%" }
      ]
    }
  },
  {
    category: "salgadinhos-milho-140g",
    title: "Milho 140g - Queijo",
    image: "../../assets/produtos/10.png",
    description: "Um clássico que nunca falha! Combina a cremosidade intensa do queijo com a crocância perfeita. Um sabor marcante e irresistível que agrada em qualquer momento.",
    nutrition: {
      porcoesPorEmbalagem: "Cerca de 7",
      porcao: "20g (2 xícaras)\n%VD: Valores Diários de referência com base em uma dieta de 2.000 kcal.\n-Valor diário não estabelecido.",
      dados: [
        { nutriente: "Valor energético (kcal)", por100g: "438,8", porcao: "87,8", vd: "4,4%" },
        { nutriente: "Carboidratos (g)", por100g: "76,9", porcao: "15,4", vd: "5,1%" },
        { nutriente: "Açúcares Totais (g)", por100g: "0,1", porcao: "0,0", vd: "--" },
        { nutriente: "Açúcares Adicionado", por100g: "0,0", porcao: "0,0", vd: "--" },
        { nutriente: "Proteínas (g)", por100g: "7,0", porcao: "1,4", vd: "1,9%" },
        { nutriente: "Gorduras Totais (g)", por100g: "10,8", porcao: "2,2", vd: "3,9%" },
        { nutriente: "Gorduras Saturadas (g)", por100g: "1,7", porcao: "0,3", vd: "1,6%" },
        { nutriente: "Gorduras Trans (g)", por100g: "0,0", porcao: "0,0", vd: "0%" },
        { nutriente: "Fibras Alimentares (g)", por100g: "4,5", porcao: "0,9", vd: "3,6%" },
        { nutriente: "Sódio (mg)", por100g: "891,4", porcao: "178,3", vd: "7,4%" }
      ]
    }
  },
  {
    category: "salgadinhos-milho-140g",
    title: "Milho 140g - Churrasco",
    image: "../../assets/produtos/11.png",
    description: "Sabor intenso e defumado, com notas que lembram carne grelhada no ponto certo. Para quem quer transformar o lanche em um verdadeiro churrasco em miniatura.",
    nutrition: {
      porcoesPorEmbalagem: "Cerca de 7",
      porcao: "20g (2 xícaras)\n%VD: Valores Diários de referência com base em uma dieta de 2.000 kcal.\n-Valor diário não estabelecido.",
      dados: [
        { nutriente: "Valor energético (kcal)", por100g: "438,8", porcao: "87,8", vd: "4,4%" },
        { nutriente: "Carboidratos (g)", por100g: "76,9", porcao: "15,4", vd: "5,1%" },
        { nutriente: "Açúcares Totais (g)", por100g: "0,1", porcao: "0,0", vd: "--" },
        { nutriente: "Açúcares Adicionado", por100g: "0,0", porcao: "0,0", vd: "--" },
        { nutriente: "Proteínas (g)", por100g: "7,0", porcao: "1,4", vd: "1,9%" },
        { nutriente: "Gorduras Totais (g)", por100g: "10,8", porcao: "2,2", vd: "3,9%" },
        { nutriente: "Gorduras Saturadas (g)", por100g: "1,7", porcao: "0,3", vd: "1,6%" },
        { nutriente: "Gorduras Trans (g)", por100g: "0,0", porcao: "0,0", vd: "0%" },
        { nutriente: "Fibras Alimentares (g)", por100g: "4,5", porcao: "0,9", vd: "3,6%" },
        { nutriente: "Sódio (mg)", por100g: "891,4", porcao: "178,3", vd: "7,4%" }
      ]
    }
  },
  {
    category: "salgadinhos-milho-140g",
    title: "Milho 140g - Bacon",
    image: "../../assets/produtos/27.png",
    description: "Crocante por fora, saboroso por dentro! Traz o gostinho defumado e envolvente do bacon, perfeito para quem curte um lanche ousado e viciante.",
    nutrition: {
      porcoesPorEmbalagem: "Cerca de 7",
      porcao: "20g (2 xícaras)\n%VD: Valores Diários de referência com base em uma dieta de 2.000 kcal.\n-Valor diário não estabelecido.",
      dados: [
        { nutriente: "Valor energético (kcal)", por100g: "438,8", porcao: "87,8", vd: "4,4%" },
        { nutriente: "Carboidratos (g)", por100g: "76,9", porcao: "15,4", vd: "5,1%" },
        { nutriente: "Açúcares Totais (g)", por100g: "0,1", porcao: "0,0", vd: "--" },
        { nutriente: "Açúcares Adicionado", por100g: "0,0", porcao: "0,0", vd: "--" },
        { nutriente: "Proteínas (g)", por100g: "7,0", porcao: "1,4", vd: "1,9%" },
        { nutriente: "Gorduras Totais (g)", por100g: "10,8", porcao: "2,2", vd: "3,9%" },
        { nutriente: "Gorduras Saturadas (g)", por100g: "1,7", porcao: "0,3", vd: "1,6%" },
        { nutriente: "Gorduras Trans (g)", por100g: "0,0", porcao: "0,0", vd: "0%" },
        { nutriente: "Fibras Alimentares (g)", por100g: "4,5", porcao: "0,9", vd: "3,6%" },
        { nutriente: "Sódio (mg)", por100g: "891,4", porcao: "178,3", vd: "7,4%" }
      ]
    }
  },

  // Salgadinhos de Trigo 40g
  {
    category: "salgadinhos-trigo-40g",
    title: "Trigo 40g - Bacon com Ketchup",
    image: "../../assets/produtos/5.png",
    description: "Dois clássicos unidos em um só snack. A pele frita sabor bacon com ketchup é para quem gosta de sabor intenso e cheio de personalidade. O gosto defumado e encorpado do bacon se combina com o toque adocicado e levemente ácido do ketchup, resultando em um petisco marcante, moderno e surpreendente.",
    nutrition: {
      porcoesPorEmbalagem: "2",
      porcao: "20g (2 xícaras)\n%VD: Valores Diários de referência com base em uma dieta de 2.000 kcal.\n-Valor diário não estabelecido.",
      dados: [
        { nutriente: "Valor energético (kcal)", por100g: "405", porcao: "81", vd: "3,2%" },
        { nutriente: "Carboidratos (g)", por100g: "67", porcao: "13,4", vd: "3,6%" },
        { nutriente: "Açúcares Totais (g)", por100g: "2,2", porcao: "0,4", vd: "--" },
        { nutriente: "Açúcares Adicionado", por100g: "0", porcao: "0", vd: "--" },
        { nutriente: "Proteínas (g)", por100g: "7", porcao: "1,4", vd: "2,8%" },
        { nutriente: "Gorduras Totais (g)", por100g: "11", porcao: "2,2", vd: "2,7%" },
        { nutriente: "Gorduras Saturadas (g)", por100g: "2,5", porcao: "0,5", vd: "2%" },
        { nutriente: "Gorduras Trans (g)", por100g: "0", porcao: "0", vd: "--" },
        { nutriente: "Fibras Alimentares (g)", por100g: "2,3", porcao: "0,5", vd: "0,6%" },
        { nutriente: "Sódio (mg)", por100g: "705", porcao: "141", vd: "6,9%" }
      ]
    }
  },
  {
    category: "salgadinhos-trigo-40g",
    title: "Trigo 40g - Costelinha com Limão",
    image: "../../assets/produtos/12.png",
    description: "Sabor intenso de costelinha com toque cítrico.",
    nutrition: {
      porcoesPorEmbalagem: "2",
      porcao: "20g (2 xícaras)\n%VD: Valores Diários de referência com base em uma dieta de 2.000 kcal.\n-Valor diário não estabelecido.",
      dados: [
        { nutriente: "Valor energético (kcal)", por100g: "405", porcao: "81", vd: "3,2%" },
        { nutriente: "Carboidratos (g)", por100g: "67", porcao: "13,4", vd: "3,6%" },
        { nutriente: "Açúcares Totais (g)", por100g: "2,2", porcao: "0,4", vd: "--" },
        { nutriente: "Açúcares Adicionado", por100g: "0", porcao: "0", vd: "--" },
        { nutriente: "Proteínas (g)", por100g: "7", porcao: "1,4", vd: "2,8%" },
        { nutriente: "Gorduras Totais (g)", por100g: "11", porcao: "2,2", vd: "2,7%" },
        { nutriente: "Gorduras Saturadas (g)", por100g: "2,5", porcao: "0,5", vd: "2%" },
        { nutriente: "Gorduras Trans (g)", por100g: "0", porcao: "0", vd: "--" },
        { nutriente: "Fibras Alimentares (g)", por100g: "2,3", porcao: "0,5", vd: "0,6%" },
        { nutriente: "Sódio (mg)", por100g: "705", porcao: "141", vd: "6,9%" }
      ]
    }
  },
  {
    category: "salgadinhos-trigo-40g",
    title: "Trigo 40g - Bacon",
    image: "../../assets/produtos/28.png",
    description: "Clássico, irresistível e com gostinho de quero mais. O sabor bacon é encorpado e defumado na medida certa, remetendo àquele bacon crocante e suculento que todos amam.",
    nutrition: {
      porcoesPorEmbalagem: "2",
      porcao: "20g (2 xícaras)\n%VD: Valores Diários de referência com base em uma dieta de 2.000 kcal.\n-Valor diário não estabelecido.",
      dados: [
        { nutriente: "Valor energético (kcal)", por100g: "405", porcao: "81", vd: "3,2%" },
        { nutriente: "Carboidratos (g)", por100g: "67", porcao: "13,4", vd: "3,6%" },
        { nutriente: "Açúcares Totais (g)", por100g: "2,2", porcao: "0,4", vd: "--" },
        { nutriente: "Açúcares Adicionado", por100g: "0", porcao: "0", vd: "--" },
        { nutriente: "Proteínas (g)", por100g: "7", porcao: "1,4", vd: "2,8%" },
        { nutriente: "Gorduras Totais (g)", por100g: "11", porcao: "2,2", vd: "2,7%" },
        { nutriente: "Gorduras Saturadas (g)", por100g: "2,5", porcao: "0,5", vd: "2%" },
        { nutriente: "Gorduras Trans (g)", por100g: "0", porcao: "0", vd: "--" },
        { nutriente: "Fibras Alimentares (g)", por100g: "2,3", porcao: "0,5", vd: "0,6%" },
        { nutriente: "Sódio (mg)", por100g: "705", porcao: "141", vd: "6,9%" }
      ]
    }
  },

  // Salgadinhos de Trigo 70g
  {
    category: "salgadinhos-trigo-70g",
    title: "Trigo 70g - Bacon",
    image: "../../assets/produtos/19.png",
    description: "Crocante e cheio de sabor! O salgadinho de trigo sabor bacon tem aquele gosto marcante que conquista logo na primeira mordida. Um lanche perfeito para qualquer momento.",
    nutrition: {
      porcoesPorEmbalagem: "Cerca de 4",
      porcao: "20g (2 xícaras)\n%VD: Valores Diários de referência com base em uma dieta de 2.000 kcal.\n-Valor diário não estabelecido.",
      dados: [
        { nutriente: "Valor energético (kcal)", por100g: "405", porcao: "81", vd: "3,2%" },
        { nutriente: "Carboidratos (g)", por100g: "67", porcao: "13,4", vd: "3,6%" },
        { nutriente: "Açúcares Totais (g)", por100g: "2,2", porcao: "0,4", vd: "--" },
        { nutriente: "Açúcares Adicionado", por100g: "0", porcao: "0", vd: "--" },
        { nutriente: "Proteínas (g)", por100g: "7", porcao: "1,4", vd: "2,8%" },
        { nutriente: "Gorduras Totais (g)", por100g: "11", porcao: "2,2", vd: "2,7%" },
        { nutriente: "Gorduras Saturadas (g)", por100g: "2,5", porcao: "0,5", vd: "2%" },
        { nutriente: "Gorduras Trans (g)", por100g: "0", porcao: "0", vd: "--" },
        { nutriente: "Fibras Alimentares (g)", por100g: "2,3", porcao: "0,5", vd: "0,6%" },
        { nutriente: "Sódio (mg)", por100g: "705", porcao: "141", vd: "6,9%" }
      ]
    }
  },
  {
    category: "salgadinhos-trigo-70g",
    title: "Trigo 70g - Costela no Bafo",
    image: "../../assets/produtos/15.png",
    description: "Com notas suculentas e defumadas, o salgadinho de trigo sabor costela no bafo traz a experiência da carne macia e bem temperada direto para o seu lanche.",
    nutrition: {
      porcoesPorEmbalagem: "Cerca de 4",
      porcao: "20g (2 xícaras)\n%VD: Valores Diários de referência com base em uma dieta de 2.000 kcal.\n-Valor diário não estabelecido.",
      dados: [
        { nutriente: "Valor energético (kcal)", por100g: "405", porcao: "81", vd: "3,2%" },
        { nutriente: "Carboidratos (g)", por100g: "67", porcao: "13,4", vd: "3,6%" },
        { nutriente: "Açúcares Totais (g)", por100g: "2,2", porcao: "0,4", vd: "--" },
        { nutriente: "Açúcares Adicionado", por100g: "0", porcao: "0", vd: "--" },
        { nutriente: "Proteínas (g)", por100g: "7", porcao: "1,4", vd: "2,8%" },
        { nutriente: "Gorduras Totais (g)", por100g: "11", porcao: "2,2", vd: "2,7%" },
        { nutriente: "Gorduras Saturadas (g)", por100g: "2,5", porcao: "0,5", vd: "2%" },
        { nutriente: "Gorduras Trans (g)", por100g: "0", porcao: "0", vd: "--" },
        { nutriente: "Fibras Alimentares (g)", por100g: "2,3", porcao: "0,5", vd: "0,6%" },
        { nutriente: "Sódio (mg)", por100g: "705", porcao: "141", vd: "6,9%" }
      ]
    }
  },

  //trigos novos
  {
    category: "salgadinhos-trigo-70g",
    title: "Trigo 70g - Picanha",
    image: "../../assets/produtos/20.png",
    description: "Sinta o sabor da brasa em cada mordida. Nosso salgadinho de trigo sabor picanha traz o aroma e o gosto marcante da carne assada na churrasqueira, com um toque levemente defumado que remete ao churrasco de domingo.",
    nutrition: {
      porcoesPorEmbalagem: "Cerca de 4",
      porcao: "25g (2 xícaras)\n%VD: Valores Diários de referência com base em uma dieta de 2.000 kcal.\n-Valor diário não estabelecido.",
      dados: [
        { nutriente: "Valor energético (kcal)", por100g: "523,6", porcao: "130,9", vd: "7%" },
        { nutriente: "Carboidratos (g)", por100g: "52,0", porcao: "13,0", vd: "4%" },
        { nutriente: "Açúcares Totais (g)", por100g: "52,0", porcao: "13,0", vd: "--" },
        { nutriente: "Açúcares Adicionado", por100g: "0", porcao: "0", vd: "--" },
        { nutriente: "Proteínas (g)", por100g: "9,6", porcao: "2,4", vd: "5%" },
        { nutriente: "Gorduras Totais (g)", por100g: "29,2", porcao: "7,3", vd: "13%" },
        { nutriente: "Gorduras Saturadas (g)", por100g: "8,0", porcao: "2,0", vd: "10%" },
        { nutriente: "Gorduras Trans (g)", por100g: "0", porcao: "0", vd: "--" },
        { nutriente: "Fibras Alimentares (g)", por100g: "2,8", porcao: "0,7", vd: "3%" },
        { nutriente: "Sódio (mg)", por100g: "1360", porcao: "340", vd: "14%" }
      ]
    }
  },
  {
    category: "salgadinhos-trigo-70g",
    title: "Trigo 70g - Costelinha com Limão",
    image: "../../assets/produtos/21.png",
    description: "A combinação ideal entre sabor marcante e refrescância. O sabor costelinha com limão entrega a intensidade da carne suína bem temperada, com o equilíbrio ácido e cítrico do limão.",
    nutrition: {
      porcoesPorEmbalagem: "Cerca de 4",
      porcao: "25g (2 xícaras)\n%VD: Valores Diários de referência com base em uma dieta de 2.000 kcal.\n-Valor diário não estabelecido.",
      dados: [
        { nutriente: "Valor energético (kcal)", por100g: "523,6", porcao: "130,9", vd: "7%" },
        { nutriente: "Carboidratos (g)", por100g: "52,0", porcao: "13,0", vd: "4%" },
        { nutriente: "Açúcares Totais (g)", por100g: "52,0", porcao: "13,0", vd: "--" },
        { nutriente: "Açúcares Adicionado", por100g: "0", porcao: "0", vd: "--" },
        { nutriente: "Proteínas (g)", por100g: "9,6", porcao: "2,4", vd: "5%" },
        { nutriente: "Gorduras Totais (g)", por100g: "29,2", porcao: "7,3", vd: "13%" },
        { nutriente: "Gorduras Saturadas (g)", por100g: "8,0", porcao: "2,0", vd: "10%" },
        { nutriente: "Gorduras Trans (g)", por100g: "0", porcao: "0", vd: "--" },
        { nutriente: "Fibras Alimentares (g)", por100g: "2,8", porcao: "0,7", vd: "3%" },
        { nutriente: "Sódio (mg)", por100g: "1360", porcao: "340", vd: "14%" }
      ]
    }
  },
  {
    category: "salgadinhos-trigo-70g",
    title: "Trigo 70g - Bacon",
    image: "../../assets/produtos/23.png",
    description: "Clássico, irresistível e com gostinho de quero mais. O sabor bacon é encorpado e defumado na medida certa, remetendo àquele bacon crocante e suculento que todos amam.",
    nutrition: {
      porcoesPorEmbalagem: "Cerca de 4",
      porcao: "25g (2 xícaras)\n%VD: Valores Diários de referência com base em uma dieta de 2.000 kcal.\n-Valor diário não estabelecido.",
      dados: [
        { nutriente: "Valor energético (kcal)", por100g: "523,6", porcao: "130,9", vd: "7%" },
        { nutriente: "Carboidratos (g)", por100g: "52,0", porcao: "13,0", vd: "4%" },
        { nutriente: "Açúcares Totais (g)", por100g: "52,0", porcao: "13,0", vd: "--" },
        { nutriente: "Açúcares Adicionado", por100g: "0", porcao: "0", vd: "--" },
        { nutriente: "Proteínas (g)", por100g: "9,6", porcao: "2,4", vd: "5%" },
        { nutriente: "Gorduras Totais (g)", por100g: "29,2", porcao: "7,3", vd: "13%" },
        { nutriente: "Gorduras Saturadas (g)", por100g: "8,0", porcao: "2,0", vd: "10%" },
        { nutriente: "Gorduras Trans (g)", por100g: "0", porcao: "0", vd: "--" },
        { nutriente: "Fibras Alimentares (g)", por100g: "2,8", porcao: "0,7", vd: "3%" },
        { nutriente: "Sódio (mg)", por100g: "1360", porcao: "340", vd: "14%" }
      ]
    }
  },
  {
    category: "salgadinhos-trigo-70g",
    title: "Trigo 70g - Pimenta",
    image: "../../assets/produtos/24.png",
    description: "Para os amantes de um toque picante. O sabor pimenta traz um ardor suave, que realça o sabor sem exagerar, equilibrado com notas intensas e marcantes. Uma explosão de sabor na medida certa, com crocância garantida e um toque apimentado que aquece o paladar. ",
    nutrition: {
      porcoesPorEmbalagem: "Cerca de 4",
      porcao: "25g (2 xícaras)\n%VD: Valores Diários de referência com base em uma dieta de 2.000 kcal.\n-Valor diário não estabelecido.",
      dados: [
        { nutriente: "Valor energético (kcal)", por100g: "523,6", porcao: "130,9", vd: "7%" },
        { nutriente: "Carboidratos (g)", por100g: "52,0", porcao: "13,0", vd: "4%" },
        { nutriente: "Açúcares Totais (g)", por100g: "52,0", porcao: "13,0", vd: "--" },
        { nutriente: "Açúcares Adicionado", por100g: "0", porcao: "0", vd: "--" },
        { nutriente: "Proteínas (g)", por100g: "9,6", porcao: "2,4", vd: "5%" },
        { nutriente: "Gorduras Totais (g)", por100g: "29,2", porcao: "7,3", vd: "13%" },
        { nutriente: "Gorduras Saturadas (g)", por100g: "8,0", porcao: "2,0", vd: "10%" },
        { nutriente: "Gorduras Trans (g)", por100g: "0", porcao: "0", vd: "--" },
        { nutriente: "Fibras Alimentares (g)", por100g: "2,8", porcao: "0,7", vd: "3%" },
        { nutriente: "Sódio (mg)", por100g: "1360", porcao: "340", vd: "14%" }
      ]
    }
  },
  {
    category: "salgadinhos-trigo-70g",
    title: "Trigo 70g - Cebola",
    image: "../../assets/produtos/22.png",
    description: "Suave, aromático e cheio de sabor. O salgadinho de trigo frito sabor cebola conquista pelo equilíbrio: nem doce, nem forte demais, com o tempero natural da cebola na medida certa.",
    nutrition: {
      porcoesPorEmbalagem: "Cerca de 4",
      porcao: "25g (2 xícaras)\n%VD: Valores Diários de referência com base em uma dieta de 2.000 kcal.\n-Valor diário não estabelecido.",
      dados: [
        { nutriente: "Valor energético (kcal)", por100g: "523,6", porcao: "130,9", vd: "7%" },
        { nutriente: "Carboidratos (g)", por100g: "52,0", porcao: "13,0", vd: "4%" },
        { nutriente: "Açúcares Totais (g)", por100g: "52,0", porcao: "13,0", vd: "--" },
        { nutriente: "Açúcares Adicionado", por100g: "0", porcao: "0", vd: "--" },
        { nutriente: "Proteínas (g)", por100g: "9,6", porcao: "2,4", vd: "5%" },
        { nutriente: "Gorduras Totais (g)", por100g: "29,2", porcao: "7,3", vd: "13%" },
        { nutriente: "Gorduras Saturadas (g)", por100g: "8,0", porcao: "2,0", vd: "10%" },
        { nutriente: "Gorduras Trans (g)", por100g: "0", porcao: "0", vd: "--" },
        { nutriente: "Fibras Alimentares (g)", por100g: "2,8", porcao: "0,7", vd: "3%" },
        { nutriente: "Sódio (mg)", por100g: "1360", porcao: "340", vd: "14%" }
      ]
    }
  },


  // Sequilhos
  {
    category: "sequilhos-160g",
    title: "Sequilhos Delicel 160g",
    image: "../../assets/produtos/16.png",
    description: "Sequilhos crocantes e leves, 160g.",
    nutrition: {
      porcoesPorEmbalagem: "8",
      porcao: "20g (7 unidades)\n%VD: Valores Diários de referência com base em uma dieta de 2.000 kcal.\n-Valor diário não estabelecido.",
      dados: [
        { nutriente: "Valor energético (kcal)", por100g: "513,3", porcao: "102,7", vd: "5,1%" },
        { nutriente: "Carboidratos (g)", por100g: "103,3", porcao: "20,7", vd: "6,9%" },
        { nutriente: "Açúcares Totais (g)", por100g: "25,3", porcao: "5,1", vd: "--" },
        { nutriente: "Açúcares Adicionado", por100g: "25,3", porcao: "5,1", vd: "--" },
        { nutriente: "Proteínas (g)", por100g: "2,7", porcao: "0,5", vd: "0,7%" },
        { nutriente: "Gorduras Totais (g)", por100g: "10,0", porcao: "2,0", vd: "3,6%" },
        { nutriente: "Gorduras Saturadas (g)", por100g: "3,3", porcao: "0,7", vd: "3,0%" },
        { nutriente: "Gorduras Trans (g)", por100g: "0", porcao: "0", vd: "0%" },
        { nutriente: "Fibras Alimentares (g)", por100g: "0", porcao: "0", vd: "0%" },
        { nutriente: "Sódio (mg)", por100g: "0", porcao: "0", vd: "0%" }
      ]
    }
  },

  // Biscoito de Polvilho
  {
    category: "biscoito-polvilho",
    title: "Biscoito de Polvilho 70g",
    image: "../../assets/produtos/17.png",
    description: "Biscoito de polvilho tradicional, leve e crocante.",
    nutrition: {
      porcoesPorEmbalagem: "Cerca de 3",
      porcao: "30g (15 unidades)\n%VD: Valores Diários de referência com base em uma dieta de 2.000 kcal.\n-Valor diário não estabelecido.",
      dados: [
        { nutriente: "Valor energético (kcal)", por100g: "467", porcao: "141", vd: "7%" },
        { nutriente: "Carboidratos (g)", por100g: "80", porcao: "24", vd: "8%" },
        { nutriente: "Açúcares Totais (g)", por100g: "0,7", porcao: "0,2", vd: "--" },
        { nutriente: "Açúcares Adicionado", por100g: "0,0", porcao: "0,0", vd: "0%" },
        { nutriente: "Proteínas (g)", por100g: "0,8", porcao: "0,2", vd: "0%" },
        { nutriente: "Gorduras Totais (g)", por100g: "16", porcao: "4,9", vd: "8%" },
        { nutriente: "Gorduras Saturadas (g)", por100g: "13", porcao: "3,8", vd: "19%" },
        { nutriente: "Gorduras Trans (g)", por100g: "0", porcao: "0", vd: "0%" },
        { nutriente: "Fibras Alimentares (g)", por100g: "1", porcao: "0,3", vd: "1%" },
        { nutriente: "Sódio (mg)", por100g: "1025", porcao: "307", vd: "15%" }
      ]
    }
  },
  {
    category: "biscoito-polvilho",
    title: "Biscoito de Polvilho 100g",
    image: "../../assets/produtos/18.png",
    description: "Versão maior do biscoito de polvilho.",
    nutrition: {
      porcoesPorEmbalagem: "Cerca de 4",
      porcao: "30g (15 unidades)\n%VD: Valores Diários de referência com base em uma dieta de 2.000 kcal.\n-Valor diário não estabelecido.",
      dados: [
        { nutriente: "Valor energético (kcal)", por100g: "467", porcao: "141", vd: "7%" },
        { nutriente: "Carboidratos (g)", por100g: "80", porcao: "24", vd: "8%" },
        { nutriente: "Açúcares Totais (g)", por100g: "0,7", porcao: "0,2", vd: "--" },
        { nutriente: "Açúcares Adicionado", por100g: "0,0", porcao: "0,0", vd: "0%" },
        { nutriente: "Proteínas (g)", por100g: "0,8", porcao: "0,2", vd: "0%" },
        { nutriente: "Gorduras Totais (g)", por100g: "16", porcao: "4,9", vd: "8%" },
        { nutriente: "Gorduras Saturadas (g)", por100g: "13", porcao: "3,8", vd: "19%" },
        { nutriente: "Gorduras Trans (g)", por100g: "0", porcao: "0", vd: "0%" },
        { nutriente: "Fibras Alimentares (g)", por100g: "1", porcao: "0,3", vd: "1%" },
        { nutriente: "Sódio (mg)", por100g: "1025", porcao: "307", vd: "15%" }
      ]
    }
  },

  //suspiros
  {
    category: "suspiros",
    title: "Suspiro Tradicional 80g",
    image: "../../assets/produtos/25.jpg",
    description: "Clássico, leve e apaixonante. Nosso suspiro tradicional é feito com claras em neve e açúcar refinado, assado lentamente até atingir a crocância perfeita. Sem corantes ou aromatizantes, ele preserva o sabor natural dos ingredientes, resultando em um doce delicado que derrete na boca.",
    nutrition: {
      porcoesPorEmbalagem: "Cerca de 3",
      porcao: "25g (13 unidades)\n%VD: Valores Diários de referência com base em uma dieta de 2.000 kcal.\n-Valor diário não estabelecido.",
      dados: [
        { nutriente: "Valor energético (kcal)", por100g: "374", porcao: "92", vd: "5%" },
        { nutriente: "Carboidratos (g)", por100g: "89", porcao: "22", vd: "7%" },
        { nutriente: "Açúcares Totais (g)", por100g: "89", porcao: "22", vd: "--" },
        { nutriente: "Açúcares Adicionado", por100g: "89", porcao: "22", vd: "44%" },
        { nutriente: "Proteínas (g)", por100g: "4,5", porcao: "1,1", vd: "2%" },
        { nutriente: "Gorduras Totais (g)", por100g: "0", porcao: "0", vd: "0%" },
        { nutriente: "Gorduras Saturadas (g)", por100g: "0", porcao: "0", vd: "0%" },
        { nutriente: "Gorduras Trans (g)", por100g: "0", porcao: "0", vd: "0%" },
        { nutriente: "Fibras Alimentares (g)", por100g: "0", porcao: "0", vd: "0%" },
        { nutriente: "Sódio (mg)", por100g: "59", porcao: "15", vd: "1%" }
      ]
    }
  },
  {
    category: "suspiros",
    title: "Suspiro sabor Coco 80g",
    image: "../../assets/produtos/26.jpg",
    description: "O toque tropical que conquista. Feito com a mesma base do suspiro tradicional, o suspiro de coco ganha uma nova camada de sabor de coco adicionados à massa. O resultado? Um doce leve, crocante e com um aroma irresistível que remete ao sabor natural do coco fresco",
    nutrition: {
      porcoesPorEmbalagem: "Cerca de 3",
      porcao: "25g (13 unidades)\n%VD: Valores Diários de referência com base em uma dieta de 2.000 kcal.\n-Valor diário não estabelecido.",
      dados: [
        { nutriente: "Valor energético (kcal)", por100g: "374", porcao: "92", vd: "5%" },
        { nutriente: "Carboidratos (g)", por100g: "89", porcao: "22", vd: "7%" },
        { nutriente: "Açúcares Totais (g)", por100g: "89", porcao: "22", vd: "--" },
        { nutriente: "Açúcares Adicionado", por100g: "89", porcao: "22", vd: "44%" },
        { nutriente: "Proteínas (g)", por100g: "4,5", porcao: "1,1", vd: "2%" },
        { nutriente: "Gorduras Totais (g)", por100g: "0", porcao: "0", vd: "0%" },
        { nutriente: "Gorduras Saturadas (g)", por100g: "0", porcao: "0", vd: "0%" },
        { nutriente: "Gorduras Trans (g)", por100g: "0", porcao: "0", vd: "0%" },
        { nutriente: "Fibras Alimentares (g)", por100g: "0", porcao: "0", vd: "0%" },
        { nutriente: "Sódio (mg)", por100g: "59", porcao: "15", vd: "1%" }
      ]
    }
  },




];

const productList = document.querySelector('.product-list');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.querySelector('.product-modal');
const modalContent = modal.querySelector('.modal-content');
const closeModal = modal.querySelector('.close-modal');

function renderProducts(category = 'all') {
  productList.innerHTML = '';

  const filtered = products.filter(
    product => category === 'all' || product.category === category
  );

  filtered.forEach(product => {
    const item = document.createElement('div');
    item.classList.add('product-item');

    const isSalgadinho = product.category.startsWith('salgadinhos');
    const [tipoPeso = '', sabor = ''] = product.title.split(' - ');
    const [tipo = '', peso = ''] = tipoPeso.split(' ');

    let nomeProduto = '';
    let pesoProduto = '';

    if (isSalgadinho) {
      nomeProduto = `Salgadinho sabor ${sabor}`;
      pesoProduto = peso;
    } else {
      nomeProduto = product.title.replace(/\s\d+g/, '');
      pesoProduto = product.title.match(/\d+g/)?.[0] || '';
    }

    item.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${nomeProduto}</h3>
      <p>${pesoProduto}</p>
    `;

    item.addEventListener('click', () => showProductDetails(product));
    productList.appendChild(item);
  });
}

function showProductDetails(product) {
  modal.querySelector('.modal-image').src = product.image;
  modal.querySelector('.modal-image').alt = product.title;

  const [tipoPeso = '', sabor = ''] = product.title.split(' - ');
  const palavras = tipoPeso.split(' ');
  const peso = palavras.pop();
  const tipo = palavras.join(' ');

  if (product.category.startsWith('salgadinhos')) {
    modal.querySelector('.modal-title').textContent = `Salgadinho de ${tipo}`;
    modal.querySelector('.modal-subtitle').textContent = `Sabor ${sabor}`;
  } else {
    modal.querySelector('.modal-title').textContent = product.title;
    modal.querySelector('.modal-subtitle').textContent = '';
  }
  modal.querySelector('.modal-weight').textContent = peso;

  // Descrição
  modal.querySelector('.description').textContent = product.description || '';

  // Tabela nutricional
  const table = modal.querySelector('.nutrition-table');
  table.innerHTML = '';

  const caption = document.createElement('caption');
  caption.innerHTML = `
    <strong>Porções por embalagem:</strong> ${product.nutrition.porcoesPorEmbalagem} <br>
    <strong>Porção:</strong> ${product.nutrition.porcao}
  `;
  table.appendChild(caption);

  const thead = document.createElement('thead');
  thead.innerHTML = `
    <tr>
      <th>Nutriente</th>
      <th>Por 100g</th>
      <th>Por porção</th>
      <th>%VD*</th>
    </tr>
  `;
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  product.nutrition.dados.forEach(nutriente => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${nutriente.nutriente}</td>
      <td>${nutriente.por100g}</td>
      <td>${nutriente.porcao}</td>
      <td>${nutriente.vd}</td>
    `;
    tbody.appendChild(row);
  });
  table.appendChild(tbody);

  // Ingredientes
  modal.querySelector('.ingredients').textContent = product.ingredients
    ? `Ingredientes: ${product.ingredients}`
    : '';

  modal.style.display = 'block';
}

// Eventos dos botões de filtro
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    renderProducts(button.dataset.category);
  });
});

// Fechar modal
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});
modal.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none';
});

// Inicialização
renderProducts();