import math

co = float(input('Comprimento do cateteto oposto: '))
ca = float(input('Comprimento do cateto adjacente'))

hi = math.hypot(co, ca)

print('A hipotenusa vai medir {:.2f}'.format(hi))