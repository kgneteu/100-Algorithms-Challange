<?php

use PHPUnit\Framework\TestCase;

require "src/array_previous_less.php";

final class ArrayPreviousLessTest extends TestCase
{
    public function testArrayPreviousLess()
    {
        $data = [3, 5, 2, 4, 5];
        $actual = array_previous_less($data);
        $expected = [-1, 3, -1, 2, 4];
        $this->assertEquals($expected, $actual);
    }
}