def reverseArray(arr):
    start=0
    end=len(arr)-1
    while(start<end):
        temp=arr[start]
        arr[start]=arr[end]
        arr[end]=temp
        start+=1
        end-=1
    
    return arr
    
print(reverseArray([1,2,3,4,6]))