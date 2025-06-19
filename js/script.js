// Dados das questões para cada tema
const questionsData = {
    theme1: [
        {
            title: "QUESTÃO 1",
            description: "Qual o quociente da divisão inteira de 740 por 7?",
            alternatives: [
                "5",
                "7", 
                "15",
                "105",
                "115"
            ],
            correct: "D",
            explanation: `A alternativa correta é a alternativa D.<br>
<img src="images/T1-Q01.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 2",
            description: "Qual o resto da divisão inteira de 65 por 7?",
            alternatives: [
                "2",
                "3",
                "5", 
                "7",
                "9"
            ],
            correct: "A",
            explanation: `A alternativa correta é a alternativa A.<br>
<img src="images/T1-Q02.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 3",
            description: "Qual o quociente da divisão inteira de 64 por 6?",
            alternatives: [
                "1",
                "4",
                "10",
                "16",
                "100"
            ],
            correct: "C",
            explanation: `A alternativa correta é a alternativa C.<br>
<img src="images/T1-Q03.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 4",
            description: "Qual o quociente da divisão de 824 por 4?",
            alternatives: [
                "26",
                "102",
                "206",
                "251",
                "412"
            ],
            correct: "C",
            explanation: `A alternativa correta é a alternativa C.<br>
<img src="images/T1-Q04.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 5",
            description: "Qual a soma entre o divisor e o resto da divisão de 111 por 11?",
            alternatives: [
                "1",
                "10",
                "11",
                "12",
                "21"
            ],
            correct: "D",
            explanation: `A alternativa correta é a alternativa D.<br>
<img src="images/T1-Q05.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 6",
            description: " A divisão entre 105 por 7 é exata? Se sim, qual o quociente dessa divisão?",
            alternatives: [
                "Sim, e o quociente é 8",
                "Sim, e o quociente é 15",
                "Sim, e o quociente é 51",
                "Sim, e o quociente é 105",
                "Não é exata"
            ],
            correct: "B",
            explanation: `A alternativa correta é a alternativa B.<br>
<img src="images/T1-Q06.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 7",
            description: "Qual o quociente da divisão exata de 932 por 40?",
            alternatives: [
                "2,33",
                "23,3",
                "233",
                "2033",
                "2330"
            ],
            correct: "B",
            explanation: `A alternativa correta é a alternativa B.<br>
<img src="images/T1-Q07.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 8",
            description: "Qual o quociente da divisão exata de 396 por 8?",
            alternatives: [
                "44",
                "45,7",
                "47",
                "49,5",
                "52"
            ],
            correct: "D",
            explanation: `A alternativa correta é a alternativa D.<br>
<img src="images/T1-Q08.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 9",
            description: "Qual o divisor da divisão exata de 237 por 7?",
            alternatives: [
                "7",
                "33,85",
                "33,86",
                "34",
                "237"
            ],
            correct: "A",
            explanation: `A alternativa correta é a alternativa A.<br>
<img src="images/T1-Q09.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 10",
            description: "Qual o quociente da divisão exata de 40,1 por 5?",
            alternatives: [
                "8,02",
                "8,2",
                "8,22",
                "80",
                "82"
            ],
            correct: "A",
            explanation: `A alternativa correta é a alternativa A.<br>
<img src="images/T1-Q10.png"
style="max-width:100%; height:auto;">`
        }
    ],
    theme2: [
        {
            title: "QUESTÃO 1",
            description: `Avalie com V para verdadeiro e F para falso se os números a seguir são primos.<br><br>( ) 3<br>( ) 15<br>( ) 17<br>( ) 9<br><br>A alternativa que avalia corretamente os números acima é:`,
            alternatives: [
                "V, F, V, F",
                "F, V, F, V", 
                "V, V, V, F",
                "V, F, V, V",
                "F, F, V, V"
            ],
            correct: "A",
            explanation: `A alternativa correta é a alternativa A.<br>
<img src="images/T2-Q01.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 2",
            description: `Avalie com V para verdadeiro e F para falso as afirmações a seguir.
O número 1260 é divisível por:<br><br>
( ) 2, porque ele é par;<br><br>
( ) 3, porque a soma se seus algarismos é um múltiplo de 3;<br><br>
( ) 5, porque termina em 0 ou 5;<br><br>
( ) 7, porque a subtração entre o número sem o último algarismo e o dobro do último algarismo é um múltiplo de 7.<br><br>
A alternativa que avalia corretamente as afirmações acima é:
`,
            alternatives: [
                "V, F, V, V",
                "V, ,V, V, F",
                "F, V, V, V", 
                "V, F, V, F",
                "V, V, V, V"
            ],
            correct: "E",
            explanation: `A alternativa correta é a alternativa E.<br>
<img src="images/T2-Q02.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 3",
            description: `Assinale a alternativa que completa corretamente a frase abaixo.<br>
O número 2... 
`,
            alternatives: [
                "Não é primo pois é par.",
                "Não é primo pois é múltiplo de 1.",
                "Não é primo pois é divisível por 2.",
                "É primo, apesar de ser par, pois se encaixa na definição de ser divisível apenas por 1 e por ele mesmo.",
                "É primo, pois é múltiplo de 1."
            ],
            correct: "D",
            explanation: `A alternativa correta é a alternativa D.<br>
<img src="images/T2-Q03.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 4",
            description: `Avalie com V para verdadeiro e F para falso as afirmações a seguir.<br>
O número 540 é divisível por:<br>
( ) 2, porque ele é par;<br>
( ) 3, porque a soma se seus algarismos é um múltiplo de 3;<br>
( ) 5, porque termina em 0 ou 5;<br>
( ) 7, porque a subtração entre o número sem o último algarismo e o dobro do último algarismo é um múltiplo de 7.<br>
A alternativa que avalia corretamente as afirmações acima é:
`,
            alternatives: [
                "V, V, F, V",
                "V, V ,V ,V",
                "V, F, F, F",
                "V, V, V, F",
                "F, V, V, V"
            ],
            correct: "D",
            explanation: `A alternativa correta é a alternativa D.<br>
<img src="images/T2-Q04.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 5",
            description: "Assinale a alternativa correta a seguir.",
            alternatives: [
                "O número 9 é primo pois é divisível apenas por 1 e por 3, que também é primo.",
                "O número 27 é primo pois todo número terminado em 7 é primo.",
                "O número 1570 é múltiplo de 2 e de 5 pois termina em 0.",
                "O número 1 é primo pois é divisível apenas por 1 e por ele mesmo.",
                "Um número é divisível por 6 se for par e o último dígito for múltiplo de 3."
            ],
            correct: "C",
            explanation: `A alternativa correta é a alternativa C.<br>
<img src="images/T2-Q05.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 6",
            description: "Podemos dizer que um número é divisível por 2 quando esse número:",
            alternatives: [
                "é múltiplo de 4",
                "pode ser dividido por 10",
                "termina em 0, 2, 4, 6 ou 8",
                "termina em 1, 3, 5, 7 ou 9",
                "produz um resto diferente de 0 na divisão por 2"
            ],
            correct: "C",
            explanation: `A alternativa correta é a alternativa C.<br>
<img src="images/T2-Q06.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 7",
            description: "Podemos dizer que um número é divisível por 3 se:",
            alternatives: [
                "a soma de seus algarismos é um múltiplo de 3",
                "o número termina em 3, 6 ou 9",
                "o número é ímpar",
                "a subtração entre o número sem o último algarismo e o dobro do último algarismo é um múltiplo de 3",
                "o produto entre seus algarismos é um múltiplo de 3"
            ],
            correct: "A",
            explanation: `A alternativa correta é a alternativa A.<br>
<img src="images/T2-Q07.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 8",
            description: "Quando um número é múltiplo de 5, podemos afirmar com certeza que esse número:",
            alternatives: [
                "é ímpar",
                "tem pelo menos 2 algarismos",
                "é divisível por múltiplos de 5",
                "tem a soma de seus algarismos igual a um múltiplo de 5",
                "termina em 0 ou 5"
            ],
            correct: "E",
            explanation: `A alternativa correta é a alternativa E.<br>
<img src="images/T2-Q08.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 9",
            description: "Para verificar se um número é múltiplo de 7, precisamos:",
            alternatives: [
                "observar se o último algarismo é 7, 4, 1, 8 ou 5",
                "somar os algarismos e verificar se o resultado é divisível por 7",
                "somar o último algarismo com o dobro do número sem o último algarismo, e verificar se o resultado é divisível por 7",
                "subtrair o número sem o último algarismo pelo dobro do último algarismo, e verificar se o resultado é divisível por 7",
                "observar se o dobro do último algarismo é divisível por 7"
            ],
            correct: "D",
            explanation: `A alternativa correta é a alternativa D.<br>
<img src="images/T2-Q09.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 10",
            description: "O Crivo de Eratóstenes é uma forma simples e visual de identificar se determinado número é primo, ou quais são os números primos menores que determinado número. Para isso, começamos listando os números naturais a partir do 1 e até o número que queremos verificar, geralmente pulando de linha a cada 10 números. Após escrita a lista, devemos:",
            alternatives: [
                "riscar todo número que é divisor de algum número maior que ele",
                "riscar todos os múltiplos de 2, 3, 5 e 7",
                "riscar todos os números pares",
                "riscar todos os múltiplos do número que estamos analisando",
                "riscar todo número que é divisível por algum número anterior a ele (exceto por 1)"
            ],
            correct: "E",
            explanation: `A alternativa correta é a alternativa E.<br>
<img src="images/T2-Q10.png"
style="max-width:100%; height:auto;">`
        }
    ],
    theme3: [
        {
            title: "QUESTÃO 1",
            description: "Quais são os fatores de 64?",
            alternatives: [
                "2<sup>5</sup>",
                "2<sup>6</sup>", 
                "2<sup>7</sup>",
                "2<sup>6</sup> * 3",
                "6<sup>5</sup>"
            ],
            correct: "B",
            explanation: `A alternativa correta é a alternativa B.<br>
<img src="images/T3-Q01.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 2",
            description: "Fatore o número 48 e assinale a alternativa com seus fatores.",
            alternatives: [
                "2<sup>4</sup>",
                "2<sup>4</sup> * 3", 
                "2<sup>4</sup> * 3<sup>2</sup>",
                "2<sup>12</sup>",
                "6<sup>4</sup>"
            ],
            correct: "B",
            explanation: `A alternativa correta é a alternativa B.<br>
<img src="images/T3-Q02.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 3",
            description: "Assinale a alternativa que contém os fatores de 144.",
            alternatives: [
                "2<sup>12</sup>",
                "2<sup>2</sup> * 3<sup>4</sup>",
                "2<sup>4</sup> * 3<sup>2</sup>",
                "6<sup>6</sup>",
                "6<sup>8</sup>"
            ],
            correct: "C",
            explanation: `A alternativa correta é a alternativa C.<br>
<img src="images/T3-Q03.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 4",
            description: "Ao fatorar o número 156, que fatores obtemos?",
            alternatives: [
                "2<sup>2</sup> * 3",
                "2<sup>6</sup> * 13",
                "6<sup>2</sup> * 13",
                "2<sup>2</sup> * 3 * 11",
                "2<sup>2</sup> * 3 * 13"
            ],
            correct: "E",
            explanation: `A alternativa correta é a alternativa E.<br>
<img src="images/T3-Q04.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 5",
            description: "A fatoração de 330 resulta em",
            alternatives: [
                "2 * 3 * 5 * 11",
                "2 * 3 * 7 * 11",
                "2 * 5 * 7 * 11",
                "2 * 3 * 5<sup>2</sup> * 7",
                "2 * 5<sup>2</sup> * 11"
            ],
            correct: "A",
            explanation: `A alternativa correta é a alternativa A.<br>
<img src="images/T3-Q05.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 6",
            description: "Quais são os fatores de 441?",
            alternatives: [
                "3 * 7",
                "3<sup>2</sup> * 7",
                "3 * 7<sup>2</sup>",
                "3<sup>2</sup> * 7<sup>2</sup>",
                "2<sup>3</sup> * 2<sup>7</sup>"
            ],
            correct: "D",
            explanation: `A alternativa correta é a alternativa D.<br>
<img src="images/T3-Q06.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 7",
            description: "Fatore o número 306 e assinale a alternativa com seus fatores.",
            alternatives: [
                "2 * 3<sup>2</sup> * 17",
                "2<sup>2</sup> * -3 * 17",
                "2<sup>3</sup> * 17",
                "3<sup>2</sup> * 17",
                "2 * 3 * 7 * 17"
            ],
            correct: "A",
            explanation: `A alternativa correta é a alternativa A.<br>
<img src="images/T3-Q07.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 8",
            description: "Assinale a alternativa que contém os fatores de 644:",
            alternatives: [
                "2<sup>2</sup> * 7 * 23",
                "2<sup>3</sup> * 7 * 23",
                "2 * 7<sup>2</sup> * 23",
                "2<sup>7</sup> * 23",
                "7<sup>2</sup> * 23"
            ],
            correct: "A",
            explanation: `A alternativa correta é a alternativa A.<br>
<img src="images/T3-Q08.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 9",
            description: "Ao fatorar o número 297, que fatores obtemos?",
            alternatives: [
                "3<sup>11</sup>",
                "11<sup>3</sup>",
                "3<sup>2</sup> * 11",
                "3<sup>3</sup> * 11",
                "3<sup>4</sup> * 11"
            ],
            correct: "D",
            explanation: `A alternativa correta é a alternativa D.<br>
<img src="images/T3-Q09.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 10",
            description: "A fatoração de 585 resulta em:",
            alternatives: [
                "3<sup>5</sup> * 13",
                "5<sup>3</sup> * 13",
                "3 * 5<sup>2</sup> * 13",
                "3<sup>2</sup> * 5 * 13",
                "3<sup>2</sup> * 5<sup>2</sup> * 13"
            ],
            correct: "D",
            explanation: `A alternativa correta é a alternativa D.<br>
<img src="images/T3-Q10.png"
style="max-width:100%; height:auto;">`
        }
    ],
    theme4: [
        {
            title: "QUESTÃO 1",
            description: " Qual o MMC de 78 e 30?",
            alternatives: [
                "130",
                "260", 
                "390",
                "780",
                "1020"
            ],
            correct: "C",
            explanation: `A alternativa correta é a alternativa C.<br>
<img src="images/T4-Q01.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 2",
            description: "Calcule o MMC de 308 e 420.",
            alternatives: [
                "1540",
                "2310",
                "4620", 
                "6930",
                "9240"
            ],
            correct: "C",
            explanation: `A alternativa correta é a alternativa C.<br>
<img src="images/T4-Q02.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 3",
            description: "Assinale a alternativa que contém o MMC de 60 e 150",
            alternatives: [
                "100",
                "150",
                "300",
                "600",
                "900"
            ],
            correct: "C",
            explanation: `A alternativa correta é a alternativa C.<br>
<img src="images/T4-Q03.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 4",
            description: "Descubra o MMC de 126 e 189 e assinale a alternativa correta",
            alternatives: [
                "252",
                "378",
                "567",
                "756",
                "1134"
            ],
            correct: "B",
            explanation: `A alternativa correta é a alternativa B.<br>
<img src="images/T4-Q04.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 5",
            description: "Verifique o MMC de 105 e 210 e assinale a alternativa que corresponde ao resultado.",
            alternatives: [
                "105",
                "210",
                "315",
                "430",
                "735"
            ],
            correct: "B",
            explanation: `A alternativa correta é a alternativa B.<br>
<img src="images/T4-Q05.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 6",
            description: "Qual o MMC de 110 e 154?",
            alternatives: [
                "330",
                "462",
                "770",
                "824",
                "1540"
            ],
            correct: "C",
            explanation: `A alternativa correta é a alternativa C.<br>
<img src="images/T4-Q06.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 7",
            description: "Calcule o MMC de 66 e 429.",
            alternatives: [
                "858",
                "1287",
                "1430",
                "2145",
                "2860"
            ],
            correct: "A",
            explanation: `A alternativa correta é a alternativa A.<br>
<img src="images/T4-Q07.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 8",
            description: "Assinale a alternativa que contém o MMC de 286 e 715.",
            alternatives: [
                "858",
                "1144",
                "1430",
                "2145",
                "3575"
            ],
            correct: "C",
            explanation: `A alternativa correta é a alternativa C.<br>
<img src="images/T4-Q08.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 9",
            description: "Descubra o MMC de 22 e 30 e assinale a alternativa correta.",
            alternatives: [
                "165",
                "330",
                "550",
                "660",
                "990"
            ],
            correct: "B",
            explanation: `A alternativa correta é a alternativa B.<br>
<img src="images/T4-Q09.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 10",
            description: "Verifique o MMC de 182 e 195 e assinale a alternativa que corresponde ao resultado",
            alternatives: [
                "390",
                "546",
                "910",
                "1365",
                "2730"
            ],
            correct: "E",
            explanation: `A alternativa correta é a alternativa E.<br>
<img src="images/T4-Q10.png"
style="max-width:100%; height:auto;">`
        }
    ],
    theme5: [
        {
            title: "QUESTÃO 1",
            description: `Qual é o resultado das somas de frações abaixo?<br><br> 
            <sup>1</sup>&frasl;<sub>2</sub> + <sup>1</sup>&frasl;<sub>3</sub> + <sup>1</sup>&frasl;<sub>5</sub>`,
            alternatives: [
                "<sup>29</sup>&frasl;<sub>30</sub>",
                "<sup>31</sup>&frasl;<sub>30</sub>", 
                "<sup>2</sup>&frasl;<sub>5</sub>",
                "<sup>3</sup>&frasl;<sub>10</sub>",
                "1"
            ],
            correct: "B",
            explanation: `A alternativa correta é a alternativa B.<br>
<img src="images/T5-Q01.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 2",
            description: `Efetue as operações abaixo e assinale a alternativa que contém o resultado.<br<br>
            <sup>7</sup>&frasl;<sub>2</sub> + <sup>1</sup>&frasl;<sub>7</sub> - <sup>2</sup>&frasl;<sub>5</sub>`,
            alternatives: [
                "<sup>1</sup>&frasl;<sub>5</sub>",
                "<sup>6</sup>&frasl;<sub>4</sub>",
                "<sup>10</sup>&frasl;<sub>14</sub>", 
                "<sup>34</sup>&frasl;<sub>10</sub>",
                "<sup>227</sup>&frasl;<sub>70</sub>"
            ],
            correct: "E",
            explanation: `A alternativa correta é a alternativa E.<br>
<img src="images/T5-Q02.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 3",
            description: `Realize as subtrações a seguir e assinale a alternativa correta.<br><br>
            <sup>8</sup>&frasl;<sub>9</sub> - <sup>2</sup>&frasl;<sub>5</sub> - <sup>1</sup>&frasl;<sub>3</sub>`,
            alternatives: [
                "5",
                "<sup>1</sup>&frasl;<sub>9</sub>",
                "<sup>5</sup>&frasl;<sub>15</sub>",
                "<sup>7</sup>&frasl;<sub>45</sub>",
                "<sup>29</sup>&frasl;<sub>105</sub>"
            ],
            correct: "D",
            explanation: `A alternativa correta é a alternativa D.<br>
<img src="images/T5-Q03.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 4",
            description: `A sequência de operações <sup>1</sup>&frasl;<sub>15</sub> + <sup>1</sup>&frasl;<sub>3</sub> - <sup>1</sup>&frasl;<sub>5</sub> resulta em:`,
            alternatives: [
                "<sup>1</sup>&frasl;<sub>3</sub>",
                "<sup>1</sup>&frasl;<sub>5</sub>",
                "<sup>3</sup>&frasl;<sub>5</sub>",
                "<sup>1</sup>&frasl;<sub>13</sub>",
                "<sup>2</sup>&frasl;<sub>15</sub>"
            ],
            correct: "B",
            explanation: `A alternativa correta é a alternativa B.<br>
<img src="images/T5-Q04.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 5",
            description: `Qual o produto de <sup>11</sup>&frasl;<sub>7</sub> por <sup>2</sup>&frasl;<sub>3</sub>?`,
            alternatives: [
                "<sup>14</sup>&frasl;<sub>33</sub>",
                "<sup>21</sup>&frasl;<sub>22</sub>",
                "<sup>22</sup>&frasl;<sub>21</sub>",
                "<sup>9</sup>&frasl;<sub>4</sub>",
                "<sup>33</sup>&frasl;<sub>14</sub>"
            ],
            correct: "C",
            explanation: `A alternativa correta é a alternativa C.<br>
<img src="images/T5-Q05.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 6",
            description: `Qual o quociente da divisão entre <sup>11</sup>&frasl;<sub>2</sub> e <sup>11</sup>&frasl;<sub>3</sub>?`,
            alternatives: [
                "0",
                "<sup>2</sup>&frasl;<sub>3</sub>",
                "<sup>3</sup>&frasl;<sub>2</sub>",
                "<sup>6</sup>&frasl;<sub>11</sub>",
                "<sup>22</sup>&frasl;<sub>5</sub>"
            ],
            correct: "C",
            explanation: `A alternativa correta é a alternativa C.<br>
<img src="images/T5-Q06.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 7",
            description: `Efetue as operações a seguir atentando-se à ordem de prioridade e assinale a alternativa com o resultado correto<br><br>
            
            <sup>1</sup>&frasl;<sub>5</sub> - <sup>2</sup>&frasl;<sub>5</sub> * <sup>3</sup>&frasl;<sub>11</sub>`,
            alternatives: [
                "<sup>-3</sup>&frasl;<sub>55</sub>",
                "<sup>1</sup>&frasl;<sub>10</sub>",
                "<sup>-1</sup>&frasl;<sub>10</sub>",
                "<sup>1</sup>&frasl;<sub>11</sub>",
                "<sup>-1</sup>&frasl;<sub>11</sub>"
            ],
            correct: "D",
            explanation: `A alternativa correta é a alternativa D.<br>
<img src="images/T5-Q07.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 8",
            description: `A sequência de operações <sup>11</sup>&frasl;<sub>7</sub> * <sup>2</sup>&frasl;<sub>3</sub> ÷ <sup>2</sup>&frasl;<sub>7</sub> ÷ <sup>11</sup>&frasl;<sub>3</sub> tem como resultado:`,
            alternatives: [
                "1",
                "2",
                "<sup>3</sup>&frasl;<sub>7</sub>",
                "<sup>7</sup>&frasl;<sub>2</sub>",
                "<sup>11</sup>&frasl;<sub>2</sub>"
            ],
            correct: "A",
            explanation: `A alternativa correta é a alternativa A.<br>
<img src="images/T5-Q08.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 9",
            description: `Atente-se à ordem das operações a seguir e assinale a alternativa que contém o resultado correto.<br><br>
            
            <sup>-21</sup>&frasl;<sub>3</sub> + <sup>15</sup>&frasl;<sub>5</sub> * (<sup>-8</sup>&frasl;<sub>2</sub>)`,
            alternatives: [
                "-1",
                "12",
                "-12",
                "-19",
                "<sup>141</sup>&frasl;<sub>13</sub>"
            ],
            correct: "D",
            explanation: `A alternativa correta é a alternativa D.<br>
<img src="images/T5-Q09.png"
style="max-width:100%; height:auto;">`
        },
        {
            title: "QUESTÃO 10",
            description: `Qual o resultado da seguinte diferença entre quocientes?<br><br>
            
            <sup>55</sup>&frasl;<sub>3</sub> ÷  <sup>15</sup>&frasl;<sub>4</sub> - <sup>4</sup>&frasl;<sub>3</sub> ÷ <sup>6</sup>&frasl;<sub>22</sub>`,
            alternatives: [
                "<sup>5</sup>&frasl;<sub>2</sub>",
                "<sup>2</sup>&frasl;<sub>3</sub>",
                "<sup>4</sup>&frasl;<sub>3</sub>",
                "<sup>352</sup>&frasl;<sub>27</sub>",
                "0"
            ],
            correct: "E",
            explanation: `A alternativa correta é a alternativa E.<br>
<img src="images/T5-Q10.png"
style="max-width:100%; height:auto;">`
        }
    ]
};

