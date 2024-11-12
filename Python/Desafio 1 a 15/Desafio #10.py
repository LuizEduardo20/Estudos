real = float(input('Quanto dinheiro vc tem? '))

dolar = real / 5.11

print('Com R${} você pode comprar US${:.2f}'.format(real, dolar))