A Regra de Laplace, também chamada de Expansão em Cofatores, é definida como o somatório do produto dos elementos de uma linha ou de uma coluna pelos seus respectivos Cofatores associados, sendo representado matematicamente da seguinte forma:

$$
\sum_{k=1}^n\; = a_{ik}*\Delta_{ik},\; para\; o\; desenvolvimento\; em\; uma\; linha.
$$

ou

$$\sum_{k=1}^n\; = a_{kj}*\Delta_{kj},\; para\; o\; desenvolvimento\; em\; uma\; coluna. $$

Pode-se usar as [Propriedades do Determinante](<Operações de Matrizes.md>) 1 e 2 para facilitar as contas, diminuindo o número de elementos dentro do somatório ao tornar os elementos da linha ou coluna analisada em 0s.

## Cofator
Cofator de um elemento $a_{ij}$ de uma matriz $A\; =\; (a_{ij})_{mXn}$ é definido como o número real que resulta da seguinte equação:
	$\Delta_{ij} = (-1)^{i+j}.M_{ij}$, em que $M_{ij}$ é o menor associado ao elemento $a_{ij}$.

> [!info] Menor
> O menor associado ao elemento $a_{ij}$ de uma matriz $A\\=\\ (a_{ij})_{mXn}$  é definido como o determinante da matriz obtida de A ao se retirar a linha $i$ e a coluna $j$ de A e é denotado por $M_{ij}$.

>[!example] Exemplo:
>
>$$Seja \; A =
\begin{pmatrix}
3 & -1 & 0\\
2 & 1 & -1\\
0 & 1 & 4
\end{pmatrix},\;os\; menores\; M_{11},\; M_{12}\; e\; M_{23}\; são:$$
>
>$$M_{11} = 
\begin{vmatrix}
1 & -1\\
1 & 4
\end{vmatrix}
, M_{12} = 
\begin{vmatrix}
2 & -1\\
0 & 4
\end{vmatrix}
\; e\; 
M_{23} = 
\begin{vmatrix}
3 & -1\\
0 & 1
\end{vmatrix}$$
