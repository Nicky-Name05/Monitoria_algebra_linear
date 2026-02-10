Primeiro, antes de se escolher qual dos métodos usar, o sistema deve ser escrito na sua forma matricial:

$$
[A]*[X]=[B]
$$

Em que $A$ é a matriz dos coeficientes, $X$ é a matriz das incógnitas e $B$ é a matriz dos resultados.

>[!important] Cada coluna da Matriz Característica contém os coeficientes de uma das variáveis da matriz das variáveis
>A primeira coluna de $A$ contém os coeficientes da primeira variável da matriz $X$, a segunda coluna contém os coeficientes da segunda variável de $X$ e assim por diante.


>[!example] Exemplo:
>
>$$\begin{empheq}[left=\empheqlbrace]{align}
x + y = 3 \\
x + 2y = 5
\end{empheq}
\Rightarrow 
\begin {bmatrix} 
1 & 1\\
1 & 2
\end {bmatrix} 
\begin {bmatrix} 
x\\
y
\end {bmatrix} =
\begin {bmatrix} 
3\\
5
\end {bmatrix} $$
>
>$$ [A] =
\begin {bmatrix} 
1 & 1\\
1 & 2
\end {bmatrix} ,\ [X] =
\begin {bmatrix} 
x\\
y
\end {bmatrix} \ e\ [B] =
\begin {bmatrix} 
3\\
5
\end {bmatrix} $$
## 1. Método de Crammer
O método de Crammer usa determinantes para resolver o sistema, começando pelo cálculo determinante da matriz dos coeficientes, também chamada de **Matriz Característica** neste caso.

Após achar o $det(A)$, acha-se os valores de cada uma variáveis dividindo $det(A_x)$ por $det(A)$, em que $A_x$ é uma matriz construída substituindo a coluna que contém os coeficientes da variável em questão pelos resultados do sistema.

>[!attention] Crammer só pode ser usado em SPDs
>Sistemas que em o determinante da matriz característica não pode ser calculado (a matriz característica $A$ não é quadrada, por exemplo) ou que $det(A)=0$  **NÃO PODEM** ser resolvidos por Crammer 

>[!example] Exemplo:
>
>$$\begin{empheq}[left=\empheqlbrace]{align}
x + y = 3 \\
x + 2y = 5
\end{empheq}
\Rightarrow 
\begin {bmatrix} 
1 & 1\\
1 & 2
\end {bmatrix} 
\begin {bmatrix} 
x\\
y
\end {bmatrix} =
\begin {bmatrix} 
3\\
5
\end {bmatrix} $$
>
>$$ det(A) =
\begin {vmatrix} 
1 & 1\\
1 & 2
\end {vmatrix} = 1 \Rightarrow$$
>$$\Rightarrow
\begin{empheq}[left=\empheqlbrace]{align}
x = \frac {
\begin {vmatrix} 
3 & 1\\
5 & 2
\end {vmatrix} } {det(A)} = \frac 1 1 = 1\\
y = \frac {
\begin {vmatrix} 
1 & 3\\
1 & 5
\end {vmatrix} } {det(A)} = \frac 2 1 = 2
\end {empheq}
\Rightarrow$$
>
>$$ \Rightarrow 
S= (1,2) $$

## 2. Método de Gauss-Jordan
Primeiramente, é formada a matriz ampliada $[A|B]$, em que $A$ é a matriz dos coeficientes, | é uma linha tracejada e $B$ é a matriz dos resultados, ou apenas matriz resultado.

Em seguida, é achado a matriz escalonada da matriz ampliada $[A|B]$. A matriz na forma escada, ou matriz escalonada, é definida como uma matriz que todos os elementos abaixo de seus pivôs ou são $0$ ou não existem (caso seja a última linha da matriz).

