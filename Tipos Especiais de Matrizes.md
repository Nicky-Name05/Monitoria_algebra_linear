Algumas matrizes tem certas qualidades que as diferenciam de matrizes quaisquer, seja por seu formato, por ter certas propriedades ou por representar algo significativo. Algumas delas são:

1. **Matriz Nula** 
	É uma matriz de ordem qualquer cujos elementos são todos 0s. É considerado o Elemento Neutro da Soma de Matrizes e qualquer matriz multiplicada por uma matriz nula tem como produto uma matriz nula. Exemplo de matriz nula:
	
	$$A_{2X3}=
	\begin{pmatrix}
	0 & 0 & 0\\
	0 & 0 & 0
	\end{pmatrix}
	$$

2. **Matriz Coluna**
	É uma matriz cujo o numero de colunas é 1, ou seja, $A_{iX1}$. É normalmente usada para representar um [Vetor](<Vetor.md>), as Variáveis de um Sistema Linear e os Resultado de um Sistema Linear quando um [Sistema Linear](<Sistema Linear>) é escrito na forma matricial. Exemplo de matriz coluna:
	$$
	A_{3x1} = 
	\begin{pmatrix}
	3\\
	4\\
	6
	\end{pmatrix}
	$$

3. **Matriz linha**
	É uma matriz cujo o número de linhas é 1, ou seja, $A_{1Xj}$. É normalmente usada para representar um [Vetor](<Vetor.md>) quando é feito o produto escalar ou vetorial entre vetores. Exemplo de matriz linha:
	
	$$A_{3x1} = 
	\begin{pmatrix}
	3&4&6
	\end{pmatrix} $$

4. **Matriz Quadrada**
	É uma matriz cujo número de linhas é igual ao número de colunas, ou seja, $A_{nxn}$. Um [Determinante](<Operações de Matrizes.md>) só pode ser calculado em matrizes quadradas. A ordem de uma matriz quadrada é chamada simplesmente de ordem $n$, ao invés de ordem $n$ por $n$. Exemplos de matrizes quadradas:
	
	$$ A_{3X3}=
	\begin{pmatrix}
	1 & 4 & 9\\
	0 & 2 & 2 \\
	3 & 8 & 11
	\end{pmatrix}
	\; e \; B_{1X1}=
	\begin{pmatrix}
	12
	\end{pmatrix}$$

5. **Matriz diagonal**
	É uma matriz quadrada em que todos os elementos exceto os elementos da diagonal principal ($a_{ij}$, com $i=j$) são iguais a 0. Exemplos de matrizes diagonais:
	
	$$A_{3x3} = 
	\begin{pmatrix}
	3&0&0\\
	0&7&0\\
	0&0&5
	\end{pmatrix}
	\; e\; 
	A_{4X4} = 
	\begin{pmatrix}
	7&0&0&0\\
	0&43&0&0\\
	0&0&89&0\\
	0&0&0&109
	\end{pmatrix} $$

6. **Matriz Identidade Quadrada**
	É uma matriz diagonal na qual a diagonal principal é composta apenas por 1s. O produto de uma matriz quadrada $A_{nXn}$ por uma matriz identidade $I_n$ é a própria matriz $A_{nXn}$. É normalmente representada da seguinte maneira: $I_n$, em que n é a ordem da matriz. Exemplos de matrizes identidade:
	
	$$ I_3=
	\begin{pmatrix}
	1&0&0\\
	0&1&0\\
	0&0&1
	\end {pmatrix}
	\; e\; I_2=
	\begin{pmatrix}
	1&0\\
	0&1
	\end {pmatrix}$$

7. **Matriz simétrica**
	É uma matriz quadrada cujos elemento $a_{ij}=a_{ji}$, ou seja, é uma "reflexão" dos elementos em torno da diagonal principal. Exemplo de matriz simétrica:
	
	$$ A_{3x1} = 
	\begin{pmatrix}
	3&4&6\\
	4&7&1\\
	6&1&5
	\end{pmatrix} $$