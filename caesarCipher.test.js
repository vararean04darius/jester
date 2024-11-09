const caesarCipher = require('./caesarCipher');

test('check if cipher is returning the same string when using 0 as a shift factor', () => {
    expect(caesarCipher("masina", 0)).toBe("masina");
})

test('check if cipher is returning the correct string when using 3 as a shift factor', () => {
    expect(caesarCipher("abcd", 3)).toBe("defg");
})

test('check if cipher is working for the end of the alphabet', () => {
    expect(caesarCipher("xyz", 1)).toBe("yza")
})

test('check if cipher is working for a sentence', () => {
    expect(caesarCipher("The quick brown fox jumps over the lazy dog", 6)).toBe("Znk waoiq hxuct lud pasvy ubkx znk rgfe jum")
})

test('check for sentence in upper case', () => {
    expect(caesarCipher("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG", 10)).toBe("DRO AESMU LBYGX PYH TEWZC YFOB DRO VKJI NYQ")
})

test('check for punctuation', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})

test('check if it works for negative shift factor', () => {
    expect(caesarCipher("Salutare baieti si bine v-am gasit la un nou episod.", -4)).toBe("Owhqpwna xweape oe xeja r-wi cwoep hw qj jkq aleokz.")
})