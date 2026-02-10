Existem 8 operações principais de matrizes:
## 1. Soma de Matrizes
A soma de matrizes é uma operação matricial na qual se subtrai, termo a termo, matrizes de mesmo tamanho.  
>[!note]
>**Exemplo:**\
>
>$$Seja\ A_{2X2}=
\begin{pmatrix}
1&5\\
4&9
\end{pmatrix}
\ e\ B_{2X2}=
\begin{pmatrix}
10&-5\\
3&8
\end{pmatrix},$$
>
> $$ A_{2X2}
+B_{2X2}=
\begin{pmatrix}
1&5\\
4&9
\end{pmatrix}+
\begin{pmatrix}
10&-5\\
3&8
\end{pmatrix}=
\begin{pmatrix}
1+10&5-5\\
4+3&9+8
\end{pmatrix}=
\begin{pmatrix}
11&0\\
7&17
\end{pmatrix}$$

> [!tip]
> **Propriedades da Soma**\
> 1. $A+B=B+A$
> 2. $(A+B)+C=A+(B+C)$
> 3. Sendo $0$ a matriz nula nxm, $A+0=A$

## 2. Diferença de Matrizes
 A diferença de matrizes é uma operação matricial na qual se subtrai, termo a termo, matrizes de mesmo tamanho. 
 
> [!note]
> **Exemplo:**\
>
> $$ Seja\ A_{2X2}=
\begin{pmatrix}
1&5\\
4&9
\end{pmatrix}
\ e\ B_{2X2}=
\begin{pmatrix}
10&-5\\
3&8
\end{pmatrix}, $$
>
> $$ A_{2X2}-B_{2X2}=
\begin{pmatrix}
1&5\\
4&9
\end{pmatrix}-
\begin{pmatrix}
10&-5\\
3&8
\end{pmatrix}
=\begin{pmatrix}
1-10&5-(-5)\\
4-3&9-8
\end{pmatrix}=
\begin{pmatrix}
-9&10\\
1&1
\end{pmatrix}$$

>[!tip]
>**Propriedades da Diferença**\
> 1. $A-B=-B+A$
> 2. $(A+B)-C=A+(B-C) = (A-C)+B$
> 3. Sendo $0$ a matriz nula nxm, $A-0=A$


## 3. Produto Escalar
O produto escalar é uma operação matricial em que se multiplica um escalar $k$ por uma matriz $A$ resultando em uma matriz cujos elementos são os elementos de $A$ multiplicados por $k$.

> [!note]
> **Exemplo:**
>
>$$ Seja\ A= 
\begin{pmatrix}
10&-5\\
3&8
\end{pmatrix} \ e \ k = 2, $$
>
>$$k\cdot A= 2 \cdot
\begin{pmatrix}
10&-5\\
3&8
\end{pmatrix}=
\begin{pmatrix}
20&-10\\
6&16
\end{pmatrix} $$

>[!tip]
>**Propriedades do Produto Escalar**\
> 1. $k \cdot (A+B)=k \cdot A+k \cdot B$
> 2. $(k_1+k_2)\cdot A=k_1\cdot A+k_2 \cdot A$
> 3. Sendo $0$ o número real zero e $0_{nXm}$ a matriz nula, $0 \cdot A=0_{nXm}$
> 4. $k_1 \cdot (k_j \cdot A)=(k_1 \cdot k_2) \cdot A$
## 4. Produto Matricial
O produto matricial é uma operação na qual se multiplica uma matriz $A_{nXm}$ por uma matriz $B_{mXp}$ gerando uma matriz produto $P_{nXp}$ seguindo a seguinte relação:

$$ p_{ij}=\sum_{k=1}^m a_{ik} \cdot b_{kj},$$

Em que $p_{ij}$ é elemento de $P$, $a_{ik}$ é elemento de $A$ e $b_{kj}$ é elemento de $B$.

