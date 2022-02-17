<?php

use PHPUnit\Framework\TestCase;

require "src/are_equally_strong.php";

final class AreEquallyStrongTest extends TestCase
{
    public function testAreEquallyStrong1()
    {
        $data = [10, 15, 15, 10];
        $actual = are_equally_strong(...$data);
        $expected = true;
        $this->assertEquals($expected, $actual);
    }
    public function testAreEquallyStrong2()
    {
        $data = [15, 10, 15, 10];
        $actual = are_equally_strong(...$data);
        $expected = true;
        $this->assertEquals($expected, $actual);
    }
    public function testAreEquallyStrong3()
    {
        $data = [15, 10, 15, 9];
        $actual = are_equally_strong(...$data);
        $expected = false;
        $this->assertEquals($expected, $actual);
    }
    public function testAreEquallyStrong4()
    {
        $data = [12, 10, 8, 14];
        $actual = are_equally_strong(...$data);
        $expected = false;
        $this->assertEquals($expected, $actual);
    }
}
