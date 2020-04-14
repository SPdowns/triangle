import { Triangle } from './../src/triangle.js';
import TestRunner from 'jest-runner';

describe('Triangle', () => {

  test('should correctly create a triangle object with three langths', () => {
    var triangle = new Triangle(2,4,5)
    expect(triangle.side1).toEqual(2);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).toEqual(5);
  });
  test('should correctly determine whether three lengths are not a triangle', () => {
    var notTriangle = new Triangle(3,9,22);
    expect(notTriangle.checkType()).toEqual("not a triangle");
  });
  test('should correctly determine whether three lengths make a scalene triangle', function() {
    var scalTriangle = new Triangle(4,5,7)
    expect(scalTriangle.checkType()).toEqual("scalene triangle")
  });
  test('should correctly determine whether three lengths make an isoceles triangle', () => {
    var isocTriangle = new Triangle(5,5,7)
    expect(isocTriangle.checkType()).toEqual("isoceles triangle");
  });
  test('should correctly determine whether three lengths make an equilateral triangle', () => {
    var equilTriangle = new Triangle(5,5,5)
    expect(equilTriangle.checkType()).toEqual("equilateral triangle");
  })
});