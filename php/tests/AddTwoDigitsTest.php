<?php

use PHPUnit\Framework\TestCase;

require "src/add_two_digits.php";

final class AddTwoDigitsTest extends TestCase
{
    public function testAddTwoDigits()
    {
        $data = 29;
        $actual = add_two_digits($data);
        $expected = 11;
        $this->assertEquals($expected, $actual);
    }
}
