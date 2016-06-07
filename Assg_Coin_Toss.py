import random
headCount = 0
tailCount = 0

for i in range (1,5001):
	random_num = random.random()
	if round(random_num) == 1:
		headCount += 1
		print "Attempt#%s: Throwing a coin... It's a head!...Got %s head so far and %s tail(s) so far" %(i,headCount,tailCount)
		i += 1
	else:
		tailCount += 1
		print "Attempt#%s: Throwing a coin... It's a tail!...Got %s head so far and %s tail(s) so far" %(i,headCount,tailCount)
		i += 1
print "Ending the program, thank you!"