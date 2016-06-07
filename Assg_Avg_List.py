a = [1,2,5,10,255,3]
sum = 0
for i in range(0,6):
	sum = sum + a[i]
	i = i + 1
avg = sum/len(a)
print avg