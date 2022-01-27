
def main():
    """ 
    given three files named first_page.txt, second_page.txt, and third_page.txt 
    with the occurrence of at least one palindrome in each of them

    print the following:
        - The exact number of palindromes in each file.
        - The line numbers of the palindromes in each file.
    """

    palindrome_files = {
        "first_page.txt": {
            "count": 0,
            "lines": []
        },
        "second_page.txt": {
            "count": 0,
            "lines": []
        },
        "third_page.txt": {
            "count": 0,
            "lines": []
        }
    }

    for file_name in palindrome_files:
        with open(file_name) as f:
            line_num = 1
            for line in f:
                line = line.strip()
                if is_palindrome(line):
                    palindrome_files[file_name]["count"] += 1
                    palindrome_files[file_name]["lines"].append(str(line_num))
                line_num += 1

    print(f"""
first_page.txt
    number of palindromes: {palindrome_files["first_page.txt"]["count"]}
    line numbers:          {", ".join(palindrome_files["first_page.txt"]["lines"])}

second_page.txt
    number of palindromes: {palindrome_files["second_page.txt"]["count"]}
    line numbers:          {", ".join(palindrome_files["second_page.txt"]["lines"])}

third_page.txt
    number of palindromes: {palindrome_files["third_page.txt"]["count"]}
    line numbers:          {", ".join(palindrome_files["third_page.txt"]["lines"])}
    """)


def is_palindrome(s):
    return s == s[::-1]


if __name__ == '__main__':
    main()
