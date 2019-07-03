const assert = require('assert');
const func = require('./index');


describe('test function rotLeft', () => {

  it('function exists', () => {
    assert.ok(func.rotLeft);
  });

  it('correct result for given input', () => {
    assert.deepEqual('2 3 1', func.rotLeft(1, [1,2,3]));
    assert.deepEqual('3 1 2', func.rotLeft(2, [1,2,3]));
    assert.deepEqual('5 1 2 3 4', func.rotLeft(4, [1,2,3,4,5]));
  });

});

describe('test function factoria', ()=> {

  it('function exists', () => {
    assert.ok(func.factorial);
  });

  it('return correct value for proper input', ()=>{
    assert.deepEqual(6, func.factorial(3));
    assert.deepEqual(120, func.factorial(5));
  });

})

describe('test function processData', () => {

  it('function exists', () => {
    assert.ok(func.processData);
  });

  it('correct result for given input', () => {
    assert.deepEqual('Hce akr', func.processData('1\nHacker'));
    assert.deepEqual('Rn ak', func.processData('1\nRank'));
  });

  it('correct result for given input', () => {
    assert.deepEqual('Hce akr\nRn ak', func.processData('2\nHacker\nRank'));
  });

  it('correct result for given input', () => {
    assert.deepEqual('A\nB', func.processData('2\nA\nB'));
  });

}); 

describe('test function hourglassSum', () => {

  it('function exists', () => {
    assert.ok(func.hourglassSum);
  });

  it('function calculates one sum', ()=>{
    assert.deepEqual(154, func.hourglassSum([[11,12,13],
                                             [21,22,23],
                                             [31,32,33]]));

  });

  it('correct result for given input', () => {
    assert.deepEqual(19, func.hourglassSum([[1, 1, 1, 0, 0, 0],
                                            [0, 1, 0, 0, 0, 0],
                                            [1, 1, 1, 0, 0, 0],
                                            [0, 0, 2, 4, 4, 0],
                                            [0, 0, 0, 2, 0, 0],
                                            [0, 0, 1, 2, 4, 0]]));
  });

}); 

describe('test function diagonalDifference', () => {

  it('function exists', () => {
    assert.ok(func.diagonalDifference);
  });

  it('correct result for given input', () => {
    assert.deepEqual(9, func.diagonalDifference([[0,1,2],
                                                 [4,5,6],
                                                 [8,9,1]]));
  });

  it('correct result for given input', () => {
    assert.deepEqual(3, func.diagonalDifference([[0,1,2,3,1],
                                                 [4,5,6,7,1],
                                                 [8,9,1,1,1],
                                                 [1,1,1,1,1],
                                                 [1,1,1,1,1]]));
  });

}); 

describe('test function jumpingOnClouds', () => {

  it('function exists', () => {
    assert.ok(func.jumpingOnClouds);
  });

  it('correct result for given input', () => {
    assert.deepEqual(3, func.jumpingOnClouds([0, 1, 0, 0, 0, 1, 0]));
  });

  it('correct result for given input', () => {
    assert.deepEqual(4, func.jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
  });

  it('correct result for given input', () => {
    assert.deepEqual(3, func.jumpingOnClouds([0, 0, 0, 1, 0, 0]));
  });

  it('correct result for given input', () => {
    assert.deepEqual(3, func.jumpingOnClouds([0, 0, 0, 0, 1, 0]));
  });

  it('correct result for given input', () => {
    assert.deepEqual(2, func.jumpingOnClouds([0, 1, 0, 0, 0]));
  });

}); 

describe('test function repeatedString', () => {

  it('function exists', () => {
    assert.ok(func.repeatedString);
  });

  it('correct result for given input', () => {
    assert.deepEqual(4, func.repeatedString('abc', 10));
  });

});

describe('test function countingValleys', () => {

  it('function exists', () => {
    assert.ok(func.valleys);
  });

  it('correct result for given input', () => {
    assert.deepEqual(1, func. valleys(8, 'UDDDUDUU'));
  });

  it('correct result for given input', () => {
    assert.deepEqual(1, func. valleys(8, 'DDUUUUDD'));
  });

});

describe('test function sockMerchant' , () => {

  it('function exists', () => {
    assert.ok(func.socks);
  });

  it('correct result for given input', () => {
    assert.deepEqual(2, func.socks(4, [1,1,2,2]));
  });

  it('correct result for given input', () => {
    assert.deepEqual(3, func.socks(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
  });

  it('correct result for given input', () => {
    assert.deepEqual(2, func.socks(7, [1, 2, 1, 2, 1, 3, 2]));
  });

  it('correct result for given input', () => {
    assert.deepEqual(4, func.socks(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]));
  });

});

describe('test function compareTriplets', () => {

  it('function exists', () => {
    assert.ok(func.triplets([],[]));
  });

  it('correct result for given input', () => {
    assert.deepEqual([2, 1],func.triplets([17, 28, 30],[99, 16, 8]));
  });

  it('correct result for given input', () => {
    assert.deepEqual([1, 1],func.triplets([5, 6, 6],[3, 6, 10]));
  });

  

});


  