>[!important] Pivôs da matriz
>Os pivôs são o primeiro elemento diferente de zero de cada linha da matriz. 
>>[!attention] Nem toda linha tem pivô.
>> Caso a linha seja nula, ela não terá pivô. Linhas sem pivôs são trocadas de lugar para ficar na parte de baixo de uma matriz escalonada, isso é feito usando a operação elementar de permutação de linhas ($L_i\leftrightarrow L_j$).
>
>>[!attention] Pivôs em uma matriz escalonada
>> Numa matriz escalonada, os pivôs sempre estão mais à direita que do pivô da linha anterior

>[!example] Exemplo de Matrizes Escalonadas:
>$$
\begin {bmatrix} 
1 & 1\\
0 & 2
\end {bmatrix}, \ 
\begin {bmatrix} 
1 & 1 & 0\\
0 & 1 & 4\\
0 & 0 & 6
\end {bmatrix}, \ 
\begin {bmatrix} 
18 & 1 & 0 & 9\\
0 & 1 & 4 & 3\\
0 & 0 & 6 & 2
\end {bmatrix}, \ 
\begin {bmatrix} 
1 & 4 & 0\\
0 & 8 & 4\\
0 & 0 & 0
\end {bmatrix}, \ 
\begin {bmatrix} 
19 & 6 & 5 & 2\\
0 & 3 & 4 & 3\\
0 & 0 & 0 & 2
\end {bmatrix}$$

Para tornar uma matriz em sua forma escalonada, são feitas operações elementares começando do elemento $a_{11}$ como primeiro pivô e zerando os elementos abaixo dele. Em seguida, analisa-se a segunda linha tem pivô e, se tiver, é zerado os elementos abaixo dele também por operações elementares. Esse processo é repetido até que todas as linhas sejam analisadas e é chamado de **Escalonamento** ou de **Eliminação Gaussiana**.

>[!info] Operações Elementares
>As operações elementares são operações feitas **somente** entre linhas, semelhantes as operações feitas para calcular um determinante pelas propriedades 1 (Teorema de Jacob) e 2 (Permutação entre linhas ou colunas). 
>Elas são as seguintes:
> 1. Uma linha pode ser multiplicada por um escalar ($L_i \rightarrow k*L_i$, em que $k$ é um escalar qualquer) 
> 2. Uma linha pode ser somada ou subtraída por um múltiplo de outra linha  ($L_i \rightarrow L_i + k*L_j$, em que $k$ é um escalar qualquer) 
> 3. Uma linha pode trocar de lugar com outra - permutar entre si ($L_i\leftrightarrow L_j$) 
> 4. Se $B$ é a matriz que resulta de $A$ após uma série de operações elementares, diz-se que $A$ e $B$ são linhas semelhantes (matematicamente: $A \sim B$).

>[!example] Exemplo:
>$$\Newextarrow{\xsim}{5,10}{0x223D}
 [A] =
\begin {bmatrix} 
1 & 1\\
1 & 2
\end {bmatrix} \xsim {L_2 
\rightarrow \ L_2\ -\ L_1} 
\begin {bmatrix} 
1 & 1\\
0 & 1
\end {bmatrix} = [B] \Rightarrow
[A]\sim [B] $$
>Diz-se que $B$ é a matriz linha semelhante forma escalonada de $A$, ou simplesmente $B$ é a forma escalonada de $A$.

>[!attention] Toda matriz é linha semelhante à **APENAS UMA** matriz escalonada

Após achar a forma escalonada da matriz , são feitas mais operações elementares para achar a matriz linha reduzida da forma escalonada de $[A|B]$. A matriz linha reduzida é definida como uma matriz escalonada  cujos pivôs são todos iguais a $1$ e todos os elementos acima de um pivô são $0$.

>[!example] Exemplo de Matrizes linha reduzida:
>$$
\begin {bmatrix} 
1 & 0\\
0 & 1
\end {bmatrix}, \ 
\begin {bmatrix} 
1 & 0 & 0\\
0 & 1 & 0\\
0 & 0 & 1
\end {bmatrix}, \ 
\begin {bmatrix} 
1 & 8 & 0 & 0\\
0 & 0 & 1 & 0\\
0 & 0 & 0 & 1
\end {bmatrix}, \ 
\begin {bmatrix} 
1 & 0 & 5\\
0 & 1 & 4\\
0 & 0 & 0
\end {bmatrix}, \ 
\begin {bmatrix} 
1 & 0 & 5 & 0\\
0 & 1 & 4 & 0\\
0 & 0 & 0 & 1
\end {bmatrix}$$

