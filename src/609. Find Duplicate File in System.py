class Solution:
    def findDuplicate(self, paths: List[str]) -> List[List[str]]:
        groups = defaultdict(list)
        for line in paths:
            directory, *files = line.split()
            for file in files:
                name, content = file.split('(')
                groups[content].append(directory + '/' + name)
        return [contents for contents in groups.values() if len(contents) > 1]
                