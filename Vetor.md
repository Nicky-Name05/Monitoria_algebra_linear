Vetores são comumente representados por segmentos direcionados (o vetor velocidade é escrito como $\overrightarrow V = x \cdot\hat i + y \cdot \hat j + z \cdot\hat k$, por exemplo) na Física e na Engenharia com sentido, direção e módulo e são escritos com letra maiúscula (ou seja, são uma "seta" e seu nome é uma letra maiúscula). Na Álgebra Linear, eles são geralmente tratados como [matrizes linhas](<Tipos Especiais de Matrizes.md>) ($`v = \begin{bmatrix} x& y& z \end{bmatrix}`$) ou [matrizes colunas](<Tipos Especiais de Matrizes.md>) ($`u = \begin{bmatrix} x\\ y\end{bmatrix}`$) ou ainda como enúplas ordenadas ($`v = (x,\ y,\ z)`$) e são escritos com letra minúscula.

>[!important]
>**De forma mais geral, um vetor $v$  é um elemento que esta contido em um espaço vetorial $\mathbb V$.**\
>Nessa matéria, alguns conjuntos serão tratados como vetores, ainda que não sejam da mesma natureza, por se comportam de maneira semelhante aos vetores no espaço.
>Esses conjuntos são chamados de **Espaços Vetoriais**

As formas mais comuns de se representar um vetor $v$ na Álgebra linear são:

$$ v = \begin{bmatrix} x\\
y\\ 
z \end{bmatrix},\
v = \begin{pmatrix} x\\ 
y\\ 
z \end{pmatrix}\
e\; \ v = (x,\ y,\ z), $$

Ainda que vetores possam ter mais de 3 componentes dependendo do espaço vetorial que estão contidos, nesse caso apenas aumenta-se a enúpla ("n-úpla") ou a matriz para caber todas elas.

>[!important]
>**Vetor Nulo**\
>Vetor nulo é o vetor com todas as suas componentes iguais a $0$ ($(0,0)$ para $\mathbb R^2$, por exemplo)
>
## Espaço Vetorial
Para um conjunto $\mathbb V$  poder ser considerado um Espaço Vetorial, ele deve ser um conjunto não vazio ($\mathbb {V} \ne Ø$), com duas operações (uma operação de soma $\set{\mathbb V \times \mathbb V \rightarrow \mathbb V}$, muitas vezes representada por $\oplus$; e uma de multiplicação por escalar $\set{\mathbb R \times \mathbb V \rightarrow \mathbb V}$, muitas vezes representada por $\otimes$) que respeite as seguintes propriedades para $v,\;u\;e\;w\; \in\; \mathbb V$ ($v,\;u\;e\;w$ existem em $\mathbb V$) e $a\;e\;b\; \in\; \mathbb R$ ($a\;e\;b$ existem em $\mathbb R$):

1.  $(u \oplus v) \oplus w = u \oplus (v \oplus w)$
2. $u \oplus v=v \oplus u$
3. Existe um $ \overrightarrow 0$, tal que $\overrightarrow 0 \oplus v = v$ é uma afirmação verdadeira (Elemento Neutro da Adição)
4. Existe um $-v$, tal que $v \oplus (-v) = \overrightarrow 0$ é uma afirmação verdadeira e $\overrightarrow 0$ é o Elemento Neutro da Adição
5. $a\otimes(u\oplus v)=a\otimes u \oplus a\otimes v$
6. $(a+b)\otimes v= (a\otimes v) \oplus (b\otimes v)$
7. $(ab)\otimes v=a\otimes(b\otimes v)$
8. $\overrightarrow 1 \otimes v=v$ (Elemento Neutro da Multiplicação)

>[!important]
>**As operações de soma e multiplicação por escalar podem ser diferentes da padrão**\
> Alguns Espaços Vetoriais definem sua própria operação de soma e de multiplicação por escalar. Caso isso aconteça, deverá ser usado as definições dadas.
> Caso não seja definido as operações, a soma é feita da mesma forma que a soma de matrizes (soma termo a termo) assim como o produto escalar é feito do mesmo jeito que o produto de uma matriz por um escalar (todos os termos da matriz são multiplicados pelo escalar) e são chamados de soma padrão e multiplicação por escalar padrão
>
>Quando a adição vetorial e a multiplicação por escalar são a padrão também costuma-se usar os símbolos $+$ e $\cdot$ (seus símbolos normais).

>[!warning]
> **$\overrightarrow 0$ e $\overrightarrow 1$ podem ser diferentes dos escalares $0$ e $1$**\
>Isso costuma acontecer quando as operações de soma vetorial e produto por escalar são diferentes da padrão, mas também pode acontecer dependendo de como as "coordenadas"  do vetor são formadas.

