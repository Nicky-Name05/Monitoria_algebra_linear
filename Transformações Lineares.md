Transformações lineares são um tipo "especial" de função que descreve uma relação entre dois espaço vetoriais. Algebricamente, isso pode ser escrito como:

$$T: ℝ^n \rightarrow ℝ^m\ ou\  T(v)=w,\ em\ que\ v\in ℝ^n \ e\ w\in ℝ^m $$

Normalmente, isso é feito através de uma multiplicação matricial de um vetor pela matriz da transformação linear mas pode ser feito também através da substituição direta na transformação. 

>[!important]
>**Nomes** \
>Esse processo é chamado de **Aplicação de $𝕍$ em $𝕎$** ou de **Transformação de $𝕍$ em $𝕎$**.
>Caso $𝕍=𝕎$, a transformação pode ser chamada de [Operador Linear](<Operadores Lineares.md>)[^1].

>[!note]
>**Exemplo**
> 1. Por multiplicação de matriz
> Sendo $T(x,\ y,\ z)= (x+z,\ y)$ e $v=(v_1,\ v_2,\ v_3) \in ℝ^3$
>
> $$T(v)=
\begin{bmatrix}
1&0&1\\
0&1&0
\end {bmatrix} \Rightarrow
\begin{bmatrix}
1&0&1\\
0&1&0
\end {bmatrix} \cdot
\begin {bmatrix}
v_1\\
v_2\\
v_3
\end{bmatrix} =
\begin {bmatrix}
v_1+v_3\\
v_2\\
\end{bmatrix}\Rightarrow$$
>
>$$\Rightarrow \boxed {T(v)=
\begin {bmatrix}
v_1+v_3\\
v_2\\
\end{bmatrix}= (v_1+v_3, v_2)} $$
>
> A matriz da transformação pode ser escrita como $[T]$ (e a equação inteira ficaria: $[T]\cdot [v]= [w]$ ) e é chamada de **Matriz canônica da Transformação** ou apenas de **Matriz Transformação**
> 1. Por substituição na transformação
> Sendo $T(x,\ y,\ z)= (x+z,\ y)$ e $v=(v_1,\ v_2,\ v_3) \in ℝ^3$
>
> $$ T(v)=T(v_1,\ v_2,\ v_3)\Rightarrow
T(v_1,\ v_2,\ v_3)= (v_1+v_3,\ v_2)\Rightarrow \boxed {T(v)=(v_1+v_3,\ v_2)}$$

Existem algumas condições para uma transformação qualquer poder ser considerada uma transformação linear:
1. $T(0)=0$, ou seja, a aplicação da transformação no vetor nulo deve gerar o vetor nulo.
2. $T(u+v)=T(u)+T(v)$
3. $T(\lambda v)=\lambda \cdot T(v)$

>[!warning]
>**A primeira condição não é suficiente para poder dizer se uma Transfomação é linear.**\
>A condição 1 é normalmente usada caso já se desconfie que a transformação não é linear, pois em muitos casos, ela é suficiente para afirmar a não linearidade da Transformação.

## Como achar uma transformação
Em alguns casos, os únicos dados serão o vetor inicial e o vetor após a transformação e será pedido a matriz transformação.
Nesse caso, será necessário "destrinchar" o vetor final em função do vetor inicial.

>[!note]
>**Exemplo**
Sendo $v=(x,\ y,\ z)$, $w= (x+z,\ y)$ e  $T(v)=w$, $[T]$ é:
>
> $$T(v)=w\Rightarrow T(v)=(x+z,\ y)\Rightarrow T(v)= (x,\ 0)+(0,\ y)+(z,\ 0)\Rightarrow$$ $$ \Rightarrow T(v)= x\cdot(1,\ 0)+y\cdot(0,\ 1)+z\cdot(1,\ 0)$$
>
> Agora, a matriz $[T]$ será montada com cada um dos vetores achados como colunas na ordem em que $v$ esta originalmente escrito (o $x$ é a primeira componente de $v$ , então o vetor multiplicado por $x$ é a primeira coluna; o $y$ é a segunda componente de $v$, então o vetor multiplicado por $y$ é a segunda coluna e assim por diante):
>
> $$ [T]=
\begin{bmatrix}
1&0&1\\
0&1&0
\end{bmatrix}$$

## Dimensão e Base nas Transformações Lineares
Diferente dos [espaços vetoriais e subespaços vetoriais](<Vetor.md>)[^2], as Transformações não tem Dimensão ou Base. Porém [suas imagem e seus núcleos](<Núcleo e Imagem de uma Transformação Linear.md>)[^3] têm tanto dimensão quanto bases.
#### Base do Núcleo e da Imagem
Ao achar o forma que o $Ker(T)$ ou a $Im(T)$ tem deve-se "destrinchá-los" -  da mesma forma que foi feito para achar a Matriz Transformação, exceto que queremos apenas os vetores que formam a imagem ou o núcleo e não formar uma matriz. Esses vetores são a base do que estamos analisando.

