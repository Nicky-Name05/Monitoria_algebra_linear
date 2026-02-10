## 1. Método da adjunta

Primeiramente, define-se adjunta de $A$, ou matriz adjunta de $A$, como a transposta da matriz dos cofatores de $A$ e ela pode ser representada das seguintes formas, para uma matriz qualquer $A_{nXn}$:

$$adj(A)=[\Delta_{ij}]^t=
\begin {bmatrix} 
\Delta_{11}&\Delta_{12}&...&\Delta_{1n}\\
.&.\\
.& &.\\
.& & &.\\
\Delta_{n1}&\Delta_{n2}&...&\Delta_{nn}
\end {bmatrix}^t $$

Sabendo que $A \cdot adj(A)= det(A)I_n$, temos:

$$A \cdot adj(A) \cdot \frac  1{det(A)} = I_n\Rightarrow A^{-1} \cdot A \cdot adj(A) \cdot \frac 1{det(A)} = 
A^{-1} \cdot I_n\Rightarrow$$

$$\Rightarrow I_n \cdot adj(A) \cdot \frac 1{det(A)}=A^{-1}$$

>[!waarning] Para existir inversa de $A$, o determinante de $A$ deve ser diferente de $0$. 

Formula geral:

$$A^{-1}= \frac1{det(A)} \cdot {adj(A)}$$

Para uma matriz $A_{2X2}$:

$$Sendo\ A_{2X2}=
\begin {bmatrix}
a&b\\
c&d
\end {bmatrix},$$

$$A^{-1}=  \frac 1{det(A)} \cdot 
\begin {bmatrix}
d&-b\\
-c&a
\end {bmatrix}= \frac 1{a \cdot d-c \cdot b} \cdot 
\begin {bmatrix}
d&-b\\
-c&a
\end {bmatrix}=
\begin {bmatrix}
\frac d{a \cdot d-c \cdot b}&-\frac b{a \cdot d-c \cdot b}\\
-\frac c{a \cdot d-c \cdot b}&\frac a{a \cdot d-c \cdot b}\\
\end {bmatrix}$$

## 2. Método por operações elementares

É representado da seguinte forma para uma matriz qualquer $A_{nXn}$:

$$[A|I_n]\sim[I_n|A^{-1}],$$

Em que $\sim$ indica que $[A|I_n]$ e $[I_n|A^{-1}]$ são linha semelhantes e | é uma linha tracejada. Essa forma consiste em fazer diversas operações elementares semelhantes as operações elementares feitas no método de resolução de sistemas lineares de [Gauss-Jordan](<Métodos de resolução de Sistemas Lineares.md>) com o objetivo de transformar a matriz esquerda na matriz identidade.

>[!note] Exemplo
>
>$$Seja\ A_{2X2} = 
\begin {bmatrix}
a&b\\
c&d\\
\end {bmatrix},$$
>
>$$[A|I_n]\sim[I_n|A^{-1}]$$
>
>$$[A|I_2]=
\begin {bmatrix}
a&b& \shortmid & 1&0\\
c&d& \shortmid & 0&1\\
\end {bmatrix}\Rightarrow $$
>
>$$\Rightarrow
\begin {bmatrix}
a&b& \shortmid & 1&0\\
c&d& \shortmid & 0&1\\
\end {bmatrix}
\sim 
\begin {bmatrix}
1&0& \shortmid & \frac d{a \cdot d-c \cdot b}&-\frac b{a \cdot d-c \cdot b}\\
0&1& \shortmid & -\frac c{a \cdot d-c \cdot b}&\frac a{a \cdot d-c \cdot b}\\
\end {bmatrix}\Rightarrow $$
>
>$$\Rightarrow
\begin {bmatrix}
1&0& \shortmid & \frac d{a \cdot d-c \cdot b}&-\frac b{a \cdot d-c \cdot b}\\
0&1& \shortmid & -\frac c{a \cdot d-c \cdot b}&\frac a{a \cdot d-c \cdot b}\\
\end {bmatrix}
= [I_2|A^{-1}]$$
