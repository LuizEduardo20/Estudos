num = int(input('Me diga um número qualquer: '))

resultado = num % 2

if resultado == 0:
    print('O Número {} é PAR'.format(num))

else:
    print('O Número {} é ÍMPAR'.format(num))