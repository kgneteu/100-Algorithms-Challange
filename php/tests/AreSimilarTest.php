<?php

use PHPUnit\Framework\TestCase;

require "src/are_similar.php";

final class AreSimilarTest extends TestCase
{
    public function testAreSimilar1()
    {
        $data1 = [1, 2, 3];
        $data2 = [1, 2, 3];
        $actual = are_similar($data1, $data2);
        $expected = true;
        $this->assertEquals($expected, $actual);
    }

    public function testAreSimilar2()
    {
        $data1 = [1, 2, 3];
        $data2 = [2, 1, 3];
        $actual = are_similar($data1, $data2);
        $expected = true;
        $this->assertEquals($expected, $actual);
    }

    public function testAreSimilar3()
    {
        $data1 = [1, 2, 2];
        $data2 = [2, 1, 1];
        $actual = are_similar($data1, $data2);
        $expected = false;
        $this->assertEquals($expected, $actual);
    }
}
