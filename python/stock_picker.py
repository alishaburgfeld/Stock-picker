def picker(prices):
    difference=[0,0]
    for i, x in enumerate(prices[:len(prices)-1]):
        for j in range( len(prices) - 1, i, -1) :

            if prices[j] - x > difference[0]:
                difference[0]=prices[j] - x
                difference[1]=[i,j]
            # print (i,j, difference)
    return difference[1]
        
# print(picker([17,3,6,9,15,8,6,1,10])) # == [1,4])