## 1. Matrizes semelhantes
Assim como em Geometria Plana alguns elementos podem ser chamados de semelhantes entre si, como triângulos com pelo menos dois ângulos iguais, em Álgebra Linear as [matrizes](<Matriz.md>)[^1] também podem ser semelhantes entre si se certas condições forem atendidas.

Para que duas matrizes $A$ e $B$ sejam semelhantes entre si, deve existir uma matriz $P$, tal que $B$ seja igual a $P$ multiplicado por $A$ multiplicado pela inversa de $P$. Algebricamente, isso é escrito como:

$$ B=P \cdot A \cdot P^{-1} $$

Consequência disso é que $det(A)=det(B)$

> [!note]
> **Exemplo:**
> 1. Seja $`A= \begin {bmatrix} 1&-1\\2&3 \end{bmatrix}`$ e $`B= \begin {bmatrix} 1&1\\2&3 \end{bmatrix}`$, vejamos se são semelhantes:
> 
>$$ A= \begin {vmatrix} 
1&-1\\
2&3
\end{vmatrix}= 5
B= \begin {vmatrix} 
1&-1\\
2&3
\end{vmatrix}= 1$$
> 
>$A$ e $B$ não são semelhantes
> 2. Seja $`A= \begin {bmatrix} 5&7\\2&3 \end{bmatrix}`$ e $`B= \begin {bmatrix} 1&1\\2&3 \end{bmatrix}`$, vejamos se são semelhantes:
>
> $$ A= \begin {vmatrix} 
5&7\\
2&3
\end{vmatrix}= 1
B= \begin {vmatrix} 
1&-1\\
2&3
\end{vmatrix}= 1$$
> 
>$A$ e $B$ são semelhantes 

## 2. Diagonalização de Matrizes
Uma matriz $A$ é diagonalizável quando ela for semelhante a uma [matriz diagonal](<Tipos Especiais de Matrizes.md>)[^2], ou seja, quando existir uma matriz $P$ tal que $P \cdot A \cdot P^{-1}$ resulta numa matriz diagonal (diz-se que " 'P' diagonaliza 'A' ").

Além disso, se a matriz de uma [transformação](<Transformações Lineares.md>)[^3] $T: \mathbb R^n \rightarrow \mathbb R^n$ for diagonalizável, então o número de autovalores distintos entre si que ela possui é igual a dimensão do seu domínio. Isso significa que se $[T]$ tiver $n$ autovalores diferentes, então $`[T]`$ será diagonalizável. Caso isso ocorra, $D$ tem a forma:

$$ D=
\begin {bmatrix}
\lambda_1&0&0&\ldots&0\\
0&\lambda_2&0&\ldots&0\\
0&0&\lambda_3&\ldots&0\\
\vdots\\
0&0&0&\ldots&\lambda_n
\end {bmatrix} $$

Esse Teorema permite que se descubra mais facilmente se  uma matriz é diagonalizável e que se diagonalize mais facilmente transformações lineares.
>[!note]
>**Exemplo:** 
>Conferindo se a matriz $`A =\begin{bmatrix}1&3\\2&4\end{bmatrix}`$ é diagonalizável:
>
>$$ P(A-\lambda \cdot I) =det(
\begin{bmatrix}
1&3\\
2&4
\end{bmatrix} - 
\begin{bmatrix}
\lambda&0\\
0&\lambda
\end{bmatrix})
=\begin{vmatrix}
1-\lambda&3\\
2&4-\lambda
\end{vmatrix}= 
\lambda^2-5\lambda +4 - 6=\lambda^2-5\lambda - 2$$
>
>Agora que temos o polinômio característico devemos achar a raiz dele pelo método que preferirmos:
>
>$$ \lambda^2-5\lambda - 2\Rightarrow - \frac{-5\pm\sqrt{(-5)^2-4\cdot(-2)}} {2\cdot 1} = \frac{5\mp\sqrt{25+8}}{2} = \frac{5\mp\sqrt{33}}{2} \Rightarrow$$
>
>$$ \Rightarrow \boxed {\lambda_1 = \frac{5-\sqrt{33}}{2}; \lambda_2 = \frac{5+\sqrt{33}}{2}}$$
>
>$A$ é diagonalizável e tem dois autovetores

## 3. Potência de matrizes
Caso uma matriz $A$ seja diagonalizável, ou seja, caso $A$ tenha $n$ autovetores L.I. associados a $n$ autovalores, temos que a matriz que diagonaliza $A$ é $`P= [v_1\  \  v_2\  \ v_3\  \  ...\  \  v_n]`$ e a matriz diagonalizada de $A$ é $D$ tal que $D$ é:

$$ D= P^{-1} \cdot A \cdot P = \begin {bmatrix}
\lambda_1&0&0&...&0\\
0&\lambda_2&0&...&0\\
0&0&\lambda_3&...&0\\
\vdots\\
0&0&0&...&\lambda_n
\end {bmatrix}$$

Isolando o $A$ temos que:

$$ D=P^{-1} \cdot A \cdot P \Rightarrow P \cdot D \cdot P^{-1}= P \cdot P^{-1} \cdot A \cdot P \cdot P^{-1}\Rightarrow $$

$$ \Rightarrow P \cdot D \cdot P^{-1}= (P \cdot P^{-1}) \cdot A \cdot (P \cdot P^{-1})\Rightarrow P \cdot D \cdot P^{-1}= I \cdot A \cdot I \Rightarrow $$

$$ \Rightarrow \boxed{A=P \cdot D \cdot P^{-1}} $$

Ou seja temos que:

$$ A^2=(P \cdot D \cdot P^{-1})\cdot(P \cdot D \cdot P^{-1})=P \cdot D \cdot P^{-1} \cdot P \cdot D \cdot P^{-1}= P \cdot D \cdot I \cdot D \cdot P^{-1} =\boxed{P \cdot D^2 \cdot P^{-1}} $$

$$ A^3= (P \cdot D \cdot P^{-1})\cdot(P \cdot D \cdot P^{-1})\cdot(P \cdot D \cdot P^{-1})=P \cdot D \cdot P^{-1}\cdot P \cdot D \cdot P^{-1}\cdot P \cdot D \cdot P^{-1} \Rightarrow $$

$$ \Rightarrow A^3=P \cdot D \cdot I \cdot D \cdot I \cdot D\cdot P^{-1} = \boxed {P \cdot D^3 \cdot P^{-1}} $$

Como chegamos a uma "função recursiva", ou seja, uma função que a partir de um resultado anterior consegue-se achar o próximo resultado dela (a exemplo temos $f(x)=3^x$, pois $f(x)=3^{x-1}\cdot 3= f(x-1)\cdot 3$), então conseguimos estrapolar que:

$$ \boxed {A^k =P \cdot D^k \cdot P^{-1}} $$

[^1]: [Matriz.md](<Matriz.md>)

[^2]: [Tipos Especiais de Matrizes.pdf](<Tipos Especiais de Matrizes.pdf>)

[^3]: [(<Transformações Lineares.pdf>)](<Transformações Lineares.pdf>)
