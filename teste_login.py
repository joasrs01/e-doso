from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import time

driver = webdriver.Chrome()
driver.get("http://127.0.0.1:3000/curso/")

url_inicial = driver.current_url

time.sleep(1)
botao_login = driver.find_element(By.XPATH, '//*[@id="ul-navbar"]/li[2]/a')
botao_login.click()

time.sleep(1)
campo_usuario = driver.find_element(By.XPATH, '//*[@id="form-login"]/div[1]/input')
campo_usuario.send_keys("luanmello")

time.sleep(1)
campo_senha = driver.find_element(By.XPATH, '//*[@id="form-login"]/div[2]/input')
campo_senha.send_keys("123456")

time.sleep(1)
botao = driver.find_element(By.XPATH, '//*[@id="form-login"]/input')
botao.click()

time.sleep(1)
assert url_inicial == driver.current_url, f"Erro: O login não foi efetuado!!"

time.sleep(2)
driver.quit()
