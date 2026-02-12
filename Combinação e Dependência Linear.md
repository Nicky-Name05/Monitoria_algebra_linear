## 1. Combinação Linear
Combinação Linear é o vetor que resulta da soma de do produto de outros vetores por um escalar. Algebricamente, costuma-se escrever isso da seguinte forma:

$$v=\lambda_1 \cdot v_1 + \lambda_2 \cdot v_2 + \lambda_3 \cdot v_3 + ... + \lambda_n \cdot v_n$$

Basicamente, geramos um novo vetor $v$ a partir de vetores dados. Isso é importante para saber se em um [Subespaço Vetorial](<Vetor.md>)[^1] existe algum vetor que é gerado por outro e se um [Espaço Vetorial](<Vetor.md>)[^2] pode ser gerado por um Subespaço (veremos mais sobre isso em [Bases](<Bases.md>)[^3]).

> [!note]
> **Exemplo:**
>  1. O vetor $v=(2,4)$ é uma combinação linear dos vetores $v_1 = (1,\ 1)$ e $v_2=(0,\ 2)$, pois:
>  
>  $$ 2\cdot(1,\ 1)+ 1\cdot(0,\ 2) = (2,\ 2)+(0,\ 2)= (2,\ 2+2)=(2,\ 4)$$ 
>  
>  $$\text {\ então\ } 2\cdot(1,\ 1)+ 1\cdot(0,\ 2) = (2,\ 4)$$
>  
>  2. Os vetores $v=(2,4)$ e $u=(5,3)$ são combinações lineares de $v_1= (1,0)$ e $v_2=(0,\ 1)$, pois:
>  
>  $$2\cdot(1,\ 0)+4\cdot(0,\ 1)=(2,\ 4) \text {\ e\ } 5\cdot(1,\ 0)+3\cdot(0,\ 1)= (5,\ 3)$$

## 2. Dependência Linear
Na Álgebra Linear, a dependência linear ocorre quando, em um conjunto de de vetores, pelo menos um de seus vetores é uma combinação linear dos outros, ou seja, pelo menos um vetor do conjunto pode ser gerado a partir dos outros vetores . Um conjunto de vetores é classificado como linearmente dependente ($LD$) quando isso ocorre ou linearmente independente ($LI$) caso contrário.

Para conferir a dependência de um conjunto, é analisado a equação de usada combinação linear considerando v o vetor nulo. Essa equação tomaria a seguinte forma:

$$ \lambda_1  \cdot v_1 + \lambda_2  \cdot v_2 + \lambda_3  \cdot v_3 + ... + \lambda_n  \cdot v_n= 0, $$

>[!warning]
>**Se a quantidade de vetores contidos no conjunto for maior do que a dimensão do espaço que contém esses vetores, o sistema SEMPRE é Linearmente Dependente.**\
>\
>Se um conjunto de vetores contém $3$ vetores e o espaço vetorial é $\mathbb R^2$, por exemplo, o conjunto é LD, pois a dimensão de $\mathbb R^2$ é menor que $3$.

Em que $0$ é o vetor nulo do [espaço vetorial](<Vetor.md>)[^4] ($(0,0)$, para $\mathbb {R} ^2$, por exemplo) e n seja o total de vetores no conjunto analisado. Essa equação gera um sistema linear da seguinte forma:

$$\begin{cases}
\lambda_1a_1 + \lambda_2a_2 +.... + \lambda_na_n = 0 \\
\lambda_1b_1 + \lambda_2b_2 +.... + \lambda_nb_n = 0 \\
.\\
.\\
.\\
\lambda_1m_1 + \lambda_2m_2 +... + \lambda_nm_n = 0
\end{cases}$$

Em que $m$ é última componente do vetores analisados, ou seja, é um sistema linear formado pela soma do produto de $\lambda_i$ de cada vetor e cada uma das componentes do vetores do conjunto resultando em $0$.

