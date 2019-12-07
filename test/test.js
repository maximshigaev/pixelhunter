let assert = require(`assert`);

describe(`Array`, function () {
	describe(`#indexOf()`, function () {
		it(`should return 2`, function () {
			assert.equal([1, 2, 3].indexOf(3), 2);
		});
		it(`should return 81`, function () {
			assert.equal(3 * 3 * 3 * 2, 81);
		});
	});
});
