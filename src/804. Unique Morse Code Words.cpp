class Solution {
    public:
        int uniqueMorseRepresentations(vector < string > & words) {
            vector < string > morseCodes = {
                '.-',
                '-...',
                '-.-.',
                '-..',
                '.',
                '..-.',
                '--.',
                '....',
                '..',
                '.---',
                '-.-',
                '.-..',
                '--',
                '-.',
                '---',
                '.--.',
                '--.-',
                '.-.',
                '...',
                '-',
                '..-',
                '...-',
                '.--',
                '-..-',
                '-.--',
                '--..'
            };
            set < string > transformations;
            for (string word: words) {
                string transformation;
                for (char character: word) {
                    transformation += morseCodes[character - 'a'];
                }
                transformations.insert(transformation);
            }
            return transformations.size();
        }
};