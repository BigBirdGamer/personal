

#* variables
#* conditionals
#* loops
#* functions
#* arrays - list / objects

names = ["simon", "ga", "cat", "singapore", "anson road"]

ok = "yes" if len(names[0]) > 2 else "no"

def callback(name):
   return len(name)

def process(i, name):
    return  i * 10 + len(name) 

def check(name):
    return name == "simon"

print(list(map(callback, names)))
# list comprehension
x = [
    process(i, name)
    for i, name in enumerate(names) 
    if check(name)
]
print(x)