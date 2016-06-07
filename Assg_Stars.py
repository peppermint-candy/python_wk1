

# a = [5,3,6]
# def draw_stars(a):
# 	for i in range(len(a)):
# 		for j in range(a[i]):
# 			print "*",
# 			j += 1
# 		print "\n"
# 		i += 1

b = [4,"Tom",1,"Michael",5]
def draw_stars(b):
	for i in range(len(b)):
		if type(b[i]) == int:
			for j in range(b[i]):
				print "*",
				j += 1
		elif type(b[i]) == str:
			for j in range(len(b[i])):
				print b[i][0].lower(),
				j += 1
		print "\n"
		i += 1


