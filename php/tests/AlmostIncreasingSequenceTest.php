<?php

use PHPUnit\Framework\TestCase;

require "src/almost_increasing_sequence.php";

final class AlmostIncreasingSequenceTest extends TestCase
{
    public function testAlmostIncreasingSequence1()
    {
        $data = [1, 3, 2, 1];
        $actual = almost_increasing_sequence($data);
        $expected = false;
        $this->assertEquals($expected, $actual);
    }

    public function testAlmostIncreasingSequence2()
    {
        $data = [2, 3, 1, 3, 4, 5, 6];
        $actual = almost_increasing_sequence($data);
        $expected = false;
        $this->assertEquals($expected, $actual);
    }

    public function testAlmostIncreasingSequence3()
    {
        $data = [1, 3, 2];
        $actual = almost_increasing_sequence($data);
        $expected = true;
        $this->assertEquals($expected, $actual);
    }

    public function testAlmostIncreasingSequence4()
    {
        $data = [1, 2, 5, 3, 5];
        $actual = almost_increasing_sequence($data);
        $expected = true;
        $this->assertEquals($expected, $actual);
    }

    public function testAlmostIncreasingSequence5()
    {
        $data = [10, 1, 2, 3, 4, 5];
        $actual = almost_increasing_sequence($data);
        $expected = true;
        $this->assertEquals($expected, $actual);
    }

    public function testAlmostIncreasingSequence6()
    {
        $data = [1, 2, 3, 4, 99, 5, 6];
        $actual = almost_increasing_sequence($data);
        $expected = true;
        $this->assertEquals($expected, $actual);
    }

    public function testAlmostIncreasingSequence7()
    {
        $data = [123, -17, -5, 1, 2, 3, 12, 43, 45];
        $actual = almost_increasing_sequence($data);
        $expected = true;
        $this->assertEquals($expected, $actual);
    }

    public function testAlmostIncreasingSequence8()
    {
        $data = [1, 2, 3, 4, 3, 6];
        $actual = almost_increasing_sequence($data);
        $expected = true;
        $this->assertEquals($expected, $actual);
    }
}
