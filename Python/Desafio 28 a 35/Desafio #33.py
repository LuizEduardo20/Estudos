a = int(input('Primeiro Número: '))
b = int(input('Segundo Número: '))
c = int(input('Terceiro Número: '))

menor = a

if b < a and b < c:
    menor = b

elif c < a and c < b:
    menor = c

maior = a

if b > a and b > c:
    maior = b

elif c > a and c > b:
    maior = c

else:
    print('Nenum valor foi digitado...')

print('O Menos valor digitado foi {}'.format(menor))
print('O Maior valor digitado foi {}'.format(maior))