// Variáveis globais
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let answered = false;
let currentTheme = 'theme1';

// Detectar tema atual baseado na URL
function detectCurrentTheme() {
    const path = window.location.pathname;
    if (path.includes('theme1')) currentTheme = 'theme1';
    else if (path.includes('theme2')) currentTheme = 'theme2';
    else if (path.includes('theme3')) currentTheme = 'theme3';
    else if (path.includes('theme4')) currentTheme = 'theme4';
    else if (path.includes('theme5')) currentTheme = 'theme5';
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    detectCurrentTheme();
    
    // Só inicializar se estivermos em uma página de tema
    if (document.getElementById('question-title')) {
        loadQuestion();
        setupEventListeners();
    }
});

// Configurar event listeners
function setupEventListeners() {
    const alternatives = document.querySelectorAll('.alternative-btn');
    alternatives.forEach(btn => {
        btn.addEventListener('click', function() {
            if (!answered) {
                selectAnswer(this.dataset.answer, this);
            }
        });
    });
}

// Carregar questão atual
function loadQuestion() {
    const questions = questionsData[currentTheme];
    if (!questions || currentQuestionIndex >= questions.length) return;
    
    const question = questions[currentQuestionIndex];
    
    // Atualizar elementos da interface
    document.getElementById('question-title').textContent = question.title;
    document.getElementById('question-description').innerHTML = question.description;
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    document.getElementById('total-questions').textContent = questions.length;
    document.getElementById('max-score').textContent = questions.length;
    
    // Atualizar alternativas
    const alternatives = document.querySelectorAll('.alternative-btn');
    alternatives.forEach((btn, index) => {
        const textElement = btn.querySelector('.alternative-text');
        textElement.innerHTML = question.alternatives[index];
        btn.className = 'alternative-btn'; // Reset classes
    });
    
    // Atualizar barra de progresso
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('progress-bar').style.width = progress + '%';
    
    // Reset estado
    answered = false;
    selectedAnswer = null;
    document.getElementById('feedback-area').style.display = 'none';
    document.getElementById('next-btn').disabled = true;
    
    // Atualizar botões de navegação
    document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
}

