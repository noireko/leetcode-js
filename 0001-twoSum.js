/**
 * 1. Two Sum
 * https://leetcode.com/problems/two-sum/description/
 * Difficulty: Easy
 * Pattern: Hash Table
 *
 * You are given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * 
 */

function twoSum(array, target) {
  let resultado = [];
  for (let i = 0; i < array.length; i++) {
    for (let f = 0; f < array.length; f++) {
      console.log(array[i], array[f]);
      if (array[i] + array[f] === target) {
        resultado.push(array[i]);
      }
    }
  }
  return resultado;
}
