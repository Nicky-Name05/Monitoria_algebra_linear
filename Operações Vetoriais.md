Além das operações de soma e de multiplicação, - que precisam existir em um Espaço Vetorial- existem algumas outras operações que podem ser feitas com vetores e a maioria delas são parecidas com as [operações matriciais](<Operações de Matrizes.md>) que foram vistas antes ou vão usar as operações matriciais para resolvê-las. As operações vetoriais são feitas entre elementos pertencentes a um espaço vetorial.

## 1. Soma de Vetores (caso não seja definido na questão)
A soma de vetores é feita da mesma forma que a soma de matrizes, ou seja  

>[!example] Exemplo
>
>$$Sejam\ os\  vetores\  v=(10,\  4,\ 5) \  e\  u=(2,\  7,\ 8),\ 
a\  soma\ v+u\  é:$$
>
>
>$$ \begin {bmatrix}
10\\
4\\
5
\end {bmatrix} +
\begin {bmatrix}
2\\
7\\
8
\end {bmatrix} = 
\begin {bmatrix}
10 + 2\\
4 +7\\
5 + 8
\end {bmatrix} =
\begin {bmatrix}
12\\
11\\
13
\end {bmatrix}$$

A soma vetorial também pode ser feita da seguinte forma:

$$(a_1,\  a_2,\  a_3, ..., a_n) + (b_1,\  b_2,\  b_3, ..., b_n) = (a_1+b_1,\  a_2+b_2,\  a_3+b_3, ..., a_n+b_n)$$

>[!example] Exemplo
>$$ Sejam\ os\  vetores\  v=(10,\  4,\ 5) \  e\  u=(2,\  7,\ 8),\ 
a\  soma\ v+u\  é:$$
>
>$$(10,\ 4,\ 5)+(2,\ 7,\ 8)=(10+2,\ 4+7,\ 5+8)=(12,\ 11\ 13)$$

>[!tldr] Propriedades da Soma
>1. $v+u=u+v$
>2. $(u+v)+w=u+(u+w)$
>3. $v+0=v$; (a existência de um vetor $0$ em um espaço é necessário para considerá-lo um espaço vetorial)
>4. $v-u=v+(-1*u)$; representação da subtração vetorial, visto que um vetor $-u$ é a representação de um vetor $u$ quando ele aponta para a direção contrária

Outra representação da soma de vetores Regra do Triângulo e a Regra do Paralelogramo, estudadas no ensino médio para resolução de problemas físicos usando funções trigonométricas (em específico, a Lei dos Cossenos).
## 2. Produto por Escalar (caso não seja definido na questão)
O produto de um vetor por um escalar é igual ao produto de um escalar por uma matriz e tem as mesmas propriedades. 

>[!important] Significado gráfico
>Graficamente, essa operação representam o aumento ou a redução do tamanho do vetor ou ainda a mudança de direção dele.
## 3. Produto Escalar 
O Produto Escalar é o produto de dois vetores resultando em um escalar. Algebricamente, isso é escrito como:
$$
\require{physics} \va v \vdot \va f = a;
$$
Em que $a$ é um escalar e ela pode ser resolvida das seguintes formas:
$$Sendo\ \va v = v_x\vu i+v_y\vu j+v_z\vu k\ e\  \va u=u_x\vu i+u_y\vu j+u_z\vu k,\ $$

$$\require{physics} v\vdot u=|v|\vdot|u|\vdot cos(\theta) = a; $$

 Ou:
 
$$Sendo\  v = (v_x,v_y,v_z)\ e\ u=(u_x,u_y,u_z),\ $$

$$ \require{physics} v\vdot u=|v|\vdot|u|\vdot cos(\theta) = a; $$

Em que $\theta$ é o ângulo entre os vetores; ou ainda por:

$$Sendo\  v = (v_x,v_y,v_z)\ e\ u=(u_x,u_y,u_z),$$

$$ \require{physics} v\vdot f \xlongequal n a,\ em\ que\ 'a'\ vem\ de\
\begin{bmatrix}
v_x&v_y&v_z
\end{bmatrix}\vdot
\begin{bmatrix}
u_x\\ u_y\\ u_z
\end{bmatrix} = [a] $$

>[!attention] **Produto Escalar** $\ne$ **Produto POR Escalar**
>Produto Escalar resulta em um número, Produto **POR** Escalar resulta em um vetor

>[!important] Significado gráfico
>Graficamente, se o resultado do produto escalar for $0$, os vetores são perpendiculares entre si.
## 4. Produto vetorial
O Produto Vetorial é o produto entre dois vetores que resulta em um outro vetor. Isso é escrito algebricamente como:

$$ Sendo\ \va v = v_x\vu i+v_y\vu j+v_z\vu k\ e\  \va u=u_x\vu i+u_y\vu j+u_z\vu k,$$

$$\require{physics} v\times u= {|v|\vdot|u|\vdot sen(\theta)};$$

Em que $\theta$ é o ângulo entre os vetores, ou como:

$$\require{physics} v\times u=
\begin{vmatrix}
\vu i& \vu j& \vu k\\
v_x&v_y&v_z\\
u_x&u_y&u_z
\end{vmatrix};$$

>[!info] Pode-se usar produto vetorial para achar a área de polígonos.
>Como quase todos os polígonos podem ser formados por uma combinação de triângulos - e por isso suas áreas podem ser escritas como a soma das áreas desse triângulos ($\sum_{i=0}^n S_{\triangle_i}$) - e a área de um triângulo pode ser escrita como $\frac {a \vdot b\vdot sen (\theta)} 2$, a área de um triângulo também pode ser escrita como:
>$$
S_{\triangle}= 
\frac 1 2 \vdot|
\begin{vmatrix}
\vu i& \vu j& \vu k\\
v_x&v_y&v_z\\
u_x&u_y&u_z
\end{vmatrix}|$$

## 5. Produto Misto
O produto misto é o produto escalar de um produto vetorial, ou seja, para realizar a operação de produto misto, deve-se primeiro realizar um produto vetorial entre dois vetores e depois realizar um produto escalar entre um terceiro vetor e o vetor resultante do produto vetorial.

Essa operação é escrita como:

$$Sejam\ \va v, \va u, \va w\ três\ vetores,$$

$$ \va v \vdot (\va u\times \va w) $$

>[!example] Exemplo
>Produto misto de $\va v=(1,3,2)$ escalar $\va u=(3,0,2)$ vetorial $\va w=(4,1,0)$:
>$$ {v_f}= 
\va v \cdot (\va u \times \va w)=
\begin{bmatrix}
1&3&2
\end{bmatrix}
\cdot
(\begin{vmatrix}
\vu i & \vu j & \vu k\\
3&0&2\\
4&1&0
\end {vmatrix}) =
\begin{bmatrix}
1&3&2
\end{bmatrix}
\cdot
((-2 \vu i,\ -8 \vu j,\ 3\vu k))
\Rightarrow$$
>
>$$ \Rightarrow
 v_f= 
\begin{bmatrix}
1&3&2
\end{bmatrix} \cdot
\begin{bmatrix}
-2\\
-8\\
3
\end{bmatrix} =
-2 -24 +6 = -20
\Rightarrow $$
>
>$$ \Rightarrow
\boxed {v_f=20} $$