
a = int(input("Primer número: "))
b = int(input("Segundo número: "))

if a > b:
    a, b = b, a

print(a, b)