Essa nova matriz é chamada de **Matriz escalonada linha reduzida** (ou forma escada linha reduzida ou apenas linha reduzida), e cada uma das colunas com pivô representa uma variável não livre. 

>[!attention] Toda matriz é linha semelhante à **APENAS UMA** matriz linha reduzida

>[!info] Posto e Nulidade
>Ao tornar uma matriz dos coeficientes $[A]$ em sua forma escada linha reduzida $[A_\shortmid]$ , a quantidade de linhas não nulas, ou seja, não compostas apenas por $0s$ é chamada de **POSTO** ($P$) e a **NULIDADE** ($N$) é a diferença do posto pela quantidade de variáveis do sistemas.
>Caso a nulidade seja $0$, o sistema é SPD. 
>>[!important] Nulidade diferente de $0$ na matriz ampliada linha reduzida $[A_\shortmid |B_\shortmid]$
>>Quando a nulidade é diferente de $0$, o sistema é ou SI ou SPI
>>Se na matriz linha reduzida $[A_\shortmid |B_\shortmid]$, a matriz $A_\shortmid$ tenha mais linhas nulas que a matriz $B_\shortmid$, o sistema é um **SI**.
>>Se na matriz  $[A_\shortmid |B_\shortmid]$,  $[A_\shortmid]$ e $[B_\shortmid]$ tenham a mesma quantidade de linhas nulas, o sistema é um SPI e, portanto, é solucionável.

Resumindo, o método de Gauss-Jordan usa operações elementares para reduzir a matriz ampliada $[A|B]$ à sua forma escada e, em seguida, usa ainda mais operações elementares para torná-la em sua forma escalonada linha reduzida.

>[!example] Exemplo:
>$$\Newextarrow{\xsim}{5,10}{0x223D}
\begin{empheq}[left=\empheqlbrace]{align}
x + y = 3 \\
x + 2y = 5
\end{empheq}
\Rightarrow 
\begin {bmatrix} 
1 & 1\\
1 & 2
\end {bmatrix} 
\begin {bmatrix} 
x\\
y
\end {bmatrix} =
\begin {bmatrix} 
3\\
5
\end {bmatrix} $$
>Acha-se a matriz ampliada $[A|B]$ e sua forma escalonada
>$$ [A|B] =
\begin {vmatrix} 
1 & 1 \shortmid & 3\\
1 & 2\shortmid & 5
\end {vmatrix} 
\xsim {L_2 \rightarrow L_2-L_1} 
\begin {vmatrix} 
1 & 1 \shortmid & 3\\
0 & 1\shortmid & 2
\end {vmatrix}$$
>Foi escalonada a matriz, agora ela será reduzida a linha reduzida:
>$$
\begin {vmatrix} 
1 & 1 \shortmid & 3\\
0 & 1\shortmid & 2
\end {vmatrix}
\xsim {L_1 \rightarrow L_1-L_2} 
\begin {vmatrix} 
1 & 0 \shortmid & 1\\
0 & 1\shortmid & 2
\end {vmatrix}$$
>O posto é $2$ (são duas linas não nulas), e a nulidade é $0$ ($p-2=2-2=0$), o sistema é um SPD.
>$$
\begin {vmatrix} 
1 & 0 \shortmid & 1\\
0 & 1\shortmid & 2
\end {vmatrix} 
\begin{empheq}[left=\empheqrbrace]{align}
x + 0y = 1 \\
0x + y = 2
\end{empheq} \Rightarrow x=1;y=2 \Rightarrow$$
>$$ \Rightarrow
S= (1,2) $$
