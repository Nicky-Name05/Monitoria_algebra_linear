## Gerando um Espaço Vetorial
Alguns conjuntos vetoriais são gerar [Espaços Vetoriais](<Vetor.md>) através da combinação linear de seus vetores. Isso pode ser verificado de uma forma parecida com a usada para verificar a [dependência linear](<Combinação e Dependência Linear.md>) de um conjunto de vetores, exceto que ao invés de se igualar as equações $0$, as equações são igualadas a uma variável $x_i$. Algebricamente, temos que a partir dessa equação:

$$v=\lambda_1 \cdot v_1 + \lambda_2 \cdot v_2 + \lambda_3 \cdot v_3 + ... + \lambda_n \cdot v_n,$$

Ao invés de igualar o vetor $v$ ao vetor nulo (como seria feito caso estivesse sendo analisado a dependência linear), $v$ é igualado a um vetor qualquer de $\mathbb V$ (muitas vezes escrito como $`(x_1,\ x_2,\ ...,\ x_n)`$) e, assim, o sistema formado é o seguinte:

$$ \begin{cases}
\lambda_1a_1 + \lambda_2a_2 +.... + \lambda_na_n = x_1 \\
\lambda_1b_1 + \lambda_2b_2 +.... + \lambda_nb_n = x_2 \\
.\\
.\\
.\\
\lambda_1m_1 + \lambda_2m_2 +... + \lambda_nm_n = x_n
\end{cases}$$

Para saber se o conjunto gera ou não o espaço, o sistema tem que ser SPD.

>[!note]
>**Exemplo:**
> 1. Seja $\mathbb V = \mathbb R^2$, $\alpha = \set {(1,4),\ (2,0)}$ e $\alpha \subset \mathbb V$, temos que:
> 
> $$v=\lambda_1 \cdot v_1(1,4) + \lambda_2(2,0) \Rightarrow $$
>
>$$ \Rightarrow
\begin{cases}
\lambda_1 \cdot 1+\lambda_2 \cdot 2 = x_1\\
\lambda_1 \cdot 4+\lambda_2 \cdot 0 = x_2
\end {cases} \Rightarrow
\begin{bmatrix}
1 & 2\\
4 & 0
\end{bmatrix}\cdot
\begin{bmatrix}
\lambda_1\\
\lambda_2
\end{bmatrix} = 
\begin{bmatrix}
x_1\\
x_2
\end{bmatrix} \Rightarrow $$
>
>$$ \Rightarrow
det(A)= 1\cdot 0-2\cdot 4 =
 -8 \ne 0 $$
>
>O conjunto gera o espaço $\mathbb V$!
>
>$$ \Rightarrow \begin{cases}
\lambda_1 = \frac {
\begin{vmatrix}
x_1 & 2\\
x_2 & 0
\end{vmatrix} } {det(A)} = \frac {x_1\cdot 0 - 2\cdot x_2} {-8}= \frac {x_2} 4\\
\lambda_2 = \frac {
\begin{vmatrix}
1&x_1\\
4&x_2
\end{vmatrix} } {det(A)} = \frac {1\cdot x_2 - x_1\cdot 4} {-8}= \frac {4x_1-x_2} 8
\end{cases} \Rightarrow 
\lambda_1= \frac {x_2} 4,\lambda_2= \frac {4x_1-x_2} 8 $$
>
>É possível achar os coeficiente de $(1,4)$ e $(2,0)$ que geram um vetor $v$ ao substituir $x_1$ e $x_2$ pelas componentes vetor em questão.
>
>---
> 2.  Seja $\mathbb V = \mathbb R^2$, $\alpha = \set {(1,3),\ (2,6)}$ e $\alpha \subset \mathbb V$, temos que:
> 
> $$v=\lambda_1 \cdot v_1(1,3) + \lambda_2(2,6) \Rightarrow$$
>
>$$\begin{cases}
\lambda_1 \cdot 1+\lambda_2 \cdot 2 = x_1\\
\lambda_1 \cdot 3+\lambda_2 \cdot 6 = x_1
\end {cases} \Rightarrow
\begin{bmatrix}
1 & 2\\
3 & 6
\end{bmatrix}\cdot
\begin{bmatrix}
\lambda_1\\
\lambda_2
\end{bmatrix} = 
\begin{bmatrix}
x_1\\
x_2
\end{bmatrix} \Rightarrow$$
> 
>$$ \Rightarrow 
\begin{bmatrix}
1 & 2 \shortmid & x_1\\
3 & 6 \shortmid & x_2
\end{bmatrix} \xrightarrow {L_2\rightarrow L_2-3L_1} 
\begin{bmatrix}
1 & 2 \shortmid & x_1\\
0 & 0 \shortmid & x_2 - 3x_1
\end{bmatrix} 
\begin{cases}
\lambda_1 + 2\lambda_2 = x_1\\
0  = x_2-3x_1 
\end{cases} \Rightarrow x_2=3x_1 $$
> 
>O conjunto $\alpha$ **NÃO** gera o conjunto $\mathbb V$, consegue apenas gerar  o sub conjunto $\mathbb W = \set {(x_1,\ 3x_1)}$.

