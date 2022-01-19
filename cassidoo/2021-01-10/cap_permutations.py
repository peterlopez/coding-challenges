
def main():
    assert cap_permutations("") == [""]
    assert cap_permutations("123") == ["123"]
    assert cap_permutations("a") == ["a", "A"]
    assert cap_permutations("35p") == ["35p", "35P"]
    assert cap_permutations("ab2") == ["ab2", "Ab2", "aB2", "AB2"]
    assert cap_permutations("Abc") == [
        "Abc", "abc", "ABc", "aBc", "AbC", "abC", "ABC", "aBC"]
    print("✅ all tests passed")


def cap_permutations(s):
    """
    Given a string s, transform every letter individually to be lowercase or uppercase.

    Returns a list of all possible permutations of s.

    Example:
        cap_permutations("ab2")
        > ["ab2","aB2","Ab2","AB2"]

        cap_permutations("35p")
        > ["35p","35P"]
    """
    if len(s) < 1:
        return [""]

    # character by character, incrementally build a list of permutations
    # by appending each character's permutations to every
    # permutation string in the list
    perms = [ s[0] ]
    if s[0].isalpha():
        perms.append( s[0].swapcase() )

    for char in s[1:]:
        new_perms = []
        for i, p in enumerate(perms):
            if char.isalpha():
                new_perms.append( p + char.swapcase() )
            perms[i] += char
        perms += new_perms

    return perms


if __name__ == "__main__":
    main()
