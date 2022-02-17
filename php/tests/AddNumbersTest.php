<?php

use PHPUnit\Framework\TestCase;
require "src/add_numbers.php";

final class AddNumbersTest extends TestCase
{
    public function testAddNumbers1()
    {
        $actual = add(1, 2);
        $expected = 3;
        $this->assertEquals($expected, $actual);
    }
    public function testAddNumbers2()
    {
        $actual = add(2, 3);
        $expected = 5;
        $this->assertEquals($expected, $actual);
    }
    public function testAddNumbers3()
    {
        $data = [1, 2, 3, 4, 5];
        $actual = add2($data);
        $expected = 15;
        $this->assertEquals($expected, $actual);
    }
    public function testAddNumbers4()
    {
        $data = [2, 3];
        $actual = add2($data);
        $expected = 5;
        $this->assertEquals($expected, $actual);
    }
}

