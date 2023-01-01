
export class TreeNode {
    constructor(key, value = key, parent) {
        this.key = key
        this.value = value
        this.parent = parent
        this.children = []
    }
    get isLeaf() {
        return this.children.length === 0
    }
    get hasChildren() {
        return !this.isLeaf()
    }
}

export class Tree {
    constructor(key, value = key) {
        this.root = new TreeNode(key, value)
    }
    *preOrderTraversal(node = this.root) {
        yield node;
        if (node.children.length) {
            for (let child of node.children) {
                yield* this.preOrderTraversal(child)
            }
        }
    }
    insert(parentNodeKey, key, value) {
        for (let node of this.preOrderTraversal()) {
            if (node.key === parentNodeKey) {
                node.children.push(new TreeNode(key, value, node))
                return true
            }
        }
        return false
    }
}