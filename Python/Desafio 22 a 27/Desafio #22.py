nome = str(input('Digite seu nome completo: '))

print('Analisando seu nome...')
print('Seu nome maiúsculo é {}'.format(nome.upper()))
print('Seu nome minúsculo é {}'.format(nome.lower()))
print('Seu nome tem ao todo tem {} letras'.format(len(nome)))
print('Seu primeiro nome tem {} letras'.format(nome.find(' ')))