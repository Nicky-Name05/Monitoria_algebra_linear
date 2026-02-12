## 1. Núcleo
O Núcleo de uma [transformação linear](<Transformações Lineares.md>) $T:\ \mathbb R^n \rightarrow \mathbb R^n$ é o conjunto de vetores $v \in \mathbb R^n$ que, após aplicar $T$ neles, o vetor resultante é o vetor nulo ($T(v)=0$). 

O núcleo costuma ser escrito das  seguintes formas:

$$ N(T)\ ou\ Ker(T)$$

Nesse material será usado ambas notações, mas a principal será $Ker(T)$

>[!attention] $Ker(T) \ne \emptyset$.
>Como para toda transformação linear $T(0)=0$, todo $Ker(T)$ sempre tem pelo menos o vetor nulo. O núcleo de $T$ nunca é vazio!

Para achar o $N(T)$, é igualado o vetor resultado da transformação linear ao vetor nulo e em seguida é resolvido o sistema, ou seja, ou o $N(T)$ contém apenas o vetor nulo ou contém infinitos vetores. 

>[!important] Relação de $Ker(T)$ com funções
>Como muitas funções podem ser escritas como transformações lineares, ao achar o $Ker(T)$ dessas funções, pode-se chegar a algumas conclusões.
>Uma das mais importantes é caso $Ker(T)=\set0$, pois isso implica que $T$ é injetora. Isso será mais explicado em [Dimensão de uma Transformação Linear](<Transformações Lineares.md>).

>[!important] Como escrever o $Ker(T)$ nas respostas
>O $Ker(T)$, por ser um conjunto de vetores, pode ser escrito de diversas formas, cabendo ao escritor escolher a forma mais coerente a resposta.
>Apesar disso, como muitas vezes o $Ker(T)$ tem infinitos vetores que apresentam a mesma forma - $(x,\ y,\ 1)$ por exemplo - ele costuma ser escrito assim nas respostas:
>
>$$Ker(T)=[v], $$
>
>Em que $v$ é a forma que ele tem.

>[!example] Exemplo
>Seja a Transformação $T$ da seguinte forma: $T (x, y, z) = (x - z,\  y)$, vamos achar o $Ker(T)$:\ 
>Sabe-se que, para  $Ker(T)$, vale:
>
>$$T(x,\ y,\ z) = (0,\ 0) \Rightarrow \begin{cases}
x - z = 0 \\
y = 0
\end{cases}$$
>
>Então
>
>$$ \begin{bmatrix}
1&0&-1\\
0&1&0
\end{bmatrix} \cdot
\begin{bmatrix}
x\\
y\\
z
\end{bmatrix} =
\begin{bmatrix}
0\\
0
\end{bmatrix} \Rightarrow
\begin{bmatrix}
1&0&-1&\shortmid&0\\
0&1&0&\shortmid&0
\end{bmatrix}$$
>
>Como essa matriz já está linha-reduzida podemos concluir que
>
>$$ \begin{cases} 
x=z\\
y=0
\end{cases} \Rightarrow (z,0,z),com\ z\in\mathbb R\ é\ solução\ única \Rightarrow \boxed {Ker(T)= \set{(1,0,1)}} $$
>
## 2. Imagem
A Imagem de uma transformação linear $T:\ \mathbb V \rightarrow \mathbb W$, em que $\mathbb V\ = \mathbb R^n$ e $\mathbb W = \mathbb R^m$, é um conjunto de vetores $w \in \mathbb W$ que resultam da aplicação de $T$ em um vetor $v \in \mathbb V$ qualquer ($w \in \mathbb W$ tal que $T(v) = w$ para algum $v \in \mathbb V$)

A Imagem de $T$ é escrita como:

$$ Im(T)$$

>[!attention] $Im(T) \ne \emptyset$.
>Como para toda transformação linear $T(0)=0$ e por isso sempre terá um vetor $v \in \mathbb V$ com transformada em $\mathbb W$, toda $Im(T)$ sempre tem pelo menos o vetor nulo. A imagem de $T$ também nunca será vazia!