## Base
Uma base é um conjunto de vetores $LI$ que consegue gerar um Espaço Vetorial $\mathbb V$ definido. Isso significa que todos os vetores de $\mathbb V$ podem ser gerados com os vetores da base $\beta$ e que essa base tem o número mínimo de vetores necessários para conseguir gerar $\mathbb V$. 

Um dos jeitos mais fáceis de descobrir se um conjunto $\beta$ é base de $\mathbb V$ é primeiramente testar se ele gera o espaço e em seguida substituir os "$`x_i's`$" que apareceram no final por $`0's`$. 

>[!note]
>**Exemplo:**
> 1. Seja $\mathbb V = \mathbb R^2$, $\alpha = \set {(1,4),\ (2,0)}$ e $\alpha \subset \mathbb V$, temos que:
> 
> $$v=\lambda_1 \cdot v_1(1,4) + \lambda_2(2,0) \Rightarrow$$
>
>$$\Rightarrow
\begin{cases}
\lambda_1 \cdot 1+\lambda_2 \cdot 2 = x_1\\
\lambda_1 \cdot 4+\lambda_2 \cdot 0 = x_2
\end {cases} \Rightarrow
\begin{bmatrix}
1 & 2\\
4 & 0
\end{bmatrix}\cdot
\begin{bmatrix}
\lambda_1\\
\lambda_2
\end{bmatrix} = 
\begin{bmatrix}
x_1\\
x_2
\end{bmatrix} \Rightarrow$$
>
>$$ \Rightarrow
det(A)= 1\cdot 0-2\cdot 4= -8 \ne 0$$
>
>O conjunto gera o espaço $\mathbb V$! Agora vamos achar a forma que $\lambda_1$ e $\lambda_2$ tem:
>
>$$\Rightarrow \begin{cases}
\lambda_1 = \frac {
\begin{vmatrix}
x_1 & 2\\
x_2 & 0
\end{vmatrix} } {det(A)} = \frac {x_1\cdot 0 - 2\cdot x_2} {-8}= \frac {x_2} 4\\
\lambda_2 = \frac {
\begin{vmatrix}
1&x_1\\
4&x_2
\end{vmatrix} } {det(A)} = \frac {1\cdot x_2 - x_1\cdot 4} {-8}= \frac {4x_1-x_2} 8
\end{cases} \Rightarrow 
\lambda_1= \frac {x_2} 4,\lambda_2= \frac {4x_1-x_2} 8 $$
>
>Substituindo $x_1$ e $x_2$ por $0$, temos que:
>
>$$\begin{cases}
\lambda_1= \frac {x_2} 4 \\
\lambda_2= \frac {4x_1-x_2} 8
\end{cases} \Rightarrow$$
>
>$$ \begin{cases}
\lambda_1= \frac {0} 4 \\
\lambda_2= \frac {4\cdot0-0} 8
\end{cases}\Rightarrow \lambda_1 = 0, \lambda_2 = 0 $$
>
>O conjunto $\alpha$ é base de $\mathbb V$!

