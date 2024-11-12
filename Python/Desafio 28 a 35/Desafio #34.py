salario = float(input('Qual é o salario do funcionario? R$'))

if salario <= 1250:
    aumento = salario + (salario * 15 / 100)
    print('Quem ganhar R${:.2f} passa a ganhar R${:.2f}'.format(salario, aumento))

else:
    aumento = salario + (salario * 10 / 100)
    print('Quem ganhar R${:.2f} passa a ganhar R${:.2f}'.format(salario, aumento))