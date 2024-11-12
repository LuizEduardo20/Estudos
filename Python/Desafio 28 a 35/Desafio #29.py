velocidade = int(input('Qual é a velocidade atual do carro? '))

if velocidade > 80:
    print('Multado!\nVocê excedeu o limite de velocidade permitido (80km/h)')
    multa = (velocidade-80) * 7
    print('Você deve pagar uma multa de R${:.2f}'.format(multa))

else:
    print('Tenha um bom dia e dirija com segurança')