> [!note]
>** Exemplo:**
>
>$$Seja\ A_{2X2}=
\begin{pmatrix}
1&5\\
4&9
\end{pmatrix}
\ e\ B_{2X2}=
\begin{pmatrix}
10&-5\\
3&8
\end{pmatrix},$$
>$$
AB=
\begin{pmatrix}
1&5\\
4&9
\end{pmatrix} \cdot
\begin{pmatrix}
10&-5\\
3&8
\end{pmatrix}=
\begin{pmatrix}
1 \cdot 10+5 \cdot 3&1\cdot (-5)+5 \cdot8\\
4\ cdot 10+9 \cdot 3&4 \cdot (-5)+9 \cdot8
\end{pmatrix}=
\begin{pmatrix}
25&35\\
67&52
\end{pmatrix}=P$$

>[!tip]
>**Propriedades do Produto Matricial**\
> 1. $AB\ne BA$
> 2. $I_nA=AI_n=A$
> 3. $A(B + C) = AB + AC$
> 4. $(B + C)A = BA + CA$
> 5. $A(BC)=(AB)C$
> 6. $(AB)^t=B^tA^t$
> 7. Sendo $0$ a matriz nula $0 \cdot A=A \cdot 0=0$

## 5. Traço
O traço de uma matriz  é a soma da diagonal principal de uma matriz quadrada e é representado por $tr(A)$. 

> [!note]
>**Exemplo**
>
>$$Seja\ A_{2X2}=
\begin{pmatrix}
11&67\\
47&39
\end{pmatrix}
,\ tr(A) = 11 + 39\Rightarrow tr(A) = 50$$

>[!tip]
>**Propriedades do Traço**\
>Não existem propriedades notáveis do traço

## 6. Transposição de Matrizes
A transposição de uma matriz é uma operação de matriz na qual, a partir de uma matriz $A$, se gera uma matriz $A^T$ na qual as linhas de $A$ são as colunas de $A^T$ e as colunas de $A$ são as linhas de $A^T$.  

> [!note]
> **Exemplo:**
>
>$$Seja\ A_{2X2}=
\begin{pmatrix}
11&50\\
47&39
\end{pmatrix}
,A^t=
\begin{pmatrix}
11&47\\
50&39
\end{pmatrix}$$

>[!tip]
>**Propriedades da Transposição de Matrizes**\
>1. $(A^t)^t=A$
>2. $(A+B)^t=A^t+B^t$
>3. Sendo $k$ um escalar, $(kA)^t = kA^t$
>4. Uma matriz é chamada de Simétrica se for igual a sua transposta, ou seja se $A=A^T$
## 7. Determinante
É uma operação matricial na qual transforma-se a matriz em um número escalar representada da seguinte forma:

$$ Sendo\  a\  matriz\   
A = \begin{pmatrix}
a & b & c \\
d & e & f \\
g & h & i
\end{pmatrix},$$

$$ det(A) = 
\begin{vmatrix}
a & b & c \\
d & e & f \\
g & h & i
\end{vmatrix}$$

>[!warning]
>Só existe determinante de matrizes quadradas. 

Existem diversas formas de se calcular o determinante, mas a forma mais usada é a [Regra de Laplace](<Regra de Laplace.md>), e um dos principais motivos para se fazer esse cálculo é para achar a solução de um [Sistema Linear](<Sistema Linear.md>).