Para achar a imagem, o vetor resultado de $T$ é igualado a um vetor genérico e em seguida é resolvido o sistema. É necessário tomar cuidado ao solucionar o sistema, pois, para o vetor pertencer a imagem, o sistema tem que ser possível, então:

1. Normalmente é usado [Gauss-Jordan](<Métodos de resolução de Sistemas Lineares.md>) para resolver sistema, visto que é necessário achar a condição em que o sistema é possível (condição para que o vetor pertença a imagem).
2. Não é necessário achar todas as soluções do sistema, apenas as condições para que tornam o sistema consistente.

>[!important] Relação de $Im(T)$ com funções
>Como muitas funções podem ser escritas como transformações lineares, ao achar o $Im(T)$ dessas funções, pode-se chegar a algumas conclusões.
>Uma das mais importantes é caso $dim\ Im(T) = dim\ \mathbb W$, pois isso implica que $T$ é sobrejetora. Isso também será mais explicado em [Dimensão de uma Transformação Linear](<Transformações Lineares.md>).

>[!important] Como escrever o $Im(T)$ nas respostas
>O $Im(T)$, assim como $Ker(T)$, também pode ser escrito de diversas formas.
>Do mesmo jeito que o $Ker(T)$, muitas vezes o $Im(T)$ tem infinitos vetores que apresentam a mesma forma - $\set{(1,\ 0,\ 0),(0,\ 1, \ 0) }$ por exemplo - e por isso também o escreve assim nas respostas:
>
>$$Im(T)=[v], $$
>
>Em que $v$ é a forma que ele tem.

>[!example] Exemplo
>1. Seja a Transformação $T: \mathbb R^3 \Rightarrow \mathbb R^2$ da seguinte forma: $T (x, y, z) = (x - z,\  y)$, vamos achar o $Im(T)$:\ 
>Sabe-se que vale
>
>$$T(x,\ y,\ z) = (a,\ b) \Rightarrow \begin{cases}
x - z = a\\
y = b
\end{cases}\Rightarrow$$

