console.assert(isPalindromeAnagram("mmo") === true, "'mmo' is a palindrome anagram");
console.assert(isPalindromeAnagram("abc") === false, "'abc' is not a palindrome anagram");
console.assert(isPalindromeAnagram("cerarac") === true, "'cerarac' is a palindrome anagram");

function isPalindromeAnagram(word) {

	function getPermutations(str) {
		if (str.length === 1) {
			return [str];
		}

		const permutations = [];
		for (let i = 0; i < str.length; i++) {
			const remainingPermutations = getPermutations(str.slice(0, i) + str.slice(i + 1));
			permutations.push(...remainingPermutations.map((permutation) => str[i] + permutation ));
		}
		return permutations;
	}

	function isPalindrome(str) {
		let start = 0;
		let end = str.length - 1;

		while (start < end) {
			if (str[start] != str[end]) {
				return false;
			}
			start++;
			end--;
		}

		return true;
	}

	const permutations = getPermutations(word);

	for (const perm of permutations) {
		if (isPalindrome(perm)) return true;
	}

	return false;
}

