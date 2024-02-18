
def maxArea(arr):
    # define left and right pointers
    l = 0
    r = len(arr) - 1
    res = 0

    while l < r:
        area = (r - l) * min(arr[l], arr[r])
        res = max(res, area)
        # find middle pointer

        if arr[l] < arr[r]:
            l += 1
        else:
            r -= 1

    return res


print(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
print(maxArea([1, 1]))
