import pandas as pd
dados = {
    'Produto':['Arorz','Feijão','Macarrão','Café'],
    'Preço': [20.50,8.30,4.20,15.00],
    'Quantidade': [10,20,15,5]
}

tabela = pd.DataFrame(dados)

print("\n--- MINHA PLANILHA ---")
print(tabela)

valor_total = (tabela['Preço'] * tabela['Quantidade']).sum()

print(f"\nO valor total do estoque é: R${valor_total:.2f}")