>[!important]
>**Bases canônicas**\
>Os conjuntos  $\mathbb V= \mathbb R^n$ tem as chamadas **bases canônicas** que tem a seguinte forma:
>
>$$\beta = \set {(1,0,0,...,0),(0,1,0,...,0),(0,0,1,...,0),..., (0,0,0,...,1)},$$
>
>Em que $\beta$ contém $n$ vetores.

## Mudança de base 
Os coeficientes  $\lambda_i's$ dos vetores de  que aparecem na equação 

$$v=\lambda_1 \cdot v_1 + \lambda_2 \cdot v_2 + \lambda_3 \cdot v_3 + ... + \lambda_n \cdot v_n$$

são as **Coordenadas do Vetor na Base $\beta$** e representam como vetor é escrito na base $\beta$. Ou seja, um vetor $v$ escrito como $(x_1,\ x_2,\ ...,\ x_n)$ na base canônica, será escrito como $`(\lambda_1,\ \lambda_2,\ ...,\ \lambda_n)`$ na base $\beta$.  Isso é escrito como $`[v]{\beta} =(\lambda_1,\ \lambda_2,\ ...,\ \lambda_n)= (x_1,\ x_2,\ ...,\ x_n)_{\beta}`$ 

>[!note]
>**Exemplo:**
> 1. Seja $\mathbb V = \mathbb R^2$, um vetor $v(2,4) \in \mathbb V$ e a base $\beta = \set {(1,4),\ (2,0)}$, temos que:
> 
> $$v=\lambda_1 \cdot v_1(1,4) + \lambda_2(2,0) \Rightarrow$$
>
>$$\Rightarrow
\begin{cases}
\lambda_1 \cdot 1+\lambda_2 \cdot 2 = x_1\\
\lambda_1 \cdot 4+\lambda_2 \cdot 0 = x_2
\end {cases} \Rightarrow
\begin{bmatrix}
1 & 2\\
4 & 0
\end{bmatrix}\cdot
\begin{bmatrix}
\lambda_1\\
\lambda_2
\end{bmatrix} = 
\begin{bmatrix}
x_1\\
x_2
\end{bmatrix} \Rightarrow$$
>
>$$ \Rightarrow
det(A)= 1\cdot 0-2\cdot 4= -8 \ne 0$$
>
>Agora vamos achar a forma que $\lambda_1$ e $\lambda_2$ tem:
>
>$$ \begin{cases}
\lambda_1 = \frac {
\begin{vmatrix}
x_1 & 2\\
x_2 & 0
\end{vmatrix} } {det(A)} = \frac {x_1\cdot 0 - 2\cdot x_2} {-8}= \frac {x_2} 4\\
\lambda_2 = \frac {
\begin{vmatrix}
1&x_1\\
4&x_2
\end{vmatrix} } {det(A)} = \frac {1\cdot x_2 - x_1\cdot 4} {-8}= \frac {4x_1-x_2} 8
\end{cases} \Rightarrow 
\lambda_1= \frac {x_2} 4,\lambda_2= \frac {4x_1-x_2} 8 $$
>
>Logo:
>
>$$\begin{cases}
\lambda_1= \frac {4} 4\\ \lambda_2= \frac {4\cdot 2-4} 8
\end{cases} \Rightarrow
\lambda_1= 1, \lambda_2= \frac 1 2 \Rightarrow (2,4) \rightarrow (1, \frac 1 2)_{\beta}$$

