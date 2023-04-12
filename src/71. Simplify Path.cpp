class Solution {
public:
    string simplifyPath(string path) {
        vector<string> directories;
        string segment;
        for (int i = 0; i <= path.size(); ++i) {
            if (i == path.size() || path[i] == '/') {
                if (segment == "..") {
                    if (!directories.empty()) {
                        directories.pop_back();
                    }
                } else if (segment != "." && !segment.empty()) {
                    directories.push_back(segment);
                }
                segment.clear();
            } else {
                segment.push_back(path[i]);
            }
        }

        string ans;
        for (auto directory : directories) {
            ans += "/" + directory;
        }
        return ans.empty() ? "/" : ans;
    }
};