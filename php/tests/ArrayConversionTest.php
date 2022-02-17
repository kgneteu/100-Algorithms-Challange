<?php

use PHPUnit\Framework\TestCase;

require "src/array_conversion.php";

final class ArrayConversionTest extends TestCase
{
    public function testArrayConversion()
    {
        $data = [1, 2, 3, 4, 5, 6, 7, 8];
        $actual = array_conversion($data);
        $expected = 186;
        $this->assertEquals($expected, $actual);
    }
}