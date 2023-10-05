import time as sleep_time
from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()

driver.get("https://fomulario-automatizar-rb73.vercel.app/")

sleep_time.sleep(2)

name = driver.find_element(By.ID, "name")
name.send_keys("Samuel de Freitas Souza")

sleep_time.sleep(1)

email = driver.find_element(By.ID, "email")
email.send_keys("ajisdnaisd@asdiansd.com.br")

sleep_time.sleep(1)

telefone = driver.find_element(By.ID, "telefone")
telefone.send_keys("(85)9 9935-2437")

sleep_time.sleep(1)

endereco = driver.find_element(By.ID, "endereco")
endereco.send_keys("asdadasd,2341 - CE")

sleep_time.sleep(1)
botao = driver.find_element(By.ID, "button")
botao.click()


input("Pressione Enter para fechar o navegador...")


driver.quit()