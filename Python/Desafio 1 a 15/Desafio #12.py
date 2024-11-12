preco = float(input('Qual é o preço do produto: '))

novo = preco - (preco * 5 / 100)

print('O Produto que custava R${:.2f}, na promoção com desconto de 5% vai custar R${:.2f}.'.format(preco, novo))