import math

ang = float(input('Digite o Ângulo que você deseja: '))

seno = math.sin(math.radians(ang))
print('O Ângulo de {} tem o Seno de {:.2f}'.format(ang, seno))

cos = math.cos(math.radians(ang))
print('O Ângulo de {} tem o Cosseno de {:.2f}'.format(ang, cos))

tan = math.tan(math.radians(ang))
print('Ângulo de {} tem a Tangente de {:.2f}'.format(ang, tan))