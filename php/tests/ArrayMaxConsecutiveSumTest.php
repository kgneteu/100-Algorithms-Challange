<?php

use PHPUnit\Framework\TestCase;

require "src/array_max_consecutive_sum.php";

final class ArrayMaxConsecutiveSumTest extends TestCase
{
    public function testArrayMaxConsecutiveSum()
    {
        $data = [2, 3, 5, 1, 6];
        $actual = array_max_consecutive_sum($data, 2);
        $expected = 8;
        $this->assertEquals($expected, $actual);
    }
}