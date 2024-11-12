from random import randint

print('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
print('Vou Pensar em um número emtre 0 e 5. Tente Advinhar...')
print('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')

num = int(input('Em que Número eu pensei? '))

if num == randint(0, 5):
    print('Parabens, Você acertou')

else:
    print('Que pena, você errou')