>[!tip]
>Propriedades do Determinante
>1.  (Teorema de Jacob) Pode-se somar ou subtrair o múltiplo de uma coluna a outra coluna ou o múltiplo de uma linha a outra linha  sem alterar o determinante. Ex:
>
>$$det(A)=
\begin{vmatrix}
2 & 4 & 11 \\
1 & 2 & 5 \\
3 & 0 & 12
\end{vmatrix}=$$
>$$d
(L_1\leftarrow L_1-2 \cdot L_2)$$
>$$=
\begin{vmatrix}
0 & 0 & 1 \\
1 & 2 & 5 \\
3 & 0 & 12
\end{vmatrix}
= -6$$
>
>2. Se é uma matriz quadrada $B$ é uma matriz obtida de $A$ através da permutação entre linhas ou entre colunas, então o determinante de $B$ é $(-1)^n$ vezes o determinante de $A$, em que $n$ é o número de permutações necessárias para que $A$ se torne $B$ ($det(B)=(-1)^n \cdot det(A)$). Ex:
>
>$$Seja\ A=
\begin{bmatrix}
2 & 4 & 11 \\
1 & 2 & 5 \\
3 & 0 & 12
\end{bmatrix}\ e\ B=
\begin{bmatrix}
2 & 4 & 11 \\
1 & 2 & 5 \\
3 & 0 & 12
\end{bmatrix},$$
>$$A\xlongequal {L_1\leftrightarrow L_2}B$$
>
>$$det(A)=
\begin{vmatrix}
2 & 4 & 11 \\
1 & 2 & 5 \\
3 & 0 & 12
\end{vmatrix}=-6 \Rightarrow $$
>
>$$\Rightarrow det(B)
= (-1)^1 \cdot det(A) = 6 = det(B)$$
>
>3. $det(A)=det(A^t)$
>4. Se uma matriz quadrada possui uma linha ou uma coluna repleta por 0's, então seu determinante é igual a zero. Ex:
>
>$$ det(A)=
\begin{vmatrix}
0 & 0 & 0 \\
1 & 2 & 5 \\
3 & 0 & 9
\end{vmatrix}
= 0$$
>
>5. Se uma matriz quadrada possui duas linhas ou colunas iguais, então seu determinante é igual a zero. Ex: 
>
>$$det(A)=
\begin{vmatrix}
1 & 2 & 5 \\
1 & 2 & 5 \\
3 & 0 & 9
\end{vmatrix}
= 0$$
>
>6. Se é uma matriz quadrada $B$ é uma matriz obtida de $A$ através da multiplicação por um número real $k$ de uma linha ou de uma coluna, então o determinante de $B$ é $k$ vezes o determinante de $A$. Ex: Se $B = k \cdot A$, então $det(B) = k \cdot det(A)$.
>
>>Se $B = k \cdot A$, $det(B)=k^n det(A)$, em que n é a ordem de $A$ e $B$.
>
>7. Se os elementos de uma das linhas de um determinante puder ser escrita como uma soma pode-se separar em uma soma de determinantes. Ex:
>
>$$det(A)=
\begin{vmatrix}
8 & 6 & 11 \\
4 & 3 & 5 \\
3 & 0 & 9
\end{vmatrix} =
\begin{vmatrix}
8 & 6 & 11 \\
2 & 1 & 3 \\
3 & 0 & 9
\end{vmatrix}+
\begin{vmatrix}
8 & 6 & 11 \\
2 & 2 & 2 \\
3 & 0 & 9
\end{vmatrix} \Rightarrow$$
>$$\Rightarrow-9=-15+6$$
>
>>Apesar disso, em geral, $det(A+B) \ne det(A)+det(B)$.
>
>8. O produto do determinante de duas matrizes é igual ao determinante do produtos das matrizes. Ex: $det(A) \cdot det(B) = det(A \cdot B)$.



## 8. Inversão de Matrizes
A inversa de uma matriz $A$ é uma matriz $B$ que obedece a seguinte relação:

$$AB = BA = I_n,$$

Em que $B$ é uma matriz única, ou seja, **se $A$ é inversível,  existe apenas uma única matriz $B$.** A representação da inversa de $A$ é $A^{-1}$

>[!warning]
>Nem toda matriz tem inversa
>A inversa de uma matriz $A$ só existe **se** $det(A)\ne0$, da mesma forma, se $A^{-1}$ existe, $det(A)\ne 0$. O determinante ser diferente de $0$ é condição suficiente para afirmar que $A^{-1}$ existe.

Existe duas formas principais de se [calcular a inversa](<Cálculo da inversa.md>):
1.  Método da adjunta, cuja fórmula geral é:

$$A^{-1}= \frac1{det(A)} \cdot {adj(A)}$$

2. Método por operações elementais, no qual é representado da seguinte forma para uma matriz qualquer $A_{nXn}$:

$$[A|I_n]\sim[I_n|A^{-1}],$$

Em que $\sim$ indica que $[A|I_n]$ e $[I_n|A^{-1}]$ são linha semelhantes e "|" é uma linha tracejada.

>[!tip]
>Propriedades da inversa
>1. Se $A$ e $B$ são matrizes quadradas de mesma ordem, ambas inversíveis, ou seja, existe $A^{-1}$ e $B^{-1}$, então a matriz $AB$ é inversível (Existe $(AB)^{-1}$).
>2. Se $A$ e $B$ são inversíveis e da mesma ordem, então $(AB)^{-1} = B^{-1}A^{-1}$.
>3. $det(A^{-1})=\frac1{det(A)}$

