
Node.prototype.toString = function () {
    return this.name + " has a key " + this.key;
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    addNode(key, name){
        const newNode = new Node(key, name)

        if (this.root == null) {
            this.root = newNode
        } else {
            let focusNode = this.root
            let parent;

            while(true){
                parent = focusNode;

                if(key < focusNode.key){
                    focusNode = focusNode.leftChild;
                    if(focusNode == null){
                        parent.leftChild = focusNode;
                        return;
                    }
                } else {

                }
            }
        }

    }

}

class Node {
    constructor(key, name) {
        this.key = key;
        this.name = name;

        this.leftChild = null;
        this.rightChild = null;
    }
}