>[!note]
>**Exemplo**\
>Suponha um conjunto $\mathbb V = (0,+\infty)$, com as operações $x\oplus y= x\cdot y$ e $\lambda \otimes x= x^\lambda$, é possível considerá-lo um Espaço Vetorial, pois:  
>
>$$Seja\; v \ e \ u \in \mathbb V \ e\ \lambda,\lambda_2 \in \mathbb R,$$ 
>
>$u \oplus v = u\cdot v = v \cdot u = v \oplus u$ (Segunda condição é atendida. Por indução a Primeira também é).
>
>$\overrightarrow0\oplus v=v \Rightarrow \overrightarrow  0\cdot v = v\Rightarrow \overrightarrow  0 = 1$ (Terceira condição é atendida)
>
>$v\oplus (-v)= \overrightarrow  0\Rightarrow v\cdot (-v) = 1\Rightarrow (-v) = \frac 1 v\Rightarrow -v \in V$ (Quarta condição é atendida)
>
> $\lambda\otimes(u\oplus v)=(u \cdot v)^{\lambda}=(u^{\lambda})\cdot (v^{\lambda})=(\lambda \otimes u )\oplus (\lambda \otimes v$ )(Quinta condição é atendida)
>
> $(\lambda + \lambda_2)\otimes v= v^{\lambda+\lambda_2}=v^{\lambda}\cdot v^{\lambda_2}=(v^{\lambda})\oplus(v^{\lambda_2})=(\lambda\otimes v)\oplus(\lambda\otimes v)$ (Sexta condição é atendida)
>
>$(\lambda \cdot \lambda_2)\otimes v= v^{\lambda\cdot\lambda_2}=(v^{\lambda_2})^{\lambda}=(\lambda_2\otimes v)^{\lambda}=\lambda\otimes(\lambda_2\otimes v)$ (Sétima condição é atendida)
>
> $\overrightarrow  1 \otimes v=v\Rightarrow  v^{\overrightarrow  1}=v\Rightarrow \overrightarrow  1= 1\Rightarrow \overrightarrow  1\in \mathbb R$ (Oitava condição é atendida).

## Subespaço Vetorial
Subespaços vetoriais são subconjuntos dos Espaços Vetoriais que, além de atenderem as condições de um Espaço Vetorial, também têm que atender as seguintes condições:
$$Seja\ \mathbb V\ um\ Espaço\ Vetorial \; e\ \mathbb W \subset \mathbb V,$$
1. Se $v$ e $u$ $\in\ \mathbb W$, $v+u \in \mathbb W$ (Diz-se que "W é fechado para soma", ou seja, a soma de qualquer vetor de $\mathbb W$ com outro vetor de $\mathbb W$ está contida em $\mathbb W$).
2. Se $v\ \in\ \mathbb W$ e $\lambda \ \in \ \mathbb R$, $\lambda \cdot v\ \in \ \mathbb W$ (Diz-se que "W é fechado para produto por escalar", ou seja, o produto de qualquer vetor de $\mathbb W$ com com um escalar está contido em $\mathbb W$).

>[!important]
>**Subespaços triviais**\
>Existem dois Subespaços Vetoriais triviais para um Espaço Vetorial $\mathbb V$ qualquer: o conjunto $\set{0}$ - que contém apenas o vetor nulo - e o próprio conjunto $\mathbb V$ 

> [!tip]
> **Não é necessário conferir as condições de Espaço Vetorial em um Subespaço Vetorial**\
> Como um Subespaço Vetorial está sempre contido em um Espaço Vetorial, todas as propriedades de um Espaço Vetorial valem para um Subespaço Vetorial dele.

>[!note]
>**Exemplo**
> 1. Sejam $\mathbb V= \mathbb R^4$ e $\mathbb W=(0,\ x_1,\ x_2, ,\ x_3)$, pode se dizer que é um Subespaço Vetorial, pois:
> $$I.\mathbb W \subset \mathbb V.$$
> $$II.\ Sejam\ u\; e\; v \in \mathbb W,$$
> $$
 u+v=(0,\ u_1,\ u_2,\ u_3)+(0,\ v_1,\ v_2,\ v_3)=(0,\ u_1+v_1,\ u_2+v_2,\ u_3+v_3),\ que\ está\ em\ \mathbb W.$$
 >$$
 III. Seja\ v \in \mathbb W\ e\ \lambda \in \mathbb R,$$
 >$$\lambda \cdot v= \lambda \cdot (0,\ v_1,\ v_2,\ v_3)= (0,\ \lambda v_1,\ \lambda v_2,\ \lambda v_3),\ que\ está\ em\ \mathbb W.$$
 >---
> 2. Sejam $\mathbb V = \mathbb R^2$ e $\mathbb W=(x, x^2)$, não se pode dizer que $\mathbb W$ é um Subespaço vetorial, pois:
> $$I. Apesar\ que\ \mathbb W \subset \mathbb V.$$
> $$II. u+v= (u_1, u_1^2)+(v_1, v_1^2)=(u_1+v_1, u_1^2+v_1^2),\ que\ NÃO\ está\ em\ \mathbb W.$$

