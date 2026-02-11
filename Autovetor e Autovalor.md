## 1. Autovetor
Um **Autovetor**, também chamado de **Vetor Característico** é um vetor que ao se aplicar um [Operador Linear](<Operadores Lineares.md>) gera um vetor na mesma direção que ele (ou seja, gera um vetor na mesma reta de suporte) e é diferente do vetor nulo. Algebricamente, isso é escrito como:

$$ T(v)= \lambda \cdot v,v \ne 0 $$

Em que $\lambda \in \mathbb R$, o que significa que $`\lambda`$ é um escalar.

>[!important]
>**Vetor fixo e Autovetor**\
>Todo vetor que após ser aplicado um operador linear resulta nele mesmo é chamado de **Vetor Fixo**.
>**Autovetores** são vetores fixos não nulos, ou seja, são todos os vetores fixos, exceto o vetor nulo.

## 2. Autovalor
Autovalores são escalares aos quais os vetores característicos são associados. Pela definição anterior de autovetor, $T(v)=\lambda \cdot v$, eles seriam o $`\lambda`$ da equação e diz-se que " 'lambda' é um autovalor de 'T' " e que " 'v' é um autovetor de 'T' associado à 'lambda' ". 

>[!warning]
>**$\lambda$ pode ser igual a $0$**\
>Enquanto $v$ não pode ser igual a $0$ (não pode ser o vetor nulo), por não convir achar os escalares que ao serem multiplicados pelo vetor nulo gerariam um múltiplo do vetor nulo (porque todos eles fazem isso), o $\lambda$ pode ser igual a $0$ ($\lambda$ pode ser numericamente igual a $0$).

## 3. Como achar autovetores e autovalores de uma Matriz
Agora que sabemos o que são autovetores e autovalores, é preciso saber como achá-los.

O primeiro passo para fazer isso é achando o chamado **Polinômio Característico** da [Matriz](<Matriz.md>) $A$, que é escrito como:

$$ P(\lambda)=det(A-\lambda \cdot I) $$

E em seguida é achado as raízes desse polinômio, que são os autovalores de $A$. Algebricamente, tem-se que:

$$ P(\lambda)=0 \Rightarrow S=\set {\lambda_1,\ \lambda_2,\ \lambda_3,\ldots ,\ \lambda_n} $$

Em que $\lambda_i$ são os autovalores de $`A`$ e $S$ é o conjunto de raízes de $`P(\lambda)`$

>[!warning]
>**A quantidade de autovalores sempre é igual a dimensão do domínio e do contradomínio de $T$**\
>Como vimos no começo tanto o domínio quanto o contradomínio tem a mesma dimensão $n$ então tanto faz qual dos dois seja usado para achar a quantidade de autovalores de $T$.
>
>Além disso, os autovalores de  $T$ podem ser numericamente iguais, ou seja, pode ser que o $P(\lambda)$ tenha algumas raízes iguais, dois $1's$ por exemplo. Mas isso **NÃO** significa que essa transformação tenha menos que $n$ autovalores!

Agora com os autovalores em mãos, podemos achar a "forma" que os autovetores tem, o que significa que será necessário achar os autovetores associados a cada autovalor distinto. Para isso devemos, primeiramente, substituir o $\lambda$ pelo autovalor que estamos usando na matriz:

$$A_{\shortmid} = [A-\lambda_i\cdot I_n]$$

Após isso, fazemos o [mesmo processo que fariamos para achar os vetores da Ker(T)](<Núcleo e Imagem de uma Transformação Linear.md>), ou seja, montamos uma matriz ampliada $[A_\shortmid|0]$ e usamos as operações elementares  para achar os vetores que gerariam o espaço vetorial. Os vetores resultante desse processo é o autovetor associado ao $\lambda_i$.
