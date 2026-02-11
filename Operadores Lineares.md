Operadores Lineares são [Transformações Lineares](<Transformações Lineares.md>)[^1] $T: \mathbb V\rightarrow \mathbb W$ [^2] em que $\mathbb V = \mathbb W= \mathbb R^n$ [^3] ou simplesmente $T: \mathbb V \rightarrow \mathbb V$ [^4] em que $\mathbb V = \mathbb R^n$. Vale citar também que, como muitas vezes esses operadores são usados para manipular objetos que conseguimos ver (que tem no máximo 3 dimensões), $n$ costuma ser ou 2 ou 3, o que significa que neste curso serão tratados apenas operadores de ordem 2 ou 3.

[^1]: [Operadores Lineares.pdf](<Operadores Lineares.pdf>)
[^2]:Transformação do espaço vetorial $\mathbb V$ no espaço vetorial $\mathbb W$
[^3]: O espaço vetorial $\mathbb V$ é igual ao espaço vetorial $\mathbb W$ que é igual ao espaço vetorial dos números reais com "n dimensões" 
[^4]: Transformação do espaço vetorial $\mathbb V$ no espaço vetorial $\mathbb V$ 

Alguns operadores lineares notáveis são:
## 1. Operador de Dilatação/ Operador de Contração
O Operador de Dilatação e o Operador de Contração são operadores que alteram o tamanho do vetor no qual são aplicados. 

Esses dois operadores também tem a mesma matriz transformação $[T]$, que é:

$$ \begin{cases} {[T_{dil/contr}]=}
  k \cdot [I_3]= 
  k \cdot
\begin {bmatrix}
1&0&0\\
0&1&0\\
0&0&1
\end {bmatrix} =
\begin {bmatrix}
k&0&0\\
0&k&0\\
0&0&k
\end {bmatrix}, & para $n=3$ \\
\\
k \cdot [I_2]= 
k \cdot
\begin {bmatrix}
1&0\\
0&1
\end {bmatrix} =
\begin {bmatrix}
k&0\\
0&k
\end {bmatrix} , & para $n=2$
\end{cases} $$

Em que se $|k|>1$, $[T]$ é um operador de dilatação, e se $1>|k|$, $[T]$ é um operador de contração.

>[!note]
>**Exemplos**
>1. Para $[T]=3\cdot [I_3]$ e $v=(0,4,3)$, acha-se $T(v)$:
>
>$$T(v)= [T]\cdot v=
\begin{bmatrix}
3&0&0\\
0&3&0\\
0&0&3
\end{bmatrix} \cdot
\begin{bmatrix}
0\\
4\\
3
\end{bmatrix} 
= 
\begin{bmatrix}
0\\
12\\
9
\end{bmatrix} $$
>
> 2. Para $[T]=\frac 1 3\cdot [I_3]$ e $v=(0,4,3)$, acha-se $T(v)$:
>
>$$ T(v)= [T]\cdot v=
\begin{bmatrix}
\frac 1 3&0&0\\
0&\frac 1 3&0\\
0&0&\frac 1 3
\end{bmatrix} \cdot
\begin{bmatrix}
0\\
4\\
3
\end{bmatrix} 
= 
\begin{bmatrix}
0\\
\frac 4 3\\
1
\end{bmatrix} $$
## 2. Operador de Reflexão em espaços bidimensionais
O operador de reflexão em bidimensional é um operador que reflete o vetor $v$ em torno de um eixo de um espaço vetorial de duas dimensões ($n=2$), ou seja ele age como um "espelho". Isso faz esse operador linear muito interessante para fazer previsões de imagens em um espelho plano

Esse operador é escrito como:

$$ \begin{cases} {[T_{r^2}]=}
\begin {bmatrix}
-1&0\\
0&1
\end {bmatrix} , & para reflexão em $x$\\
\\
\begin {bmatrix}
1&0\\
0&-1
\end {bmatrix} , & para reflexão em $y$
\end{cases} $$

>[!note]
>**Exemplos**\
>1. Seja $[T]$ um operador linear de reflexão em $x$ e $v=(8,3)$, acha-se $T(v)$:
>
>$$ T(v)= [T]\cdot v=
\begin{bmatrix}
-1&0\\
0&1&\\
\end{bmatrix} \cdot
\begin{bmatrix}
8\\
3
\end{bmatrix} 
= 
\begin{bmatrix}
-8\\
3
\end{bmatrix} $$
>
>2. Seja $[T]$ um operador linear de reflexão em $y$ e $v=(8,3)$, acha-se $T(v)$:
>
>$$ T(v)= [T]\cdot v=
\begin{bmatrix}
1&0\\
0&-1&\\
\end{bmatrix} \cdot
\begin{bmatrix}
8\\
3
\end{bmatrix} 
= 
\begin{bmatrix}
8\\
-3
\end{bmatrix} $$

