<?php

use PHPUnit\Framework\TestCase;

require "src/array_maximal_adjacent_difference.php";

final class ArrayMaximalAdjacentDifferenceTest extends TestCase
{
    public function testArrayMaximalAdjacentDifference1()
    {
        $data = [2, 4, 1, 0];
        $actual = array_maximal_adjacent_difference($data);
        $expected = 3;
        $this->assertEquals($expected, $actual);
    }

    public function testArrayMaximalAdjacentDifference2()
    {
        $data = [2, 9, 1, 0];
        $actual = array_maximal_adjacent_difference($data);
        $expected = 8;
        $this->assertEquals($expected, $actual);
    }
}