>[!note]
>**Exemplo:**
>
>$$\text{Seja} \  \set {(1,3), (2,4)} ⊂ \mathbb {R} ^2,$$
>
>$$\lambda_1 \cdot(1,3) + \lambda_2 \cdot(2,4) = (0,0) 
\Rightarrow (\lambda_1 \cdot1, \lambda_1 \cdot3) + (\lambda_2 \cdot2, \lambda2 \cdot4) = (0,0) \Rightarrow $$
>
>$$ \Rightarrow (\lambda_1 \cdot1 + \lambda_2 \cdot2, \lambda_1 \cdot3 + \lambda_2 \cdot4) =(0,0) $$
>
>Escrevendo essa última equação em forma de sistema, temos:
>
>$$ \begin{cases}
\lambda_1 \cdot1 + \lambda_2 \cdot2 = 0\\
\lambda_1 \cdot3 + \lambda_2 \cdot4 = 0
\end {cases} $$

Caso esse sistema seja SPD, o conjunto é $LI$. Isso significa que, se o sistema tem só uma solução (solução trivial, as incógnitas só podem ser $0$), o conjunto é linearmente independente. Se o sistema tem infinitas soluções ele será $LD$.

>[!tip]
>**Basta o sistema ter apenas uma solução diferente da trivial**\
>\
>Para considerar que o sistema tenha infinitas soluções, basta achar uma solução que não seja todas as suas incógnitas iguais a $0$, que é a solução trivial.

>[!note]
>**Exemplo:**
>
>$$\text{Seja\ }  \set {(1,\ 3), (2,\ 4)} ⊂ \mathbb {R} ^2,$$
>
>$$ \lambda_1 \cdot(1,\ 3) + \lambda_2 \cdot(2,\ 4) = (0,\ 0) 
\Rightarrow (\lambda_1 \cdot1, \  \lambda_1 \cdot3) + (\lambda_2 \cdot2, \  \lambda2 \cdot4) = (0,0) \Rightarrow $$
>
>$$ \Rightarrow (\lambda_1 \cdot1 + \lambda_2 \cdot2, \  \lambda_1 \cdot3 + \lambda_2 \cdot4) =(0,0) $$
>
>Escrevendo essa última equação em forma de sistema, temos:
>
>$$ \begin{cases}
\lambda_1 \cdot1 + \lambda_2 \cdot2 = 0\\
\lambda_1 \cdot3 + \lambda_2 \cdot4 = 0
\end {cases} \Rightarrow 
\begin {bmatrix}
1 & 2\\
3 & 4
\end {bmatrix}  \cdot
\begin {bmatrix}
\lambda_1\\
\lambda_2
\end {bmatrix} = 
\begin {bmatrix}
0\\
0
\end {bmatrix} \Rightarrow $$
>
>$$ \Rightarrow 
\begin {bmatrix}
1 & 2 \shortmid & 0\\
3 & 4 \shortmid & 0
\end {bmatrix} \xrightarrow {L_2 \rightarrow L_2-3 \cdot L_1} 
\begin {bmatrix}
1 & 2 \shortmid & 0\\
0 & -2 \shortmid & 0
\end {bmatrix} \xrightarrow {L_2 \rightarrow - \frac 1 2 L_2} 
\begin {bmatrix}
1 & 2 \shortmid & 0\\
0 & 1 \shortmid & 0
\end {bmatrix} \xrightarrow {L_1 \rightarrow L_1 - 2 \cdot L_2} 
\begin {bmatrix}
1 & 0 \shortmid & 0\\
0 & 1 \shortmid & 0
\end {bmatrix} \Rightarrow $$
>
>$$\Rightarrow P_A = P_B = 2 \  (SPD!) \Rightarrow S= (0,0) \  (\text {Solução  \  única}) $$

[^1]: [Vetor.pdf](<VEtor.pdf>)

[^2]: [Vetor.pdf](<Vetor.pdf>)

[^3]: [Bases.pdf](<Bases.md>)

[^4]: [Vetor.pdf](<Vetor.md>)