## 3. Operador de Reflexão em espaços tridimensionais
O operador de reflexão em em espaços tridimensionais é um operador usado principalmente para refletir o vetor $v$ em torno de um plano que contenha dois eixo em espaços com três dimensões ($n=3$) , ou seja, assim como o operador de reflexão em espaços bidimensionais, ele também age como um "espelho", porém em mais de uma dimensão. Isso faz esse operador linear muito interessante para fazer previsões de imagens em um espelho plano, assim como o anterior.

Para planos agindo como "espelhos", esse operador é escrito como:

$$ \begin{cases} {[T_{r^3}]}
\begin {bmatrix}
-1&0&0\\
0&1&0\\
0&0&1
\end {bmatrix}, & para reflexão em $yz$ \\
\\
\begin {bmatrix}
1&0&0\\
0&-1&0\\
0&0&1
\end {bmatrix}, & para reflexão em $xz$ \\
\\
\begin {bmatrix}
1&0&0\\
0&1&0\\
0&0&-1
\end {bmatrix}, & para para reflexão em $xy$ 
\end{cases} $$

>[!example] Exemplos
>1. Seja $[T]$ um operador linear de reflexão em $xz$ e $v=(2,4,3)$, acha-se $T(v)$:
>
>$$ T(v)= [T]\cdot v=
\begin{bmatrix}
1&0&0\\
0&-1&0\\
0&0&1
\end{bmatrix} \cdot
\begin{bmatrix}
2\\
4\\
3
\end{bmatrix} 
= 
\begin{bmatrix}
2\\
-4\\
3
\end{bmatrix} $$
>
>2. Seja $[T]$ um operador linear de reflexão em $yz$ e $v=(2,4,3)$, acha-se $T(v)$:
>
>$$ T(v)= [T]\cdot v=
\begin{bmatrix}
-1&0&0\\
0&1&0\\
0&0&1
\end{bmatrix} \cdot
\begin{bmatrix}
2\\
4\\
3
\end{bmatrix} 
= 
\begin{bmatrix}
-2\\
4\\
3
\end{bmatrix} $$
>
>3. Seja $[T]$ um operador linear de reflexão em $xy$ e $v=(2,4,3)$, acha-se $T(v)$:
>
>$$ T(v)= [T]\cdot v=
\begin{bmatrix}
1&0&0\\
0&1&0\\
0&0&-1
\end{bmatrix} \cdot
\begin{bmatrix}
2\\
4\\
3
\end{bmatrix} 
= 
\begin{bmatrix}
2\\
4\\
-3
\end{bmatrix} $$

> [!tip] Reflexão em torno do eixo ou da origem em espaços tridimensionais
> É possível usar eixos ou até a própria origem como "ponto de reflexão", mas isso não será usado neste curso.

## 4. Operador de Expansão/ Operador de Compressão
Os operadores de expansão e de compressão é semelhante aos operadores de contração e de dilatação, porém tanto os operadores de compressão quanto de expansão alteram apenas uma das coordenadas.

Esses dois operadores tem a mesma matriz transformação $[T]$, que é:

$$ \begin{cases} {[T_{exp/comp}]=}
\begin {bmatrix}
k&0&0\\
0&1&0\\
0&0&1
\end {bmatrix}, & para $n=3$ e mudança na coordena $x$ \\
\\
\begin {bmatrix}
1&0&0\\
0&k&0\\
0&0&1
\end {bmatrix}, & para $n=3$ e mudança na coordena $y$ \\
\\
\begin {bmatrix}
1&0&0\\
0&1&0\\
0&0&k
\end {bmatrix}, & para $n=3$ e mudança na coordena $z$ \\
\\
\begin {bmatrix}
k&0\\
0&1
\end {bmatrix} , & para $n=2$ e mudança na coordenada $x$ \\
\\
\begin {bmatrix}
1&0\\
0&k
\end {bmatrix} , & para $n=2$ e mudança na coordenada $y$
\end{cases} $$

Em que se $|k|>1$, $[T]$ é um operador de expansão, e se $1>|k|$, $[T]$ é um operador de compressão.

