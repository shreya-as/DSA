arr = [10, 23, 1, 34, 2]
for i in range(len(arr)-1):
    for j in range(len(arr)-1-i):
        if arr[j] > arr[j+1]:
            # temp=arr[j+1]
            # arr[j+1]=arr[j]
            # arr[j]=temp
            # Swap elements 
            arr[j],arr[j+1]=arr[j+1],arr[j]
print(arr)