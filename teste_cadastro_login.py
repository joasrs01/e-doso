from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import time

driver = webdriver.Chrome()
driver.get("http://127.0.0.1:3000/curso/")

time.sleep(3)
botao_login = driver.find_element(By.XPATH, '//*[@id="ul-navbar"]/li[3]/a')
botao_login.click()

time.sleep(2)
campo_nome = driver.find_element(By.XPATH, '//*[@id="nome"]')
campo_nome.send_keys("Fulano")

time.sleep(2)
campo_email = driver.find_element(By.XPATH, '//*[@id="email"]')
campo_email.send_keys("fulano@detal.com")

time.sleep(2)
campo_user = driver.find_element(By.XPATH, '//*[@id="login"]')
campo_user.send_keys("teste_1")

time.sleep(2)
campo_senha = driver.find_element(By.XPATH, '//*[@id="senha"]')
campo_senha.send_keys("123456")

time.sleep(3)
botao = driver.find_element(By.XPATH, '//*[@id="form-usuario"]/input')
botao.click()

time.sleep(10)
driver.quit()