>[!example] Exemplos
>1. Seja $[T]$ um operador linear de expansão em $x$ que aumenta em 4 a coordenada e $v=(2,4,3)$, acha-se $T(v)$:
>$$
T(v)= [T]\cdot v=
\begin{bmatrix}
4&0&0\\
0&1&0\\
0&0&1
\end{bmatrix} \cdot
\begin{bmatrix}
2\\
4\\
3
\end{bmatrix} 
= 
\begin{bmatrix}
8\\
4\\
3
\end{bmatrix} $$
>2. Seja $[T]$ um operador linear de expansão em $y$ que aumenta em 4 a coordenada e $v=(2,4,3)$, acha-se $T(v)$:
>$$
T(v)= [T]\cdot v=
\begin{bmatrix}
1&0&0\\
0&4&0\\
0&0&1
\end{bmatrix} \cdot
\begin{bmatrix}
2\\
4\\
3
\end{bmatrix} 
= 
\begin{bmatrix}
-2\\
16\\
3
\end{bmatrix} $$
>3. Seja $[T]$ um operador linear de expansão em $z$ que aumenta em 4 a coordenada e $v=(2,4,3)$, acha-se $T(v)$:
>
>$$ T(v)= [T]\cdot v=
\begin{bmatrix}
1&0&0\\
0&1&0\\
0&0&4
\end{bmatrix} \cdot
\begin{bmatrix}
2\\
4\\
3
\end{bmatrix} 
= 
\begin{bmatrix}
2\\
4\\
16
\end{bmatrix} $$
>
>4. Seja $[T]$ um operador linear de expansão em $x$ que aumenta em 4 a coordenada e $v=(8,3)$, acha-se $T(v)$:
>
>$$ T(v)= [T]\cdot v=
\begin{bmatrix}
4&0\\
0&1
\end{bmatrix} \cdot
\begin{bmatrix}
8\\
3
\end{bmatrix} 
= 
\begin{bmatrix}
32\\
3
\end{bmatrix} $$
>
>5. Seja $[T]$ um operador linear de expansão em $y$ que aumenta em 4 a coordenada e $v=(8,3)$, acha-se $T(v)$:
>
>$$ T(v)= [T]\cdot v=
\begin{bmatrix}
1&0\\
0&4
\end{bmatrix} \cdot
\begin{bmatrix}
8\\
3
\end{bmatrix} 
= 
\begin{bmatrix}
8\\
12
\end{bmatrix} $$
>
## 5. Operador de Rotação em $\theta$ ($R_{\theta}$)
 O operador de rotação em $\theta$, também chamado de **rotação em** $\theta$ é um operador que gira o vetor em $\theta$ graus no sentido anti-horário. No caso de 2 dimensões, essa rotação é feita em torno da origem ou, no caso de 3 dimensões, em torno de um dos eixos.

Esse operador é escrito como:
$$ \begin{cases} {[T_{R_{\theta}}]}
\begin {bmatrix}
\cos(\theta)&-\sin(\theta)\\
\sin(\theta)&\cos(\theta)
\end {bmatrix} , & para $n=2$ \\
\\
\begin {bmatrix}
\cos(\theta)& -\sin(\theta)&0\\
\sin(\theta)&\cos(\theta)&0\\
0&0&1
\end {bmatrix}, & para $n=3$, rotacionando em torno de $z$\\
\\
\begin {bmatrix}
\cos(\theta)&0&\sin(\theta)\\
0&1&0\\
-\sin(\theta)&0&\cos(\theta)
\end {bmatrix}, & para $n=3$, rotacionando em torno de $y $\\
\\
\begin {bmatrix}
1&0&0\\
0&\cos(\theta)&-\sin(\theta)\\
0&\sin(\theta)&\cos(\theta)
\end {bmatrix}, & para $n=3$, rotacionando em torno de $x$
\end{cases} $$

## 6. Operador de Cisalhamento
O operador de cisalhamento é um operador que altera uma coordenada do vetor em proporção a uma das outras coordenadas. Como, para este curso, basta aprendermos esse operador para a duas dimensões, podemos interpretá-lo como um operador que torna "retângulos" em paralelogramos quaisquer.

Esse operador é escrito como:

$$ \begin{cases} {[T_{c}]=}
\begin {bmatrix}
1&k\\
0&1
\end {bmatrix} , & para um cisalhamento em $x$ (ou horizontal) \\
\\
\begin {bmatrix}
1&0\\
k&1
\end {bmatrix} , & para um cisalhamento em $y$ (ou vertical)
\end{cases} $$

>[!example] Exemplos
>1. Seja $[T]$ um operador linear de cisalhamento horizontal em 3 e $v=(8,3)$, acha-se $T(v)$:
>
>$$ T(v)= [T]\cdot v=
\begin{bmatrix}
1&3\\
0&1
\end{bmatrix} \cdot
\begin{bmatrix}
8\\
3
\end{bmatrix} 
= 
\begin{bmatrix}
17\\
3
\end{bmatrix} $$
>
>2. Seja $[T]$ um operador linear de cisalhamento vertical em 3 e $v=(8,3)$, acha-se $T(v)$:
>
>$$ T(v)= [T]\cdot v=
\begin{bmatrix}
1&0\\
3&1
\end{bmatrix} \cdot
\begin{bmatrix}
8\\
3
\end{bmatrix} 
= 
\begin{bmatrix}
8\\
27
\end{bmatrix} $$
