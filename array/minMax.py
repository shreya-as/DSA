def minMax(arr):
    print(arr,"arr")
    min_val=arr[0]
    max_val=arr[0]
    for x in range(len(arr)-1):
        # if(arr[x]>max):
        #     max=arr[x]
        # if(arr[x]<min):
        #     min=arr[x]
        min_val=min(min_val,arr[x])
        max_val=max(max_val,arr[x])
    return [min_val,max_val]

print(minMax([3,1,60,100]))