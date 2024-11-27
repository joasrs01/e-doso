from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import time

driver = webdriver.Chrome()
driver.get("http://127.0.0.1:3000/curso/")

url_inicial = driver.current_url
usuario = "Fulano teste"

time.sleep(1)
botao_login = driver.find_element(By.XPATH, '//*[@id="ul-navbar"]/li[3]/a')
botao_login.click()

time.sleep(1)
campo_nome = driver.find_element(By.XPATH, '//*[@id="nome"]')
campo_nome.send_keys(usuario)

time.sleep(1)
campo_email = driver.find_element(By.XPATH, '//*[@id="email"]')
campo_email.send_keys("fulano@detal.com5s779")

time.sleep(1)
campo_user = driver.find_element(By.XPATH, '//*[@id="login"]')
campo_user.send_keys("teste_156ss77")

time.sleep(1)
campo_senha = driver.find_element(By.XPATH, '//*[@id="senha"]')
campo_senha.send_keys("123456ss")

time.sleep(1)
botao = driver.find_element(By.XPATH, '//*[@id="form-usuario"]/input')
botao.click()

time.sleep(1)
assert url_inicial == driver.current_url, f"Erro: O cadastro não foi efetuado!!"

time.sleep(1)
usuario_logado = driver.find_element(By.XPATH, '//*[@id="nome-usuario"]')

assert usuario_logado.text == usuario, f"Erro: Usuário logado é '{usuario_logado.text}', mas deveria ser '{usuario}'"

time.sleep(2)
driver.quit()
