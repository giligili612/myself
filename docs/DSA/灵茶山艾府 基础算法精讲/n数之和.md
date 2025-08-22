# n数之和

## [167.两数之和II - 输入有序数组](https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/description/)

题目重点：

- 非递减顺序排列
- 答案唯一，不可使用重复元素

:::tip 思路

设left和right两个指针，两者从数组两头相向而行，每步计算两者之和，若大于目标和，则right与其左边任何元素组成之和均大于目标和（非递减序列），所以right走一步，同理若小于目标和，则left走一步。

:::

::: warning 可能的陷阱

right和left可能指向相同元素吗？不会！数组是非递减顺序排列，所以相同元素是连续的，题目保证答案唯一，所以答案必不是相同的元素，即左右指针一定在走到该元素之前就会找到答案！

:::

::: code-group

```cpp[C++]
class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        int left = 0;
        int right = numbers.size() - 1;
        while(left < right) {
            int sum = numbers[left] + numbers[right];
            if(sum == target)
                break;
            else if(sum < target)
                left++;
            else 
                right--;
        }
        return {left + 1, right + 1};
    }
};
```

```python[python]
class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        left = 0
        right = len(numbers) - 1
        while True:
            s = numbers[left] + numbers[right]
            if s == target:
                return [left + 1, right + 1]
            elif s < target:
                left += 1
            else:
                right -= 1
```
```c
int* twoSum(int* numbers, int numbersSize, int target, int* returnSize) {
    int left = 0, right = numbersSize - 1;
    int* ans = malloc(2 * sizeof(int));
    while(left < right) {
        int s = numbers[left] + numbers[right];
        if(s == target) {
            *returnSize = 2;
            ans[0] = left + 1;  ans[1] = right + 1;
            return ans;
        }
        s < target ? left++ : right--;
    }
    return NULL;
}
```

:::