// Selecionar resposta
function selectAnswer(answer, buttonElement) {
    if (answered) return;
    
    selectedAnswer = answer;
    const questions = questionsData[currentTheme];
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = answer === currentQuestion.correct;
    
    // Marcar todas as alternativas
    const alternatives = document.querySelectorAll('.alternative-btn');
    alternatives.forEach(btn => {
        btn.classList.remove('selected');
        if (btn.dataset.answer === currentQuestion.correct) {
            btn.classList.add('correct');
        } else if (btn.dataset.answer === answer && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });
    
    // Marcar resposta selecionada
    buttonElement.classList.add('selected');
    
    // Atualizar pontuação
    if (isCorrect) {
        score++;
        document.getElementById('score-value').textContent = score;
        
        // Efeito de vibração para acerto (simulado)
        if (navigator.vibrate) {
            navigator.vibrate([100, 50, 100]);
        }
    } else {
        // Efeito de vibração para erro (simulado)
        if (navigator.vibrate) {
            navigator.vibrate([200, 100, 200, 100, 200]);
        }
    }
    
    // Mostrar feedback
    showFeedback(isCorrect, currentQuestion.explanation);
    
    answered = true;
    document.getElementById('next-btn').disabled = false;
}

// Mostrar feedback
function showFeedback(isCorrect, explanation) {
    const feedbackArea = document.getElementById('feedback-area');
    const feedbackIcon = document.getElementById('feedback-icon');
    const feedbackTitle = document.getElementById('feedback-title');
    const feedbackDescription = document.getElementById('feedback-description');
    
    if (isCorrect) {
        feedbackArea.className = 'feedback-area correct';
        feedbackIcon.textContent = '🎉';
        feedbackTitle.textContent = '🌟 Excelente! Resposta correta! 🌟';
    } else {
        feedbackArea.className = 'feedback-area incorrect';
        feedbackIcon.textContent = '💭';
        feedbackTitle.textContent = '🤔 Ops! Vamos revisar este conceito 📚';
    }
    
    feedbackDescription.innerHTML = explanation;
    feedbackArea.style.display = 'block';
    
    // Scroll suave para o feedback
    feedbackArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Próxima questão
function nextQuestion() {
    if (!answered) return;
    
    const questions = questionsData[currentTheme];
    
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showCompletionScreen();
    }
}

// Questão anterior
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

// Mostrar tela de conclusão
function showCompletionScreen() {
    const questions = questionsData[currentTheme];
    const percentage = Math.round((score / questions.length) * 100);
    
    let message = '';
    let emoji = '';
    
    if (percentage >= 90) {
        message = 'Desempenho excepcional! Você domina este tema!';
        emoji = '🏆';
    } else if (percentage >= 70) {
        message = 'Muito bom! Você tem um ótimo conhecimento!';
        emoji = '🌟';
    } else if (percentage >= 50) {
        message = 'Bom trabalho! Continue praticando para melhorar!';
        emoji = '👍';
    } else {
        message = 'Continue estudando! A prática leva à perfeição!';
        emoji = '📚';
    }
    
    // Efeito especial para pontuações altas
    if (percentage >= 80) {
        createConfetti();
    }
    
    const questionContainer = document.querySelector('.question-container');
    questionContainer.innerHTML = `
        <div style="text-align: center; padding: 3rem;">
            <div style="font-size: 6rem; margin-bottom: 2rem;">${emoji}</div>
            <h2 style="color: var(--primary-blue); margin-bottom: 2rem; font-size: 2.5rem;">Tema Concluído!</h2>
            <div style="font-size: 4rem; color: var(--primary-orange); margin-bottom: 1rem; font-weight: bold;">${score}/${questions.length}</div>
            <div style="font-size: 2rem; color: var(--primary-blue); margin-bottom: 2rem;">${percentage}%</div>
            <p style="font-size: 1.3rem; margin-bottom: 3rem; color: var(--dark-gray);">${message}</p>
            <div class="complete-actions" style="display: flex; gap: 2rem; justify-content: center; flex-wrap: wrap;">
                <button class="nav-btn" onclick="restartQuiz()" style="background: linear-gradient(45deg, var(--primary-blue), var(--primary-orange));">
                    🔄 Refazer Tema
                </button>
                <button class="nav-btn" onclick="window.location.href='home.html'" style="background: linear-gradient(45deg, var(--success-green), var(--primary-blue));">
                    📚 Outros Temas
                </button>
            </div>
        </div>
    `;
}

// Reiniciar quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    answered = false;
    
    document.getElementById('score-value').textContent = '0';
    
    // Recarregar a estrutura original
    location.reload();
}

// Criar efeito de confete
function createConfetti() {
    const colors = ['#FF8C42', '#4A9B9B', '#D32F2F', '#4CAF50', '#FFC107'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-10px';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = '50%';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9999';
            confetti.style.animation = 'confetti-fall 3s linear forwards';
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }, i * 50);
    }
}

// Adicionar CSS para animação do confete
const style = document.createElement('style');
style.textContent = `
    @keyframes confetti-fall {
        0% {
            transform: translateY(-10px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

