print "Scores and Grades"
for i in range (1,11):
	score_input = raw_input()
	if int(score_input) >= 60 and int(score_input) <=69:
		print "Scores: %s; Your grade is D" %(score_input)
		i += 1
	elif int(score_input) >= 70 and int(score_input) <=79:
		print "Scores: %s; Your grade is C" %(score_input)
		i += 1
	elif int(score_input) >= 80 and int(score_input) <=89:
		print "Scores: %s; Your grade is B" %(score_input)
		i += 1
	elif int(score_input) >= 90 and int(score_input) <=100:
		print "Scores: %s; Your grade is A" %(score_input)
		i += 1
	else: 
		print "Plese enter score from 60 to 100"
		pass
print	"End of the program. Bye!"
