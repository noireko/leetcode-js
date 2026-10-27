/**
 * 14. Longest Common Prefix
 * https://leetcode.com/problems/longest-common-prefix/description/?envType=problem-list-v2&envId=trie
 * Dificultad: Easy
 * Patrón: Trie
 *
 * Idea: Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string ""
 */

var longestCommonPrefix = function (strs) {
    const primero = strs[0];

    for (let i = 0; i < primero.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (i === strs[j].length || strs[j][i] !== primero[i]) {
                return primero.slice(0, i);
            }
        }
    }

    return primero;
};