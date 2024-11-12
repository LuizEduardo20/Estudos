r1 = float(input('primeiro Segmento: '))
r2 = float(input('Segundo Segmento: '))
r3 = float(input('Terceiro Segmento: '))

if r1 < r2 + r3 and r2 < r1 + r3 and r3 < r1 + r2:
    print('Os segmentos acima, Forman um triangulo')

else:
    print('Os segmentos acima, Não forma um triangulo')