Alternativamente, quaisquer vetor $v =(x_1,\ x_2,\ ...,\ x_n)$ em uma base $\alpha$ qualquer pode ser passado para uma outra base $\beta$ qualquer usando o mesmo procedimento, porém muitas vezes é necessário primeiro mudar o vetor da base canônica para a base $\alpha$ e, em seguida, mudar o "novo" vetor para a base $\beta$.
Essa operação de mudança de uma base $\alpha$ para uma base $\beta$ é escrita dessa forma:

$$ [v]_{\beta}^{\alpha} = (\lambda_1,\ \lambda_2,\ ...,\ \lambda_n),$$

Em que $\lambda_i$ é solução de:

$$ \begin{cases}
\lambda_1A_1 + \lambda_2A_2 +.... + \lambda_nA_n = \theta_1 \\
\lambda_1B_1 + \lambda_2B_2 +.... + \lambda_nB_n = \theta_2 \\
.\\
.\\
.\\
\lambda_1M_1 + \lambda_2M_2 +... + \lambda_nM_n = \theta_n
\end{cases}, $$

Em que as variáveis $A_i$ a $M_i$ são as componentes dos vetores de $\beta$ e  $\theta_i$ vem de:

$$ \begin{cases}
\theta_1a_1 + \theta_2a_2 +.... + \theta_na_n = x_1 \\
\theta_1b_1 + \theta_2b_2 +.... + \theta_nb_n = x_2 \\
.\\
.\\
.\\
\theta_1m_1 + \theta_2m_2 +... + \theta_nm_n = x_n
\end{cases} $$

Em que as variáveis $a_i$ a $m_i$ são as componentes dos vetores de $\alpha$.

>[!note]
>**Exemplo:**
> 1. Seja $\mathbb V = \mathbb R^2$, um vetor $v(2,4) \in \mathbb V$, a base $\alpha =\set{(1,\ 1),\ (1,\ -2) }$ e a base $\beta = \set {(1,\ 4),\ (2,\ 0)}$, temos que para $\alpha$:
> 
> $$v=\theta_1 \cdot v_1(1,\ 1) + \theta_2(1,\ -2) \Rightarrow$$
>
>$$\Rightarrow
\begin{cases}
\theta_1 \cdot 1+\theta_2 \cdot 1 = x_1\\
\theta_1 \cdot 1+\theta_2 \cdot (-2) = x_2
\end {cases} \Rightarrow
\begin{bmatrix}
1 & 1\\
1 & -2
\end{bmatrix}\cdot
\begin{bmatrix}
\theta_1\\
\theta_2
\end{bmatrix} = 
\begin{bmatrix}
x_1\\
x_2
\end{bmatrix} \Rightarrow $$
>
>$$ \Rightarrow
det(A)= 1\cdot (-2) -1\cdot 1 = -3 \ne 0$$
>
>Agora vamos achar a forma que $\theta_1$ e $\theta_2$ tem:
>
>$$ \begin{cases}
\theta_1 = \frac {
\begin{vmatrix}
x_1 & 1\\
x_2 & -2
\end{vmatrix} } {det(A)} = \frac {x_1\cdot (-2) - 1\cdot x_2} {-3}= \frac {2x_1 + x_2} 3\\
\theta_2 = \frac {
\begin{vmatrix}
1&x_1\\
1&x_2
\end{vmatrix} } {det(A)} = \frac {1\cdot x_2 - x_1\cdot 1} {-3}= \frac {x_1-x_2} 3
\end{cases} \Rightarrow 
\theta_1= \frac {2x_1 + x_2} 3,\theta_2= \frac {x_1-x_2} 3 $$
>
>Substituindo $x_1$ e $x_2$ pelo valor das coordenadas de $v$, temos:
>
>$$ [v]_{\alpha}=(\frac {2\cdot 2 + 4} 3,\ \frac {2-4} 3)=(\frac 8 3,\ \frac {-2} 3) $$
>
>Feito isso, repetiremos o processo para $\beta$:
>
> $$v=\lambda_1 \cdot v_1(1,4) + \lambda_2(2,0) \Rightarrow$$
>
>$$\Rightarrow
\begin{cases}
\lambda_1 \cdot 1+\lambda_2 \cdot 2 = x_1\\
\lambda_1 \cdot 4+\lambda_2 \cdot 0 = x_2
\end {cases} \Rightarrow
\begin{bmatrix}
1 & 2\\
4 & 0
\end{bmatrix}\cdot
\begin{bmatrix}
\lambda_1\\
\lambda_2
\end{bmatrix} = 
\begin{bmatrix}
x_1\\
x_2
\end{bmatrix} \Rightarrow $$
>
>$$ \Rightarrow
det(A)= 1\cdot 0-2\cdot 4= -8 \ne 0$$
>
>Agora vamos achar a forma que $\lambda_1$ e $\lambda_2$ tem:
>
>$$ \begin{cases}
\lambda_1 = \frac {
\begin{vmatrix}
x_1 & 2\\
x_2 & 0
\end{vmatrix} } {det(A)} = \frac {x_1\cdot 0 - 2\cdot x_2} {-8}= \frac {x_2} 4\\
\lambda_2 = \frac {
\begin{vmatrix}
1&x_1\\
4&x_2
\end{vmatrix} } {det(A)} = \frac {1\cdot x_2 - x_1\cdot 4} {-8}= \frac {4x_1-x_2} 8
\end{cases} \Rightarrow 
\lambda_1= \frac {x_2} 4,\lambda_2= \frac {4x_1-x_2} 8 $$
>
>Dai, substituímos $x_1$ e $x_2$ pelas coordenadas do vetor $[v]_{\alpha}$:
>
>$$\begin{cases}
\lambda_1= \frac {\frac {-2} 3} 4\\ \lambda_2= \frac {4\cdot \frac 8 3- \frac {-2} 3} 8
\end{cases} \Rightarrow
\lambda_1= \frac {-1} 6, \lambda_2= \frac {17} {12} \Rightarrow (2,4) \rightarrow (\frac {-1} 6, \frac {17} {12})_{\beta}^{\alpha}$$

