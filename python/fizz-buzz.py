# This is the classic build a string method in Python using the modulus operation

to = int(input("Range to: "))
nums = range(1, to + 1)

def fizzBuzz(num):
  string = ''
  if num % 3 == 0:
    string += 'fizz'
  if num % 5 == 0:
    string += 'buzz'
  if len(string) == 0:
    string = num

  return string

for num in nums:
  print(fizzBuzz(num))