>[!note]
>**Exemplo**
>1. Núcleo
>Seja $T(x,y,z)=(x+z,y)$, $Ker(T)$ será:
>
>$$ (0,0) = T(v) = T(v_1,v_2,v_3) \Rightarrow (0,0)=(v_1+v_3,v_2)\Rightarrow (0,0)=(v_1,0)+(0,v_2)+(v_3,0)\Rightarrow $$
>
>$$\Rightarrow (0,0)= v_1 \cdot (1,0)+v_2\cdot (0,1)+v_3\cdot(1,0)\Rightarrow $$
>
>$$ \Rightarrow
\begin {bmatrix}
1&0&1& \shortmid & 0\\
0&1&0& \shortmid & 0
\end {bmatrix} \Rightarrow 
\begin{cases}
v_1+v_3=0\\
v_2=0
\end {cases} 
\Rightarrow $$
>$$ \Rightarrow
\begin{cases}
v_3=-v_1\\
v_2=0
\end {cases} \Rightarrow 
Ker(T) = (v_1, 0, -v_1) $$
>
> "Destrinchando" o $Ker(T)$, temos que:
>
> $$ (v_1,\  0,\  -v_1)=v_1\cdot(1,\  0,\ -1) \Rightarrow $$
>
>$$ Base\  de \  Ker(T) = \braket {(1,\ 0,\ -1) } $$
>
>---
>2. Imagem
>Seja $T(x,y,z)=(x+z,y)$, $Im(T)$ será:
>
>$$ (a,b) = T(v) = T(v_1,v_2,v_3) \Rightarrow (a,b)=(v_1+v_3,v_2)\Rightarrow (a,b)=(v_1,0)+(0,v_2)+(v_3,0)\Rightarrow$$
>
>$$ \Rightarrow (a,b)= v_1 \cdot (1,0)+v_2\cdot (0,1)+v_3\cdot(1,0)\Rightarrow $$
>
>$$ \Rightarrow
\begin {bmatrix}
1&0&1& \shortmid & a\\
0&1&0& \shortmid & b
\end {bmatrix} \Rightarrow  
\begin{cases}
v_1+v_3=a\\
v_2=b
\end {cases}
\Rightarrow Im(T) = ℝ^2$$
>
>Como na matriz ampliada, o posto da matriz característica é igual ao posto da matriz resultado, o sistema é um SPI e por isso gera o espaço $ℝ^2$.
>Como $Im(T)=ℝ^2$, a base de $Im(T)$ será a base canônica de $ℝ^2$, $\braket {(1,\ 0),(0,\ 1)}$.

#### Dimensão do Núcleo e da Imagem
Assim como a [Dimensão do Espaço](<Bases.md>)[^4], a dimensão do $Ker(T)$ e da $Im(T)$ é igual a quantidade de vetores de suas respectivas bases e é escrita da mesma forma, $\boxed{dim\  Ker(T)}$ para a dimensão do Núcleo e $\boxed{dim\ Im(T)}$ para a dimensão da Imagem. 

>[!note]
>**Exemplo**
>
>Seja $T(x,y,z)=(x+z,y)$, achamos primeiro a base de $Ker (T)$:
>
>$$ T(\mathbb x, \mathbb y, \mathbb z) = (0,\  0) \Rightarrow
\begin{cases} 
\mathbb x+\mathbb z=0\\
\mathbb y=0
\end{cases} \Rightarrow $$
>
>$$\begin{cases} 
\mathbb x = - \mathbb z\\
\mathbb y=0
\end{cases} \Rightarrow(\mathbb x, \  0,\  - \mathbb x),\  \mathbb x\  é\  variável\  livre!$$
>
>Então, a base de $Ker(T)$ será $\braket {(1,\ 0,\ -1)}$ e a $dim\ Ker(T)=1$!
>Em seguida, achamos a $Im (T)$:
>
>$$T(\mathbb x_\shortmid, \mathbb y_\shortmid, \mathbb z_\shortmid) = (a,\  b) \Rightarrow
\begin{cases} 
\mathbb x_\shortmid+\mathbb z_\shortmid = a\\
\mathbb y_\shortmid = b
\end{cases} \Rightarrow $$
>
>$$\begin{bmatrix}
1&0&1\\
0&1&0
\end{bmatrix} \cdot
\begin{bmatrix}
\mathbb x_\shortmid\\
\mathbb y_\shortmid\\
\mathbb z_\shortmid
\end{bmatrix} =
\begin{bmatrix}
a\\
b
\end{bmatrix} \Rightarrow 
\begin{bmatrix}
1&0&1&\shortmid&a\\
0&1&0&\shortmid&b
\end{bmatrix}$$
>
>Como esse sistema é SPI, essa transformação consegue gerar todo o espaço vetorial de $ℝ^2$, que é o contradomínio da transformação, e por isso qualquer base de $ℝ^2$ é base de $Im (T)$ e sua dimensão é a mesma de $ℝ^2$ que é $2$.

Existem algumas características importantes associadas à dimensão do Núcleo e à dimensão da Imagem. Mais notoriamente temos:

1. Se e somente se $dim\ Ker(T)=0$, $T$ será injetora. Ou seja, se $Ker(T)=\set 0$ (só contém o vetor nulo e por tanto tem $dim=0$), então $T$ é injetora e se $T$ for injetora, então $Ker(T)=\set{0}$ .
2. Para uma transformação $T:𝕍 \rightarrow 𝕎$, se e somente se $dim\ Im(T)= dim\ 𝕎$,  $T$ será sobrejetora. Ou seja, se $dim\ Im(T)= dim\ 𝕎$, então $T$ é sobrejetora e se $T$ for sobrejetora, então $dim\ Im(T)= dim\ 𝕎$.
3. Para uma transformação $T:𝕍 \rightarrow 𝕎$, sempre vale a soma $dim\ 𝕍=dim\ Ker(T)+dim\ Im(T)$.

[^1]: [Operadores Lineares.pdf](<Operadores Lineares.pdf>)

[^2]: [Vetor.pdf](<Vetor.pdf>)

[^3]: [Núcleo e Imagem de uma Transformação Linear.pdf](<Núcleo e Imagem de uma Transformação Linear.pdf>)

[^4]: [Bases.pdf](<Bases.pdf>)
