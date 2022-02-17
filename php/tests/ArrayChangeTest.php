<?php

use PHPUnit\Framework\TestCase;

require "src/array_change.php";

final class ArrayChangeTest extends TestCase
{
    public function testArrayChange()
    {
        $data = [1, 1, 1];
        $actual = array_change($data);
        $expected = 3;
        $this->assertEquals($expected, $actual);
    }
}