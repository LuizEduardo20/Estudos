kilometros = float(input('Qual é a distancia da sua viagem: '))

if kilometros <= 200:
    preco = kilometros - 200 * 0.45
    print('Você esta preste a começar uma viagem de {}'.format(kilometros))
    print('O preço da sua viagem será de R${:.2f}'.format(preco))

else:
    preco = kilometros * 0.45
    print('Você esta preste a começar uma viagem de {}'.format(kilometros))
    print('O preço da sua viagem será de R${:.2f}'.format(preco))