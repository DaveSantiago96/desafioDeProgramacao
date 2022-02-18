import re 
password = "Ya3&ab"
flag = 0
while True:   
    if (len(password)<6): 
        flag = -1
        break
    elif not re.search("[a-z]", password): 
        flag = -1
        break
    elif not re.search("[A-Z]", password): 
        flag = -1
        break
    elif not re.search("[0-9]", password): 
        flag = -1
        break
    elif not re.search("[&_@$]", password): 
        flag = -1
        break    
    else: 
        flag = 0
        print("Senha Valida") 
        break
  
if flag ==-1: 
    print("Senha invalida") 