from datetime import date

ano = int(input('Que ano quer analisar? Coloque 0 para analisar o ano atual: '))

if ano == 0:
    ano = date.today().year

if ano % 4 and ano % 100 !=0 or ano % 400 == 0:
    print('O Ano {} é Bissexto'.format(ano))

else:
    print('O Ano {}, Não é Bissexto'.format(ano))