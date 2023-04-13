/*
// Definition for a QuadTree node.
class Node {
public:
    bool val;
    bool isLeaf;
    Node* topLeft;
    Node* topRight;
    Node* bottomLeft;
    Node* bottomRight;
    
    Node() {
        val = false;
        isLeaf = false;
        topLeft = NULL;
        topRight = NULL;
        bottomLeft = NULL;
        bottomRight = NULL;
    }
    
    Node(bool _val, bool _isLeaf) {
        val = _val;
        isLeaf = _isLeaf;
        topLeft = NULL;
        topRight = NULL;
        bottomLeft = NULL;
        bottomRight = NULL;
    }
    
    Node(bool _val, bool _isLeaf, Node* _topLeft, Node* _topRight, Node* _bottomLeft, Node* _bottomRight) {
        val = _val;
        isLeaf = _isLeaf;
        topLeft = _topLeft;
        topRight = _topRight;
        bottomLeft = _bottomLeft;
        bottomRight = _bottomRight;
    }
};
*/

class Solution {
public:
  Node* construct(vector<vector<int>>& grid) {
      grid_ = move(grid);
      return construct(0, 0, grid_.size());
  }
  
  Node* construct(int row, int col, int size) {
    if (size == 1) {
        return leafNodes[grid_[row][col]];
    }
    size /= 2;
    Node* topLeft = construct(row, col, size);
    Node* topRight = construct(row, col + size, size);
    Node* bottomLeft = construct(row + size, col, size);
    Node* bottomRight = construct(row + size, col + size, size);
    if (topLeft == topRight && topRight == bottomLeft && bottomLeft == bottomRight) {
        return topLeft;
    }
    return new Node(false, false, topLeft, topRight, bottomLeft, bottomRight);
  }
  
private:
  vector<vector<int>> grid_;
  Node* leafNodes[2] = {
      new Node(false, true),
      new Node(true,  true)
  };
};