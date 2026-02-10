Um sistema linear é um conjunto de equações em que suas variáveis estão elevada á primeira potência, não estando presentes em argumentos de funções trigonométricas, nem de logarítimas, nem de exponencias, nem em produtos de variáveis nem em raízes. Normalmente, essas equações seguem a seguinte forma:

$$
 {a_0x_0+a_1x_1+a_2x_2+...+a_nx_n=r}
$$

Em que $a_i$ são constantes, $r$ é o resultado da equação e $x_i$ são as variáveis da equação.

>[!important]
>**Variáveis ou Incógnitas**\
>Em um sistema linear, as variáveis das equações são chamadas de **incógnitas**.
>\
>\
>**Equações Homogêneas**\
>Uma equação linear é chamada de equação homogênea se $b$ for igual a $0$, ou seja, se o seu resultado for $0$. Se um sistema for formado por equações homogêneas ele é chamado de sistema homogêneo.

## Tipos de Sistemas
Os sistemas lineares podem ser classificados em relação à quantidade de soluções que possuem, sendo elas as seguintes:
1. **Sistemas Impossíveis (SI)**: São sistemas que não possuem soluções, ou seja, seu conjunto solução é vazio. 

>[!note]
>**Exemplo**
>
>$$\begin{empheq}[left=\empheqlbrace]{align}
x + y = 3 \\
x + y = 5
\end{empheq}
\Rightarrow x - x + y - y = 5- 3 \Rightarrow 0=2\; (Absurdo!)$$
>
> $S=\Set Ø$.

2. **Sistemas Possíveis e Indeterminados (SPI)**: São sistemas que possuem infinitas soluções, ou seja, seu conjunto solução há infinitas "enúplas". 

>[!note]
>**Exemplo**
>
>$$ \begin{empheq}[left=\empheqlbrace]{align}
x + y = 2 \\
2x + 2y = 4
\end{empheq}
\Rightarrow x + y = 2 \Rightarrow x = 2 - y$$
>
> $S=\Set {(2,0), (1,1), (0,2), (-1,3), ...}$.

3. **Sistemas Possíveis e Determinados (SPD)**: São sistemas que possuem solução única, ou seja só há uma "enúpla" no conjunto solução. 

>[!note]
>**Exemplo**
>
>$$ \begin{empheq}[left=\empheqlbrace]{align}
x + y = 3 \\
x + 2y = 5
\end{empheq}
\Rightarrow x - x + 2y - y = 5 - 3 \Rightarrow y=2 \Rightarrow x = 1$$
>
> $S=\Set {(1, 2)}$.

## Como resolver um Sistema Linear
Há inúmeras razões para se resolver um sistema linear como para balancear uma equação química ou para analisar a corrente em circuitos CC (de corrente continua). Nessa cadeira, iremos trabalhar apenas em como resolver sistemas usando matrizes.

Para começar a solucionar um sistema linear por matrizes, primeiramente o sistema deve ser escrito em sua forma matricial segue o seguinte  formato:

$$
[A]*[X]=[B],
$$

Em que $A$ é a chamada **Matriz dos Coeficientes** (ou **Matriz Característica**, em soluções por Crammer) , $X$ é a **Matriz das Incógnitas** (também chamada de **Matriz das Variáveis**) e $B$ é a **Matriz Resultado**

>[!note]
>**Exemplo**:
>$Sendo\ o\ sistema\ original:$
>
>$$ \begin{empheq}[left=\empheqlbrace]{align}
 a_1x_1+ a_2x_2+ a_3x_3+ ... + a_nx_n=r_1 \\
 b_1x_1+ b_2x_2+ b_3x_3+ ... + b_nx_n=r_2\\
 c_1x_1+ c_2x_2+ c_3x_3+ ... + c_nx_n=r_3 \\
 .\\
 .\\
 .\\
m_1x_1+ m_2x_2+m_3x_3+ ... + m_nx_n=r_m
\end{empheq}$$
>
>$Sua\ forma\ matricial\ é:$
>
>$$ \begin{bmatrix}
 a_1 & a_2 & a_3 & ... & a_n \\
 b_1 & b_2 & b_3 & ... & b_n \\
 c_1 & c_2 & c_3 & ... & c_n \\
 .\\
 . &&.\\
 . & & & .\\
  m_1 & m_2 & m_3 & ... & m_n
\end{bmatrix} * 
\begin{bmatrix}
x_1\\
x_2\\
x_3\\
 .\\
 .\\
 .\\
x_n
\end{bmatrix} =
\begin{bmatrix}
r_1\\
r_2\\
r_3\\
.\\
.\\
.\\
r_m
\end{bmatrix}$$
>
>Em que a primeira matriz "$A$" é uma matriz de ordem $mxn$  (tem $m$ linhas e $n$ colunas), a segunda matriz "$B$" é de ordem $nx1$ (tem $n$ linhas e $1$ coluna) e, por fim, a matriz dos resultado "$R$" é uma matriz de ordem $mx1$ (tem $m$ linhas e $1$ coluna).

Existem duas formas principais de se [solucionar um sistema linear usando matrizes](<Métodos de resolução de Sistemas Lineares.md>):

1. Método de Crammer, que se utiliza de determinantes para chegar na solução do sistema

>[!warning]
>**Crammer só resolve sistemas SPDs**\
>Se a Matriz Característica tiver determinante igual a $0$, Crammer não poderá resolve-lo e o sistema será ou SPI ou SI. Caso o $det(A)$ seja diferente de $0$, o sistema é SPD.

2. Método de Gauss-Jordan, que usa uma matriz ampliada $[A|B]$, em que | é uma linha tracejada, $A$ é matriz dos coeficientes e $B$ é a matriz resultados; e as chamadas operações elementares.

>[!tip]
>**Operações Elementares**\
>As operações elementares são operações feitas **SOMENTE ENTRE LINHAS**, semelhantes as operações feitas para calcular um determinante pelas propriedades 1 (Teorema de Jacob) e 2 (Permutação entre linhas ou entre colunas).

>[!important]
>**Gauss-Jordan consegue classificar todos os sistemas**\
>Gauss-Jordan consegue afirmar se um sistema é SI, SPI ou SPD, além de achar forma geral das soluções de um SPI e a solução única de um SPD
