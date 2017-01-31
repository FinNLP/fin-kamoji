const assert = require('assert');
const fin = require('finnlp');
const extension = require('./index.js');

describe('After installing Kamoji Extension', function () {
	var instance = new fin("Thank you ¥[*.*]¥.");
	it('There are more than 3 tags and tokens', function () {
		assert.equal(instance.result[0].tokens.length>3,true);
		assert.equal(instance.result[0].tags.length>3,true);
	});
});

describe('After installing Kamoji Extension', function () {
	fin.extend(extension);
	var instance = new fin("Thank you ¥[*.*]¥.");
	it('lexer extensions are working', function () {
		assert.equal(instance.result[0].tokens.length,3);
		assert.equal(instance.result[0].tags.length,3);
	});
	it('lexicon extensions are working', function () {
		assert.equal(instance.result[0].tags[2],"EM");
	});
});