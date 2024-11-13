arr = [3,4,23,2,1]
n = len(arr)
for i in range(n-1):
    minIndex=i
    for j in range(i+1,n): #range(start, stop, step)
        if arr[j]<arr[minIndex]:
            minIndex=j
    print(minIndex)
    minValue = arr.pop(minIndex)
    arr.insert(i,minValue)
    print(arr)

print(arr)