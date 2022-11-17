class Solution {
public:
    int computeArea(int ax1, int ay1, int ax2, int ay2, int bx1, int by1, int bx2, int by2) {
        int aArea = (ax2 - ax1) * (ay2 - ay1),
            bArea = (bx2 - bx1) * (by2 - by1),
            bottom = max(ay1, by1),
            top = min(ay2, by2),
            left = max(ax1, bx1),
            right = min(ax2, bx2),
            overlapArea = top > bottom && right > left
                ? (top - bottom) * (right - left)
                : 0;
        return aArea + bArea - overlapArea;
    }
};