>$$\Rightarrow
\begin{bmatrix}
1&0&-1\\
0&1&0
\end{bmatrix} \cdot
\begin{bmatrix}
x\\
y\\
z
\end{bmatrix} =
\begin{bmatrix}
a\\
b
\end{bmatrix} \Rightarrow 
\begin{bmatrix}
1&0&-1&\shortmid&a\\
0&1&0&\shortmid&b
\end{bmatrix}$$
>
>Como a nulidade dessa matriz é diferente de $0$ e o $P_{ampliada} \ne P_{coeficientes}$ (o que significa que o sistema é um SPI), essa transformação consegue gerar todo o espaço vetorial de $\mathbb R^2$, ou seja, $\boxed{Im(T)=\mathbb R^2}$.
>
>---
>2. Seja a Transformação $T: \mathbb R^3 \rightarrow \mathbb R^3$ da seguinte forma: $T (x, y, z) = (x - z,\  y, -x+y+z)$, vamos achar o $Im(T)$: \
>Sabe-se que vale
>
>$$T(x,\ y,\ z) = (a,\ b,\  c) \Rightarrow \begin{cases}
x - z = a\\
y = b\\
x+z = c
\end{cases}\Rightarrow$$
>
>$$ \Rightarrow
\begin{bmatrix}
1&0&-1\\
0&1&0\\
-1&1&1
\end{bmatrix} \cdot
\begin{bmatrix}
x\\
y\\
z
\end{bmatrix} =
\begin{bmatrix}
a\\
b\\
c
\end{bmatrix} \Rightarrow 
\begin{bmatrix}
1&0&-1&\shortmid&a\\
0&1&0&\shortmid&b\\
-1&1&1&\shortmid&c
\end{bmatrix} \xrightarrow {L_3 \rightarrow L_3+L_1}
\begin{bmatrix}
1&0&-1&\shortmid&a\\
0&1&0&\shortmid&b\\
0&1&0&\shortmid&c + a
\end{bmatrix} \xrightarrow {L_3 \rightarrow L_3-L_2}$$
>
>$$\sim
\begin{bmatrix}
1&0&-1&\shortmid&a\\
0&1&0&\shortmid&b\\
0&0&0&\shortmid&c + a - b
\end{bmatrix} \Rightarrow Nulidade \ne 0\  e \  P_{ampliada} \ne P_{coeficientes} \Rightarrow \boxed{SI!}$$
>
>Como o sistema é SI, a imagem é o conjunto de  vetores que tornam esse sistema possível:
>
>$$ c+a-b=0 \Rightarrow c+a=b\Rightarrow (a,\ b,\ c)=(a,\ c+a,\ c)= (a,\ a, \ 0) + (0,\ c,\ c) = a(1,\ 1, \ 0) + c(0, \ 1, \ 1) \Rightarrow $$
>
>$$\boxed{Im (T)= [(1, \ 1,\ 0),\ (0,\ 1,\ 1)] } $$
>
>---
>3. Seja a Transformação $T: \mathbb R^3 \rightarrow \mathbb R^3$ da seguinte forma: $T (x, y, z) = (x - z,\  y, x+z)$, vamos achar o $Im(T)$:\ 
>Sabe-se que vale
>
>$$T(x,\ y,\ z) = (a,\ b,\  c) \Rightarrow \begin{cases}
x - z = a\\
y = b\\
x+z = c
\end{cases} \Rightarrow$$
>
>$$ \Rightarrow
\begin{bmatrix}
1&0&-1\\
0&1&0\\
-1&1&1
\end{bmatrix} \cdot
\begin{bmatrix}
x\\
y\\
z
\end{bmatrix} =
\begin{bmatrix}
a\\
b\\
c
\end{bmatrix} \Rightarrow
\begin{bmatrix}
1&0&-1&\shortmid&a\\
0&1&0&\shortmid&b\\
1&0&1&\shortmid&c
\end{bmatrix} \xrightarrow {L_3 \rightarrow L_3-L_1}
\begin{bmatrix}
1&0&-1&\shortmid&a\\
0&1&0&\shortmid&b\\
0&0&2&\shortmid&c - a
\end{bmatrix} \xrightarrow {L_3 \rightarrow \frac 1 2 L_3}$$
>
>$$\sim
\begin{bmatrix}
1&0&-1&\shortmid&a\\
0&1&0&\shortmid&b\\
0&0&1&\shortmid& \frac {c - a} 2
\end{bmatrix} \xrightarrow {L_1 \rightarrow L_1+L_3}
\begin{bmatrix}
1&0&0&\shortmid&\frac {c + a} 2\\
0&1&0&\shortmid&b\\
0&0&1&\shortmid& \frac {c - a} 2
\end{bmatrix}\Rightarrow Nulidade=0\Rightarrow \boxed{SPD!}$$
>Como o sistema é SPD, a imagem é o próprio conjunto de vetores $w$ dado pela equação vetorial de $T$:
>
>$$ Im(T) = (x-z,y,x+z) = (x,\ 0,\ x) + (0,\ y,\ 0) + (-z,\ 0,\ z) = x(1,\ 0,\ 1) + y(0,\ 1,\ 0) + z(-1,\ 0,\ 1) \Rightarrow $$
>
>$$\boxed {Im(T) = [(1,\ 0,\ 1), \ (0,\ 1,\ 0),\ (-1,\ 0,\ 1)]}$$
>
>
>[!important] Sistemas SPD também podem gerar $\mathbb W$ ($T: \mathbb V \Rightarrow \boxed{\mathbb W}$)
>Se os vetores da $Im (T)$ conseguirem gerar $\mathbb W$, o conjunto $Im(T)$ será igual a $\mathbb W$ (algebricamente: $Im(T) = \mathbb W$).