## Dimensão do Espaço
A Dimensão de um Espaço Vetorial é igual a quantidade de vetores que uma de suas bases contém e é representado por $dim\ \mathbb V$. 

> [!note]
> **Exemplo:**
>  1. $\mathbb V = \set {(x_1,\ x_2); x_i \in R^2}$ (lê-se "V é um conjunto de duplas "x1" e "x2", com "x1" e "x2" pertencentes ao conjunto dos reais") tem dimensão 2 $(dim\ \mathbb V =2)$.
>  2. $\mathbb V = \set {(x_1,\ x_2,\ x_3); x_i \in R^2}$ (lê-se "V é um conjunto de trios "x1", "x2" e "x3", todos pertencentes ao conjunto dos reais") tem dimensão 3$(dim\ \mathbb V =3)$.
>  3. $\mathbb V = \set {(x_1,\ x_2,\ ...,\ x_n); x_i \in R^2}$ (lê-se "V é um conjunto de enúplas "x1", "x2" até "x $n$", todos pertencentes ao conjunto dos reais") tem dimensão "$n$"$(dim\ \mathbb V =n)$.
>  4. $V = M(2, 2)$ (lê-se " V é um conjunto de matrizes 2 por 2") tem base
> 
>  $$\set {\
\begin{bmatrix}
1 & 0\\
0 & 0
\end{bmatrix},
\begin{bmatrix}
0 & 1\\
0 & 0
\end{bmatrix},
\begin{bmatrix}
0 & 0\\
1 & 0
\end{bmatrix},
\begin{bmatrix}
0 & 0\\
0 & 1
\end{bmatrix}},$$
> 
> Ou seja, $dim\ \mathbb V = 4.$

>[!Warning]
>A dimensão de um espaço que contém apenas o vetor nulo é igual a $0$!
