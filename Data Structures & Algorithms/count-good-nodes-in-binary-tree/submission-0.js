/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        return this.dfs(root, root.val)
    }

    dfs(root, max){
        if (root == null) return 0;
        const isGood = root.val >= max ? 1 : 0;
        max = Math.max(max, root.val);
        return isGood + this.dfs(root.left, max) + this.dfs(root.right, max);
    }
}
