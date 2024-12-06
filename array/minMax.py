def minMax(arr):
    print(arr,"arr")
    min=arr[0]
    max=arr[0]
    for x in range(len(arr)-1):
        if(arr[x]>max):
            max=arr[x]
        if(arr[x]<min):
            min=arr[x]
    return [min,max]

print(minMax([3,1,60,100]))