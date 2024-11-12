#Aqui ele não vai fazer a soma corretamente, por que não foi especificado o tipo primitivo.
#o programa vai fazer uma concatenação.
numero1 = input('Primeiro Número: ')
numero2 = input('Segundo Número: ')

soma = numero1 + numero2

print('A Soma Vale é', soma)


#por causa do "int"(número inteiro) ele vai fazer a soma, corretamente.
numero1 = int(input('Primeiro Número: '))
numero2 = int(input('Segundo Número: '))

soma = numero1 + numero2

print('A Soma Vale é', soma)