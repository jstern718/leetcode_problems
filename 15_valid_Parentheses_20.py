
def valid(str):

    stack = []
    match = {"]": "[",
             ")": "(",
             "}": "{"}

    for char in str:
        if char in match:
            if stack[-1] == match[char]:
                stack.pop()
            else:
                return False
        else:
            stack.append(char)

    if not stack:
        return True
    else:
        return False


print(valid("()"))
print(valid("()[]{}"))
print(valid("(]"))