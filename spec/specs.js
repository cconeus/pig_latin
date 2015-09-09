describe('pigLatin', function() {
    it("returns pigLatin version of a word that starts with a vowel", function() {
        expect(pigLatin("apple", count)).to.equal("apple-ay");
    });

    it("returns pigLatin version of a word that starts with a one character consonant", function (){
        expect(pigLatin("zebra", count)).to.equal("ebra-zay");
    });

    it("returns pigLatin version of a word that starts with two character consonants", function (){
        expect(pigLatin("sloth", count)).to.equal("oth-slay");
    });

    it("returns pigLatin version of a word that starts with three character consonants", function (){
        expect(pigLatin("string", count)).to.equal("ing-stray");
    });

    it("returns pigLatin version of a word that starts with qu", function (){
        expect(pigLatin("quick", count)).to.equal("ick-quay");
    });

    it("returns pigLatin version of all words in a multiple word expression", function (){
        expect(pigLatin("zebra kill", count)).to.equal("ebra-zay ill-kay");
    });
});
